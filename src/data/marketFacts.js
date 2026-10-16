// Country import facts for the market sections. Every fact carries its source.
// Research checked 16 October 2026 (research agents, official sources where
// available). Unverified items were left out; see SESSION-HANDOFF for the list.

export const marketFacts = {

  usa: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship to the US. US duties on Chinese goods changed several times in 2026, so we quote landed cost at the rates in force on the day you order. De minimis no longer applies, so every shipment is entered and pays duty, and radio devices need FCC authorization.',
      electronics: 'We source electronics direct from Shenzhen factories for US importers. Every radio product needs FCC equipment authorization, and products from FCC Covered List companies such as Hikvision and Dahua cannot be authorized, so we do not supply them for the US. Duty is quoted at the rates in force when you order.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan for US brands. You or your customs broker act as importer of record, ocean shipments need an ISF filing and a customs bond, goods must be marked with their country of origin, and duty is quoted at the rates in force when you order.',
    },
    tax: [
      { h: 'Tariffs change often: quoted on the day', p: 'The Supreme Court struck down the IEEPA tariffs in February 2026, and a new Section 301 tariff on Chinese-origin goods took effect on 24 July 2026, with some exemptions including smartphones. Older Section 301 duties still apply to many products. We quote landed cost with the duty in force on your order date and confirm it with your broker.', src: 'https://www.federalregister.gov/documents/2026/07/28/2026-15181' },
      { h: 'De minimis no longer applies', p: 'The $800 de minimis exemption has been suspended for all countries since 29 August 2025, and CBP made the suspension indefinite in June 2026. Low-value shipments now need an entry and pay duty.', src: 'https://www.federalregister.gov/documents/2026/06/24/2026-12670' },
      { h: 'Importer of record, bond and ISF', p: 'Formal entry is required above $2,500. Ocean shipments need an Importer Security Filing (ISF 10+2), and a customs bond is required. Most importers use a licensed customs broker.', src: 'https://www.cbp.gov/border-security/ports-entry/cargo-security/importer-security-filing-102' },
      { h: 'Country of origin marking', p: 'Imported goods must be marked with their country of origin, legibly and permanently, under US customs rules.', src: 'https://www.ecfr.gov/current/title-19/chapter-I/part-134' },
    ],
    compliance: {
      phones: [
        { h: 'FCC equipment authorization', p: 'Phones and other radio devices need FCC equipment authorization before they are imported or marketed in the US.', src: 'https://docs.fcc.gov/public/attachments/DOC-415051A1.pdf' },
        { h: 'Honest condition labelling', p: 'Used and refurbished phones must be described truthfully. We grade every phone against your written definitions and list each IMEI.' },
      ],
      electronics: [
        { h: 'FCC authorization and the Covered List', p: 'Radio products need FCC authorization. Equipment from Covered List companies, including Hikvision and Dahua, cannot be newly authorized, and a 2025 FCC order allows limits on continued import and marketing. We do not supply these brands for the US.', src: 'https://docs.fcc.gov/public/attachments/DOC-415051A1.pdf' },
        { h: 'Power banks and power stations', p: 'There is no mandatory CPSC standard for power banks or portable power stations, but UL 2056 and UL 2743 are the recognised safety standards, and many retailers ask for them. We source models with the test reports your channel needs.' },
      ],
      privatelabel: [
        { h: 'Country of origin marking', p: 'Your product and packaging must show the country of origin. We build it into your artwork and labels at the factory.', src: 'https://www.ecfr.gov/current/title-19/chapter-I/part-134' },
        { h: 'Duty on your codes', p: 'Section 301 duties depend on the exact HTS code. We classify your products with your broker before you commit, so the margin is real.', src: 'https://www.federalregister.gov/documents/2026/07/28/2026-15181' },
      ],
    },
    faqs: {
      common: [
        { q: 'What tariffs apply to goods from China into the US right now?', a: 'They have changed several times in 2026. The IEEPA tariffs were struck down in February 2026, a new Section 301 tariff on Chinese-origin goods applies from 24 July 2026 with some exemptions, and older Section 301 duties still apply to many products. We quote landed cost at the rates in force on your order date.' },
        { q: 'Does the $800 de minimis rule still apply?', a: 'No. De minimis has been suspended for all countries since 29 August 2025, and the suspension was made indefinite in June 2026, so low-value shipments need an entry and pay duty.' },
      ],
      phones: [
        { q: 'Do new phones from China need FCC approval?', a: 'Yes. Phones and other radio devices need FCC equipment authorization before import or marketing in the US. We buy models that carry it.' },
      ],
      electronics: [
        { q: 'Can I import Hikvision or Dahua cameras into the US?', a: 'Equipment from FCC Covered List companies, including Hikvision and Dahua, cannot be newly authorized, so we do not supply them for the US. We source cameras from manufacturers that are not on the list.' },
      ],
      privatelabel: [],
    },
  },

  canada: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship to Canada. Smartphones, chargers and cameras are duty free under the Canadian tariff, lithium-ion batteries are 7%, GST of 5% is collected at the border, and radio devices must be ISED-certified.',
      electronics: 'We source electronics direct from Shenzhen factories for Canadian importers. Radio devices need ISED certification and a listing on the Radio Equipment List, digital devices need an ICES-003 label, and plug-in products need certification from an accredited body such as CSA, cUL or cETL. We check this before you pay.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan for Canadian brands. You need a Business Number with an import-export account and a CARM portal account, GST of 5% is collected at the border, and electrical products need accredited certification.',
    },
    tax: [
      { h: 'Duty: most electronics free', p: 'Under the Canadian Customs Tariff (MFN rate, which applies to China), smartphones, cameras, chargers and battery parts are free. Lithium-ion batteries under 8507.60.90 are 7%.', src: 'https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/html/00/ch85-eng.html' },
      { h: 'GST: 5% at the border', p: 'GST of 5% is charged on the value for duty plus duties. On commercial imports only the federal part is collected at the border; the provincial part of HST is self-assessed.', src: 'https://www.cbsa-asfc.gc.ca/import/postal-postale/dtytx-drttx-eng.html' },
      { h: 'CARM and your Business Number', p: 'Importers need a Business Number with an RM import-export account and a CARM Client Portal account. Release before payment needs the importer\'s own financial security, not the broker\'s.', src: 'https://www.cbsa-asfc.gc.ca/import/guide-4-eng.html' },
      { h: 'Low-value relief from China: CAD 20', p: 'Shipments from China get duty and tax relief only up to CAD 20. The higher CAD 40 and CAD 150 courier thresholds apply only to goods shipped from the US or Mexico.', src: 'https://www.cbsa-asfc.gc.ca/publications/dm-md/d8/d8-2-16-eng.html' },
    ],
    compliance: {
      phones: [
        { h: 'ISED certification', p: 'Radio devices, including phones, must be certified by ISED and listed on the Radio Equipment List before import or sale, labelled with their IC number.', src: 'https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/devices-and-equipment/radio-equipment-standards/radio-standards-specifications-rss/rss-gen-general-requirements-compliance-radio-apparatus' },
      ],
      electronics: [
        { h: 'ISED and ICES-003', p: 'Radio products need ISED certification and a Radio Equipment List entry. Digital devices also need the CAN ICES-003 / NMB-003 compliance label.', src: 'https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/devices-and-equipment/interference-causing-equipment-standards-ices/ices-003-information-technology-equipment-including-digital-apparatus' },
        { h: 'Electrical safety certification', p: 'Plug-in electrical products sold in Canada must be certified by an accredited body such as CSA, cUL or cETL, with the mark on the product.', src: 'https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html' },
      ],
      privatelabel: [
        { h: 'Electrical safety certification', p: 'If your own-brand product plugs in, it needs certification from an accredited body such as CSA, cUL or cETL before it is sold in Canada.', src: 'https://www.canada.ca/en/health-canada/services/home-safety/electrical-products.html' },
      ],
    },
    faqs: {
      common: [
        { q: 'Is there duty on electronics from China into Canada?', a: 'Many are duty free under the Canadian Customs Tariff, including smartphones, cameras and chargers. Lithium-ion batteries under 8507.60.90 are 7%. GST of 5% is collected at the border.' },
        { q: 'What do I need to import commercially into Canada?', a: 'A Business Number with an RM import-export account and a CARM Client Portal account. If you want release before payment, you need your own financial security.' },
      ],
      phones: [],
      electronics: [
        { q: 'Do electronics need CSA certification in Canada?', a: 'Plug-in electrical products must be certified by an accredited body such as CSA, cUL or cETL. Radio devices also need ISED certification.' },
      ],
      privatelabel: [],
    },
  },

  uk: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship door to door to the UK. Smartphones and phone parts carry 0% UK import duty, import VAT is 20% and VAT-registered businesses can postpone it to their VAT return. Imported used phones cannot use the VAT margin scheme, so VAT is due on their full value.',
      electronics: 'We source electronics direct from Shenzhen factories for UK importers. CE marking is accepted in Great Britain alongside UKCA, connectable products such as cameras, smart home devices and smartwatches must meet the PSTI security rules, and importers have WEEE and battery producer duties. We check the paperwork before you pay.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan and ship to the UK. You need a GB EORI number, import VAT is 20% and can be postponed to your VAT return, and products must carry CE or UKCA marking where it applies, which we check at the specification stage.',
    },
    tax: [
      { h: 'Import VAT: 20%, postponable', p: 'Import VAT is charged at the standard 20% on most goods. Any UK VAT-registered business can use postponed VAT accounting to declare and reclaim it on the same VAT return.', src: 'https://www.gov.uk/guidance/check-when-you-can-account-for-import-vat-on-your-vat-return' },
      { h: 'Duty: 0% on phones and parts', p: 'On the UK Global Tariff, smartphones (8517 13), smartwatches (8517 62), phone parts (8517 79) and LCD display modules (8524 11) are 0%. Lithium-ion batteries (8507 60 00 90) are 2%, a measure currently set to end on 31 December 2026.', src: 'https://www.trade-tariff.service.gov.uk/commodities/8507600090' },
      { h: 'EORI number', p: 'You need a GB EORI number to import into Great Britain, and a VAT registration to use postponed VAT accounting.', src: 'https://www.gov.uk/eori' },
      { h: 'Low-value consignments (£135)', p: 'Duty relief on consignments of £135 or less still applies but is being removed, by October 2028 at the latest. For B2B consignments under £135 the buyer accounts for VAT under the reverse charge.', src: 'https://www.gov.uk/government/consultations/reforming-the-customs-treatment-of-low-value-imports-into-the-united-kingdom/outcome/reforming-the-customs-treatment-of-low-value-imports-into-the-united-kingdom-consultation-response' },
    ],
    compliance: {
      phones: [
        { h: 'Used phones: no margin scheme on imports', p: 'A dealer cannot use the VAT margin scheme on second-hand goods they import into the UK. Used iPhones imported from China pay import VAT on their full value, so price them accordingly.', src: 'https://www.gov.uk/guidance/check-if-you-can-use-a-vat-margin-scheme-if-you-import-from-or-export-to-countries-outside-the-uk' },
        { h: 'PSTI security rules', p: 'New consumer connectable products, including smartphones, must have no universal default passwords, a published way to report security issues and a stated minimum security-update period.', src: 'https://www.gov.uk/government/publications/the-uk-product-security-and-telecommunications-infrastructure-product-security-regime' },
        { h: 'CE or UKCA', p: 'Great Britain accepts CE marking indefinitely for radio, low-voltage and EMC products, alongside UKCA.', src: 'https://www.gov.uk/guidance/placing-manufactured-goods-on-the-market-in-great-britain' },
      ],
      electronics: [
        { h: 'CE accepted alongside UKCA', p: 'Since 1 October 2024 CE marking is accepted in Great Britain indefinitely under 21 product regulations, including radio, low-voltage and EMC.', src: 'https://www.gov.uk/guidance/placing-manufactured-goods-on-the-market-in-great-britain' },
        { h: 'PSTI for connectable products', p: 'Cameras, smart home devices, smartwatches and other connectable consumer products must have no universal default passwords, a vulnerability reporting contact and a stated security-update period.', src: 'https://www.gov.uk/government/publications/the-uk-product-security-and-telecommunications-infrastructure-product-security-regime' },
        { h: 'WEEE and battery producer duties', p: 'Importers selling electrical equipment and batteries in the UK have producer obligations. Under 2025 rules, online marketplaces take on WEEE obligations for overseas sellers\' household sales from 2026.', src: 'https://www.legislation.gov.uk/uksi/2025/910/made' },
      ],
      privatelabel: [
        { h: 'Product safety', p: 'Great Britain still applies the General Product Safety Regulations 2005. New regulations under the Product Regulation and Metrology Act 2025 were under consultation in 2026 and are not yet in force.', src: 'https://www.legislation.gov.uk/ukpga/2025/20' },
        { h: 'CE or UKCA where it applies', p: 'If your product falls under a marking regime, such as electrical or radio products or toys, CE or UKCA marking applies. We check this when we agree the specification.', src: 'https://www.gov.uk/guidance/placing-manufactured-goods-on-the-market-in-great-britain' },
      ],
    },
    faqs: {
      common: [
        { q: 'Is there import duty on phones from China to the UK?', a: 'Smartphones, smartwatches, phone parts and display modules are 0% on the UK Global Tariff. Lithium-ion batteries are 2%. Import VAT of 20% applies, and VAT-registered businesses can postpone it to their VAT return.' },
        { q: 'Is CE marking still accepted in the UK?', a: 'Yes. Since 1 October 2024 Great Britain accepts CE marking indefinitely for 21 product regulations, including radio equipment, low voltage and EMC, alongside UKCA. Northern Ireland follows EU rules.' },
      ],
      phones: [
        { q: 'Can I use the VAT margin scheme on used phones imported from China?', a: 'No. The margin scheme does not apply to second-hand goods a dealer imports into the UK (apart from art, antiques and collectors\' items), so imported used phones pay import VAT on their full value.' },
      ],
      electronics: [
        { q: 'What is PSTI and does it affect my products?', a: 'The Product Security and Telecommunications Infrastructure regime, in force since 29 April 2024, applies to consumer connectable products such as smart cameras, smart home devices, smartwatches and phones. It bans universal default passwords and requires a security reporting contact and a stated update period.' },
      ],
      privatelabel: [],
    },
  },

  europe: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship door to door anywhere in the EU. Import VAT is charged at the rate of the country of import, new phones must meet CE, the USB-C rule and the smartphone ecodesign rules, and imported used phones cannot use the VAT margin scheme.',
      electronics: 'We source electronics direct from Shenzhen factories for EU importers. Products need CE marking under the relevant directives, including the Radio Equipment Directive cybersecurity rules since 1 August 2025, an EU-based responsible person under the GPSR, and WEEE and battery compliance. We check the paperwork before you pay.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan for EU brands. Every product placed on the EU market needs an EU-based responsible person under the GPSR, named on the product or packaging, plus CE marking where a directive applies.',
    },
    tax: [
      { h: 'Import VAT: the rate of your country', p: 'Import VAT is charged at the standard rate of the member state of import, which ranges from about 17% to 27%. Deferment and postponement schemes differ by country.', src: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/vat-rates_en' },
      { h: 'Low-value parcels: €3 per item', p: 'The €150 customs duty exemption ended on 1 July 2026. A temporary €3 duty per item (per tariff line) now applies to B2C distance sales up to €150, until 1 July 2028. B2B imports pay normal duty and VAT.', src: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en' },
      { h: 'EORI number', p: 'You need an EU EORI number, issued by the member state where your business is established. Non-EU businesses register in their first member state of import.', src: 'https://taxation-customs.ec.europa.eu/customs/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en' },
      { h: 'Duty: check TARIC', p: 'Duty depends on the exact code and can include anti-dumping measures on Chinese-origin goods. We check TARIC for your products before we quote.', src: 'https://ec.europa.eu/taxation_customs/dds2/taric/' },
    ],
    compliance: {
      phones: [
        { h: 'Used phones: no margin scheme on imports', p: 'The EU margin scheme only covers goods supplied to the dealer within the EU, so used phones imported from China pay import VAT on their full value and are resold under normal VAT.', src: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62010CA0203' },
        { h: 'USB-C common charger', p: 'Phones, tablets, earbuds and similar devices placed on the EU market since 28 December 2024 need a USB-C port and USB Power Delivery, and packaging must show whether a charger is included.', src: 'https://commission.europa.eu/news-and-media/news/eu-common-charger-rules-power-all-your-devices-single-charger-2024-12-28_en' },
        { h: 'Smartphone ecodesign rules', p: 'Since 20 June 2025 new smartphones placed on the EU market must meet ecodesign rules, including battery durability and spare parts availability, and carry the EU energy label.', src: 'https://energy-efficient-products.ec.europa.eu/product-list/smartphones-and-tablets_en' },
      ],
      electronics: [
        { h: 'CE and RED cybersecurity', p: 'Radio products need CE marking under the Radio Equipment Directive. Since 1 August 2025 its cybersecurity requirements apply to internet-connected radio equipment, until the Cyber Resilience Act takes over in December 2027.', src: 'https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en' },
        { h: 'GPSR responsible person', p: 'A product cannot be placed on the EU market unless an economic operator established in the EU is responsible for it, named with contact details on the product, packaging or accompanying document.', src: 'https://eur-lex.europa.eu/eli/reg/2023/988/oj/eng' },
        { h: 'Batteries Regulation', p: 'Batteries need the separate-collection symbol (since 18 August 2025), with QR codes, battery passports for larger batteries and replaceable portable batteries coming from 2027.', src: 'https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/' },
      ],
      privatelabel: [
        { h: 'GPSR responsible person', p: 'Every consumer product needs an EU-based economic operator responsible for it, named on the product or packaging. For private label, that is usually you as the brand owner or importer.', src: 'https://eur-lex.europa.eu/eli/reg/2023/988/oj/eng' },
        { h: 'CE marking where it applies', p: 'Electrical, radio, toy and other regulated products need CE marking and a Declaration of Conformity before they are placed on the EU market. We check this at the specification stage.', src: 'https://single-market-economy.ec.europa.eu/sectors/electrical-and-electronic-engineering-industries-eei/radio-equipment-directive-red_en' },
      ],
    },
    faqs: {
      common: [
        { q: 'What happened to the EU €150 duty exemption?', a: 'It ended on 1 July 2026. A temporary customs duty of €3 per item, counted per tariff line, now applies to B2C distance sales of consignments up to €150 until 1 July 2028. Business imports pay normal duty and VAT.' },
        { q: 'Do you deliver to every EU country?', a: 'Yes. We ship door to door by express or by sea and rail to your forwarder, anywhere in the EU. We have German-language pages for Germany and Austria and work in English everywhere else.' },
      ],
      phones: [
        { q: 'Can I use the margin scheme on imported used phones in the EU?', a: 'No. The margin scheme covers only goods supplied to the dealer within the EU, so used phones imported from China pay import VAT on their full value.' },
      ],
      electronics: [
        { q: 'Who is the responsible person under the GPSR?', a: 'An economic operator established in the EU, such as the manufacturer, importer or an authorised representative, who is named on the product or packaging and responsible for its safety.' },
      ],
      privatelabel: [],
    },
  },
  australia: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship door to door to Australia. Chinese-origin goods are generally duty free under ChAFTA with origin paperwork, GST is 10%, phones need ACMA compliance and the RCM, and every phone must be able to call 000 on 4G, which we check by model before we buy.',
      electronics: 'We source electronics direct from Shenzhen factories and check them against Australian rules before you pay: ACMA compliance and the RCM for radio and telecom products, and EESS registration for in-scope electrical equipment through an Australian responsible supplier. Duty is generally nil under ChAFTA with origin paperwork, and GST is 10%.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan and ship to Australia. With the right origin paperwork most Chinese-origin goods enter duty free under ChAFTA, GST is 10%, and electrical or radio products need EESS and ACMA compliance with the RCM.',
    },
    tax: [
      { h: 'GST: 10%', p: 'GST of 10% applies to most imported goods. GST-registered importers can join the Deferred GST scheme and pay it on their monthly BAS, but customs duty must still be paid before release.', src: 'https://www.abf.gov.au/importing-exporting-and-manufacturing/importing/cost-of-importing-goods/gst-and-other-taxes/deferral-of-gst' },
      { h: 'Duty: generally nil under ChAFTA', p: 'Under the China–Australia Free Trade Agreement, Australian tariffs on Chinese-origin goods were eliminated from 1 January 2019. You need a certificate or declaration of origin to claim it, except for consignments under A$1,000.', src: 'https://www.dfat.gov.au/trade/agreements/in-force/chafta/doing-business-with-china/guide-to-using-chafta-to-export-or-import' },
      { h: 'The A$1,000 threshold', p: 'Consignments over A$1,000 need a full import declaration. Air or sea cargo of A$1,000 or less uses a self-assessed clearance and is generally free of duty and GST at the border. Splitting orders to stay under it is not allowed.', src: 'https://www.abf.gov.au/imports/Pages/How-to-import/Import-declarations.aspx' },
      { h: 'Registration', p: 'Importers are identified in the ABF Integrated Cargo System by their ABN. A licensed customs broker can register you and lodge declarations on your behalf.', src: 'https://www.abf.gov.au/form-listing/forms/b319.pdf' },
    ],
    compliance: {
      phones: [
        { h: 'ACMA rules and the RCM', p: 'Before a phone is supplied in Australia it must meet ACMA standards, the supplier must be registered as a responsible supplier, and the phone must carry the RCM. A CE mark on its own is not enough.', src: 'https://www.acma.gov.au/know-what-you-must-do' },
        { h: 'The 000 rule after the 3G shutdown', p: 'Carriers must block phones that cannot call 000 over 4G, including phones that fall back to 3G for emergency calls. Blocking is by model, so we check each model for VoLTE emergency calling before we buy for Australia.', src: 'https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown' },
        { h: 'Used phones: IMEI blocking', p: 'Phones reported lost or stolen are blocked on Australian networks, and carriers will not unblock them for a new owner. Every used phone we ship is IMEI-checked before we buy it.', src: 'https://amta.org.au/consumer-advice/cyber/check-the-status-of-your-handset/' },
      ],
      electronics: [
        { h: 'ACMA and the RCM for radio products', p: 'Smart home devices, cameras, smartwatches and other radio or telecom products must meet ACMA standards and carry the RCM, supplied by a registered responsible supplier.', src: 'https://www.acma.gov.au/know-what-you-must-do' },
        { h: 'EESS for electrical equipment', p: 'In-scope electrical equipment needs an Australian or New Zealand responsible supplier. Level 3 (higher-risk) equipment must be registered on the EESS database with a certificate of conformity and carry the RCM.', src: 'https://www.eess.gov.au/registration/registration-in-scope-electrical-equipment/level-3/' },
      ],
      privatelabel: [
        { h: 'Origin paperwork for ChAFTA', p: 'To claim nil duty, the shipment needs a certificate or declaration of origin. We arrange it with the factory as part of the export documents.', src: 'https://www.dfat.gov.au/trade/agreements/in-force/chafta/chafta-frequently-asked-questions' },
        { h: 'Electrical and radio products', p: 'If your own-brand product is electrical or has a radio, EESS and ACMA rules apply, and the RCM goes on the product or label.', src: 'https://www.eess.gov.au/registration/registration-in-scope-electrical-equipment/level-3/' },
      ],
    },
    faqs: {
      common: [
        { q: 'Is there import duty on goods from China to Australia?', a: 'Under ChAFTA, Australian tariffs on Chinese-origin goods were eliminated from 1 January 2019, so most goods enter duty free when you have a certificate or declaration of origin. GST of 10% still applies.' },
        { q: 'Do I need a customs broker in Australia?', a: 'Consignments over A$1,000 need a full import declaration, which most importers lodge through a licensed customs broker. We work with your broker or recommend one.' },
      ],
      phones: [
        { q: 'Will imported phones work on Australian networks?', a: 'Only if they can make emergency calls to 000 over 4G. Since the 3G shutdown, carriers block models that cannot, so we check every model for VoLTE emergency calling before we buy stock for Australia.' },
      ],
      electronics: [
        { q: 'Who is the responsible supplier for EESS?', a: 'It must be an Australian or New Zealand business with an ABN or NZ IRD number, usually the importer. We provide the factory test reports and certificates you need to register.' },
      ],
      privatelabel: [],
    },
  },

  uae: {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship to the UAE door to door or to Jebel Ali. Most goods pay the GCC 5% customs duty and 5% import VAT, and every phone model needs TDRA type approval, with a TDRA release permit for each commercial shipment.',
      electronics: 'We source electronics direct from Shenzhen factories for UAE importers and re-exporters. Expect 5% GCC customs duty and 5% VAT, TDRA type approval for anything with a radio, and MoIAT conformity certification (ECAS or EQM) for regulated products, which we check before you pay.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan and ship to the UAE. Most goods pay 5% GCC duty and 5% VAT on import, and regulated products need MoIAT conformity certification before they are sold.',
    },
    tax: [
      { h: 'Import VAT: 5%', p: 'VAT of 5% is charged on the CIF value plus duty. VAT-registered importers can account for it on their VAT return if their customs number is linked with the Federal Tax Authority; others pay before release.', src: 'https://tax.gov.ae/DataFolder/Files/Pdf/VATImportersUserGuideEnglishV050.pdf' },
      { h: 'Customs duty: 5% of CIF', p: 'The GCC common external tariff is 5% of the CIF value on most goods. Some products are exempt or rated differently, so we check your HS codes.', src: 'https://www.dubaicustoms.gov.ae/en/mobile/pages/faq.aspx' },
      { h: 'Registration', p: 'You need a UAE trade licence and a customs client code. Importers of telecom equipment must also be registered with TDRA as a supplier.', src: 'https://www.dubaicustoms.gov.ae/en/OpenData/Publications/DubaiCustomsServiceGuide2025_V09.pdf' },
      { h: 'Low-value e-commerce shipments', p: 'Dubai Customs raised the duty exemption for eligible e-commerce shipments from AED 300 to AED 1,000 CIF in July 2026. It applies in Dubai to eligible shipments only, so check before relying on it.', src: 'https://www.dubaicustoms.gov.ae/en/mobile/pages/newsdetails.aspx?itemid=2195' },
    ],
    compliance: {
      phones: [
        { h: 'TDRA type approval', p: 'Every phone model must be TDRA type-approved before it is displayed or sold in the UAE. Approval is valid for three years, and a test report alone is not enough.', src: 'https://tdra.gov.ae/en/FAQs' },
        { h: 'TDRA release permit per shipment', p: 'Each commercial shipment of telecom equipment needs a TDRA customs release permit tied to the approved model. Repeat shipments of the same model can use a permanent permit.', src: 'https://tdra.gov.ae/-/media/TDRA-Media/Resources/Resources-2025/TDRA-Service-Manual---EN---16-Oct-2025.ashx' },
        { h: 'Refurbished means refurbished', p: 'UAE authorities have seized refurbished phones sold as new. Every phone we ship is graded and described honestly, phone by phone.', src: 'https://gulfnews.com/amp/story/uae%2Fcrime%2F4700-refurbished-phones-seized-and-destroyed-1.1529335' },
      ],
      electronics: [
        { h: 'TDRA for radio devices', p: 'Smart home devices, cameras, smartwatches and anything with Wi-Fi, Bluetooth or cellular radio need TDRA type approval per model, and a release permit per shipment.', src: 'https://tdra.gov.ae/en/About/tdra-sectors/telecommunication/departments/technology-development-affairs-department/type-approval' },
        { h: 'MoIAT conformity (ECAS / EQM)', p: 'Regulated products need an ECAS or EQM certificate of conformity from the Ministry of Industry and Advanced Technology before sale. We check which scheme covers your products.', src: 'https://www.sgs.com/en-sa/news/2024/06/pca-2024-q2-navigating-uae-product-conformity-understanding-ecas-and-eqm-certification' },
      ],
      privatelabel: [
        { h: 'MoIAT conformity (ECAS / EQM)', p: 'If your own-brand product falls under a UAE technical regulation, it needs an ECAS or EQM certificate before sale. We check this at the specification stage.', src: 'https://www.sgs.com/en-sa/news/2024/06/pca-2024-q2-navigating-uae-product-conformity-understanding-ecas-and-eqm-certification' },
      ],
    },
    faqs: {
      common: [
        { q: 'What duty and VAT apply to goods from China into the UAE?', a: 'Most goods pay the GCC common external tariff of 5% of CIF value, plus 5% import VAT. VAT-registered importers can usually account for the VAT on their return.' },
        { q: 'Can you ship to Jebel Ali for re-export?', a: 'Yes. Many of our UAE buyers re-export across the Gulf and Africa. We ship FOB China to your forwarder or door to door, and prepare the documents for your route.' },
      ],
      phones: [
        { q: 'Do phones need TDRA approval?', a: 'Yes. Each phone model must be TDRA type-approved before it is displayed or sold, and each commercial shipment needs a TDRA release permit. We confirm the approval status of each model before we buy for you.' },
      ],
      electronics: [],
      privatelabel: [],
    },
  },

  'south-africa': {
    lastChecked: '2026-10-16',
    shortAnswer: {
      phones: 'We buy phones and parts in Shenzhen\'s Huaqiangbei market, test every unit and ship to South Africa. Import VAT is 15%, radio equipment must be ICASA type-approved, and used phones are import-controlled and need an ITAC permit, which we plan for before we buy.',
      electronics: 'We source electronics direct from Shenzhen factories for South African importers. Import VAT is 15%, radio equipment needs ICASA type approval, and products under compulsory specifications need an NRCS Letter of Authority before import or sale. We check both before you pay.',
      privatelabel: 'We manage private label and OEM production in Shenzhen and Dongguan and ship to South Africa. Import VAT is 15%, and electrical products under compulsory specifications need an NRCS Letter of Authority, which we check at the specification stage.',
    },
    tax: [
      { h: 'Import VAT: 15%', p: 'VAT on imports is 15%, calculated on the customs value plus 10%, plus any duties.', src: 'https://www.sars.gov.za/faq/faq-how-is-vat-calculated-on-imported-goods/' },
      { h: 'Duty: check your HS code', p: 'South Africa has no free trade agreement with China, so the general rate applies. In 2025 the 9% luxury excise was removed for smartphones up to R2,500 but still applies above that.', src: 'https://www.polity.org.za/article/south-africa-to-remove-luxury-duty-on-lower-value-smartphones-2025-03-12' },
      { h: 'Registration', p: 'Importers must register with SARS Customs (Registration, Licensing and Accreditation). Non-resident importers must appoint a registered agent.', src: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/' },
    ],
    compliance: {
      phones: [
        { h: 'ICASA type approval', p: 'Phones and other radio equipment must be ICASA type-approved for import, sale and use, with a local representative for imported equipment. Non-approved phones have been seized.', src: 'https://www.icasa.org.za/uploads/files/Type-Approval-Regulations.pdf' },
        { h: 'Used phones need an ITAC permit', p: 'Used and second-hand goods, including used cellphones, are import-controlled and need an ITAC import permit. ITAC has reported a backlog on used cellphone applications, so we plan timing with you before we buy.', src: 'https://itac.org.za/important-notice-re-import-export-permits-applications/' },
      ],
      electronics: [
        { h: 'NRCS Letter of Authority', p: 'Products under compulsory specifications need an NRCS Letter of Authority before import or sale. VC 8055 covers many electrical and electronic products, including phone chargers, and an LOA is valid for three years.', src: 'https://www.nrcs.org.za/compulsory-specifications/compulsory-specifications' },
        { h: 'ICASA for radio devices', p: 'Smart home devices, cameras and wearables with a radio need ICASA type approval.', src: 'https://www.icasa.org.za/uploads/files/Type-Approval-Regulations.pdf' },
      ],
      privatelabel: [
        { h: 'NRCS for electrical products', p: 'If your own-brand product is electrical and falls under a compulsory specification, it needs an NRCS Letter of Authority before import. We check this at the specification stage.', src: 'https://www.nrcs.org.za/business-units/electro-technical' },
      ],
    },
    faqs: {
      common: [
        { q: 'What VAT applies to imports into South Africa?', a: 'Import VAT is 15%, calculated on the customs value plus 10%, plus duties. Duty depends on the HS code; South Africa has no free trade agreement with China.' },
      ],
      phones: [
        { q: 'Can I import used phones into South Africa?', a: 'Used goods, including used cellphones, are import-controlled and need an ITAC permit. New phones and parts do not need that permit, but radio equipment must be ICASA type-approved.' },
      ],
      electronics: [
        { q: 'Do electronics need NRCS approval?', a: 'Products covered by a compulsory specification, such as VC 8055 for many electrical and electronic products, need an NRCS Letter of Authority before import or sale.' },
      ],
      privatelabel: [],
    },
  },
};
