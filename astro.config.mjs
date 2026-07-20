// @ts-check
import { fileURLToPath } from 'node:url';
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://jayliu.netlify.app',
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
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
