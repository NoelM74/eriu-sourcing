// Builds the motorcycle model data and photos for /motorcycles/.
//
// Usage: node scripts/build-moto-data.mjs <research-dir> <brand> [<brand> ...]
//   <research-dir>/<brand>/data.json   researched model data (see the research brief)
//   <research-dir>/<brand>/img/        the makers' photos referenced from data.json
//
// Writes:
//   src/data/moto/<brand>.json                       model data used by the pages
//   public/images/motorcycles/<brand>/<slug>-<n>.webp (1400 px) and -sm.webp (700 px)
//
// Studio shots on white, transparent or light backgrounds are trimmed to the
// bike and centred on a white 3:2 canvas, so every bike fills its frame the
// same way and dark bikes stay easy to see. Scene and dark shots are only resized.

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const [researchDir, ...brands] = process.argv.slice(2);
if (!researchDir || brands.length === 0) {
  console.error('Usage: node scripts/build-moto-data.mjs <research-dir> <brand> [...]');
  process.exit(1);
}

const BIG = 1400, SMALL = 700, MAX_IMAGES = 5;
const BANNED = /—|!|\b(revolutionary|ultimate|unleash|game-changer|cutting-edge|unparalleled|elevate|seamless|boasts|epic|beast)\b/i;
const CATEGORIES = ['Adventure', 'Rally', 'Off-road', 'Supermoto', 'Naked', 'Sport', 'Sport touring', 'Touring', 'Cruiser', 'Retro', 'Custom', 'Commuter', 'Scooter', 'Maxi scooter', 'Adventure scooter', 'Three-wheel scooter'];

async function studio(file) {
  // Flatten onto white, trim the empty margin, then centre on a 3:2 white canvas.
  // Shave 3 px off each edge first: some source photos carry a thin border line
  // that would otherwise stop the trim.
  const m = await sharp(file).rotate().metadata();
  const flat = await sharp(file).rotate().flatten({ background: '#ffffff' })
    .extract({ left: 3, top: 3, width: m.width - 6, height: m.height - 6 }).toBuffer();
  let trimmed;
  try {
    trimmed = await sharp(flat).trim({ background: '#ffffff', threshold: 22 }).toBuffer({ resolveWithObject: true });
  } catch {
    trimmed = await sharp(flat).toBuffer({ resolveWithObject: true });
  }
  const { width: cw, height: ch } = trimmed.info;
  // Content takes 90% of the canvas width or 82% of its height, whichever binds first.
  let W = Math.round(cw / 0.9), H = Math.round(W / 1.5);
  if (ch / H > 0.82) { H = Math.round(ch / 0.82); W = Math.round(H * 1.5); }
  const left = Math.round((W - cw) / 2), top = Math.round((H - ch) / 2);
  return sharp(trimmed.data).extend({ left, right: W - cw - left, top, bottom: H - ch - top, background: '#ffffff' }).toBuffer();
}

for (const brand of brands) {
  const src = path.join(researchDir, brand);
  const data = JSON.parse(fs.readFileSync(path.join(src, 'data.json'), 'utf8'));
  const outImg = path.join('public/images/motorcycles', brand);
  fs.mkdirSync(outImg, { recursive: true });
  const warnings = [];
  const models = [];

  for (const m of data.models) {
    if (!CATEGORIES.includes(m.category)) warnings.push(`${m.slug}: unknown category "${m.category}"`);
    const copy = [m.tagline, ...(m.summary ?? []), ...(m.highlights ?? [])].join(' ');
    if (BANNED.test(copy)) warnings.push(`${m.slug}: copy contains a banned word, em dash or "!" -> ${copy.match(BANNED)[0]}`);

    const images = [];
    for (const img of (m.images ?? []).slice(0, MAX_IMAGES)) {
      const file = path.join(src, 'img', img.file);
      if (!fs.existsSync(file)) { warnings.push(`${m.slug}: missing ${img.file}`); continue; }
      let meta;
      try { meta = await sharp(file).metadata(); } catch { warnings.push(`${m.slug}: unreadable ${img.file}`); continue; }
      if ((meta.width ?? 0) < 500) { warnings.push(`${m.slug}: ${img.file} too small (${meta.width}px)`); continue; }

      const isStudio = ['white', 'transparent', 'light'].includes(img.bg);
      const base = isStudio ? await studio(file) : await sharp(file).rotate().flatten({ background: '#ffffff' }).toBuffer();
      const n = images.length + 1;
      const name = `${m.slug}-${n}`;
      const big = await sharp(base).resize({ width: BIG, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(outImg, `${name}.webp`));
      await sharp(base).resize({ width: SMALL, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(outImg, `${name}-sm.webp`));
      images.push({ src: `/images/motorcycles/${brand}/${name}`, w: big.width, h: big.height, kind: img.kind, studio: isStudio, alt: img.alt });
    }
    if (images.length === 0) warnings.push(`${m.slug}: NO images`);
    models.push({ ...m, images });
  }

  fs.mkdirSync('src/data/moto', { recursive: true });
  const out = { brand, brandStory: data.brandStory, brandStorySource: data.brandStorySource, checked: new Date().toISOString().slice(0, 10), models };
  fs.writeFileSync(path.join('src/data/moto', `${brand}.json`), JSON.stringify(out, null, 1) + '\n');
  console.log(`${brand}: ${models.length} models, ${models.reduce((n, m) => n + m.images.length, 0)} images`);
  warnings.forEach((w) => console.log('  WARN', w));
}
