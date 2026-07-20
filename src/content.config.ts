import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        url: z.url(),
        alt: z.string().default(''),
      })
      .optional(),
  }),
});

export const collections = { posts };
