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
    h1: 'Aluminium window profiles — factory-direct from Henan to Ireland',
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
    image: '/images/construction-materials-factory.webp',
    imageAlt: 'Aluminium window profile extrusion line in Henan — factory-direct aluminium profiles for Ireland',
  },

  {
    slug: 'porcelain-floor-tiles-600x600-china-ireland',
    categorySlug: 'construction-materials',
    categoryFullSlug: 'construction-materials-from-china-ireland',
    categoryLabel: 'Construction Materials',
    title: 'Porcelain Floor Tiles 600x600 from Foshan to Ireland | Ériu Sourcing',
    description: 'Factory-direct porcelain floor tiles (600x600, 800x800, large format) from Foshan. EN 14411 BIa rectified, full slip-resistance certs. 40–55% below Irish tile retail.',
    h1: 'Porcelain floor tiles — 600×600 and large format, factory-direct from Foshan',
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
    image: '/images/construction-materials-factory.webp',
    imageAlt: 'Foshan porcelain tile production line — factory-direct 600x600 floor tile for Ireland',
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
    image: '/images/construction-materials-factory.webp',
    imageAlt: 'PIR sandwich panel continuous production line in China — factory-direct insulated panels for Ireland',
  },
];
