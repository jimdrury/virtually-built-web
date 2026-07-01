import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity env vars. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local",
  );
}

export { projectId, dataset };
export const apiVersion = "2026-07-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
