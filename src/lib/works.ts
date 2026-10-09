import { getCollection } from "astro:content";

export async function getPublishedWorks() {
  const works = await getCollection("works", ({ data }) => data.draft !== true);
  return works.sort(
    (a, b) =>
      (a.data.order ?? 0) - (b.data.order ?? 0) || a.id.localeCompare(b.id),
  );
}
