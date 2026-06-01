// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'astro/entrypoints/prerender': fileURLToPath(
          import.meta.resolve('astro/entrypoints/prerender'),
        ),
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
