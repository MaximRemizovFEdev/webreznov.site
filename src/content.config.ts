import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});
const works = defineCollection({
  loader: glob({ base: "./src/content/works", pattern: "*.md" }),
  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    role: z.string().optional(),
    url: z.url().optional(),
    featured: z.boolean().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});
export const collections = { blog, works };
