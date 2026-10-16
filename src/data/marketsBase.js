// Per-market copy that does not depend on regulatory research.
// No transit durations: none could be verified (research 2026-10-16); quotes confirm carrier schedules.

export const marketsBase = {
  uk: {
    slug: 'uk', short: 'UK', name: 'the UK', label: 'United Kingdom', demonym: 'UK', schemaArea: { "@type": "Country", "name": "United Kingdom" },
    hubTitle: 'China Sourcing Agent for UK Businesses | Ériu',
    hubDescription: 'Irish-run sourcing team in Shenzhen and Zhengzhou buying direct for UK importers: phones and parts, electronics and private label, checked for UKCA and PSTI.',
    hubH1: 'Buy direct from Chinese factories, delivered to the UK, with a team next door to them.',
    hubLead: 'An Irish-run team of 53 on the ground in Shenzhen and Zhengzhou, buying factory-direct for UK retailers, repair shops and brands. We check UK rules before you pay and inspect every order before it ships.',
    shipping: [
      'Express couriers (DHL, FedEx, UPS) deliver door to door from Shenzhen to the UK. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Felixstowe, Southampton or London Gateway. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price. Rail via the China–Europe routes is an option for some goods.',
    ],
  },
  europe: {
    slug: 'europe', short: 'EU', name: 'Europe', label: 'Europe (EU)', demonym: 'European', schemaArea: { "@type": "Place", "name": "European Union" },
    hubTitle: 'China Sourcing Agent for European Importers | Ériu',
    hubDescription: 'Irish-run sourcing team in Shenzhen and Zhengzhou buying direct for EU importers: phones and parts, electronics and private label, checked for CE and GPSR.',
    hubH1: 'Factory-direct from China to anywhere in the EU, checked against EU rules before you pay.',
    hubLead: 'Irish-run, EU-based company, with a team of 53 on the ground in Shenzhen and Zhengzhou. We buy direct for importers, retailers and brands across the European Union, in English, and check every order against EU product rules before it ships.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to most EU countries. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Rotterdam, Antwerp or Hamburg. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price. China–Europe rail is often faster than sea for inland Europe.',
    ],
  },
  usa: {
    slug: 'usa', short: 'US', name: 'the US', label: 'United States', demonym: 'US', schemaArea: { "@type": "Country", "name": "United States" },
    hubTitle: 'China Sourcing Agent for US Importers | Ériu',
    hubDescription: 'Sourcing team in Shenzhen and Zhengzhou buying factory-direct for US importers, with FCC checks, current duty in every quote and inspection before shipping.',
    hubH1: 'Factory-direct from China to the US, with today\'s duty in the price before you commit.',
    hubLead: 'US tariffs on Chinese goods change often, so the only number that matters is the landed cost on the day you order. We quote it, check FCC and labelling rules for your products, and inspect every order before it leaves China.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to the US. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Los Angeles or Long Beach. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price.',
    ],
  },
  canada: {
    slug: 'canada', short: 'Canada', name: 'Canada', label: 'Canada', demonym: 'Canadian', schemaArea: { "@type": "Country", "name": "Canada" },
    hubTitle: 'China Sourcing Agent for Canadian Importers | Ériu',
    hubDescription: 'Sourcing team in Shenzhen and Zhengzhou buying factory-direct for Canadian importers, with ISED and electrical certification checked and inspection before shipping.',
    hubH1: 'Factory-direct from China to Canada, certified for Canadian rules before you pay.',
    hubLead: 'An Irish-run team of 53 on the ground in Shenzhen and Zhengzhou, buying direct for Canadian retailers, repair shops and brands. We check ISED and electrical certification for your products and inspect every order before it ships.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to Canada. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Vancouver or Prince Rupert. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price.',
    ],
  },
  australia: {
    slug: 'australia', short: 'Australia', name: 'Australia', label: 'Australia', demonym: 'Australian', schemaArea: { "@type": "Country", "name": "Australia" },
    hubTitle: 'China Sourcing Agent for Australian Businesses | Ériu',
    hubDescription: 'Sourcing team in Shenzhen and Zhengzhou buying factory-direct for Australian importers: phones and parts, electronics and private label, checked for RCM.',
    hubH1: 'Factory-direct from China to Australia, checked for Australian rules before you pay.',
    hubLead: 'An Irish-run team of 53 on the ground in Shenzhen and Zhengzhou, buying direct for Australian retailers, phone shops and brands. We check RCM and electrical rules for your products and inspect every order before it ships.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to Australia. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Sydney, Melbourne or Brisbane. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price.',
    ],
  },
  uae: {
    slug: 'uae', short: 'UAE', name: 'the UAE', label: 'UAE & Gulf', demonym: 'UAE', schemaArea: [{ "@type": "Country", "name": "United Arab Emirates" }, { "@type": "Place", "name": "Gulf Cooperation Council" }],
    hubTitle: 'China Sourcing Agent for UAE & Gulf Importers | Ériu',
    hubDescription: 'Sourcing team in Shenzhen and Zhengzhou buying factory-direct for UAE and Gulf importers and re-exporters, with TDRA and conformity rules checked before shipping.',
    hubH1: 'Factory-direct from China to Dubai and the Gulf, with the approvals checked before you pay.',
    hubLead: 'Dubai trades with half the world. We buy direct in Shenzhen for UAE importers, wholesalers and re-exporters, check the approvals your products need, and inspect every order before it ships to Jebel Ali or your door.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to the UAE. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Jebel Ali. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price.',
    ],
  },
  'south-africa': {
    slug: 'south-africa', short: 'South Africa', name: 'South Africa', label: 'South Africa', demonym: 'South African', schemaArea: { "@type": "Country", "name": "South Africa" },
    hubTitle: 'China Sourcing Agent for South African Importers | Ériu',
    hubDescription: 'Sourcing team in Shenzhen and Zhengzhou buying factory-direct for South African importers, with ICASA and NRCS requirements checked before shipping.',
    hubH1: 'Factory-direct from China to South Africa, with ICASA and NRCS checked before you pay.',
    hubLead: 'An Irish-run team of 53 on the ground in Shenzhen and Zhengzhou, buying direct for South African retailers, phone shops and brands. We check the approvals your products need and inspect every order before it ships.',
    shipping: [
      'Express couriers deliver door to door from Shenzhen to South Africa. It is the fastest route for phones, parts and samples, and we confirm the transit time with the carrier in your quote.',
      'Larger orders go by sea from Yantian or Shekou to Durban or Cape Town. Sailing times depend on the carrier and the season, so we include the forwarder\'s current schedule with your price.',
    ],
  },
};
