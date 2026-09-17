import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

// True once real Sanity credentials exist. Everything that reads from
// Sanity checks this first and falls back to the placeholder data in
// lib/portfolio-data.ts otherwise, so the site never breaks before the
// account is connected — see README for setup.
export const sanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});
