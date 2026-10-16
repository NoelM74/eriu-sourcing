// Product lines for the country market sections (/uk/, /australia/, ...).
// Copy is market-neutral; {country}, {demonym} and {buyers} are filled per market.
// Owner facts used: full-time buyer in Huaqiangbei; 53-person team, 47 in
// Shenzhen and 6 in Zhengzhou; Bench-Proof Guarantee for phones and parts;
// no minimum on the first phones/parts order. No invented claims.

export const marketLines = [
  {
    key: 'phones',
    slug: 'wholesale-phones-parts',
    nav: 'Phones & Parts',
    titleTpl: '{short} Wholesale Phones & Phone Parts Supplier | Ériu',
    descTpl: 'Used iPhones, Android phones, screens and batteries for {demonym} phone shops, bought in Huaqiangbei and tested in Shenzhen before they ship.',
    h1Tpl: 'Wholesale phones and parts for {demonym} shops, tested in Shenzhen before they ship.',
    subTpl: 'Used and refurbished iPhones, new Android phones, tablets, screens, batteries and repair parts, bought on the Huaqiangbei market floor by our own full-time buyer and tested one by one. You watch your batch on video before you pay the balance. No minimum on your first order.',
    image: '/images/shenzhen-phone-mall-trading-counters.webp',
    imageAlt: 'Rows of phone trading counters on a crowded Shenzhen phone market floor',
    credit: 'oskay',
    pain: {
      h2: 'Most phone stock reaches {country} through three or four sets of hands. Nobody tests it on the way.',
      paras: [
        'A screen or a used iPhone leaves a counter in Shenzhen, passes through a trader, an exporter and a wholesaler at home, and arrives on your bench having been switched on by nobody. You are the quality control, and you find the faults in front of your customers.',
        'We take the middle out. Our buyer works the Huaqiangbei floors every day, and every phone and screen crosses our test bench in Shenzhen before it is packed for {country}.',
      ],
    },
    benefits: [
      ['Bought on the floor', 'A full-time buyer in Huaqiangbei, comparing counters and walking away from batches that will not pass.'],
      ['Tested one by one', 'Every phone IMEI-checked and lock-checked, every screen powered up and touch-tested, every battery capacity-tested.'],
      ['See it before you pay', 'Your batch on video, with the test record, before you pay the balance. Dead on arrival? Replaced or credited.'],
      ['No minimum to start', 'Mix phones, screens, batteries and accessories in one order, sized to what you can sell.'],
    ],
    links: [
      ['Used iPhones', '/phone-parts/used-iphones-wholesale/'],
      ['New Android phones', '/phone-parts/new-android-phones-wholesale/'],
      ['iPhone screens', '/phone-parts/iphone-screens-wholesale/'],
      ['Phone batteries', '/phone-parts/phone-batteries-wholesale/'],
      ['Tablets and iPads', '/phone-parts/tablets-wholesale/'],
      ['How we test', '/phone-parts/how-we-test/'],
    ],
    waTpl: 'Hi Noel, I run a phone business in {country}. Could you send prices for: ',
    ctaHref: '/phone-parts/quote/',
    guarantee: true,
  },
  {
    key: 'electronics',
    slug: 'electronics-from-china',
    nav: 'Shenzhen Electronics',
    titleTpl: 'Electronics from China to {country}, Factory-Direct | Ériu',
    descTpl: 'Portable power stations, home batteries, smart home, CCTV and wearables direct from Shenzhen factories, certified for {country} and inspected before shipping.',
    h1Tpl: 'Electronics direct from Shenzhen factories, with the paperwork {country} actually asks for.',
    subTpl: 'Portable power stations, home battery storage, smart home devices, IP cameras, smartwatches and chargers, made by the factories that build them for global brands. We check the certificates against {demonym} rules before you pay, and inspect every order before it ships.',
    image: '/images/shenzhen-electronics-factory-automation.webp',
    imageAlt: 'An automated electronics production line in a Shenzhen factory',
    credit: null,
    pain: {
      h2: 'The cheapest part of importing electronics is the product. The expensive part is the paperwork you did not check.',
      paras: [
        'Electronics fail at the border, not in the factory: a missing certificate, a test report for a different model, a battery shipped without its transport test, a radio device without the approval your market needs. Each one can mean a held shipment, a relabelling job or stock you cannot legally sell.',
        'We start from the rules where you sell. Before a deposit is paid we check that the factory\'s certificates and test reports cover the exact model for {country}, then we inspect the goods before they leave Shenzhen.',
      ],
    },
    benefits: [
      ['Factories, not traders', 'Shenzhen and Dongguan manufacturers that build for global brands, verified in person by our team.'],
      ['Certificates checked first', 'Test reports and marks matched to the exact model and to the rules in {country}, before you pay.'],
      ['Inspected before shipping', 'Pre-shipment inspection on every order: function, safety, packaging and labelling.'],
      ['Batteries shipped properly', 'UN38.3 transport test, correct packing and dangerous-goods paperwork for anything with a lithium battery.'],
    ],
    links: [
      ['Portable power stations', '/source/electronics/portable-power-stations-from-china/'],
      ['Home battery storage', '/source/electronics/home-battery-storage-systems-from-china/'],
      ['Smart home devices', '/source/electronics/smart-home-iot-devices-from-china/'],
      ['CCTV and IP cameras', '/source/electronics/cctv-ip-security-cameras-from-china/'],
      ['Smartwatches and wearables', '/source/electronics/smartwatches-wearables-from-china/'],
      ['Phone accessories', '/phone-parts/phone-accessories-wholesale/'],
    ],
    waTpl: 'Hi Noel, I am in {country} and want to source electronics from Shenzhen: ',
    ctaHref: '/contact/',
    guarantee: false,
  },
  {
    key: 'privatelabel',
    slug: 'private-label-manufacturing',
    nav: 'Private Label',
    titleTpl: 'Private Label Manufacturing for {demonym} Brands | Ériu',
    descTpl: 'Your product, your brand, your packaging, made by vetted factories in Shenzhen and Dongguan and delivered to {country}. Samples, moulds, QC and shipping managed.',
    h1Tpl: 'Your own brand, made in China and delivered to {country}, without losing control of it.',
    subTpl: 'Private label and OEM products, custom moulds and printed retail packaging from vetted factories in Shenzhen and Dongguan. We manage samples, tooling ownership, quality control and shipping, so you build a brand instead of chasing suppliers.',
    image: '/images/injection-moulding-machine-robot.webp',
    imageAlt: 'An injection moulding machine with a robot arm unloading moulded parts',
    credit: 'injection-moulding-machine-robot',
    pain: {
      h2: 'The first order is easy. It is the third order, with a different material and no one telling you, that breaks a brand.',
      paras: [
        'Private label goes wrong slowly. The golden sample was perfect, then the factory swaps a material to protect its margin, or a subcontractor makes your packaging, or your mould turns up in someone else\'s product. By the time reviews tell you, the stock is already on the water.',
        'We put a team on the ground between you and the factory. Golden samples signed and kept, tooling ownership in writing, inspection against your specification on every run, and one person you can call.',
      ],
    },
    benefits: [
      ['Vetted factories', 'Manufacturers checked in person, with business licences, capacity and real production lines verified.'],
      ['Samples and tooling managed', 'Golden samples signed off and stored, moulds made to your spec with ownership in writing.'],
      ['Packaging that sells', 'Printed retail boxes, inserts, barcodes and labels made to your artwork in Dongguan.'],
      ['QC on every run', 'Inspection against your specification before every shipment, not just the first.'],
    ],
    links: [
      ['Private label and OEM', '/source/private-label-from-china-ireland/'],
      ['Injection moulding and tooling', '/source/injection-moulding-tooling-china-ireland/'],
      ['Custom packaging and printing', '/source/custom-packaging-printing-china-ireland/'],
      ['How sourcing works', '/how-it-works/'],
      ['China sourcing glossary', '/resources/glossary/'],
    ],
    waTpl: 'Hi Noel, I am building a private label brand in {country}. The product is: ',
    ctaHref: '/contact/',
    guarantee: false,
  },
];
