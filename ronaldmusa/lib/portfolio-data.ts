// Stands in for Sanity CMS data until the real integration is connected
// (see README). Matches the future `portfolioItem` schema field-for-field,
// so swapping this for a live Sanity query is a drop-in replacement.

export type MediaType = "video" | "photo";

export interface PortfolioItem {
  id: string;
  mediaType: MediaType;
  featured: boolean;
  order: number;
  visible: boolean;
  // A photo item with more than one entry in `photos` renders as a
  // swipeable stack in the grid and viewer. Videos never use this field.
  photos?: string[];
  // Focal point for the 4:5 grid crop, as percentages (0-100, 50/50 =
  // centered). Lets a real cover image be cropped intentionally instead
  // of always center-cropping — set per item once real media is added.
  focalPoint?: { x: number; y: number };
  // Optional link to a Partner (see below) when this piece of work is
  // tied to a specific long-term client relationship.
  partnerId?: string;
  // Placeholder-only field: real items carry a Mux playback ID or a
  // Sanity image asset instead of this label.
  placeholderLabel: string;
}

export const workItems: PortfolioItem[] = [
  { id: "1", mediaType: "video", featured: true, order: 1, visible: true, placeholderLabel: "Add your work" },
  { id: "2", mediaType: "photo", featured: false, order: 2, visible: true, photos: ["Add your work", "Add your work", "Add your work", "Add your work"], placeholderLabel: "Add your work" },
  { id: "3", mediaType: "video", featured: false, order: 3, visible: true, placeholderLabel: "Add your work" },
  { id: "4", mediaType: "photo", featured: false, order: 4, visible: true, placeholderLabel: "Add your work" },
  { id: "5", mediaType: "video", featured: false, order: 5, visible: true, placeholderLabel: "Add your work" },
  { id: "6", mediaType: "photo", featured: false, order: 6, visible: true, placeholderLabel: "Add your work" },
  { id: "7", mediaType: "video", featured: false, order: 7, visible: true, placeholderLabel: "Add your work" },
  { id: "8", mediaType: "photo", featured: false, order: 8, visible: true, placeholderLabel: "Add your work" },
  { id: "9", mediaType: "video", featured: false, order: 9, visible: true, placeholderLabel: "Add your work" },
];

// Left empty deliberately — no real partners supplied yet, never invent them.
export interface Partner {
  id: string;
  name: string;
  url?: string;
  order: number;
}

export const partners: Partner[] = [];

export const TILE_ASPECT_RATIO = "4 / 5";
