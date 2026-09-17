import { sanityClient, sanityConfigured } from "./client";
import { urlForImage } from "./image";
import {
  workItems as placeholderWorkItems,
  partners as placeholderPartners,
  type PortfolioItem,
} from "@/lib/portfolio-data";
import { ongoingContentCopy as placeholderCopy } from "@/lib/site-copy";
import { INSTAGRAM_HANDLE as placeholderHandle, EMAIL as placeholderEmail } from "@/lib/contact";

export interface ResolvedPortfolioItem {
  id: string;
  mediaType: "video" | "photo";
  featured: boolean;
  order: number;
  visible: boolean;
  photos?: string[]; // resolved image URLs (photo items only), or undefined
  coverImageUrl?: string; // resolved poster image URL (video items only)
  placeholderLabel: string;
  hasRealMedia: boolean;
}

export interface ResolvedPartner {
  id: string;
  name: string;
  logoUrl?: string;
  url?: string;
  order: number;
}

export interface SiteSettings {
  instagramHandle: string;
  email: string;
  copyrightName: string;
  ongoingHeading: string;
  ongoingSupporting: string;
  ongoingRhythm: string;
}

export async function getWorkItems(): Promise<ResolvedPortfolioItem[]> {
  if (!sanityConfigured) {
    return placeholderWorkItems.map((i) => toResolved(i));
  }

  const docs = await sanityClient.fetch(
    `*[_type == "portfolioItem" && visible == true] | order(order asc)`
  );

  return docs.map((doc: any) => ({
    id: doc._id,
    mediaType: doc.mediaType,
    featured: !!doc.featured,
    order: doc.order ?? 0,
    visible: doc.visible !== false,
    photos: doc.photos?.length
      ? doc.photos.map((p: any) => urlForImage(p).width(1200).url())
      : undefined,
    coverImageUrl: doc.posterImage ? urlForImage(doc.posterImage).width(1200).url() : undefined,
    placeholderLabel: doc.internalTitle || "Untitled",
    hasRealMedia: !!(doc.posterImage || doc.photos?.length || doc.videoAsset),
  }));
}

export async function getPartners(): Promise<ResolvedPartner[]> {
  if (!sanityConfigured) {
    return placeholderPartners.map((p) => ({ id: p.id, name: p.name, url: p.url, order: p.order }));
  }

  const docs = await sanityClient.fetch(
    `*[_type == "partner" && visible == true] | order(order asc)`
  );

  return docs.map((doc: any) => ({
    id: doc._id,
    name: doc.name,
    logoUrl: doc.logo ? urlForImage(doc.logo).height(56).url() : undefined,
    url: doc.url,
    order: doc.order ?? 0,
  }));
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityConfigured) {
    return {
      instagramHandle: placeholderHandle,
      email: placeholderEmail,
      copyrightName: "Ronald Musa",
      ongoingHeading: placeholderCopy.heading,
      ongoingSupporting: placeholderCopy.supporting,
      ongoingRhythm: placeholderCopy.rhythm,
    };
  }

  const doc = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  return {
    instagramHandle: doc?.instagramHandle || placeholderHandle,
    email: doc?.email || placeholderEmail,
    copyrightName: doc?.copyrightName || "Ronald Musa",
    ongoingHeading: doc?.ongoingHeading || placeholderCopy.heading,
    ongoingSupporting: doc?.ongoingSupporting || placeholderCopy.supporting,
    ongoingRhythm: doc?.ongoingRhythm || placeholderCopy.rhythm,
  };
}

function toResolved(item: PortfolioItem): ResolvedPortfolioItem {
  return {
    id: item.id,
    mediaType: item.mediaType,
    featured: item.featured,
    order: item.order,
    visible: item.visible,
    photos: item.photos,
    placeholderLabel: item.placeholderLabel,
    hasRealMedia: false,
  };
}
