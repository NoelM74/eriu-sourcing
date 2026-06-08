/**
 * Testimonials data — single source of truth.
 *
 * INSTRUCTIONS FOR FILLING IN:
 *   1. Set draft: false when the quote is ready to go live.
 *   2. Fill in quote with the client's exact words (lightly spell/grammar
 *      checked — never change the meaning or invent claims).
 *   3. For clients who want anonymity: leave name empty, fill role/company/location.
 *   4. photos: [] — add filenames from /public/images/. Order matters:
 *      - 0 photos  → emerald initials disc
 *      - 1 photo   → circular avatar
 *      - 2–3 photos → inline photo strip below the quote
 *   5. tags: used to pull the right testimonials onto each page.
 *      Available tags: 'general', 'building-materials', 'construction-machinery',
 *      'industrial-equipment', 'furniture', 'modular-buildings', 'logistics',
 *      'private-label', 'qc', 'contact-page', 'homepage'
 *
 * NOTE: quotes below are the clients' own words, lightly corrected for spelling
 * and grammar only. The "company" field is a factual sector descriptor drawn
 * from the quote — no company names are invented or implied.
 */

export const testimonials = [
  {
    id: 'shredder-longford',
    draft: false,
    name: 'M. Byrne',
    role: '',
    company: 'Mattress recycling',
    location: 'Co. Longford, Ireland',
    quote: 'Noel helped us source a large shredder to recycle mattresses. He visited and verified the factory, gave us a walkaround of the production area over WhatsApp, checked the shredder before shipping and also helped us with the shipment to Ireland. It was great to have an Irish person on the ground to explain things to.',
    tags: ['industrial-equipment', 'general', 'homepage'],
    photos: [
      { src: 'shredder-longford-project-2.webp', alt: "Ériu's Noel beside the green industrial mattress shredder at the manufacturer's factory in Henan, China" },
      { src: 'shredder-longford-project-1.webp', alt: 'Noel from Ériu Sourcing at the Henan recycling-machinery factory before the shredder shipped to Ireland' },
      { src: 'shredder-longford-project-3.webp', alt: 'The recycling and material-separation line inspected at the factory before shipment to Co. Longford' },
    ],
  },
  {
    id: 'building-materials-sydney',
    draft: false,
    name: 'George S.',
    role: '',
    company: 'Building materials importer',
    location: 'Sydney, Australia',
    quote: "We've been working with Ériu and Noel for a number of years now to source building materials for large commercial and residential projects here in Australia. I visit China twice a year to see the factories, and besides that Noel and his team look after everything else all year round. Highly recommended.",
    tags: ['building-materials', 'general', 'homepage'],
    photos: [
      { src: 'sydney-building-materials-project-1.webp', alt: 'Cladding and façade materials installed on a commercial building in Sydney, sourced through Ériu' },
      { src: 'sydney-building-materials-project-2.webp', alt: 'Aluminium-framed glazed doors and window profiles fitted on an Australian building project' },
      { src: 'sydney-building-materials-project-3.webp', alt: 'Palletised building materials delivered to the Sydney project site' },
    ],
  },
  {
    id: 'packaging-qc-wicklow',
    draft: false,
    name: 'Ben',
    role: '',
    company: 'Personal care brand',
    location: 'Co. Wicklow, Ireland',
    quote: "The Ériu team helped us find three manufacturers to trial for our specific product packaging, then shipped us samples by DHL. They also had the packaging tested at a lab to make sure it was really up to the job. We've since enlisted their help finding sustainable shipping packaging to add to our products' eco credentials.",
    tags: ['private-label', 'qc', 'general'],
    photos: [
      { src: 'wicklow-packaging-project-1.webp', alt: 'Noel from Ériu visiting a shortlisted packaging manufacturer in Dongguan, China' },
      { src: 'wicklow-packaging-project-2.webp', alt: 'Packaging production line at one of the manufacturers trialled for the Wicklow brand' },
      { src: 'wicklow-packaging-project-3.webp', alt: 'Packaging machinery used to produce and test the sample runs before shipping to Ireland' },
    ],
  },
  {
    id: 'promotional-galway',
    draft: false,
    name: 'Gerry D.',
    role: '',
    company: 'Promotional goods & custom manufacturing',
    location: 'Co. Galway, Ireland',
    quote: "I've been working with Noel and his team for 13 years on a variety of projects, including large promotional goods orders and custom metal moulds. They are exceptionally professional, and when I visited them in China they helped arrange everything — the visas, hotel bookings and a car to drive us around and show us different suppliers' factories.",
    tags: ['private-label', 'homepage', 'contact-page'],
    photos: [],
  },
  {
    id: 'bathrooms-limerick',
    draft: false,
    name: 'Andy D.',
    role: '',
    company: 'Bathroom retailer',
    location: 'Limerick City, Ireland',
    quote: 'Before Brexit we were buying our high-end bathrooms from wholesalers in the UK, but then needed to shift our supply base. Ériu helped us find some amazing products at 30–40% less than we had previously been paying, and helped with every step including the shipping by sea to Ireland. Great company to work with.',
    tags: ['building-materials', 'contact-page'],
    photos: [],
  },
  {
    id: 'modular-yorkshire',
    draft: false,
    name: 'Mark Johnson',
    role: '',
    company: 'Modular cabin manufacturer',
    location: 'East Yorkshire, UK',
    quote: "We've been in the modular cabin building business for over 30 years, and were delighted to add Ériu as a supplier 10 years ago. They supply top-quality, certified materials and components. Thanks.",
    tags: ['modular-buildings', 'building-materials'],
    photos: [
      { src: 'modular-cabin-build-project-1.webp', alt: 'A modular cabin unit being assembled with certified materials and components supplied through Ériu' },
      { src: 'modular-cabin-build-project-2.webp', alt: 'Steel frame of an expandable modular building under construction at the factory' },
    ],
  },
  {
    id: 'sofas-midlands',
    draft: false,
    name: 'Fiona B.',
    role: '',
    company: 'Furniture retailer',
    location: 'Midlands, Ireland',
    quote: "When we were looking to import sofas directly from China to Ireland, a friend recommended Ériu Sourcing. It's great to work with another Irish person on the ground in China who understands what we need, can convey that exactly to the factory, and then QC-checks everything before shipping. They even helped us get our branding on the large sofa boxes at no extra cost.",
    tags: ['furniture', 'general', 'contact-page'],
    photos: [],
  },
  {
    id: 'sportswear-tralee',
    draft: false,
    name: 'Shane Leahy',
    role: '',
    company: 'Custom sportswear & workwear',
    location: 'Tralee, Co. Kerry',
    quote: "Great company to work with. I sent them a sample of what I was looking for and they were able to save us a fortune on the cost of the goods (custom sports and workwear). Definitely worth giving them a shout if you're looking to import from China.",
    tags: ['private-label'],
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
