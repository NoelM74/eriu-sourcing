// optimizedImages.ts — resolves a /public-style image path (e.g.
// "/images/foo.webp") to a build-optimized ImageMetadata object, IF a copy of
// that file exists under /src/assets/images. Lets components keep taking plain
// string paths while opting into astro:assets optimization where available,
// and fall back to a raw <img> for images not (yet) migrated.
import type { ImageMetadata } from 'astro';

const map = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{webp,jpg,jpeg,png,avif}',
  { eager: true }
);

export function resolveImage(src: string | undefined): ImageMetadata | undefined {
  if (!src) return undefined;
  const file = src.replace(/^.*\/images\//, '').replace(/^\/+/, '');
  return map[`/src/assets/images/${file}`]?.default;
}

// Build a responsive widths array that never upscales past the source width,
// always including the intrinsic width as the largest candidate.
export function responsiveWidths(meta: ImageMetadata, candidates: number[]): number[] {
  const w = meta.width;
  const list = candidates.filter((c) => c < w);
  list.push(w);
  return [...new Set(list)].sort((a, b) => a - b);
}
