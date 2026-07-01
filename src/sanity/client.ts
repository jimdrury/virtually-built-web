import { createClient } from "next-sanity";

const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const datasetEnv = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectIdEnv || !datasetEnv) {
  throw new Error(
    "Missing Sanity env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local",
  );
}

export const projectId = projectIdEnv;
export const dataset = datasetEnv;
export const apiVersion = "2026-07-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  stega: {
    studioUrl:
      process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ??
      "https://virtually-built.sanity.studio",
  },
});
