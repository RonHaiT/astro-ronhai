import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"; // 不适用于旧版 API
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    category: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};
