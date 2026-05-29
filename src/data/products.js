// products.js — Data for individual product-level SEO landing pages.
//
// URL pattern: /source/[categorySlug]/[slug]/
// Example:     /source/construction-materials/aluminium-window-profiles-china-ireland/
//
// Each entry targets a long-tail commercial-intent query and feeds into its
// parent category page (the existing /source/[categoryFullSlug]/ page). Add
// entries here — the route + page are generated automatically by
// src/pages/source/[category]/[product].astro.
//
// Schema reference:
//   slug              URL slug for this product (keyword-led, hyphenated)
//   categorySlug      short URL segment for the nested route (e.g. 'construction-materials')
//   categoryFullSlug  slug of the existing parent /source/[slug] hub page
//   categoryLabel     human label used in breadcrumbs + eyebrow
//   title             <title> tag — keep under ~65 chars where possible
//   description       <meta description> — 150–160 chars, includes Ireland anchor
//   h1                page H1 (specific long-tail keyword phrase)
//   intro             1–2 sentence hero lead, written for the business buyer
//   region            manufacturing region (e.g. 'Henan Province')
//   regionContext     1–2 sentences on why this region for this product
//   keyBuyers         array of buyer types in Ireland who buy this product
//   specifications    array of {label, value} spec rows
//   compliance        array of compliance refs (EN standard, CE module, etc.)
//   pricingContext    landed-cost positioning vs Irish trade pricing (no exact €)
//   leadTime          string, e.g. '6–9 weeks production + 4–5 weeks sea freight'
//   logistics         1–2 sentences on container config / packaging / port
//   faq               array of {q, a} — 3–5 long-tail question-led entries
//   image             /images/... (reuse a category image until a product photo exists)
//   imageAlt          alt text including the keyword + 'Ireland'
//   contentBody       optional editorial HTML block for the long-form section

export const products = [
  {
    slug: 'aluminium-window-profiles-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Aluminium Window Profiles from China to Ireland | Ériu Sourcing',
    description: 'Source aluminium window and door profiles factory-direct from Henan Province. EN 12020-2 compliant, thermal-break and standard systems. 35–50% below Irish trade.',
    h1: 'Aluminium window profiles — factory-direct from China to Ireland',
    intro: 'Henan Province is the centre of China\'s aluminium extrusion industry, with vertically integrated mills producing thermal-break and standard window and door profile systems at scale. Ériu Sourcing buys direct from extrusion factories — not through European distributors — for Irish window fabricators, façade contractors, and self-builders.',
    region: 'Henan Province (Zhengzhou cluster)',
    regionContext: 'Henan hosts several of the largest aluminium extrusion mills in China, including operations supplying global window-system brands. Proximity to bauxite supply and the Zhengzhou rail freight corridor make it the lowest-cost source for both raw 6063 profiles and finished powder-coated window systems.',
    keyBuyers: [
      'Irish window and door fabricators',
      'Commercial façade contractors',
      'Self-build and one-off house projects',
      'Modular home and container builders',
      'Conservatory and sunroom installers',
    ],
    specifications: [
      { label: 'Alloy', value: '6063-T5 / 6063-T6 (window-system grade)' },
      { label: 'Profile types', value: 'Casement, tilt-and-turn, sliding, lift-and-slide, curtain wall' },
      { label: 'Thermal performance', value: 'Polyamide thermal break 24 mm / 34 mm available; Uf down to 1.4 W/m²K' },
      { label: 'Surface finish', value: 'Powder coat (RAL), anodised, wood-grain transfer; QUALICOAT-equivalent process available' },
      { label: 'Length', value: 'Standard 6 m bar; custom cut-to-length on request' },
      { label: 'MOQ', value: '~3,000 kg per profile (one 20ft container = full mixed pallet load)' },
    ],
    compliance: [
      'EN 12020-2 — Aluminium extruded precision profiles (tolerances)',
      'EN 14351-1 — Windows and doors product standard (system-level CE)',
      'EN 1279 — Sealed insulating glass units (when supplied glazed)',
      'CE marking + Declaration of Performance (DoP) per CPR (EU) 305/2011',
      'QUALICOAT or equivalent coating certification on request',
    ],
    pricingContext: 'Aluminium window profiles bought factory-direct from Henan typically land in Ireland 35–50% below quotes from Irish or UK trade merchants for equivalent system specification — after EU import duty (0% on aluminium profiles under most HS 7604 codes for finished goods, check current schedule), sea freight, and Dublin Port clearance.',
    leadTime: '5–7 weeks production + 4–5 weeks sea freight (Shanghai/Ningbo → Dublin)',
    logistics: 'Profiles ship in protected wooden cradles inside a 20ft or 40ft HQ container. A full 20ft container holds approximately 18–22 tonnes of mixed profile depending on section weight. Ériu Sourcing coordinates door-to-door delivery to your Irish yard or fabrication facility.',
    faq: [
      {
        q: 'Can I import CE-compliant aluminium window profiles from China to Ireland?',
        a: 'Yes. Window-system profiles supplied from Henan factories are produced to EN 12020-2 dimensional tolerances. CE marking for the finished window (under EN 14351-1) requires an EU Declaration of Performance — Ériu Sourcing ensures the factory provides the DoP, technical file, and any required test reports (water-tightness, air-permeability, wind-load) before shipment.',
      },
      {
        q: 'What is the minimum order for aluminium profiles from China?',
        a: 'Most Henan extrusion factories quote on a per-die basis with a minimum of around 3,000 kg per profile cross-section. A full 20ft container — typically 18–22 tonnes of mixed profile — is a common first order for an Irish window fabricator and gives the best per-tonne pricing.',
      },
      {
        q: 'How does Henan aluminium pricing compare to Irish window-merchant pricing?',
        a: 'Factory-direct Henan profiles land in Ireland at 35–50% below typical Irish trade-merchant pricing for equivalent system specification. The saving comes from removing the European system-house margin and the Irish distributor margin, while keeping the same alloy, thermal-break detail, and powder-coat quality.',
      },
      {
        q: 'Are thermal-break profiles available, and which window systems can be matched?',
        a: 'Yes. Henan factories produce 24 mm and 34 mm polyamide thermal-break profiles in casement, tilt-and-turn, sliding, and curtain-wall geometries. Several factories produce systems that are dimensionally compatible with major European brands (Schüco, Reynaers, Aluk) — Ériu Sourcing can match a specific reference profile if you supply a sample or detailed drawing.',
      },
      {
        q: 'What does sea freight from China to Ireland add to the landed cost?',
        a: 'A 40ft HQ container Shanghai → Dublin currently lands at roughly €3,500–€5,500 all-in (rates fluctuate — confirm at quote stage). Spread across 22+ tonnes of profile, this adds approximately €0.15–€0.25 per kg to the factory price. Full duty and VAT calculation is provided with every Ériu Sourcing quote.',
      },
    ],
    image: '/images/henan-aluminium-extrusion-press-line.webp',
    imageAlt: 'Aluminium window profile extrusion run-out table in a Henan factory — factory-direct aluminium profiles for Ireland',
    imageWidth: 1400,
    imageHeight: 941,
  },

  {
    slug: 'porcelain-floor-tiles-600x600-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Porcelain Floor Tiles 600x600 from China to Ireland | Ériu Sourcing',
    description: 'Factory-direct porcelain floor tiles (600x600, 800x800, large format) from China. EN 14411 BIa rectified, full slip-resistance certs. 40–55% below Irish tile retail.',
    h1: 'Porcelain floor tiles — 600×600 and large format, factory-direct from China to Ireland',
    intro: 'Foshan in Guangdong produces over half of the world\'s ceramic and porcelain tile output. Ériu Sourcing buys direct from rectified-edge porcelain factories in the Foshan industrial belt, supplying Irish developers, hospitality fit-out contractors, and tile retailers at landed costs 40–55% below Irish wholesale pricing.',
    region: 'Foshan, Guangdong Province',
    regionContext: 'Foshan\'s Nanzhuang and Xiqiao tile clusters contain more than 200 large-scale porcelain factories, including the manufacturers that produce private-label stock for major European tile brands. Direct access here means buying the same tile at the factory price — before the European brand markup and the Irish distributor margin.',
    keyBuyers: [
      'Irish residential developers and contractors',
      'Hotel and hospitality fit-out specifiers',
      'Tile retailers and trade merchants',
      'Commercial office and retail fit-out',
      'Bathroom and kitchen showrooms',
    ],
    specifications: [
      { label: 'Format', value: '600×600 mm, 600×1200 mm, 800×800 mm, 1200×2400 mm large format' },
      { label: 'Thickness', value: '9.5 mm (standard), 10–12 mm (commercial / large format)' },
      { label: 'Body type', value: 'Full-body porcelain, BIa (water absorption ≤ 0.5%)' },
      { label: 'Finish', value: 'Matt, polished, lappato (semi-polished), structured anti-slip' },
      { label: 'Edge', value: 'Rectified (factory-trimmed straight edge) — minimum 2 mm grout joint' },
      { label: 'MOQ', value: '1 × 20ft container (~1,400–1,600 m² depending on format)' },
    ],
    compliance: [
      'EN 14411 — Ceramic tiles, Group BIa (porcelain, water absorption ≤ 0.5%)',
      'EN ISO 10545 series — physical and chemical test methods',
      'DIN 51130 / EN 16165 — slip resistance (R-rating R9–R11 available)',
      'CE marking + Declaration of Performance per CPR (EU) 305/2011',
      'Reaction to fire — A1/A1fl (non-combustible) confirmed at factory',
    ],
    pricingContext: 'Rectified BIa porcelain floor tile from Foshan typically lands in Ireland at €6–€12 per m² for standard 600×600 matt formats — versus €18–€35 per m² for equivalent specification at Irish tile retailers. Large-format and decorative tiles carry a higher uplift but maintain the same 40–55% landed saving.',
    leadTime: '3–5 weeks production + 4–5 weeks sea freight (Shenzhen/Yantian → Dublin)',
    logistics: 'Tiles ship palletised on heat-treated wood inside 20ft or 40ft containers. A 20ft container holds approximately 1,400–1,600 m² of 600×600 tile (around 26 pallets, 22 tonnes). Ériu Sourcing arranges pre-shipment inspection at the factory — every pallet checked for chipping, colour-batch consistency, and calibre matching.',
    faq: [
      {
        q: 'Are Chinese porcelain tiles CE-marked for the Irish market?',
        a: 'Yes. Ceramic and porcelain tiles fall under the Construction Products Regulation (CPR 305/2011) and require CE marking with a Declaration of Performance (DoP). Foshan factories supplying European customers routinely issue CE-compliant DoPs against EN 14411 Group BIa. Ériu Sourcing verifies the DoP, slip-resistance class, and reaction-to-fire rating at the factory before container sealing.',
      },
      {
        q: 'How much does a container of porcelain tile from Foshan land at in Ireland?',
        a: 'A 20ft container of standard 600×600 matt rectified porcelain (around 1,500 m²) typically lands in Ireland — including sea freight, EU import duty (currently around 5% on porcelain tile under HS 6907.21), 23% Irish VAT, and Dublin Port clearance — at €6–€12 per m² depending on tile specification. Ériu Sourcing provides a full duty-inclusive landed cost before order commitment.',
      },
      {
        q: 'What slip resistance is available for commercial and wet-area applications?',
        a: 'Foshan factories produce porcelain tile in R9 (dry areas), R10 (general indoor commercial), R11 (wet areas and external), and R12 (ramps and wet commercial) per DIN 51130. Specify the R-rating with your brief and Ériu Sourcing will only quote factories that can supply the corresponding tested batch with a slip-resistance test report.',
      },
      {
        q: 'Can I source large-format porcelain (1200×2400) from China?',
        a: 'Yes. Several Foshan factories produce large-format porcelain slabs up to 1600×3200 mm for kitchen worktop, wall cladding, and feature flooring applications. Lead times are slightly longer (5–7 weeks) and shipping requires A-frame crating, but landed cost is still typically 40–55% below Irish slab retail.',
      },
      {
        q: 'How do I avoid getting mixed batches or chipped tile from a Chinese factory?',
        a: 'Two safeguards. First, Ériu Sourcing books a pre-shipment inspection at the factory — pallets are opened, batch numbers and calibre codes verified, and a chip / corner-damage sample count is documented before the container is sealed. Second, the factory commitment includes a defect tolerance written into the PI (typically ≤ 0.5%) with a credit clause if exceeded. Goods that fail inspection stay in China.',
      },
    ],
    image: '/images/foshan-porcelain-tile-kiln-production.webp',
    imageAlt: 'Foshan porcelain tile production line with KEDA roller kiln and KUKA palletising robot — factory-direct 600x600 floor tile for Ireland',
    imageWidth: 1400,
    imageHeight: 934,
  },

  {
    slug: 'pir-sandwich-panels-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'PIR Insulated Sandwich Panels from China to Ireland | Ériu Sourcing',
    description: 'Factory-direct PIR insulated sandwich panels for wall and roof — fire-rated, EN 14509 compliant. Cold-storage and industrial-grade. 30–45% below Irish trade.',
    h1: 'PIR insulated sandwich panels — wall and roof, factory-direct from China to Ireland',
    intro: 'PIR (polyisocyanurate) insulated sandwich panels are the standard envelope for cold-storage facilities, industrial sheds, agricultural buildings, and increasingly for modular and container construction. Ériu Sourcing sources EN 14509-compliant PIR panels direct from Chinese panel manufacturers for Irish industrial contractors and modular builders.',
    region: 'Jiangsu and Hebei Provinces',
    regionContext: 'China\'s sandwich panel industry is concentrated in Jiangsu (around Wuxi) and Hebei (around Cangzhou), close to the largest steel coil mills. The combination of coil supply and continuous-line PIR foaming plants delivers panel pricing that European panel brands cannot match — even after sea freight to Dublin.',
    keyBuyers: [
      'Irish industrial and warehouse contractors',
      'Cold-storage and food-processing facility builders',
      'Agricultural building installers',
      'Modular and container home manufacturers',
      'Self-build and rural commercial projects',
    ],
    specifications: [
      { label: 'Core', value: 'PIR (polyisocyanurate), density 38–42 kg/m³' },
      { label: 'Panel thickness', value: '50, 75, 100, 120, 150, 200 mm' },
      { label: 'Facings', value: '0.4–0.6 mm pre-painted galvanised steel (PPGI), RAL colour' },
      { label: 'Panel width', value: '1000 mm (standard module), 1150 mm available' },
      { label: 'Panel length', value: 'Cut-to-length up to 12 m (containerisable)' },
      { label: 'Thermal performance', value: 'λ ≈ 0.022 W/mK; U-value 0.21 W/m²K @ 100 mm; 0.11 W/m²K @ 200 mm' },
      { label: 'Fire rating', value: 'Reaction-to-fire B-s2,d0 (PIR); fire resistance EI 30 / EI 60 available' },
    ],
    compliance: [
      'EN 14509 — Self-supporting double-skin metal-faced insulating panels (product standard)',
      'EN 13501-1 — Reaction-to-fire classification (B-s2,d0 for PIR)',
      'EN 1364-1 / EN 1365-2 — Fire resistance testing (where EI rating required)',
      'CE marking + Declaration of Performance per CPR (EU) 305/2011',
      'FM Approvals — available on specific panel lines for insurance-rated cold storage',
    ],
    pricingContext: 'PIR wall and roof panels from Chinese factories typically land in Ireland 30–45% below quotes from Kingspan, Isopan, or Paroc trade dealers for equivalent thickness and fire rating — after EU import duty, sea freight, and customs. The saving widens on larger orders and on thicker panels (150 mm+) where Irish trade pricing carries a steep uplift.',
    leadTime: '4–6 weeks production + 4–5 weeks sea freight (Shanghai/Ningbo → Dublin)',
    logistics: 'Panels ship in custom wooden crates, length-restricted to 12 m for 40ft HQ container loading. A 40ft HQ container holds approximately 350–450 m² of 100 mm panel. Heavier orders (multiple containers, longer panels) ship break-bulk or in 40ft open-top with tarpaulin. Ériu Sourcing coordinates Dublin Port clearance and onward HIAB delivery to site.',
    faq: [
      {
        q: 'Are PIR sandwich panels from China CE-compliant for use in Ireland?',
        a: 'Yes — when sourced from a factory producing to EN 14509. The Declaration of Performance must reference the harmonised standard, declare the reaction-to-fire class (B-s2,d0 for PIR), thermal conductivity, panel geometry, and where required, fire resistance (EI 30/60). Ériu Sourcing audits the factory\'s test reports and DoP before quoting — Chinese-issued certificates without EN 14509 traceability are rejected.',
      },
      {
        q: 'What thickness do I need for cold storage versus general industrial use?',
        a: 'Typical cold-storage envelopes use 100–150 mm PIR for chill (0–5°C) and 150–200 mm for freezer (-18 to -25°C). General industrial wall use is commonly 75–100 mm; roof use 100–120 mm. For Irish Building Regs Part L compliance in commercial buildings, 120 mm or thicker is typically required on warm-roof and wall applications.',
      },
      {
        q: 'Can I order panels cut to specific lengths for a modular building?',
        a: 'Yes. Chinese factories cut to length on the continuous line — typical maximum is 12 m to fit a 40ft HQ container. Length tolerance is ±5 mm. For modular and container-home applications, panels can be supplied with pre-cut window and door openings if working drawings are provided, though most builders prefer to cut openings on site.',
      },
      {
        q: 'What is the difference between PIR, PUR, and EPS panels?',
        a: 'PIR (polyisocyanurate) is the standard fire-performing rigid insulation for sandwich panels — λ ≈ 0.022 W/mK, reaction-to-fire B-s2,d0. PUR (polyurethane) has similar thermal performance but lower fire performance (typically D-s3,d0). EPS (expanded polystyrene) is cheaper but worse on both thermal (λ ≈ 0.036) and fire (E-class). For Irish commercial and cold-storage applications, PIR is the default specification.',
      },
      {
        q: 'How is panel quality verified before shipment?',
        a: 'Ériu Sourcing books a factory inspection covering: facing-steel gauge and coating thickness (micrometer-measured), core density (cut-and-weigh on a sample panel), bond integrity (peel test), panel geometry (length, width, squareness), and full review of the EN 14509 test pack and DoP. Inspection report and photos are issued before container sealing — defective batches stay in China.',
      },
    ],
    image: '/images/jiangsu-pir-sandwich-panel-continuous-line.webp',
    imageAlt: 'PIR sandwich panel continuous double-belt production line in Jiangsu — factory-direct insulated panels for Ireland',
    imageWidth: 1400,
    imageHeight: 934,
  },

  {
    slug: 'commercial-led-lighting-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Commercial LED Lighting from China to Ireland | Ériu Sourcing',
    description: 'Factory-direct commercial LED lighting from Guzhen, Zhongshan — pendants, downlights, panels, linear, track. EN 60598 / CE / RoHS. 45–60% below Irish trade.',
    h1: 'Commercial LED lighting — factory-direct from China to Ireland',
    intro: 'Guzhen in Zhongshan is the lighting capital of China — over 20,000 lighting factories within a 40 km² district producing roughly 60% of the world\'s lighting output. Ériu Sourcing buys commercial LED lighting direct from Guzhen for Irish hospitality fit-out contractors, retail installers, office fit-out specifiers, and trade merchants.',
    region: 'Guzhen, Zhongshan, Guangdong Province',
    regionContext: 'Guzhen\'s lighting cluster has been the global centre of mass-market and mid-tier commercial lighting manufacturing for 25 years. Factories here supply the private-label stock for most European lighting brands — direct access means buying at the same price as Aurora, Knightsbridge, or Saxby pay before their own margin.',
    keyBuyers: [
      'Hotel and hospitality fit-out contractors',
      'Restaurant, bar and café fit-out specifiers',
      'Commercial office and retail fit-out',
      'Trade lighting merchants and electrical wholesalers',
      'Architectural and feature lighting installers',
    ],
    specifications: [
      { label: 'Product range', value: 'Pendants, downlights, LED panels, linear/batten, track, wall lights, exterior bollards' },
      { label: 'LED chip', value: 'Bridgelux, Osram, Lumileds, Epistar — specify by brand at quote stage' },
      { label: 'Driver', value: 'Mean Well, Tridonic, Inventronics, or Chinese OEM (Boke, Donghua) — IP20 / IP65 available' },
      { label: 'Colour temperature', value: '2700K / 3000K / 4000K / 5000K / 6000K; CRI ≥ 80 standard, CRI ≥ 90 on request' },
      { label: 'Dimming', value: '1–10V, DALI, TRIAC, PWM available; non-dim default' },
      { label: 'IP rating', value: 'IP20 interior, IP44 bathroom, IP65 exterior — verified at factory' },
      { label: 'MOQ', value: '100–500 pcs per SKU depending on complexity; mixed-SKU container loads supported' },
    ],
    compliance: [
      'EN 60598-1 / -2 — Luminaires general and particular requirements',
      'EN 62471 — Photobiological safety of lamps and lamp systems',
      'EN 55015 / EN 61547 — EMC for lighting equipment',
      'EN 61000-3-2 — Harmonic current emissions',
      'CE marking + EU Declaration of Conformity (LVD + EMC + RoHS)',
      'ENEC mark available on request for premium fit-out specifications',
    ],
    pricingContext: 'Commercial LED lighting from Guzhen typically lands in Ireland 45–60% below quotes from Irish electrical wholesalers (CEF, Edmundson, EDS, Kellihers) for equivalent lumen output, colour, and driver specification. Mid-spec downlights that retail at €18–€28 from Irish trade routinely land at €4–€8 each. The saving is largest on architectural and feature lighting where Irish trade markups are highest.',
    leadTime: '4–6 weeks production + 4–5 weeks sea freight (Shenzhen/Yantian → Dublin)',
    logistics: 'Lighting ships in mixed-SKU palletised containers — a 20ft container typically holds 8,000–15,000 units depending on form factor. Ériu Sourcing books a 100% switch-on test at the factory before container sealing — every fixture powered up, every driver checked, every LED string verified. DOA (dead on arrival) rate is documented in the inspection report.',
    faq: [
      {
        q: 'Are Chinese LED fittings CE-compliant for the Irish commercial market?',
        a: 'Yes — when sourced from a factory producing to EN 60598 with a genuine EU Declaration of Conformity covering LVD, EMC, and RoHS. The trap is accepting "CE certificates" issued by Chinese certification bodies (no legal standing in the EU). Ériu Sourcing verifies the manufacturer-signed DoP referencing the harmonised standards before quoting, and obtains the technical file on request. For premium hospitality and retail specifications, ENEC marking is also available at modest extra cost.',
      },
      {
        q: 'Can I get European-brand drivers (Mean Well, Tridonic) on Chinese fittings?',
        a: 'Yes. Most Guzhen factories offer Mean Well or Tridonic drivers as a paid upgrade over the default Chinese OEM driver (Boke, Donghua, etc.) — typically €2–€6 per fitting depending on wattage. For Irish commercial fit-out projects with a 5-year warranty requirement, European drivers are usually specified. Tell Ériu Sourcing which driver brand at quote stage and the BOM is built accordingly.',
      },
      {
        q: 'What MOQs apply for commercial lighting orders?',
        a: 'Per-SKU MOQ ranges from 100 pcs (simple downlights) to 500 pcs (custom architectural fittings). A 20ft mixed-SKU container typically combines 15–25 different fittings to make up the volume — useful for hotel and restaurant fit-outs that need a coordinated range across multiple zones. Smaller orders (1–2 SKUs, under 500 pcs total) can be quoted but the per-unit price loses some of the factory-direct advantage.',
      },
      {
        q: 'How do I match Chinese LED fittings to existing European ranges already on site?',
        a: 'Ériu Sourcing matches by sending a sample fitting (or photo + dimensional drawing) to two or three Guzhen factories. The factories return a sample within 7–10 days at the buyer\'s cost (€30–€80 typically). For hotel and retail roll-outs where matching an existing range across new sites matters, this matching process is the first step before quoting the production order.',
      },
      {
        q: 'What landed cost should I budget for a typical mid-spec commercial downlight?',
        a: 'A mid-spec 10–15W IP44 fire-rated downlight with Mean Well driver, 4000K, CRI ≥ 80, dimmable — lands in Ireland at €4–€8 per unit on container volumes (500+ pcs). Irish trade pricing for the equivalent specification is typically €18–€28. Full duty (0% on most LED luminaires under HS 9405.40.39) and 23% Irish VAT are included in the landed figure Ériu Sourcing quotes.',
      },
    ],
    image: '/images/guzhen-zhongshan-commercial-led-lighting-hall.webp',
    imageAlt: 'Commercial LED lighting hall in Guzhen, Zhongshan — factory-direct architectural LED pendants and downlights for Ireland',
    imageWidth: 1400,
    imageHeight: 933,
  },

  {
    slug: 'sanitaryware-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Sanitaryware from China to Ireland — WCs, Basins, Showers | Ériu Sourcing',
    description: 'Factory-direct sanitaryware from Foshan and Chaozhou — WCs, basins, baths, shower enclosures, taps. EN 997 / EN 14688 / EN 14516. 40–55% below Irish bathroom trade.',
    h1: 'Sanitaryware — WCs, basins, baths, showers, factory-direct from China to Ireland',
    intro: 'Foshan and neighbouring Chaozhou produce the majority of the world\'s vitreous china sanitaryware. The factory cluster supplies most European bathroom brands as OEM. Ériu Sourcing buys direct for Irish bathroom showrooms, hotel fit-out contractors, residential developers, and plumbing merchants — bypassing the European brand markup that typically doubles the factory-gate price.',
    region: 'Foshan and Chaozhou, Guangdong Province',
    regionContext: 'Foshan\'s sanitaryware district contains over 600 vitreous china factories, several of which are private-label OEMs for Duravit, Roca, Ideal Standard, and Geberit. Direct access means buying the same WC pan or basin — identical clay body, identical glaze, identical fittings — at the factory price.',
    keyBuyers: [
      'Bathroom showrooms and merchants',
      'Hotel and hospitality fit-out contractors',
      'Residential developers and self-build projects',
      'Plumbing trade merchants',
      'Care home, student accommodation, and modular construction fit-out',
    ],
    specifications: [
      { label: 'Product range', value: 'Floor-standing and wall-hung WCs, washbasins (counter, semi-recessed, pedestal), baths, shower trays and enclosures, urinals, taps and mixers' },
      { label: 'Material', value: 'Vitreous china (WCs, basins, urinals); acrylic + steel mesh (baths); SMC / tempered glass (shower enclosures); brass (taps)' },
      { label: 'Flush technology', value: 'Dual-flush 3/6L or 4/6L; rimless designs available; soft-close seats standard' },
      { label: 'Finish', value: 'White (standard), matt black, matt grey, custom colour glazes on request' },
      { label: 'Tap finish', value: 'Chrome, brushed nickel, matt black, brushed gold, gunmetal' },
      { label: 'MOQ', value: '~200 pcs per SKU on vitreous china; mixed-SKU container loads supported' },
    ],
    compliance: [
      'EN 997 — WC pans and WC suites with integral trap',
      'EN 14688 — Washbasins',
      'EN 14516 — Baths for domestic purposes',
      'EN 14428 — Shower enclosures',
      'EN 14527 — Shower trays',
      'EN 200 / EN 817 / EN 1112 — Sanitary tapware',
      'CE marking + Declaration of Performance per CPR (EU) 305/2011 where applicable',
      'WRAS / KIWA equivalent on tapware available for water-byelaw projects',
    ],
    pricingContext: 'Sanitaryware bought factory-direct from Foshan typically lands in Ireland 40–55% below Irish bathroom trade pricing for equivalent specification. A mid-spec rimless dual-flush WC suite that retails at €280–€420 through Irish merchants routinely lands at €85–€130. The saving compounds across a hotel or apartment-block project — a 60-unit residential build saves €15,000–€25,000 on sanitaryware alone.',
    leadTime: '5–7 weeks production + 4–5 weeks sea freight (Shenzhen/Yantian → Dublin)',
    logistics: 'Vitreous china ships palletised in heat-treated wooden crates with corrugated dividers — breakage rate under 0.5% on Ériu Sourcing inspected shipments. A 40ft HQ container holds approximately 250–350 WC suites or 600–800 basins depending on configuration. Mixed-SKU containers combining WCs, basins, baths, taps, and shower enclosures are the common pattern for hotel and apartment fit-out orders.',
    faq: [
      {
        q: 'Is Chinese sanitaryware quality comparable to European brands like Roca or Ideal Standard?',
        a: 'Yes, when sourced from the OEM factories that already produce for those brands. The same Foshan factory that makes Roca\'s mid-range WC also makes own-label versions for export — same clay body, same glaze, same flushing geometry, same Geberit or Wirquin cistern internals. The difference is the badge on the box and 80–120% margin. Ériu Sourcing identifies the OEM factory behind a target European specification and sources the equivalent product directly.',
      },
      {
        q: 'Are the WC cisterns compatible with European plumbing standards?',
        a: 'Yes. Standard Chinese export WC cisterns ship with 1/2" BSP inlet, 110 mm pan outlet (compatible with Irish soil pipe), and dual-flush 3/6L mechanism. Wall-hung WC frames ship with European fixing centres. Concealed cisterns commonly use Geberit, Wirquin, or Chinese OEM internals — specify the cistern brand at quote stage if the project requires Geberit Sigma compatibility for future serviceability.',
      },
      {
        q: 'What about water byelaws and WRAS approval for the Irish market?',
        a: 'Tapware sold in Ireland for mains drinking water connection should ideally carry WRAS or equivalent approval. Many Chinese factories produce WRAS-approved tap ranges for the UK and Irish markets — Ériu Sourcing only quotes factories that can provide the WRAS certificate or KIWA equivalent on request. For non-mains applications (commercial fit-out where the building has a header tank), the WRAS requirement is less strict.',
      },
      {
        q: 'Can I order a mixed container with WCs, basins, baths, and taps for a hotel project?',
        a: 'Yes — this is the standard pattern for hospitality and residential fit-out orders. A typical 40ft mixed container for a 50-room hotel might combine 60 WC suites, 60 basin+pedestal sets, 60 bath+shower combinations, 60 mixer taps, plus spares. Ériu Sourcing coordinates the cross-factory order, consolidates at the Shenzhen warehouse, and ships as a single container with a unified packing list.',
      },
      {
        q: 'How do I avoid getting cracked or chipped sanitaryware on arrival?',
        a: 'Three safeguards: (1) pre-shipment inspection — every WC, basin, and bath is unpacked from its corrugated wrapper, visually inspected for hairline cracks, glaze defects, and chips before re-packing; (2) the factory commitment includes a defect tolerance written into the PI (typically ≤ 0.5%) with credit for any exceeding; (3) heat-treated wooden crates rather than carton-only packaging — adds €0.30–€0.50 per piece but eliminates the dominant transit-damage cause.',
      },
    ],
    image: '/images/foshan-sanitaryware-vitreous-china-glazing-line.webp',
    imageAlt: 'Foshan vitreous china sanitaryware glazing line with kiln entry — factory-direct WCs, basins, and baths for Ireland',
    imageWidth: 1400,
    imageHeight: 932,
  },

  {
    slug: 'aluminium-composite-panels-cladding-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Aluminium Composite Panels (ACP) from China to Ireland — A2 Fire | Ériu Sourcing',
    description: 'Factory-direct ACP cladding from Shanghai and Jiangsu — A2 fire-rated and FR-B core, 4 mm standard, PVDF coatings. EN 13501-1 verified. 35–50% below Irish trade.',
    h1: 'Aluminium composite panels (ACP) — A2 fire-rated cladding, factory-direct from China to Ireland',
    intro: 'Aluminium composite panels are the standard rainscreen cladding for commercial buildings, signage, and architectural feature walls. Post-Grenfell, A2 fire-rated cores (non-combustible mineral filler) are now required on most buildings above 18m in Ireland and the UK. Ériu Sourcing buys ACP direct from Shanghai and Jiangsu factories for Irish cladding contractors, façade installers, signage companies, and architects.',
    region: 'Shanghai and Jiangsu Province (Changshu cluster)',
    regionContext: 'The Shanghai–Jiangsu ACP cluster contains the largest A2-rated panel production lines in the world, supplying the European, Middle Eastern, and Australian markets. Several factories produce private-label panels for Alpolic, Reynobond, and Etalbond — direct access means buying the same A2-cored, PVDF-coated panel at the factory price.',
    keyBuyers: [
      'Commercial façade and cladding contractors',
      'Signage and shop-front fabricators',
      'Architects and specifiers (private-label for projects)',
      'Modular building and container construction',
      'Internal feature wall and ceiling installers',
    ],
    specifications: [
      { label: 'Standard thickness', value: '3 mm, 4 mm (most common), 6 mm; custom up to 8 mm' },
      { label: 'Aluminium skin', value: '0.3 mm / 0.4 mm / 0.5 mm (specify for project — 0.5 mm standard for façade)' },
      { label: 'Core type', value: 'A2 non-combustible mineral core (Euroclass A2-s1,d0); FR-B fire-retardant; standard PE (interior signage only)' },
      { label: 'Panel size', value: '1220 × 2440 mm (standard), 1500 × 4000 mm available, custom cut-to-length' },
      { label: 'Surface coating', value: 'PVDF (Kynar 500, 25-year warranty), polyester, mirror, brushed, wood-grain, stone-effect' },
      { label: 'Colour', value: 'Full RAL range; bespoke colour matching with sample fee' },
      { label: 'MOQ', value: '~1,500 m² per panel spec (one 40ft container)' },
    ],
    compliance: [
      'EN 13501-1 — Reaction-to-fire classification (A2-s1,d0 for non-combustible)',
      'EN 14782 — Self-supporting metal sheet for roofing, cladding and lining',
      'EN ISO 1716 — Calorific value testing (for A2 declaration)',
      'CE marking + Declaration of Performance per CPR (EU) 305/2011',
      'BBA / FM Approvals available on specific panel lines for façade insurance compliance',
      'PVDF coating warranty (25 years on colour stability) from coating supplier (PPG, Valspar)',
    ],
    pricingContext: 'A2 fire-rated ACP from Shanghai and Jiangsu typically lands in Ireland 35–50% below quotes from Alpolic, Reynobond, or Etalbond trade dealers for equivalent specification — after EU import duty, sea freight, and customs. The saving is largest on large-volume façade orders (1,000+ m²) where Irish trade pricing includes substantial project-cost margin.',
    leadTime: '4–6 weeks production + 4–5 weeks sea freight (Shanghai/Ningbo → Dublin)',
    logistics: 'Panels ship horizontally in wooden crates with protective film and corner protectors. A 40ft HQ container holds approximately 1,800–2,200 m² of 4 mm panel depending on size. Heavy orders ship as multiple containers or break-bulk. Ériu Sourcing arranges Dublin Port clearance and onward kerbside delivery to the project site.',
    faq: [
      {
        q: 'What fire rating do I need for ACP cladding on an Irish building?',
        a: 'Per Irish Building Regulations Technical Guidance Document B (and post-Grenfell EU-wide tightening), buildings above 18 m typically require A2-s1,d0 or better external cladding. Below 18 m, B-s3,d0 or better may be acceptable depending on use class. A2 mineral-core ACP is the safe specification for any commercial façade project. PE-cored panels (standard polyethylene) are appropriate for internal signage only — never for external cladding on habitable buildings.',
      },
      {
        q: 'Is the A2 fire rating on Chinese ACP credible?',
        a: 'When verified at the factory, yes. The A2 rating requires laboratory testing under EN 13501-1 — Ériu Sourcing only quotes factories with current EN 13501-1 test reports issued by an EU-recognised notified body (commonly Warringtonfire, Exova, or DGNB). Chinese-issued certificates without EU notified-body backing are rejected at the quote stage. The genuine A2 panels carry the test report number on the DoP.',
      },
      {
        q: 'How do PVDF and polyester coatings differ for façade use?',
        a: 'PVDF (commonly Kynar 500 or Hylar 5000) is the architectural-grade coating — 25-year colour stability warranty, resistant to UV, pollution, and chemical attack. Polyester coatings are cheaper but degrade visibly in 8–12 years on south-facing façades. For external commercial work in the Irish climate, PVDF is the standard specification. Polyester is appropriate for sheltered internal applications and short-life signage.',
      },
      {
        q: 'Can I get bespoke colours and finishes matched to a project?',
        a: 'Yes. Factories produce in the full RAL range as standard. Bespoke colour matching requires submitting a sample chip (or a recognised colour reference) and pays a one-off matching fee of €200–€500. Special finishes — brushed, mirror, anodised-look, stone-effect, wood-grain — add 10–25% to the panel price but are routinely available within the same lead time.',
      },
      {
        q: 'What container quantity is realistic for a typical Irish commercial project?',
        a: 'A medium commercial façade project (1,500–2,500 m²) typically fills one 40ft HQ container. Larger projects ship as 2–3 containers staged over the install programme. For small projects (under 1,000 m²), Ériu Sourcing can consolidate the order with other Irish or European buyers to share container weight — this loses some scheduling flexibility but preserves the factory-direct pricing.',
      },
    ],
    image: '/images/jiangsu-acp-cladding-panel-coil-coating-line.webp',
    imageAlt: 'Aluminium composite panel coil-coating line in Jiangsu — A2 fire-rated cladding panels for Ireland',
    imageWidth: 1400,
    imageHeight: 933,
  },

  {
    slug: 'construction-fasteners-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Construction Fasteners from China to Ireland — Bolts, Anchors, Screws | Ériu Sourcing',
    description: 'Factory-direct construction fasteners from Yongnian, Hebei — high-tensile bolts, screws, anchors, structural fixings. EN 14399 / EN 15048 / CE. 50–65% below Irish trade.',
    h1: 'Construction fasteners and fixings — factory-direct from China to Ireland',
    intro: 'Yongnian in Hebei is the largest fastener cluster in the world — producing roughly half of all bolts, screws, and structural fixings made globally. Ériu Sourcing buys construction fasteners direct from Yongnian for Irish trade merchants, structural steel fabricators, infrastructure contractors, and modular builders. The category carries some of the highest Irish trade markups in construction — the landed-cost gap is dramatic.',
    region: 'Yongnian, Handan, Hebei Province',
    regionContext: 'Yongnian\'s fastener district contains over 6,000 manufacturers organised around the largest cold-forming and hot-forging clusters in the world. The infrastructure here supports CE-certified structural-grade production at scale — direct access means buying the same EN-graded bolt that European distributors source from these factories, before the 200–400% trade markup.',
    keyBuyers: [
      'Builders\' merchants and trade wholesalers',
      'Structural steel fabricators',
      'Civil engineering and infrastructure contractors',
      'Modular and container building manufacturers',
      'Specialist anchor and façade-fixing installers',
    ],
    specifications: [
      { label: 'Product range', value: 'Hex bolts, structural bolts, set screws, machine screws, self-tappers, anchors (mechanical and chemical), washers, nuts, threaded rod' },
      { label: 'Grades', value: 'Property class 4.6 / 8.8 / 10.9 / 12.9; A2-70 / A4-70 stainless; HRC for structural HSFG' },
      { label: 'Finish', value: 'Hot-dip galvanised (HDG), zinc plated (clear, yellow, black), Geomet/Dacromet, mechanical galvanised, A2/A4 stainless, plain' },
      { label: 'Thread', value: 'Metric coarse and fine; UNC/UNF imperial on request' },
      { label: 'Sizes', value: 'M3 to M64; lengths from 8 mm to 500 mm' },
      { label: 'MOQ', value: '~50,000 pcs per SKU on common sizes; mixed-SKU container loads supported' },
    ],
    compliance: [
      'ISO 898-1 — Mechanical properties of fasteners (carbon and alloy steel)',
      'ISO 3506 — Mechanical properties of corrosion-resistant stainless steel fasteners',
      'EN 14399 — High-strength structural bolting (preloaded — HSFG/HV)',
      'EN 15048 — Non-preloaded structural bolting',
      'EN 14592 — Timber structures, dowel-type fasteners',
      'CE marking + Declaration of Performance per CPR (EU) 305/2011 for structural grades',
      'Mill test certificates (3.1 per EN 10204) provided per batch',
    ],
    pricingContext: 'Construction fasteners are one of the highest-markup categories in Irish trade — Irish merchant pricing typically runs 3–5x the factory-direct landed cost. A 100-pack of M12 × 80 mm hot-dip galvanised structural bolts that sells at an Irish merchant for €38–€52 lands from Yongnian at €9–€14 per 100 on container volumes. The saving widens on stainless A4 and large-diameter / long-length fasteners where Irish stock is limited.',
    leadTime: '3–5 weeks production + 4–5 weeks sea freight (Tianjin/Qingdao → Dublin)',
    logistics: 'Fasteners ship in cardboard cartons (typically 25 kg or 50 kg) on heat-treated pallets. A 20ft container holds approximately 22–25 tonnes of mixed fastener depending on size — very dense load. Mixed-SKU containers combining 30–80 different sizes are the common pattern for trade merchants stocking a broad range. Ériu Sourcing arranges full mill test certs (3.1) per batch, attached to the packing list.',
    faq: [
      {
        q: 'Are Chinese structural fasteners CE-compliant for Irish construction projects?',
        a: 'Yes — when sourced from a factory producing to EN 14399 (preloaded) or EN 15048 (non-preloaded) with a current Declaration of Performance and a notified-body certificate. Ériu Sourcing only quotes Yongnian factories holding the required CE-CPR certification with traceability to the EN harmonised standard. For non-structural applications (cladding fixings, general construction), ISO 898-1 compliance with mill test certs is the standard requirement.',
      },
      {
        q: 'Can I get mill test certificates (3.1) for each batch?',
        a: 'Yes — this is standard. Ériu Sourcing requires every fastener batch to ship with a mill test certificate per EN 10204 type 3.1 covering chemical composition, mechanical properties (tensile, yield, elongation), and dimensional verification. Certificates are issued per heat number and tied to the production batch — essential for structural project documentation and for trade merchants whose customers may demand traceability.',
      },
      {
        q: 'How much can Irish trade merchants save sourcing fasteners direct?',
        a: 'Trade fastener pricing in Ireland typically runs 3–5x the factory-direct landed cost. A 20ft container of mixed common fasteners costs roughly €25,000–€40,000 landed in Ireland and would carry an Irish-merchant retail value of €100,000–€180,000 at typical trade prices. For a merchant stocking a broad fastener range, one factory-direct container replaces 6–12 months of European wholesaler purchasing.',
      },
      {
        q: 'What about stainless steel fasteners — A2 vs A4 grade?',
        a: 'Both grades are produced at Yongnian. A2 (304 stainless) is appropriate for general construction and internal use. A4 (316 stainless) is required for coastal Ireland (anywhere within 5 km of the Atlantic or Irish Sea coast) and for marine, swimming pool, and chemical environments. A4-70 mechanical grade is the standard structural specification — Ériu Sourcing verifies the grade by mill test cert and, on request, by on-site spot test using molybdenum-detection drops.',
      },
      {
        q: 'Can I order a mixed container with hundreds of different fastener sizes?',
        a: 'Yes — this is the standard pattern for merchant stock orders. A 20ft mixed-SKU container typically combines 40–120 different fastener sizes across bolts, nuts, washers, anchors, and screws. Ériu Sourcing coordinates the multi-SKU order with one Yongnian export-trader factory (which itself sub-contracts to specialist mills inside the cluster), consolidates the goods, and ships as a single container with one packing list and one set of customs documents.',
      },
    ],
    image: '/images/yongnian-hebei-cold-forming-fastener-production-line.webp',
    imageAlt: 'Yongnian, Hebei cold-forming fastener production line — factory-direct hot-dip galvanised bolts for Ireland',
    imageWidth: 1400,
    imageHeight: 933,
  },

  // ── MACHINERY (inland-China specialist vertical) ──────────────────────────

  {
    slug: 'concrete-machinery-changsha-china-ireland',
    categorySlug: 'machinery',
    categoryFullSlug: 'machinery-from-china-ireland',
    categoryLabel: 'Machinery',
    title: 'Concrete Machinery from Changsha, China to Ireland | Ériu Sourcing',
    description: 'Source Sany and Zoomlion concrete pumps, mixer trucks, and batching plants direct from Changsha — the world\'s concrete-machinery capital. CE-verified, delivered to Ireland and the UK at 25–40% below dealer.',
    h1: 'Concrete machinery — Changsha factory-direct to Ireland & the UK',
    intro: 'Changsha, the capital of Hunan Province in central-southern inland China, is the global capital of concrete machinery. Sany and Zoomlion — the world\'s two largest concrete-pump and mixer-truck manufacturers by volume — are both headquartered there. Ériu Sourcing accesses both, plus the broader inland-China concrete-plant supplier base, for Irish and UK contractors who want factory-direct pricing on units the established UK dealer network sells at premium.',
    region: 'Changsha, Hunan Province (Sany & Zoomlion HQ cluster)',
    regionContext: 'Sany and Zoomlion together hold the dominant share of the global concrete pump and truck mixer market — Sany alone is the world\'s leading concrete-pump maker by unit volume. The Changsha cluster also supplies the established UK dealer networks (Sany UK is headquartered in Coatbridge, Glasgow), so the factory product is the same; the saving comes from removing the UK dealer margin.',
    keyBuyers: [
      'Irish concrete contractors and ready-mix operators',
      'UK plant-hire businesses (concrete pump rental)',
      'Modular construction and precast concrete producers',
      'Civil engineering and infrastructure contractors',
      'Quarry operators with own-account concrete production',
    ],
    specifications: [
      { label: 'Truck-mounted concrete pumps', value: '37–62 m boom heights; multi-section X-style or Z-style boom layouts' },
      { label: 'Truck mixers', value: '6 m³, 8 m³, 10 m³, 12 m³ drum capacities on 6×4 or 8×4 chassis' },
      { label: 'Stationary pumps', value: 'Electric and diesel, 80 m³/hr typical site capacity, vertical lift up to 200 m' },
      { label: 'Batching plants', value: '25 m³/hr to 240 m³/hr modular, twin-shaft or planetary mixer options' },
      { label: 'Engine options', value: 'Cummins, Weichai, MAN, Mercedes — Euro 5 / Euro 6 compliant for Irish road registration' },
      { label: 'MOQ', value: 'Single unit; fleet pricing improves materially at 3+ units per order' },
    ],
    compliance: [
      'Machinery Directive 2006/42/EC — full CE compliance verified at factory',
      'EU Declaration of Conformity signed by manufacturer or EU-authorised representative',
      'Engine Stage V / Euro 6 emissions compliance certified for road-registered units',
      'EN ISO 4413 — Hydraulic fluid power safety requirements',
      'EN ISO 13849 — Safety-related parts of control systems',
      'EN 12001 — Machines for transporting and spraying mortar (applies to pumps)',
    ],
    pricingContext: 'Sany and Zoomlion concrete pumps bought factory-direct from Changsha typically land in Ireland or the UK at 25–40% below comparable Sany UK or Zoomlion European-dealer pricing for the same unit specification. A 56 m truck-mounted concrete pump that the UK dealer prices at £540–680k typically ships factory-direct at £380–460k FOB Shanghai, with sea freight, import duty, VAT and customs clearance adding a further £30–55k landed in Dublin or a UK port.',
    leadTime: '8–14 weeks production + 4–5 weeks sea freight (Shanghai → Dublin or UK port)',
    logistics: 'Concrete pump trucks and truck mixers ship as ro-ro (roll-on roll-off) self-propelled cargo, typically loaded at Shanghai or Ningbo for direct UK or Irish port delivery. Boom sections fold for shipping; the unit is operational within hours of port discharge after a CE compliance verification check.',
    faq: [
      {
        q: 'Is Sany concrete machinery available CE-compliant for Irish import?',
        a: 'Yes. Sany manufactures to the Machinery Directive 2006/42/EC standard for European market supply. Ériu Sourcing verifies the EU Declaration of Conformity, the EC type-examination certificate where applicable, the engine emissions compliance, and the complete technical file at the Changsha factory before shipment. The same factory product is supplied to Sany UK and other European dealers.',
      },
      {
        q: 'What is the typical landed-cost saving versus buying through the UK Sany dealer network?',
        a: 'Factory-direct from Changsha typically saves 25–40% on the landed-Ireland or landed-UK cost versus comparable specification from the Sany UK or Zoomlion dealer network. The saving comes from removing the UK dealer margin and accessing factory-gate pricing — the same prices the UK dealers themselves negotiate with the manufacturer.',
      },
      {
        q: 'Which engine options are available for concrete machinery imported from Changsha?',
        a: 'Both Sany and Zoomlion offer Cummins, Weichai, MAN, and Mercedes-Benz engine options across their concrete-machinery range. For Irish or UK road registration, Euro 5 or Euro 6 (Stage V for non-road) emissions compliance is required — both manufacturers supply to this standard for European-market units. Engine choice influences price by approximately 8–15% across the range.',
      },
      {
        q: 'Do you arrange after-sales spare parts for Sany or Zoomlion concrete machinery in Ireland?',
        a: 'Yes. Original spare parts are sourced direct from the Changsha factory through Ériu and ship via air freight (5–7 days for urgent) or consolidated sea freight (4–5 weeks). For larger fleet operators we maintain a recommended parts-list at the time of original order. Field service can be sourced via Sany UK or, for non-warranty work, via independent UK heavy-equipment service providers.',
      },
      {
        q: 'Is there a minimum number of units I need to order to get factory-direct pricing?',
        a: 'No minimum unit count. Ériu Sourcing arranges factory-direct supply on single-unit orders. Fleet pricing tiers typically apply at 3+ units and improve again at 5+ units per shipment — the saving compounds through bulk-shipment freight efficiency in addition to the volume-tier factory pricing.',
      },
    ],
    image: '/images/changsha-concrete-pump-truck-assembly-line.webp',
    imageAlt: 'Sany concrete pump truck final assembly at the Changsha factory — Hunan, central-southern inland China',
    imageWidth: 1920,
    imageHeight: 1280,
  },

  {
    slug: 'crushing-mining-equipment-zhengzhou-china-ireland',
    categorySlug: 'machinery',
    categoryFullSlug: 'machinery-from-china-ireland',
    categoryLabel: 'Machinery',
    title: 'Crushing & Mining Equipment from Zhengzhou, China to Ireland | Ériu',
    description: 'Source jaw crushers, cone crushers, impact crushers and mobile crushing plants direct from Zhengzhou — China\'s mining-equipment capital. Factory-vetted by Ériu on the ground. Delivered to Irish and UK quarries 30–45% below.',
    h1: 'Crushing & mining equipment — Zhengzhou factory-direct to Ireland & the UK',
    intro: 'Zhengzhou, the capital of Henan Province in central inland China, is the historical centre of the Chinese mining-equipment industry. Henan Fote (FTM), Baichy, Songshan, and Fangda — four of the largest crusher manufacturers in China — are all Zhengzhou-based. Chinese makers collectively hold over 40% of global crusher production. Ériu Sourcing operates permanently from Zhengzhou with direct factory access for Irish and UK quarry operators, aggregate producers, and recycling contractors.',
    region: 'Zhengzhou, Henan Province (Chinese crusher capital)',
    regionContext: 'Henan\'s historical iron-ore and limestone extraction industries drove the development of the local mining-equipment cluster from the 1960s onward. Zhengzhou now hosts dozens of mid-to-large crusher manufacturers covering primary jaw, secondary cone, tertiary impact, and mobile crawler-mounted crushing plants. The cluster supplies major export markets including Russia, Central Asia, Africa, and increasingly the EU.',
    keyBuyers: [
      'Irish quarry operators (limestone, granite, sandstone)',
      'UK aggregate producers and ready-mix concrete suppliers',
      'Construction and demolition recycling contractors',
      'Civil engineering contractors (on-site crushing)',
      'Cement and lime production plants',
    ],
    specifications: [
      { label: 'Primary jaw crushers', value: 'PE 250×400 to PE 1200×1500 — capacity 5 t/hr to 800 t/hr' },
      { label: 'Secondary cone crushers', value: 'CS, HP, HPT series — typical capacity 50 to 1,200 t/hr' },
      { label: 'Tertiary impact crushers', value: 'PF series horizontal-shaft and VSI vertical-shaft sand-making' },
      { label: 'Mobile crushing plants', value: 'Crawler-mounted single-stage or multi-stage; track-mounted screen integration' },
      { label: 'Liner materials', value: 'High-manganese steel (Mn13 / Mn18 / Mn22) for crusher chambers — wear life 6 to 18 months depending on rock' },
      { label: 'MOQ', value: 'Single unit; container-load of spare wear parts standard on order' },
    ],
    compliance: [
      'Machinery Directive 2006/42/EC — CE marking for European market supply',
      'EU Declaration of Conformity from manufacturer or EU-authorised representative',
      'EN ISO 21873-2 — Building construction machinery — Mobile crushers — Safety requirements',
      'EN ISO 4413 — Hydraulic fluid power safety requirements',
      'EN 474 series — Earth-moving machinery safety',
      'Material certificates on high-manganese liner components',
    ],
    pricingContext: 'A typical secondary cone crusher (200 t/hr capacity) factory-direct from a Zhengzhou supplier lands in Ireland at approximately €120k to €165k installed cost, against UK-dealer comparable spec of €210k to €280k. The saving on mobile crawler-mounted crushing plants is similar percentage but larger absolute value: typical 30–45% landed-cost saving on units the established UK quarry-equipment dealer network sells at premium.',
    leadTime: '6–10 weeks production + 4–5 weeks sea freight; mobile plants typically 10–14 weeks production',
    logistics: 'Static crushers ship in 40HQ containers; larger units (>200 t/hr capacity) ship as flat-rack or break-bulk cargo. Mobile crawler-mounted crushing plants ship as ro-ro self-propelled or on flat-rack. Liner wear parts ship as consolidated container loads to keep spares cost down. Ériu coordinates Dublin or UK port reception and inland delivery.',
    faq: [
      {
        q: 'Are Chinese crushers reliable enough for Irish quarry production use?',
        a: 'The major Zhengzhou manufacturers — Henan Fote, Baichy, Songshan, Fangda — supply the same product range that ships to international major-market quarries in Russia, Central Asia, the Middle East, and Africa. The reliability profile is solid for primary and secondary crushing applications. For higher-throughput sites (>500 t/hr continuous) the established UK dealer brands (Terex Powerscreen, Sandvik, Metso) remain the conservative choice; for mid-throughput Irish quarry operations the Chinese factory-direct route delivers materially lower capital cost without sacrificing core durability.',
      },
      {
        q: 'How does Zhengzhou crusher pricing compare to Terex Powerscreen NI or Sandvik UK dealer pricing?',
        a: 'Factory-direct from Zhengzhou typically lands in Ireland or the UK at 30–45% below comparable-spec pricing from the established UK or Northern Ireland dealer brands. The saving is largest on mobile crawler-mounted crushing plants (40%+ typical) and smallest on small-capacity primary jaw crushers (~25%).',
      },
      {
        q: 'Are the manganese liners and wear parts equivalent quality to European-brand spares?',
        a: 'The Zhengzhou cluster produces Mn13, Mn18 and Mn22 high-manganese liner castings to the same metallurgical standards as European competitors. Wear life on hard Irish granite or limestone aggregate typically runs to 8–14 months on primary jaws, 6–12 months on secondary cones — broadly comparable to European-brand wear parts. Ériu sources material certificates with every liner shipment for traceability.',
      },
      {
        q: 'Can Ériu source mobile crawler-mounted crushing plants?',
        a: 'Yes. The Zhengzhou cluster produces single-stage and multi-stage mobile crushers on crawler tracks, optimised for on-site civil engineering and construction/demolition recycling work. Mobile plants are higher-margin in the UK dealer channel so the factory-direct saving is typically largest in this segment — 40%+ landed-cost saving is common against UK-dealer comparable spec.',
      },
      {
        q: 'What is the production lead time for a typical primary jaw crusher order?',
        a: 'A standard PE 600×900 or PE 750×1060 primary jaw crusher ships from Zhengzhou in 6–8 weeks from order. Sea freight to Dublin or a UK port adds 4–5 weeks. Mobile crawler-mounted crushing plants take longer — typically 10–14 weeks production. Ériu can secure stock units from larger manufacturers where available, reducing the production lead time to 2–3 weeks.',
      },
    ],
    image: '/images/zhengzhou-crushing-equipment-jaw-crusher-production-hall.webp',
    imageAlt: 'Primary jaw crusher production hall in Zhengzhou, Henan — central-China mining-equipment cluster',
    imageWidth: 1920,
    imageHeight: 1280,
  },

  {
    slug: 'agricultural-tractors-luoyang-yto-china-ireland',
    categorySlug: 'machinery',
    categoryFullSlug: 'machinery-from-china-ireland',
    categoryLabel: 'Machinery',
    title: 'Agricultural Tractors from Luoyang YTO China to Ireland | Ériu Sourcing',
    description: 'Source YTO compact and full-size agricultural tractors direct from Luoyang, Henan — YTO Group, China\'s largest tractor maker since 1955, exports to 100+ countries. Factory-direct to Irish farms and UK dealers.',
    h1: 'Agricultural tractors — Luoyang (YTO) factory-direct to Ireland & the UK',
    intro: 'Luoyang in Henan Province has been the home of Chinese tractor manufacturing since 1955, when YTO Group was founded as China\'s first national tractor maker. YTO is now China\'s largest tractor manufacturer by volume, exports to over 100 countries, and supplies the established UK distribution channel (Rabtrak, Siromer — over 4,000 Chinese flat-pack tractors sold in the UK since 1999). Ériu Sourcing accesses YTO and the wider Luoyang agricultural-machinery cluster for Irish farm machinery dealers and direct farm-account buyers.',
    region: 'Luoyang, Henan Province (YTO Group HQ, since 1955)',
    regionContext: 'Luoyang sits on the historical Yellow River agricultural belt and was selected in the 1950s as the centre of Chinese tractor development. YTO Group remains the dominant manufacturer; the wider Luoyang cluster includes balers, harvesters, and implement specialists supplying the Chinese domestic and international export markets. The cluster\'s strength is value-tier 18–120 horsepower tractors — exactly the range Irish smallholder, equestrian, and compact-farm operators most often need.',
    keyBuyers: [
      'Irish farm machinery dealers and rural co-ops',
      'Smallholder farmers and compact-farm operators',
      'Equestrian and stud farms (lower horsepower, compact)',
      'Forestry and groundcare contractors',
      'UK farm machinery importers and resellers',
    ],
    specifications: [
      { label: 'Compact tractor range', value: 'YTO LX354, LX454 — 35 to 45 horsepower, 4WD, ROPS or cab' },
      { label: 'Mid-range range', value: 'YTO X704, X804, X904, X1004 — 70 to 100 horsepower, full cab, climate control' },
      { label: 'Full-size range', value: 'YTO LX1104, LX1204, LX1304 — 110 to 130 horsepower' },
      { label: 'Transmission', value: 'Manual synchronised, mechanical shuttle, or hydrostatic depending on model' },
      { label: 'PTO options', value: '540 / 540E / 1000 rpm rear PTO; mid-PTO on selected models' },
      { label: 'MOQ', value: 'Single unit; container-load (4–8 compact tractors per 40HQ) preferred for freight efficiency' },
    ],
    compliance: [
      'Machinery Directive 2006/42/EC — CE marking for European market supply',
      'EU Stage V emissions compliance (Euro 5 for road-rated units)',
      'EN ISO 5395 series — Garden equipment safety requirements (compact ranges)',
      'EN ISO 26322 — Tractors for agriculture and forestry — Safety',
      'OECD test reports for cab roll-over protection (where applicable)',
      'CE marking and EU Declaration of Conformity at the Luoyang factory',
    ],
    pricingContext: 'YTO compact tractors (35–45 hp) typically land in Ireland or the UK at €13,000 to €18,000 FOB factory, against UK-dealer comparable European-brand pricing of €28,000 to €42,000 for equivalent specification. Mid-range 70–90 hp YTO tractors land at €22,000 to €30,000 FOB, compared with €55,000 to £75,000 for equivalent European-brand units through UK dealers. The saving compounds for fleet or implement-bundle orders.',
    leadTime: '6–10 weeks production + 4–5 weeks sea freight (Shanghai → Dublin or UK port)',
    logistics: 'Compact tractors ship 4–8 per 40HQ container depending on width and cab configuration; mid-range and full-size ship 2–4 per 40HQ. Some YTO models ship as flat-pack for further freight efficiency — the established UK distributor (Siromer) imports tractors in flat-pack form for assembly on landing. Ériu Sourcing arranges either configuration.',
    faq: [
      {
        q: 'Are YTO tractors CE-compliant and road-legal in Ireland?',
        a: 'Yes. YTO supplies CE-compliant tractors meeting the Machinery Directive 2006/42/EC and EU Stage V emissions standards for European-market sale. Road registration in Ireland follows the standard import process — the EU Declaration of Conformity and the type-approval documentation supplied by Ériu allow registration with the Department of Transport for road use. The same documentation applies in the UK.',
      },
      {
        q: 'How long has YTO been exporting to the UK and Ireland?',
        a: 'YTO has been exporting to the UK for over 25 years through established distributors including Rabtrak and Siromer (which alone has sold over 4,000 Chinese flat-pack tractors in the UK since 1999). The product is well-known to the UK farm-machinery trade — Ériu offers factory-direct supply for Irish farm-machinery dealers and direct-account buyers who want to access the same factory pricing the established UK distributors negotiate.',
      },
      {
        q: 'What is the typical landed-cost saving versus comparable-spec European-brand tractors?',
        a: 'YTO compact tractors (35–45 hp) typically land in Ireland at 50–60% below comparable-spec John Deere, Massey Ferguson, or Kubota pricing through UK or Irish dealers. Mid-range 70–90 hp units land at 50–55% below. The saving narrows on high-horsepower (>110 hp) units where the European-brand premium is smaller in percentage terms.',
      },
      {
        q: 'Are YTO tractors available with cab, climate control, and modern operator features?',
        a: 'Yes — the YTO X and LX series in 70+ horsepower offer full enclosed cabs with climate control, air-suspended seats, hydraulic shuttle transmission, and modern electronic operator displays. Compact-range 35–45 hp tractors are offered with either ROPS (open) or basic cab depending on intended use; equestrian and forestry buyers typically specify the basic cab option.',
      },
      {
        q: 'Can Ériu source agricultural implements (balers, harvesters) from the same Luoyang cluster?',
        a: 'Yes. The Luoyang agricultural-machinery cluster includes round and square baler manufacturers, combine harvester producers, and a broad range of mounted and trailed implements. Implement quality varies more across the cluster than core tractor production — Ériu performs supplier vetting and pre-shipment inspection to ensure spec match before goods load. Implement bundles with a tractor order typically take 1–2 weeks longer than tractor-only orders.',
      },
    ],
    image: '/images/luoyang-henan-agricultural-tractor-production-line.webp',
    imageAlt: 'YTO agricultural tractor assembly line in Luoyang, Henan — China\'s historic tractor capital since 1955',
    imageWidth: 1920,
    imageHeight: 1280,
  },

  {
    slug: 'excavators-earthmoving-xuzhou-xcmg-china-ireland',
    categorySlug: 'machinery',
    categoryFullSlug: 'machinery-from-china-ireland',
    categoryLabel: 'Machinery',
    title: 'Excavators & Earthmoving from Xuzhou XCMG, China to Ireland | Ériu',
    description: 'Source XCMG crawler excavators, wheel loaders, and earthmoving equipment direct from Xuzhou, Jiangsu — China\'s largest construction-machinery group. UK dealer network exists, factory-direct lands 25–40% lower.',
    h1: 'Excavators & earthmoving — Xuzhou XCMG factory-direct to Ireland & the UK',
    intro: 'Xuzhou, in northern Jiangsu Province on the eastern edge of inland China, is the home of XCMG (Xuzhou Construction Machinery Group) — China\'s largest construction-machinery manufacturer by revenue and a top-five global player. XCMG is a known brand in the UK and Ireland — Cannon XCMG operates as the UK and Ireland dealer; Molson Group in Scotland sells XCMG excavators alongside JCB. Ériu Sourcing arranges factory-direct supply from the Xuzhou factory for fleet buyers and plant-hire operators who want the same units the UK dealer sells at a substantially lower landed cost.',
    region: 'Xuzhou, Jiangsu Province (XCMG Group HQ, China\'s #1 construction-machinery group)',
    regionContext: 'Xuzhou sits in inland-eastern China, on the high-speed rail corridor between Beijing and Shanghai — two hours east of Ériu\'s Zhengzhou base. The XCMG cluster supplies the global market through both export and the company\'s established overseas dealer networks. The wider Xuzhou heavy-equipment cluster includes wheel loaders, motor graders, road rollers, and pipe-laying machinery alongside the flagship excavator range.',
    keyBuyers: [
      'UK and Irish plant-hire businesses (excavator rental fleets)',
      'Civil engineering contractors (groundworks, drainage, site clearance)',
      'Quarry and aggregate operators (loading and handling)',
      'Forestry contractors and biomass operators',
      'Demolition and recycling contractors',
    ],
    specifications: [
      { label: 'Mini excavators', value: 'XE15U, XE27U, XE35U — 1.5 to 3.5 tonne operating weight, retractable undercarriage' },
      { label: 'Compact excavators', value: 'XE60D, XE75D — 6 to 7.5 tonne operating weight, urban/site duty' },
      { label: 'Mid-range crawler', value: 'XE135D, XE155D, XE215D — 13 to 22 tonne, general civil engineering' },
      { label: 'Large crawler', value: 'XE335C, XE470C — 30 to 50 tonne, quarry and forestry duty' },
      { label: 'Engine options', value: 'Cummins, Volvo, Yanmar — Stage V emissions compliant for European market' },
      { label: 'MOQ', value: 'Single unit; fleet orders (5+ units) qualify for tier pricing and consolidated freight' },
    ],
    compliance: [
      'Machinery Directive 2006/42/EC — CE marking for European market supply',
      'EU Stage V emissions compliance for engine and exhaust after-treatment',
      'EN 474-1 — Earth-moving machinery — Safety — General requirements',
      'EN 474-5 — Earth-moving machinery — Safety — Hydraulic excavators',
      'EN ISO 4413 — Hydraulic fluid power safety',
      'ROPS and FOPS certification per ISO 3471 and ISO 3449',
    ],
    pricingContext: 'A 20-tonne XCMG crawler excavator factory-direct from Xuzhou lands in Ireland or the UK at approximately €78,000 to €92,000 (including sea freight, duty, VAT and customs), against Cannon XCMG UK dealer pricing of typically €115,000 to €135,000 for the same specification. Mini and compact excavators show similar percentage savings on smaller absolute values. The saving comes from removing the UK dealer margin while accessing the same factory product the UK dealer sells.',
    leadTime: '8–12 weeks production + 4–5 weeks sea freight (Shanghai → Dublin or UK port)',
    logistics: 'Mid-range crawler excavators (13–22 tonne) ship one per 40HQ container; large crawler units ship as break-bulk or flat-rack cargo. Mini and compact excavators (1.5–7.5 tonne) ship 2–4 per 40HQ depending on configuration. Ro-ro shipping is available for self-propelled wheel loaders and motor graders. Ériu coordinates Dublin Port or UK port reception and inland delivery to the rental yard or site.',
    faq: [
      {
        q: 'Is XCMG equipment available CE-compliant and Stage V emissions compliant for Irish use?',
        a: 'Yes. XCMG manufactures CE-compliant excavators meeting the Machinery Directive 2006/42/EC and EU Stage V emissions standards for European-market sale. The same units that ship through the Cannon XCMG UK dealer network ship factory-direct through Ériu, with the same compliance documentation pack — EU Declaration of Conformity, technical file, ROPS and FOPS certification, and engine emissions compliance.',
      },
      {
        q: 'What is the saving versus Cannon XCMG UK dealer pricing?',
        a: 'Typical landed-cost saving is 25–40% versus Cannon XCMG UK dealer pricing for the same specification. A 20-tonne crawler excavator that the UK dealer prices at €115k–€135k lands factory-direct at €78k–€92k including all freight, duty, VAT and customs. The saving narrows on smaller mini excavators (around 25%) and widens on larger 30+ tonne machines (around 40%).',
      },
      {
        q: 'How does XCMG quality compare to CAT, Komatsu, or Volvo for fleet rental use?',
        a: 'XCMG sits at the value-tier of the global heavy-equipment market — comparable to Doosan, Hyundai, or Hitachi in build quality and reliability for general construction and quarry duty. The Cannon XCMG UK dealer network has been operating for several years, so warranty support and field service infrastructure exists. For demanding 24/7 quarry or forestry duty CAT and Komatsu remain the conservative premium choice; for typical 8-hour civil construction and plant-hire fleet duty XCMG delivers comparable productivity at materially lower capital cost.',
      },
      {
        q: 'Can Ériu source XCMG wheel loaders, motor graders, and road rollers?',
        a: 'Yes. The full XCMG construction-machinery range is available factory-direct through Ériu from the Xuzhou cluster — wheel loaders (LW300, LW500, LW900 series), motor graders (GR series), pipe-laying tractors, vibratory rollers and compactors. The same compliance and saving profile applies across the range.',
      },
      {
        q: 'Do you arrange after-sales spare parts and service for XCMG in Ireland?',
        a: 'Spare parts source direct from the Xuzhou factory through Ériu — air freight (5–7 days) for urgent or sea freight (4–5 weeks) for consolidated bulk parts orders. Warranty service in Ireland is sourced via the Cannon XCMG UK dealer network where the buyer wants brand-channel support; for routine maintenance and repair, Irish plant-hire businesses typically use their existing service workshop with XCMG-supplied parts.',
      },
    ],
    image: '/images/xuzhou-central-china-excavator-assembly-heavy-equipment.webp',
    imageAlt: 'XCMG crawler excavator production hall in Xuzhou, Jiangsu — China\'s #1 construction-machinery group',
    imageWidth: 1920,
    imageHeight: 1280,
  },

  {
    slug: 'forklifts-material-handling-hefei-heli-china-ireland',
    categorySlug: 'machinery',
    categoryFullSlug: 'machinery-from-china-ireland',
    categoryLabel: 'Machinery',
    title: 'Forklifts & Material Handling from Hefei (Anhui Heli) to Ireland | Ériu',
    description: 'Source Anhui Heli forklifts, pallet trucks and warehouse equipment direct from Hefei — China\'s #1 forklift maker for 32 years. Existing UK channel (Grant Handling, Heyn NI). Factory-direct lands 20–30% lower.',
    h1: 'Forklifts & material handling — Hefei (Heli) factory-direct to Ireland & the UK',
    intro: 'Hefei, the capital of Anhui Province in inland-eastern China, is the home of Anhui Heli — China\'s number-one forklift manufacturer for 32 consecutive years, with approximately 27% of the Chinese domestic market and a position in the global top seven by volume. Heli forklifts are imported into the UK by Grant Handling (seven regional depots) and into Northern Ireland exclusively by Heyn Forktrucks. Ériu Sourcing arranges factory-direct supply for warehouse operators, logistics businesses, and fleet buyers who want access to the same Hefei factory product at materially lower landed cost.',
    region: 'Hefei, Anhui Province (Anhui Heli HQ — China\'s #1 forklift maker for 32 years)',
    regionContext: 'Hefei sits at the geographic centre of inland-eastern China — 3.5 hours by high-speed rail from Ériu\'s Zhengzhou base. The Anhui Heli factory complex covers a large industrial site with annual production capacity exceeding 100,000 units. The wider Hefei cluster includes electric warehouse equipment producers, pallet truck specialists, and reach-truck and order-picker manufacturers supplying the Chinese domestic logistics market and 180+ export countries.',
    keyBuyers: [
      'Irish warehouse and distribution centre operators',
      'UK logistics and 3PL businesses',
      'Manufacturing businesses (in-plant material handling)',
      'Builders\' merchants and trade-yard operators',
      'Plant-hire and equipment rental businesses',
    ],
    specifications: [
      { label: 'Diesel counterbalance', value: '1.5 to 10 tonne lift capacity; mast heights from 3 m to 6 m; Cummins, Mitsubishi, Yanmar engine options' },
      { label: 'LPG counterbalance', value: '1.5 to 5 tonne; reduced-emissions option for indoor / mixed-use sites' },
      { label: 'Electric counterbalance', value: '1.5 to 5 tonne; lithium-ion or lead-acid battery options' },
      { label: 'Warehouse equipment', value: 'Reach trucks (8 m to 12 m lift), order pickers, pallet stackers, electric pallet trucks' },
      { label: 'Standard duty cycle', value: '8-hour shift with 1-hour cool-down typical; 24/7 duty cycle available with thermal-spec uprate' },
      { label: 'MOQ', value: 'Single unit; container-load (typically 2 units per 40HQ for diesel CB, 6–8 for pallet trucks) preferred for freight efficiency' },
    ],
    compliance: [
      'Machinery Directive 2006/42/EC — CE marking',
      'EN 16307 — Industrial trucks safety requirements',
      'EN ISO 3691-1 — Industrial trucks — Safety requirements — Self-propelled industrial trucks',
      'Stage V engine emissions compliance for diesel models',
      'UN 38.3 lithium-ion battery transport compliance (for Li-ion models)',
      'CE marking and EU Declaration of Conformity at the Hefei factory',
    ],
    pricingContext: 'A 3-tonne diesel counterbalance Heli forklift factory-direct from Hefei lands in Ireland or the UK at approximately €11,500 to €14,000 (including sea freight, duty, VAT and customs), against Grant Handling UK or Heyn NI dealer pricing of typically €15,500 to €18,500 for the same specification. Electric counterbalance and warehouse equipment show similar 20–30% landed-cost savings. The saving narrows on entry-level pallet trucks (where European volume drives competitive UK pricing) and widens on higher-spec reach trucks and order pickers.',
    leadTime: '5–8 weeks production + 4–5 weeks sea freight (Shanghai or Ningbo → Dublin or UK port)',
    logistics: 'Diesel and LPG counterbalance forklifts ship 2 per 40HQ container; smaller pallet trucks and electric units ship 6–8 per 40HQ. Diesel units ship with fuel tanks drained per IMO transport rules; battery units ship with the battery disconnected. Ériu coordinates Dublin Port or UK port reception, customs clearance, and inland delivery to warehouse or yard.',
    faq: [
      {
        q: 'Is Heli forklift quality comparable to Toyota, Linde, or Jungheinrich?',
        a: 'Heli sits at the value-tier of the global forklift market — comparable to Doosan or Hyundai. Build quality on standard duty-cycle counterbalance and warehouse equipment is good; the established UK importer (Grant Handling, seven regional depots since 1986) and the Heyn Forktrucks Northern Ireland exclusivity prove the brand supports UK and Irish fleet operations. For demanding multi-shift or 24/7 cold-store operations Toyota or Linde remain the conservative premium choice; for typical single-shift warehouse and trade-yard duty Heli delivers comparable productivity at 20–30% lower landed cost.',
      },
      {
        q: 'What is the saving versus Grant Handling or Heyn Forktrucks UK dealer pricing?',
        a: 'Typical landed-cost saving is 20–30% versus Grant Handling UK or Heyn NI dealer pricing for the same Heli specification. A 3-tonne diesel counterbalance that the UK dealer prices at €15,500–€18,500 lands factory-direct at €11,500–€14,000 including sea freight, duty, VAT and customs. The saving narrows on entry-level pallet trucks and widens on higher-spec reach trucks and order pickers.',
      },
      {
        q: 'Are Heli forklifts CE-compliant for Irish workplace use?',
        a: 'Yes. Heli forklifts manufactured for European-market export carry CE marking under the Machinery Directive 2006/42/EC, conform to EN 16307 and EN ISO 3691-1 industrial truck safety standards, and meet EU Stage V emissions for diesel models. The same compliance pack is delivered with factory-direct units as with dealer-supplied units. Irish workplace LOLER thorough examination and operator training are the buyer\'s responsibility post-purchase.',
      },
      {
        q: 'Can I source electric or lithium-ion forklifts factory-direct from Hefei?',
        a: 'Yes. Heli produces a full range of electric counterbalance forklifts in 1.5 to 5 tonne capacities with lithium-ion or lead-acid battery options. Lithium-ion forklifts are increasingly the preferred choice for Irish warehouse multi-shift operations because of charging flexibility (opportunity charging during breaks) and zero-emissions operation. UN 38.3 lithium-ion transport compliance documentation ships with every Li-ion unit.',
      },
      {
        q: 'Do you arrange after-sales spare parts and service for Heli equipment in Ireland?',
        a: 'Spare parts are sourced direct from the Hefei factory through Ériu — typically 5–7 days for air freight of urgent items or 4–5 weeks for consolidated sea freight. Field service in Ireland can be sourced via Grant Handling or Heyn Forktrucks for buyers who want OEM-channel warranty support; for routine maintenance Irish warehouse operators typically use their existing fleet-service contractor with Heli-supplied parts.',
      },
    ],
    image: '/images/changsha-concrete-pump-truck-assembly-line.webp',
    imageAlt: 'Material handling and forklift assembly hall — Hefei, Anhui (placeholder image while Heli-specific factory shot is sourced)',
    imageWidth: 1920,
    imageHeight: 1280,
  },
];
