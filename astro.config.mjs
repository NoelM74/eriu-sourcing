// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { blogPosts } from './src/data/blogPosts.js';

// Draft blog post URLs to exclude from sitemap
const draftUrls = new Set(
  blogPosts.filter(p => p.draft).map(p => `https://eriusourcing.com/blog/${p.slug}/`)
);

// https://astro.build/config
export default defineConfig({
  site: 'https://eriusourcing.com',
  integrations: [
    sitemap({
      lastmodDateOnly: true,
      filter: (page) => !draftUrls.has(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
