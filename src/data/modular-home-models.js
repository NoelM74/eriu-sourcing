// modular-home-models.js, central data source for the modular-home model pages
//
// Each model entry is rendered in two places:
//   - /modular-homes/models/, the hub (4 cards in a grid)
//   - /modular-homes/models/<slug>/, the dedicated SEO landing page
//
// SEO design: each detail page targets a specific buyer-intent keyword
// ("20ft expandable container home Ireland", "40ft modular home Ireland",
// etc.) with unique editorial content + spec table + floor plan section +
// model-specific FAQ. Specs come from the manufacturer datasheets supplied
// by the central-China factory base (Henan + Hubei expandable-container
// production hub).

export const modularHomeModels = [
  {
    slug: '20ft-expandable',
    id: '20ft',
    name: '20ft Expandable',
    h1: '20ft Expandable Container Home, Spec Sheet for Ireland',
    metaTitle: '20ft Expandable Container Home Ireland, Specs, Floor Plans & Price | Ériu',
    metaDescription: 'The 20ft expandable container home, folds to 2.2 m, opens to 6.3 m on site for ~34 m². A compact back-garden auxiliary dwelling, compliant with Irish regs.',
    eyebrow: '20ft Expandable Model',
    tagline: 'The compact back-garden unit. One to three bedrooms, ~34 m² internal.',
    lead: 'The 20ft Expandable is the most ordered Ériu model for Irish back-garden auxiliary dwellings. Folded for shipping it travels at standard container width (2.2 m); on site it expands sideways to 6.3 m, opening into a usable internal floor of ~34 m², enough for a one-bed unit with bathroom, kitchenette and living area within the new Irish exempted-development envelope.',

    expanded: 'L5,900 × W6,300 × H2,480 mm',
    internal: 'L5,460 × W6,140 × H2,240 mm',
    folded: 'L5,900 × W2,200 × H2,480 mm',
    weight: '3,400 kg (3.4 t)',
    loading: '2 sets per 40HQ container',
    internalArea: '~34 m²',
    bestFor: 'Studio / 1-bed auxiliary dwelling, granny flat, garden office',

    image: '/images/modular-homes-20ft-expandable.webp',
    imageAlt: '20ft expandable container home exterior, folds to 2.2 m wide for shipping, expands to 6.3 m on site',
    floorplanImage: '/images/modular-homes-floorplan-layouts.webp',
    floorplanAlt: '20ft expandable container home floor plans, empty shell, one-bedroom and two-bedroom layouts',
    floorplanCaption: 'Three standard 20ft layouts, empty shell, 1-bed and 2-bed. Custom partitioning on request.',

    // Long-form editorial (rendered as <p> paragraphs on the detail page)
    body: [
      'The 20ft Expandable is the smallest model in the Ériu range. It is also the model most Irish buyers ask about first, because it sits comfortably inside the size envelope drafted in the 21 April 2026 Exempted Development Regulations, a back-garden auxiliary dwelling of 32 to 45 square metres, connected to the principal house services, with no full planning permission required where the exemption conditions are met.',
      'Shipped folded to 2.2 m wide so two units load to a single 40HQ ocean container, the 20ft unit arrives at port at standard container width and rolls onto a flatbed for inland delivery anywhere in Ireland. On site the steel-frame side walls fold down hydraulically to form the long faces of the dwelling, the roof lifts onto its expanded position, and the unit reaches its full 5.9 × 6.3 m footprint within a single day.',
      'The factory base for the 20ft Expandable is the Zhengzhou and Xinxiang expandable-container cluster in Henan, the production heartland for this product type globally. Ériu has direct relationships with the three largest producers there and inspects every unit at the factory before the container is sealed. Wall and roof panels are 75 mm rock-wool sandwich panel as standard; upgrades to PIR or PUR are available for higher U-values where Irish Part L compliance demands it.',
    ],

    faq: [
      {
        q: 'Does the 20ft Expandable fit inside the new Irish exempted-development size limit?',
        a: 'Yes. At ~34 m² internal floor area the 20ft Expandable sits inside the 32–45 m² band drafted in the Government\'s 21 April 2026 Exempted Development Regulations for back-garden auxiliary dwellings. Planning exemption is not the same as building-regulations exemption, every unit must still meet TGD Parts A to M and carry a BER. Ériu supplies the 20ft Expandable fully specified for Irish Building Regs compliance.',
      },
      {
        q: 'How many 20ft Expandable units fit in one 40HQ shipping container?',
        a: 'Two units per 40HQ container. The folded shipping dimension is 5.9 m × 2.2 m × 2.48 m, which loads as a pair end-to-end inside a 40-foot high-cube container. This is what keeps the per-unit freight cost from China to Dublin in the €2,400–€3,200 range, the dominant freight saving versus single-unit containerised shipments.',
      },
      {
        q: 'What is the foundation requirement for a 20ft Expandable?',
        a: 'A reinforced concrete strip or pad foundation sized to the 5.9 × 6.3 m footprint, with services (water, foul, electrical) brought to the perimeter before delivery. The unit weighs 3.4 tonnes empty, so a standard residential strip foundation 600 mm deep with C25 concrete is sufficient on competent ground. Ériu provides the foundation drawing as part of the order pack.',
      },
      {
        q: 'How long does the on-site expansion take?',
        a: 'Site expansion from folded shipping configuration to fully open dwelling takes one working day for a two-person crew. Service connections (electrical, water, foul) and finishes typically add a further three to five days depending on the spec. Total time from container arrival at site to BER-ready dwelling is typically one to two weeks.',
      },
      {
        q: 'What internal layouts are available for the 20ft Expandable?',
        a: 'Three standard layouts: an open-plan studio shell, a one-bedroom layout (bedroom + bathroom + kitchen / living combined), and a two-bedroom layout for ~34 m². All three are available with the standard rock-wool sandwich panel wall pack or upgraded to PIR. Custom partitioning is available with a four-week lead time addition.',
      },
    ],
  },

  {
    slug: '30ft-expandable',
    id: '30ft',
    name: '30ft Expandable',
    h1: '30ft Expandable Container Home, Spec Sheet for Ireland',
    metaTitle: '30ft Expandable Container Home Ireland, Specs, Floor Plans & Price | Ériu',
    metaDescription: 'The 30ft expandable container home, ~52 m² internal, a comfortable 2-bed layout. The mid-size step up from the 20ft for auxiliary dwellings and holiday lets.',
    eyebrow: '30ft Expandable Model',
    tagline: 'The mid-size unit. Comfortable two-bedroom layout, ~52 m² internal.',
    lead: 'The 30ft Expandable steps up to ~52 m² of usable internal floor, comfortable for a two-bedroom layout with full kitchen, separate living room and a proper bathroom. It sits above the new Irish exempted-development envelope (which caps at 45 m²), so it is the model Irish buyers pick when they are pursuing full planning permission for a rural cottage, a holiday let, or a larger family-supporting auxiliary dwelling.',

    expanded: 'L9,000 × W6,220 × H2,480 mm',
    internal: 'L8,540 × W6,060 × H2,200 mm',
    folded: 'L9,000 × W2,200 × H2,480 mm',
    weight: '4,300 kg (4.3 t)',
    loading: '1 set per 40HQ container',
    internalArea: '~52 m²',
    bestFor: '2-bed auxiliary dwelling, holiday let, larger granny flat',

    image: '/images/modular-homes-30ft-expandable.webp',
    imageAlt: '30ft expandable container home exterior, mid-size modular unit for Irish back garden or holiday let',
    floorplanImage: null,
    floorplanAlt: '',
    floorplanCaption: '',

    body: [
      'The 30ft Expandable is the most flexible model in the Ériu range. At ~52 m² internal floor area it is large enough to accommodate a two-bedroom layout with separate living and kitchen areas, but compact enough that the shipping cost per unit and the on-site expansion remain straightforward.',
      'Because the 30ft sits above the 45 m² ceiling drafted in the April 2026 Exempted Development Regulations, Irish buyers using the 30ft model are typically pursuing full planning permission rather than relying on the exemption. The most common application is a rural cottage on a site that already has a dwelling, a holiday-let unit on a working farm, or a larger family-supporting auxiliary dwelling where the buyer wants the comfort margin that the 20ft Expandable cannot quite deliver.',
      'One 30ft unit loads per 40HQ ocean container, the shipping cost per unit is roughly twice the 20ft, but the resulting internal floor area is roughly 50% larger. Same Henan central-China factory base, same QC programme, same on-site expansion process, the 30ft unfolds in the same single day with the same two-person crew.',
    ],

    faq: [
      {
        q: 'Can the 30ft Expandable be planning-exempt in Ireland?',
        a: 'No. The 30ft model at ~52 m² internal floor area is above the 45 m² ceiling in the April 2026 Exempted Development Regulations for back-garden auxiliary dwellings. Buyers pursuing the 30ft are typically going through full planning permission, for a rural cottage, a holiday let, or a larger family-supporting dwelling on a site that already has principal accommodation.',
      },
      {
        q: 'Is the 30ft Expandable suitable for short-term let / Airbnb use in Ireland?',
        a: 'Yes, the 30ft is the most popular model among Ériu buyers building holiday-let units. The two-bedroom internal layout suits a four-guest letting profile, the spec can be upgraded to commercial-grade fittings, and the unit ships as a single set per 40HQ container, simplifying logistics for rural-site delivery.',
      },
      {
        q: 'What is the difference between the 30ft and the 40ft Expandable?',
        a: 'The 30ft is 9.0 m long expanded, ~52 m² internal floor area, 4.3 tonnes empty. The 40ft is 11.8 m long expanded, ~70 m² internal floor area, 5.9 tonnes empty. Both ship as one unit per 40HQ container. Buyers pick the 30ft for two-bedroom layouts and the 40ft for three-bedroom or larger open-plan layouts. The freight cost per unit is similar; the price difference is in the additional factory materials.',
      },
    ],
  },

  {
    slug: '40ft-expandable',
    id: '40ft',
    name: '40ft Expandable',
    h1: '40ft Expandable Container Home, Spec Sheet for Ireland',
    metaTitle: '40ft Expandable Container Home Ireland, Specs, Floor Plans & Price | Ériu',
    metaDescription: 'The 40ft expandable container home, ~70 m² internal, a 2 or 3-bed family layout. The full-size modular home, factory-direct from central China to Ireland.',
    eyebrow: '40ft Expandable Model',
    tagline: 'The full home. Two or three bedrooms, ~70 m² internal.',
    lead: 'The 40ft Expandable is the full-size family-home model in the Ériu range. At ~70 m² internal it accommodates a three-bedroom layout with proper living spaces, full bathroom, and a usable kitchen, equivalent floor area to many traditional Irish two-bed terraced cottages, delivered factory-direct from central China at a fraction of the build cost.',

    expanded: 'L11,800 × W6,220 × H2,480 mm',
    internal: 'L11,540 × W6,060 × H2,200 mm',
    folded: 'L11,800 × W2,200 × H2,480 mm',
    weight: '5,900 kg (5.9 t)',
    loading: '1 set per 40HQ container',
    internalArea: '~70 m²',
    bestFor: '3-bed family home, larger holiday let, modular office',

    image: '/images/modular-homes-40ft-expandable.webp',
    imageAlt: '40ft expandable container home exterior, full-size 3-bedroom modular unit shipped factory-direct to Ireland',
    floorplanImage: '/images/modular-homes-floorplan-layouts.webp',
    floorplanAlt: '40ft expandable container home floor plans, empty shell, two-bedroom and three-bedroom layouts',
    floorplanCaption: 'Three standard 40ft layouts, empty shell, 2-bed and 3-bed. Custom configurations on request.',

    body: [
      'The 40ft Expandable is the full-size flagship of the Ériu range. At ~70 m² internal it delivers a properly comfortable family layout, three bedrooms, a separate living room, a full kitchen and a proper bathroom, within a footprint that still ships as a single set per 40HQ container.',
      'Irish buyers use the 40ft for two distinct projects: rural primary dwellings on serviced sites (where full planning permission has been granted and the brief is for a complete family home at a controlled cost), and larger commercial holiday lets on rural tourism sites. A small but growing segment is modular offices for businesses outgrowing serviced workspace, the same 70 m² accommodates a four-to-six-person team comfortably.',
      'Shipping logistics are the same as the 30ft, one set per 40HQ container. Site delivery requires a flatbed lorry with a HIAB crane to lift the folded unit into final position before expansion. The expansion sequence itself is identical to the smaller models: a single working day for a two-person crew, services connected over the following three to five days.',
    ],

    faq: [
      {
        q: 'Can the 40ft Expandable serve as a primary dwelling in rural Ireland?',
        a: 'Yes, this is one of its two main applications. With full planning permission granted on a serviced rural site, the 40ft model at ~70 m² accommodates a three-bedroom family layout that meets Irish Building Regs Part L energy performance and Part B fire safety. Many rural buyers pair the 40ft with a small detached utility / boot-room block, giving a total habitable footprint comparable to a traditional Irish two-bed cottage at a fraction of the build cost.',
      },
      {
        q: 'How does the 40ft Expandable compare to a stick-built modular home?',
        a: 'A 40ft Expandable factory-direct from central China is typically 35–50% cheaper than an equivalent-spec stick-built modular home from an Irish or UK manufacturer. The trade-off is on insulation upgrade options, Irish modular manufacturers offer wider PIR / PUR thickness choices off the shelf. Ériu specifies PIR or PUR upgrade as standard for Irish supply to bring the U-values into Part L compliance.',
      },
      {
        q: 'Can the 40ft Expandable be used as commercial office space in Ireland?',
        a: 'Yes, the 40ft accommodates four to six full workstations comfortably with break room, kitchen, and bathroom. Buyers typically pursue commercial planning where the use is non-residential. The build cost makes it attractive for businesses outgrowing serviced workspace but not yet ready to commit to a long commercial lease.',
      },
    ],
  },

  {
    slug: '20ft700-foldable',
    id: '20ft700',
    name: '20FT700 Foldable',
    h1: '20FT700 Foldable Modular Cabin, Spec Sheet for Ireland',
    metaTitle: '20FT700 Foldable Modular Cabin Ireland, Six Units Per Container | Ériu',
    metaDescription: 'The 20FT700 foldable cabin, folds to 700 mm so six units load one 40HQ container. The shipping-efficiency model for multi-unit projects and holiday parks.',
    eyebrow: '20FT700 Foldable Model',
    tagline: 'The shipping efficiency unit. Six sets per 40HQ container.',
    lead: 'The 20FT700 is the multi-unit logistics model, designed to fold to just 700 mm wide so six finished cabins load into a single 40HQ container. The per-unit shipping cost drops to a fraction of standard expandable models, making the 20FT700 the right choice for holiday-park developers, on-site project accommodation, and multi-unit investor programmes.',

    expanded: 'L5,900 × W4,800 × H2,480 mm',
    internal: 'L5,460 × W4,640 × H2,240 mm',
    folded: 'L5,900 × W700 × H2,480 mm',
    weight: '1,950 kg (1.95 t)',
    loading: '6 sets per 40HQ container',
    internalArea: '~25 m²',
    bestFor: 'Multi-unit projects, holiday parks, site accommodation, investor programmes',

    image: '/images/modular-homes-700-wide.webp',
    imageAlt: '20FT700 foldable modular cabin, folds to just 700 mm wide, six units per 40HQ container',
    floorplanImage: null,
    floorplanAlt: '',
    floorplanCaption: '',

    body: [
      'The 20FT700 is the logistics-optimised cousin of the 20ft Expandable. Where the 20ft Expandable folds to standard 2.2 m container width and ships two units per 40HQ container, the 20FT700 folds further, to just 700 mm wide, so six units load to the same container. The per-unit shipping cost from China to Dublin drops from approximately €1,500 to under €600.',
      'At ~25 m² internal the 20FT700 is smaller than the 20ft Expandable, accommodating a studio-cabin layout rather than a full one-bedroom unit. The model is designed for buyers whose business model is unit-volume rather than individual luxury, holiday-park developers building out a 20-cabin scheme, contractors fitting out site accommodation for a multi-month project, and investor programmes assembling micro-housing portfolios.',
      'The foldable wall construction is structurally distinct from the standard expandable, the side walls fold inward like a concertina rather than hinging down. This adds about half a day to the on-site expansion process but is what enables the 700 mm shipping width. Production base is the same Zhengzhou / Xinxiang Henan cluster as the rest of the Ériu range, with the same factory-floor QC programme.',
    ],

    faq: [
      {
        q: 'Why is the 20FT700 lighter than the 20ft Expandable?',
        a: 'The 20FT700 is 1.95 tonnes empty versus 3.4 tonnes for the standard 20ft Expandable. The lighter weight reflects the smaller floor area (~25 m² versus ~34 m²) and the concertina-style folding wall construction, which uses slightly thinner steel sections than the standard expandable. The 20FT700 is rated for residential occupation in the same way as the rest of the range; the weight saving comes from the geometry rather than the spec.',
      },
      {
        q: 'How does the per-unit shipping cost compare?',
        a: 'Six 20FT700 units load to a single 40HQ container, versus two 20ft Expandable units per 40HQ. At current ocean-freight rates of approximately €3,000 per 40HQ container Shenzhen to Dublin, the per-unit freight cost for a 20FT700 is approximately €500 versus approximately €1,500 for a 20ft Expandable. On a 20-unit holiday-park order the freight saving alone is approximately €20,000.',
      },
      {
        q: 'Is the 20FT700 suitable for Irish back-garden auxiliary dwelling use?',
        a: 'Possible but unusual. At ~25 m² internal the 20FT700 sits below the lower bound (32 m²) drafted in the April 2026 Exempted Development Regulations, which means it would not qualify for the planning exemption. For single-unit back-garden auxiliary dwellings the 20ft Expandable is the standard recommendation. The 20FT700 makes sense when shipping cost matters more than maximum internal floor area, typically when the buyer is ordering multiple units.',
      },
    ],
  },
];

// Helper: get a model by slug (used in detail page getStaticPaths and floor-plans page)
export function getModelBySlug(slug) {
  return modularHomeModels.find(m => m.slug === slug) ?? null;
}
