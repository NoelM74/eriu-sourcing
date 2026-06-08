/**
 * Testimonials data — single source of truth.
 *
 * INSTRUCTIONS FOR FILLING IN:
 *   1. Set draft: false when the quote is ready to go live.
 *   2. Fill in quote with the client's exact words — do not paraphrase.
 *   3. For clients who want anonymity: leave name empty, fill role/company/location.
 *      Rendered as: "Managing Director — Furniture Retailer, Co. Clare"
 *   4. photos: [] — add filenames from /public/images/. Order matters:
 *      - 0 photos  → emerald initials disc
 *      - 1 photo   → circular avatar
 *      - 2–3 photos → inline photo strip below the quote
 *   5. tags: used to pull the right testimonials onto each page.
 *      Available tags: 'general', 'building-materials', 'construction-machinery',
 *      'industrial-equipment', 'furniture', 'modular-buildings', 'logistics',
 *      'private-label', 'qc', 'contact-page', 'homepage'
 */

export const testimonials = [
  {
    id: 'shredder-longford',
    draft: true,
    name: '',                          // e.g. 'John Murphy' — leave empty for anonymous
    role: 'Director',
    company: 'Industrial importer',
    location: 'Co. Longford, Ireland',
    quote: '',                         // PASTE EXACT CLIENT WORDS HERE
    tags: ['industrial-equipment', 'general'],
    photos: [],                        // add filenames e.g. ['client-longford-factory.webp']
  },
  {
    id: 'packaging-qc-wicklow',
    draft: true,
    name: '',
    role: 'Founder',
    company: 'Personal care brand',
    location: 'Co. Wicklow, Ireland',
    quote: '',
    tags: ['private-label', 'qc', 'contact-page'],
    photos: [],
  },
  {
    id: 'building-supplies-tipperary',
    draft: true,
    name: '',
    role: 'Director',
    company: 'Building contractor',
    location: 'Co. Tipperary, Ireland',
    quote: '',
    tags: ['building-materials', 'construction-machinery', 'contact-page'],
    photos: [],
  },
  {
    id: 'multi-product-galway',
    draft: true,
    name: '',
    role: 'Managing Director',
    company: 'Import company',
    location: 'Co. Galway, Ireland',
    quote: '',
    tags: ['general', 'homepage', 'contact-page'],
    photos: [],
  },
  {
    id: 'modular-homes-yorkshire',
    draft: true,
    name: '',
    role: 'Operations Director',
    company: 'Modular home manufacturer',
    location: 'Yorkshire, UK',
    quote: '',
    tags: ['modular-buildings', 'building-materials'],
    photos: [],
  },
  {
    id: 'profiles-sydney-govt',
    draft: true,
    name: '',
    role: 'Procurement Manager',
    company: 'Building materials supplier',
    location: 'Sydney, Australia',
    quote: '',
    tags: ['building-materials', 'general', 'homepage'],
    photos: [],
  },
  {
    id: 'sofas-ennis-retail',
    draft: true,
    name: '',
    role: 'Owner',
    company: 'Furniture retailer',
    location: 'Ennis, Co. Clare, Ireland',
    quote: '',
    tags: ['furniture', 'contact-page'],
    photos: [],
  },
  {
    id: 'interiors-dublin-contractor',
    draft: true,
    name: '',
    role: 'Director',
    company: 'Building contractor',
    location: 'Dublin, Ireland',
    quote: '',
    tags: ['building-materials', 'contact-page', 'homepage'],
    photos: [],
  },
  {
    id: 'smart-bathrooms-limerick',
    draft: true,
    name: '',
    role: 'Director',
    company: 'Bathroom & sanitaryware supplier',
    location: 'Limerick, Ireland',
    quote: '',
    tags: ['building-materials', 'contact-page'],
    photos: [],
  },
];

/**
 * Filter helpers used by TestimonialsSection.astro
 * Returns only live (draft: false) testimonials with a non-empty quote.
 */
export function getByTags(tags) {
  return testimonials.filter(
    t => !t.draft && t.quote.trim() !== '' && tags.some(tag => t.tags.includes(tag))
  );
}

export function getByIds(ids) {
  return testimonials.filter(
    t => !t.draft && t.quote.trim() !== '' && ids.includes(t.id)
  );
}
