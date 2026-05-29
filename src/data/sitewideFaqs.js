// sitewideFaqs.js — curated, categorised FAQ corpus for the /faq/ hub.
//
// Source policy: questions here are the highest-frequency, site-wide
// questions that are NOT already answered on a specific product or
// category page. Product-specific FAQs (the spec / region / lead-time
// questions on each product page) live in products.js; category-level
// FAQs live in sourcingPages.js; per-model modular-home FAQs live in
// modular-home-models.js. This file owns the cross-cutting set the
// /faq/ hub renders.

export const sitewideFaqs = [
  {
    id: 'about',
    label: 'About Ériu Sourcing',
    questions: [
      {
        q: 'What does a China sourcing agent actually do?',
        a: 'A China sourcing agent acts as your on-the-ground representative in China — identifying factories rather than trading companies, vetting suppliers physically, negotiating direct factory-gate pricing, conducting pre-shipment quality control, and coordinating freight. Ériu Sourcing operates from Zhengzhou (Henan, central China) and Shenzhen (Guangdong, south China) with 18 years of established factory relationships across construction, modular building, machinery, furniture and consumer goods.',
      },
      {
        q: 'How is Ériu different from Alibaba?',
        a: 'Most suppliers on Alibaba are trading companies, not factories — they add 20–40% margin while presenting themselves as manufacturers. There is no physical verification, no pre-shipment inspection, and no CE compliance check possible through Alibaba alone. Ériu provides direct factory access with physical on-site visits, factory-gate price negotiation, and independent pre-shipment QC before a container is sealed. The price difference flows through to Irish landed cost as a 35–60% saving on equivalent product.',
      },
      {
        q: 'How long has the team been in China?',
        a: 'Noel Murphy, founder, moved to Zhengzhou in 2008 and has operated continuously from there since. The wider Ériu team is 50+ people across Zhengzhou (Henan) and Shenzhen (Guangdong), built on the operational base of PFC Express — Noel\'s previous logistics business which scaled to €30M+ annual revenue and which provides the warehouse, QC, and freight infrastructure that Ériu sourcing clients access today.',
      },
      {
        q: 'Why central China? Why not just Shenzhen or Shanghai?',
        a: 'Central China — Henan, Hubei, Hunan and the surrounding provinces — is the production heartland for the categories Irish and UK buyers import in serious volume: modular homes (Zhengzhou / Xinxiang), construction materials including aluminium profiles and fasteners, machinery (Changsha concrete equipment, Zhengzhou crushing equipment, Luoyang agricultural machinery), refractory products (Xinmi), and commercial inflatables. Shenzhen and Guangdong dominate consumer electronics and premium furniture — Ériu sources from those clusters too, but central China is where the structural cost advantage and Noel\'s 18-year ground knowledge concentrate.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing, quotes & cost structure',
    questions: [
      {
        q: 'How much can I save buying direct from Chinese factories?',
        a: 'Irish businesses typically save 35–60% compared to buying through Irish wholesalers or Alibaba trading companies. These savings come from eliminating two or three layers of margin: the Chinese trading company markup (20–40%), the European importer markup, and the Irish distributor margin. The exact saving depends on product category, volume, and your current wholesale pricing — for high-margin categories like construction materials and modular homes, savings of 50%+ are typical.',
      },
      {
        q: 'What does a sourcing quote include?',
        a: 'A typical Ériu sourcing quote includes: a shortlist of two to three vetted factories with capability summaries, factory-gate FOB pricing (the price at the Chinese port before freight), sample cost and lead time, minimum order quantity per supplier, expected production lead time, recommended QC inspection scope, and an indicative landed-cost calculation for delivery to Dublin or your nearest Irish port. Quote turnaround is typically three to five working days from a complete brief.',
      },
      {
        q: 'What is the minimum order to use Ériu Sourcing?',
        a: 'Ériu works with businesses across all sizes. Minimum order quantities are set by individual factories and vary by product category — typically ranging from €3,000 to €10,000 per order for consumer goods, €15,000+ for construction materials, and €25,000+ for modular homes (one unit). Factory-specific MOQs are advised as part of the initial brief stage, before any commitment is made.',
      },
      {
        q: 'Is there a fee for the initial sourcing quote?',
        a: 'No. The initial brief-to-quote conversation is free. Ériu earns from sourcing-agent commission once a buyer commits to placing an order through us — typically structured as a percentage of order value, disclosed upfront in the quote, and substantially smaller than the import-channel margin we remove.',
      },
    ],
  },
  {
    id: 'quality',
    label: 'Quality control & CE compliance',
    questions: [
      {
        q: 'How does pre-shipment quality control work?',
        a: 'Pre-shipment QC is a physical inspection of finished goods at the factory before the shipping container is sealed. The inspection checks product specifications against your approved sample, verifies quantities, reviews packaging, and tests product function where applicable. If goods fail inspection, they stay in China at the factory\'s cost — you do not pay freight on rejected goods. This eliminates the risk of discovering quality problems at Dublin Port.',
      },
      {
        q: 'Do you handle CE marking and EU compliance for Chinese imports?',
        a: 'Yes. CE compliance is verified at source — at the factory in China — before any goods leave the country. We check certification documentation, test reports, and product specifications against EU and Irish standards. For construction materials, electronics, and apparel, full compliance documentation is provided with every order. The "CE" mark on Chinese product is not always the EU CE mark; we verify the documentation chain and reject China Export-marked goods being presented as EU CE-compliant.',
      },
      {
        q: 'What is AQL and what level should I specify for my order?',
        a: 'AQL (Acceptable Quality Limit) is the internationally used statistical standard for quality sampling. For most consumer goods imported into Ireland, AQL 2.5 for Major defects and AQL 4.0 for Minor defects is standard. Higher-value products or safety-critical components should use AQL 1.0 for Major defects. The inspection sample size scales with order quantity; Ériu advises the appropriate AQL based on your product category as part of the QC scope.',
      },
      {
        q: 'What happens if goods fail inspection?',
        a: 'If a pre-shipment inspection finds defects above the agreed AQL threshold, the order is held at the factory and not loaded. Ériu negotiates rework or replacement with the factory at no cost to you. Rework typically adds three to ten days to lead time depending on the defect scope. You only pay for goods that pass QC and load — never for failed-inspection units.',
      },
    ],
  },
  {
    id: 'shipping',
    label: 'Shipping, freight & lead times',
    questions: [
      {
        q: 'How long does sourcing from China to Ireland take end-to-end?',
        a: 'The full process — from initial brief to goods landed in Ireland — typically takes 8–14 weeks. Factory identification and pricing takes one to two weeks. Sampling and approval takes one to three weeks depending on complexity. Production takes three to six weeks. Sea freight from China to Ireland takes four to five weeks. Air freight is available for urgent orders, reducing transit to five to seven days but at substantially higher per-kg cost.',
      },
      {
        q: 'What is the difference between FOB and CIF in a quote?',
        a: 'FOB (Free On Board) is the price at the Chinese port — the goods loaded onto the ship but freight, insurance and Irish-side duty / VAT are added on top. CIF (Cost, Insurance, Freight) includes ocean freight to the destination port and basic transit insurance. For Irish buyers, FOB quotes give the cleanest view of factory-gate cost; the Irish landed cost adds shipping, marine insurance, Irish customs duty (where applicable), VAT at 23%, and inland transport from Dublin or Cork port to your premises.',
      },
      {
        q: 'Do you handle the customs clearance into Ireland?',
        a: 'We coordinate with established Irish customs brokers and freight partners. The customs declaration uses your business EORI number; Ériu provides the commercial invoice, packing list, and Bill of Lading. Irish VAT is handled by you on import or under your VAT registration. For HMRC-equivalent UK imports, the equivalent UK process applies. We do not act as your customs broker directly, but the documentation provided is in the format brokers need.',
      },
    ],
  },
  {
    id: 'modular-homes',
    label: 'Modular homes (Irish exempted-development pathway)',
    questions: [
      {
        q: 'Do I need planning permission for a modular home in my back garden in Ireland?',
        a: 'Under the Government\'s draft Exempted Development Regulations brought to Cabinet on 21 April 2026, a detached auxiliary habitable dwelling of 32–45 square metres can be built in the back garden of a principal house without full planning permission, provided it is connected to the principal house\'s services and meets the exemption conditions. Planning exemption is not the same as building-regulations exemption — every structure must still meet Irish Building Regs (TGD Parts A to M), and a BER assessment is required.',
      },
      {
        q: 'Which model fits the new exempted-development envelope?',
        a: 'The 20ft Expandable (~34 m² internal) sits inside the 32–45 m² band drafted in the April 2026 exemption. The 30ft (~52 m²) and 40ft (~70 m²) models exceed the upper bound and so require full planning permission. The 20FT700 (~25 m²) sits below the lower bound. See the dedicated 20ft Expandable spec sheet for the typical Irish exemption use case.',
      },
      {
        q: 'How long does a modular home take from order to delivered?',
        a: 'Typical end-to-end timeline for an Ériu expandable container home: two weeks factory production, four to five weeks sea freight from China to Dublin, one week port-to-site transit and on-site expansion. Total: approximately seven to eight weeks from production start. Foundation, services, and finishes are usually delivered in parallel by your Irish build team.',
      },
      {
        q: 'What is the typical landed cost for a 20ft Expandable in Ireland?',
        a: 'A 20ft Expandable from the Henan factory base, fully specified for Irish building-regs compliance (PIR-upgraded panel walls, double-glazed openings, internal partitioning to a standard 1-bed layout), is typically €18,000–€26,000 FOB factory. Sea freight from China to Dublin (two units per 40HQ container) adds approximately €1,500 per unit. Irish customs duty, 23% VAT and inland delivery add a further 35–40% to the FOB price. A complete delivered-to-site Irish landed cost is typically €32,000–€42,000 per unit, exclusive of site groundworks, services connection, and internal fit-out.',
      },
    ],
  },
];

// Build a flat list of {q, a} for the FAQPage JSON-LD schema
export function buildFaqSchema() {
  const all = [];
  for (const section of sitewideFaqs) {
    for (const item of section.questions) {
      all.push({ q: item.q, a: item.a });
    }
  }
  return all;
}
