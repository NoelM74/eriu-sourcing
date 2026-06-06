// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { blogPosts } from './src/data/blogPosts.js';

// Build date used as the lastmod for pages we don't track a content date for
// (marketing/category pages that change with deploys).
const BUILD_DATE = new Date().toISOString().split('T')[0];

// Map real blog dates onto their URLs, and collect draft (noindex) posts so
// they can be kept out of the sitemap — a noindex URL in the sitemap sends
// Google a mixed signal.
const blogLastmod = {};
const draftBlogPaths = new Set();
for (const post of blogPosts) {
  const path = `/blog/${post.slug}/`;
  if (post.draft) draftBlogPaths.add(path);
  else blogLastmod[path] = post.dateModified || post.publishDate;
}

// Priority + change frequency by URL shape. Pillars and hubs rank above deep
// product pages; legal pages sit at the bottom.
const HUBS = new Set([
  '/source/', '/blog/', '/how-it-works/', '/modular-homes/', '/why-direct/',
  '/china-network/', '/case-studies/', '/about/', '/resources/', '/faq/', '/contact/',
]);

function weighting(pathname) {
  if (pathname === '/') return { priority: 1.0, changefreq: 'weekly' };
  if (HUBS.has(pathname)) return { priority: 0.9, changefreq: 'weekly' };
  if (pathname === '/privacy/' || pathname === '/terms/') return { priority: 0.3, changefreq: 'yearly' };
  // Deep product/sub pages: /source/<category>/<product>/
  if (/^\/source\/[^/]+\/[^/]+\/$/.test(pathname)) return { priority: 0.6, changefreq: 'monthly' };
  // Category hubs + offer pages: /source/<slug>/
  if (/^\/source\/[^/]+\/$/.test(pathname)) return { priority: 0.8, changefreq: 'monthly' };
  if (pathname.startsWith('/modular-homes/')) return { priority: 0.7, changefreq: 'monthly' };
  if (pathname.startsWith('/blog/')) return { priority: 0.7, changefreq: 'monthly' };
  return { priority: 0.6, changefreq: 'monthly' };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://eriusourcing.com',
  integrations: [
    sitemap({
      filter: (page) => !draftBlogPaths.has(new URL(page).pathname),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const { priority, changefreq } = weighting(pathname);
        item.priority = priority;
        item.changefreq = changefreq;
        item.lastmod = blogLastmod[pathname] || BUILD_DATE;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
