// Builds dist/sitemap-images.xml after every build: each indexable page with
// the content photos it shows (plus its og:image), for Google Search Console
// and Bing Webmaster Tools. Runs from the astro:build:done hook in astro.config.mjs.
//
// Skipped: noindex pages, pages not in the page sitemap, SVG/icon files,
// data: URIs, and images inside the header and footer (logo, badges).

import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://eriusourcing.com';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

export function buildImageSitemap(distDir) {
  // Only pages that are in the page sitemap (that list already drops drafts and noindex pages).
  const pageXml = fs.readdirSync(distDir).filter((f) => /^sitemap-\d+\.xml$/.test(f))
    .map((f) => fs.readFileSync(path.join(distDir, f), 'utf8')).join('');
  const listed = new Set([...pageXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));

  const entries = [];
  let total = 0;
  for (const file of walk(distDir)) {
    const rel = path.relative(distDir, file).replace(/\\/g, '/').replace(/index\.html$/, '');
    const pageUrl = `${SITE}/${rel}`;
    if (!listed.has(pageUrl)) continue;
    let html = fs.readFileSync(file, 'utf8');
    if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) continue;

    const og = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)?.[1];
    // Drop site chrome so the logo and footer badges are not listed on every page.
    html = html.replace(/<header[\s\S]*?<\/header>/gi, '').replace(/<footer[\s\S]*?<\/footer>/gi, '');

    const seen = new Set();
    const add = (src) => {
      if (!src || src.startsWith('data:')) return;
      const abs = new URL(src.replace(/&amp;/g, '&'), pageUrl).href;
      if (!abs.startsWith(SITE) || /\.(svg|ico)(\?|$)/i.test(abs) || seen.has(abs)) return;
      seen.add(abs);
    };
    if (og) add(og);
    for (const m of html.matchAll(/<img\b[^>]*?\ssrc="([^"]+)"/gi)) add(m[1]);
    if (seen.size === 0) continue;
    total += seen.size;
    entries.push(`<url><loc>${esc(pageUrl)}</loc>${[...seen].slice(0, 1000).map((i) => `<image:image><image:loc>${esc(i)}</image:loc></image:image>`).join('')}</url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries.join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(distDir, 'sitemap-images.xml'), xml);
  return { pages: entries.length, images: total };
}
