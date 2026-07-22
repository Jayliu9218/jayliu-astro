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

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    type: z.string().min(1),
    year: z.number().int(),
    status: z.string().min(1),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    demoUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
    relatedDocument: z.string().startsWith('/').optional(),
    overview: z.string().min(1),
    highlights: z.array(z.string().min(1)).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({
    base: './src/content/publications',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string().min(1),
    authors: z.array(z.string()).min(1),
    venue: z.string().min(1),
    year: z.number().int(),
    volume: z.string().optional(),
    articleNumber: z.string().optional(),
    doi: z.string().optional(),
    summary: z.string().min(1),
    tags: z.array(z.string()).default([]),
    selected: z.boolean().default(false),
    order: z.number().int().default(0),
    links: z
      .array(
        z.object({
          label: z.string().min(1),
          url: z.url(),
        }),
      )
      .default([]),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string().min(1),
    url: z.string().startsWith('/').optional(),
  }),
});

export const collections = { posts, projects, publications, news };
