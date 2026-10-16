// China sourcing glossary (/resources/glossary/). Plain definitions, no
// invented figures. Container volumes are the usual nominal capacities.
// Links point to deeper pages on this site.

const B = '/blog/';
export const glossaryGroups = [
  {
    id: 'suppliers',
    name: 'Suppliers and platforms',
    terms: [
      { t: 'Manufacturer', d: 'A company that owns the production lines and makes the product itself. Buying from the manufacturer removes the trading-company margin and gives you direct control over specification and quality.', l: '/why-direct/' },
      { t: 'Trading company', d: 'A company that sells products made by other factories, adding a margin. Many "factories" on B2B platforms are trading companies. Not always bad, but you should know which one you are dealing with.', l: `${B}how-to-vet-chinese-suppliers-factory-audit-verification-ireland/` },
      { t: 'Sourcing agent', d: 'A person or company that finds, vets and manages suppliers on the buyer\'s behalf, usually including negotiation, quality control and shipping coordination.', l: `${B}china-sourcing-agent-ireland-what-they-do/` },
      { t: 'OEM (Original Equipment Manufacturing)', d: 'The factory makes a product to your own design and specification, usually under your brand. You own the design; the factory owns the production.', l: '/source/private-label-from-china-ireland/' },
      { t: 'ODM (Original Design Manufacturing)', d: 'The factory sells its own existing design, which you brand and sell as yours. Faster and cheaper to start than OEM, but other brands may sell the same product.', l: '/source/private-label-from-china-ireland/' },
      { t: 'Private label', d: 'Selling a product made by a manufacturer under your own brand name, packaging and barcodes. Usually built on an ODM product with your branding.', l: '/source/private-label-from-china-ireland/' },
      { t: 'MOQ (Minimum Order Quantity)', d: 'The smallest order a factory will accept, per product, colour or size. Often negotiable, especially for a first order or a product the factory already makes.' },
      { t: 'Lead time', d: 'The time from confirmed order and deposit to goods ready for shipment. It excludes transit time, which is added on top.' },
      { t: 'Tooling (mould)', d: 'The steel moulds, dies or fixtures made specifically for your product. A one-off cost; your contract should say who owns the tooling and where it is kept.', l: '/source/injection-moulding-tooling-china-ireland/' },
      { t: 'Business licence (USCC)', d: 'Every Chinese company has a business licence carrying an 18-character Unified Social Credit Code. Checking the licence confirms the company exists, its registered scope and whether it is a manufacturer.', l: `${B}how-to-vet-chinese-suppliers-factory-audit-verification-ireland/` },
      { t: 'Alibaba', d: 'China\'s best-known B2B marketplace for international buyers. It lists both manufacturers and trading companies, so supplier verification still matters.', l: `${B}how-to-vet-chinese-suppliers-factory-audit-verification-ireland/` },
      { t: '1688', d: 'Alibaba Group\'s domestic Chinese wholesale marketplace, in Chinese and aimed at Chinese buyers. Prices are often lower than on Alibaba.com, but buying usually needs a local agent.' },
      { t: 'Canton Fair', d: 'The China Import and Export Fair in Guangzhou, held every spring and autumn in three phases, each covering different product categories.', l: `${B}canton-fair-guide-irish-buyers-2026/` },
      { t: 'Huaqiangbei', d: 'The electronics market district in Futian, Shenzhen, widely described as the largest electronics market in the world. It is the centre of the phone and phone parts trade.', l: '/phone-parts/huaqiangbei/' },
    ],
  },
  {
    id: 'quality',
    name: 'Quality control',
    terms: [
      { t: 'AQL (Acceptance Quality Limit)', d: 'A statistical sampling standard (ISO 2859-1) that sets how many units to inspect from a batch and how many defects are acceptable. AQL 2.5 for major defects is a common level for consumer goods.', l: `${B}pre-shipment-inspection-china-irish-importers-quality-control/` },
      { t: 'Pre-shipment inspection (PSI)', d: 'An inspection of finished, mostly packed goods before the balance is paid and the goods ship. The last point at which problems can be fixed cheaply.', l: `${B}pre-shipment-inspection-china-irish-importers-quality-control/` },
      { t: 'During-production inspection (DUPRO)', d: 'An inspection while goods are on the line, usually when 20 to 60% are made, so problems are caught before the whole order is finished.' },
      { t: 'Pre-production sample (PPS)', d: 'A sample made with the actual production materials and process, approved by the buyer before mass production starts.' },
      { t: 'Golden sample', d: 'The approved, signed-off sample that the production run and the inspection are measured against. Keep one at the factory and one yourself.' },
      { t: 'Factory audit', d: 'An on-site check of a factory\'s legal status, capacity, equipment, processes and quality system before you place an order.', l: `${B}how-to-vet-chinese-suppliers-factory-audit-verification-ireland/` },
      { t: 'Critical, major and minor defects', d: 'The three defect classes used in AQL inspection. Critical defects make a product unsafe, major defects make it unsellable or unusable, minor defects are cosmetic.' },
      { t: 'Corrective action plan (CAP)', d: 'The supplier\'s written plan to fix the cause of a failed inspection, with rework, re-inspection and prevention steps.' },
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance and regulation',
    terms: [
      { t: 'CE marking', d: 'The mark showing a product meets the EU legislation that applies to it. The importer must check the CE mark is backed by a Declaration of Conformity and technical documentation.', l: `${B}ce-marking-china-imports-ireland/` },
      { t: 'UKCA', d: 'The UK conformity mark for goods placed on the market in Great Britain, the British counterpart to CE marking.' },
      { t: 'Declaration of Conformity (DoC)', d: 'The manufacturer\'s signed statement that a product meets the named EU directives and standards. Ask for it before you pay, not after the goods arrive.', l: `${B}ce-marking-china-imports-ireland/` },
      { t: 'Technical file', d: 'The documentation behind a CE mark: design, test reports, risk assessment and standards applied. Authorities can ask the importer to provide it.' },
      { t: 'RoHS', d: 'EU rules restricting hazardous substances such as lead and mercury in electrical and electronic equipment.' },
      { t: 'REACH', d: 'The EU regulation on chemicals, including restricted substances in consumer products such as phthalates in plastics.' },
      { t: 'GPSR', d: 'The EU General Product Safety Regulation, applying since 13 December 2024. Consumer products sold in the EU need a responsible economic operator based in the EU.' },
      { t: 'CBAM', d: 'The EU Carbon Border Adjustment Mechanism, covering imports of goods such as steel, aluminium, cement and fertilisers.', l: `${B}cbam-irish-importers-chinese-steel-aluminium-2026/` },
      { t: 'UN38.3', d: 'The UN transport test for lithium batteries. Batteries, and products containing them, need a UN38.3 test summary to ship by air or sea.', l: '/phone-parts/shipping/' },
      { t: 'SDS (Safety Data Sheet)', d: 'A document describing a product\'s hazards and safe handling, often required by freight forwarders for chemicals and batteries.' },
    ],
  },
  {
    id: 'shipping',
    name: 'Shipping and customs',
    terms: [
      { t: 'Incoterms', d: 'The International Chamber of Commerce rules that define who pays for and carries the risk of each stage of delivery. The current version is Incoterms 2020.', l: `${B}incoterms-explained-irish-importers-fob-cif-exw-dap-china/` },
      { t: 'EXW (Ex Works)', d: 'The seller makes goods available at its own premises; the buyer handles everything from there, including Chinese export clearance.', l: `${B}incoterms-explained-irish-importers-fob-cif-exw-dap-china/` },
      { t: 'FOB (Free On Board)', d: 'The seller delivers the goods on board the ship at the named Chinese port and clears them for export. From that point, freight, insurance and risk pass to the buyer.', l: `${B}incoterms-explained-irish-importers-fob-cif-exw-dap-china/` },
      { t: 'CIF (Cost, Insurance and Freight)', d: 'The seller pays freight and minimum insurance to the destination port, but risk passes to the buyer once the goods are loaded in China.', l: `${B}incoterms-explained-irish-importers-fob-cif-exw-dap-china/` },
      { t: 'DAP (Delivered At Place)', d: 'The seller delivers to a named place in the destination country, ready for unloading. The buyer pays import duty and VAT.', l: `${B}incoterms-explained-irish-importers-fob-cif-exw-dap-china/` },
      { t: 'DDP (Delivered Duty Paid)', d: 'The seller delivers to the buyer with import duty and VAT paid. The simplest for the buyer, and the most work for the seller.' },
      { t: 'FCL (Full Container Load)', d: 'A whole container used for one shipment. Usually cheaper per unit once you fill more than about half a container.', l: `${B}shipping-china-to-ireland-freight-customs-2026/` },
      { t: 'LCL (Less than Container Load)', d: 'Your goods share a container with other shippers, priced by volume. Good for small shipments, with extra handling at each end.', l: `${B}shipping-china-to-ireland-freight-customs-2026/` },
      { t: '20GP, 40GP and 40HQ', d: 'Standard container sizes: a 20ft general purpose (about 33 m³), a 40ft general purpose (about 67 m³) and a 40ft high cube (about 76 m³), one foot taller.' },
      { t: 'Bill of lading (B/L)', d: 'The shipping line\'s receipt for the goods and, in its original form, the document of title. Whoever holds the original B/L can claim the cargo.' },
      { t: 'Telex release', d: 'The shipping line releases cargo at destination without the original bill of lading, once the shipper has surrendered it in China. Common once the balance is paid.' },
      { t: 'Freight forwarder', d: 'A company that books and coordinates transport, consolidation and paperwork for your shipment.', l: `${B}shipping-china-to-ireland-freight-customs-2026/` },
      { t: 'Customs broker', d: 'A licensed agent who prepares and submits import declarations and pays duty and VAT on the importer\'s behalf.' },
      { t: 'HS code', d: 'The Harmonised System product code used worldwide to classify goods for customs. It decides the duty rate, so get it right before you price.', l: `${B}real-landed-cost-importing-from-china-ireland/` },
      { t: 'EORI number', d: 'The EU customs identification number every business importing into the EU needs. In Ireland it is issued by Revenue.' },
      { t: 'Landed cost', d: 'The full cost of goods delivered to your door: factory price, freight, insurance, duty, VAT, clearance and delivery.', l: `${B}real-landed-cost-importing-from-china-ireland/` },
      { t: 'Demurrage and detention', d: 'Charges for keeping a container at the port (demurrage) or outside it (detention) beyond the free days. Slow customs paperwork is the usual cause.' },
      { t: 'China–Europe rail freight', d: 'Container trains from Chinese hubs such as Zhengzhou to Europe. Faster than sea and cheaper than air for some goods.', l: '/zhengzhou/' },
    ],
  },
  {
    id: 'payment',
    name: 'Payment',
    terms: [
      { t: 'T/T (Telegraphic Transfer)', d: 'A bank wire transfer, the usual way to pay Chinese suppliers. Always confirm bank details by phone or video before paying a new account.', l: `${B}how-to-pay-chinese-suppliers-safely-ireland/` },
      { t: '30/70 terms', d: 'A common payment structure: 30% deposit to start production, 70% balance after inspection and before shipment or against the bill of lading.', l: `${B}how-to-pay-chinese-suppliers-safely-ireland/` },
      { t: 'Letter of credit (L/C)', d: 'A bank guarantee that pays the supplier only when documents proving shipment are presented. Secure, but slower and more expensive to arrange.' },
      { t: 'Proforma invoice (PI)', d: 'The supplier\'s formal quotation and order confirmation, issued before payment. It should state product, specification, price, Incoterm and payment terms.' },
      { t: 'CNY / RMB', d: 'China\'s currency, the yuan (CNY), also called renminbi (RMB). Most export quotations are in US dollars.' },
    ],
  },
  {
    id: 'phones',
    name: 'Phones and phone parts',
    terms: [
      { t: 'IMEI', d: 'The unique 15-digit identity number of a mobile phone. Checking it against blacklist databases shows whether a phone has been reported lost or stolen.', l: '/phone-parts/guides/how-to-check-used-iphones-wholesale/' },
      { t: 'Activation Lock', d: 'Apple\'s anti-theft lock that ties an iPhone, iPad or Apple Watch to the owner\'s Apple Account. A locked device cannot be set up by anyone else.', l: '/phone-parts/guides/how-to-check-used-iphones-wholesale/' },
      { t: 'MDM (Mobile Device Management)', d: 'Company or school management software that controls a device. MDM-enrolled devices show a Remote Management screen after a reset.', l: '/phone-parts/tablets-wholesale/' },
      { t: 'In-cell, hard OLED, soft OLED', d: 'The main aftermarket phone screen grades: in-cell is an LCD with built-in touch, hard OLED is OLED on a rigid base, and soft OLED is OLED on a flexible base like the original.', l: '/blog/phone-screen-grades-incell-hard-oled-soft-oled-explained/' },
      { t: 'Global version', d: 'A phone built for international markets, with Google services and international network bands, as opposed to a China version.', l: '/phone-parts/guides/global-vs-china-version-phones/' },
      { t: 'Grade A, B, C (used phones)', d: 'Trade conventions describing the cosmetic condition of used phones. They are not standardised and say nothing about battery health or locks.', l: '/phone-parts/guides/used-iphone-grades-explained/' },
    ],
  },
];

export const glossaryCount = glossaryGroups.reduce((n, g) => n + g.terms.length, 0);
export const termId = (t) => t.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
