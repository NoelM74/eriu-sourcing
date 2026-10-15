// Ériu Phone Parts: worldwide wholesale phone parts sub-brand (/phone-parts/).
// Owner decisions (2026-10-15):
//   - Shipping: door-to-door express worldwide, FOB China for larger orders.
//   - Guarantee (both): batch test video + record before the balance is paid;
//     DOA / fails-spec parts replaced free on the next order or credited if
//     reported within 14 days with a photo or short video.
//   - No minimum on the first order.
//   - Real QC photos/videos exist and will replace generated images later.
// Proof rules: no invented testimonials, customer counts or failure rates.
// Facts used: 18 years in China (owner), Shenzhen logistics/fulfilment
// operation since 2011 with a 53-person China team and owned warehouse space
// (about page), ~70% of repairs are screens (OnsiteGo dataset).

export const WA_NUMBER = '353871187806';
export const wa = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
export const WA_DEFAULT =
  "Hi Noel, I run a phone repair shop in [city, country]. Could you send me prices for: ";

export const guarantee = {
  name: 'The Bench-Proof Guarantee',
  one: {
    h: 'See your batch before you pay the balance.',
    p: 'After your deposit, we buy and test your batch in Shenzhen and send you the video and the test record for your parts: your models, your grades. You pay the balance only when you are happy with what you have seen.',
  },
  two: {
    h: 'Dead on arrival? Replaced or credited.',
    p: 'If any part arrives dead or fails our stated test spec, send us a photo or a short video within 14 days. We replace it free on your next order, or credit it.',
  },
  fine: 'Parts damaged while being fitted are not covered. That is the only fine print.',
};

export const partsProducts = [
  {
    slug: 'iphone-screens-wholesale',
    nav: 'iPhone Screens',
    title: 'Wholesale iPhone Screens, Tested in Shenzhen | Ériu',
    description: 'Wholesale iPhone replacement screens: in-cell, hard OLED, soft OLED and genuine pulls, each one powered up and tested in Shenzhen before it ships worldwide.',
    eyebrow: 'Wholesale iPhone screens',
    h1: 'iPhone screens that were switched on before they were shipped.',
    sub: 'In-cell, hard OLED, soft OLED and genuine pulled screens for every current and recent iPhone. Each one powered up, touch-tested and graded in Shenzhen, then shipped to your door. You see your batch on video before you pay the balance.',
    image: '/images/phone-parts-oled-screen-test-macro.webp',
    imageAlt: 'A replacement iPhone OLED screen glowing with a white test pattern on a test board in Shenzhen',
    wa: 'Hi Noel, I run a repair shop in [city, country]. Could you send prices for iPhone screens? Models and grades: ',
    pain: {
      h2: 'Screens are most of your repairs. They should be the part you worry about least.',
      paras: [
        'One repair-industry dataset put screen damage at around 70% of all phone repairs. That makes the screen you buy the single biggest decision on your bench, and the one that does the most damage when it goes wrong: a ghost-touch comeback, a dead strip down the side, a customer who quietly takes her next repair elsewhere.',
        'The fix is not a different supplier with a better story. It is a test between the factory and your counter. That is what every screen we ship has been through.',
      ],
    },
    grades: [
      ['Genuine pulled / refurbished original', 'Original Apple panel from a donor phone, graded A/B/C on cosmetics', 'Customers who want the closest thing to factory'],
      ['Soft OLED', 'Real OLED on a flexible base, like the original; best aftermarket fit', 'Your standard premium repair'],
      ['Hard OLED', 'Real OLED on a rigid glass base; true blacks, lower price', 'Value repairs that still look like OLED'],
      ['In-cell LCD', 'LCD with built-in touch; thicker, greyer blacks, lowest price', 'Older phones and price-led customers'],
    ],
    tests: [
      'Powered up on a test board and checked for dead or stuck pixels',
      'Colour and brightness uniformity on white, black and colour fields',
      'Full touch-grid test, edge to edge, plus multi-touch',
      'Frame, flex and connector fit checked against the model',
      'True Tone and the iOS parts notice checked on the current iOS',
      'Labelled by model and grade, recorded against your batch',
    ],
    extra: {
      h2: 'The honest bit about iPhone parts messages',
      paras: [
        'On recent iPhones, a screen that is not a new genuine Apple part shows a notice in Settings. Apple\'s own support pages describe "Unknown Part" messages, and on iPhone 15 and later a "Used" message for a display that has been in another iPhone. The phone keeps working.',
        'What changes with each grade (True Tone, auto-brightness) depends on the screen and the iOS version, and it has moved more than once since Repair Assistant arrived in iOS 18. So we test current stock on the current iOS and tell you exactly what each grade will show before you order. You can tell your customer before they ask.',
      ],
    },
    faqs: [
      { q: 'Which iPhone screen grade should I stock?', a: 'Most shops do well with three tiers per popular model: in-cell for older phones and price-led customers, hard or soft OLED for most repairs, and genuine pulls or soft OLED for customers who want the closest match to the original. We can suggest a starting mix from the models you repair most.' },
      { q: 'Do you test every screen or just a sample?', a: 'Every screen. Each one is powered up and checked for pixels, uniformity, the full touch grid and fit before it is packed. Failures stay in Shenzhen. You get the test record with your packing list, and the video of your batch before you pay the balance.' },
      { q: 'Will a replacement screen show a message on the iPhone?', a: 'On recent iPhones, yes: a non-genuine or previously used display shows a notice in Settings, and the phone keeps working. We tell you what each grade shows on the current iOS before you buy.' },
      { q: 'Is there a minimum order?', a: 'Not on your first order. Start with whatever lets you judge the quality for yourself.' },
    ],
    related: ['samsung-screens-wholesale', 'phone-batteries-wholesale', 'phone-repair-parts-wholesale'],
  },

  {
    slug: 'samsung-screens-wholesale',
    nav: 'Samsung Screens',
    title: 'Wholesale Samsung Screens, Tested in Shenzhen | Ériu',
    description: 'Wholesale Samsung Galaxy S and A series replacement screens, OLED and aftermarket, each tested in Shenzhen before it ships to repair shops worldwide.',
    eyebrow: 'Wholesale Samsung screens',
    h1: 'Samsung screens tested on the bench in Shenzhen, not on yours.',
    sub: 'Galaxy S and A series screens, original-quality service packs and aftermarket OLED, with or without frame. Every screen powered up and touch-tested before it is packed, and shipped door to door.',
    image: '/images/shenzhen-phone-screen-qc-testing-replacement-oled.webp',
    imageAlt: 'An inspector testing a replacement Samsung screen on a test fixture in Shenzhen',
    wa: 'Hi Noel, I run a repair shop in [city, country]. Could you send prices for Samsung screens? Models: ',
    pain: {
      h2: 'Curved glass, punch-hole cameras and fingerprint sensors leave nowhere to hide.',
      paras: [
        'Samsung screens fail in their own ways: an in-display fingerprint sensor that will not read, an edge that does not respond, a frame that will not sit flat. You find out with the phone in pieces and the customer waiting.',
        'So we check the things Samsung repairs actually go wrong on, before the screen ever leaves Shenzhen.',
      ],
    },
    grades: [
      ['Original service pack', 'Original-quality assembly, usually with frame', 'Flagship repairs where fit and finish matter most'],
      ['Aftermarket OLED', 'OLED panel, close to original colour and response', 'Most Galaxy S and A repairs'],
      ['Aftermarket incell / TFT', 'Lowest-cost option for older and budget models', 'Price-led repairs on older phones'],
    ],
    tests: [
      'Powered up and checked for dead pixels, burn-in and tint',
      'Full touch test including curved edges',
      'In-display fingerprint area checked where the model has one',
      'Punch-hole camera cut-out and frame alignment checked',
      'With-frame assemblies checked for flatness and clip fit',
      'Labelled by model and grade, recorded against your batch',
    ],
    extra: null,
    faqs: [
      { q: 'Do you supply screens with frame?', a: 'Yes, for most Galaxy S and A models: with frame for faster fitting, or panel only. Tell us which you prefer per model.' },
      { q: 'Do you test the fingerprint sensor area?', a: 'Where the model has an in-display sensor, yes. We check it reads before the screen is packed.' },
      { q: 'Can I mix Samsung and iPhone parts in one order?', a: 'Yes. Most shops order both on the same shipment, with batteries and small parts.' },
    ],
    related: ['iphone-screens-wholesale', 'phone-batteries-wholesale', 'phone-repair-parts-wholesale'],
  },

  {
    slug: 'phone-batteries-wholesale',
    nav: 'Batteries',
    title: 'Wholesale Phone Batteries, Capacity-Tested | Ériu',
    description: 'Wholesale iPhone and Samsung replacement batteries, capacity-tested and date-checked in Shenzhen, with UN38.3 reports and legal dangerous-goods shipping.',
    eyebrow: 'Wholesale phone batteries',
    h1: 'Batteries that hold the charge they promise, and arrive legally.',
    sub: 'iPhone and Samsung replacement batteries, standard and high-capacity, capacity-tested against their rating and date-checked before they ship. Packed and declared as dangerous goods, so they actually get to you.',
    image: '/images/phone-replacement-battery-capacity-testing-shenzhen.webp',
    imageAlt: 'Replacement phone batteries on a capacity-testing rack in Shenzhen',
    wa: 'Hi Noel, I run a repair shop in [city, country]. Could you send prices for replacement batteries? Models: ',
    pain: {
      h2: 'A battery swap should be your easiest repair. A tired cell turns it into a refund.',
      paras: [
        'The risk with batteries is invisible: old stock that has sat for a year, cells that do not reach their printed capacity, packs that swell in a drawer. None of it shows until your customer says the phone still dies by lunchtime.',
        'And then there is shipping. Lithium batteries are dangerous goods. Packed wrongly, they get stopped, returned or destroyed.',
      ],
    },
    grades: [
      ['Standard capacity', 'Matches the original rating', 'Everyday battery swaps'],
      ['High capacity', 'Higher rating than original, where available', 'Customers who want more than new'],
      ['Tag-on / repair-board options', 'Designed to show battery health on newer iPhones; results vary by iOS', 'Shops that want health shown in Settings'],
    ],
    tests: [
      'Capacity tested against the rated mAh',
      'Cycle count checked: new cells, not refurbished ones',
      'Cell date code checked, so you do not get old stock',
      'No swelling, connector and flex inspected',
      'UN38.3 test report for the battery model',
      'State of charge set for transport, short-circuit protected',
    ],
    extra: {
      h2: 'Shipping batteries the right way',
      paras: [
        'Loose lithium-ion batteries ship as UN3480 Class 9 dangerous goods. That means a UN38.3 report for the model, the right packing and labels, a dangerous-goods declaration, and a carrier and service that accept them. Not every express service to every country does.',
        'We book batteries on routes that accept them and tell you the options for your country before you order. If your country is hard to reach by air, they can travel by sea with a larger order.',
      ],
    },
    faqs: [
      { q: 'Can phone batteries be shipped by express?', a: 'Often, yes, on dangerous-goods-approved services, depending on your country. We tell you the route and cost before you order. Batteries need a UN38.3 report, correct packing, Class 9 labels and a declaration, which we handle.' },
      { q: 'Will a new battery show battery health on an iPhone?', a: 'Non-genuine batteries can show a parts notice and may not show health on newer iPhones. Tag-on and repair-board options are designed for this and results change with iOS. We tell you what each option shows on the current iOS.' },
      { q: 'How do you make sure batteries are not old stock?', a: 'We check the cell date code and cycle count on every battery and reject old or used cells.' },
    ],
    related: ['iphone-screens-wholesale', 'phone-repair-parts-wholesale', 'phone-accessories-wholesale'],
  },

  {
    slug: 'phone-repair-parts-wholesale',
    nav: 'Small Parts',
    title: 'Wholesale Phone Repair Parts: Ports, Glass, Cameras | Ériu',
    description: 'Wholesale charging-port flexes, back glass, cameras, speakers and small repair parts for iPhone and Samsung, checked in Shenzhen and shipped worldwide.',
    eyebrow: 'Wholesale phone repair parts',
    h1: 'The small parts that keep your bench moving, checked before they ship.',
    sub: 'Charging-port flexes, back glass and housings, rear and front cameras, speakers, buttons, flexes, SIM trays, screws and adhesive. Function-checked by batch, labelled by model, and shipped with your screens.',
    image: '/images/phone-repair-spare-parts-charging-ports-cameras-trays.webp',
    imageAlt: 'Phone repair spare parts sorted in clear trays: charging-port flexes, camera modules and speakers',
    wa: 'Hi Noel, I run a repair shop in [city, country]. Could you send prices for small parts (charging ports, cameras, back glass)? Models: ',
    pain: {
      h2: 'A two-dollar charging port can cost you a whole repair.',
      paras: [
        'Small parts are cheap until one fails. A bad batch of charging-port flexes means comebacks on the jobs you thought were quick wins. Small parts are also where mixed and misdescribed stock is most common, because nobody bothers to check something that costs so little.',
        'We do. Ports and cameras are function-tested from every batch, glass and housings are checked for fit, and everything is labelled so you know exactly what you are fitting.',
      ],
    },
    grades: [
      ['Charging ports and flexes', 'Port assemblies, power and volume flexes', 'Your most common small repair'],
      ['Back glass and housings', 'Back glass, frames and full housings', 'Cosmetic and drop repairs'],
      ['Cameras and lenses', 'Rear and front cameras, lens glass', 'Camera faults and cracked lenses'],
      ['Speakers, buttons, consumables', 'Loudspeakers, earpieces, buttons, screws, adhesive, tools', 'Keeping the bench stocked'],
    ],
    tests: [
      'Charging ports function-tested from every batch',
      'Cameras tested for focus and image from every batch',
      'Glass and housings checked for fit and finish',
      'Speakers and earpieces sound-tested from every batch',
      'Everything bagged and labelled by model and part',
      'Batch records kept so a faulty lot can be traced',
    ],
    extra: null,
    faqs: [
      { q: 'Do you test every small part?', a: 'Small parts are function-tested from every batch, and visual and fit checks cover the rest. Screens and batteries are tested one by one.' },
      { q: 'Do replacement cameras work fully on iPhones?', a: 'Cameras are among the parts Apple checks, so a non-genuine or used camera can show a parts notice. We tell you which cameras are genuine pulls and which are aftermarket, and what to expect from each.' },
      { q: 'Can I add tools and adhesive?', a: 'Yes. Repair tools, adhesive and bench consumables ship on the same order.' },
    ],
    related: ['iphone-screens-wholesale', 'samsung-screens-wholesale', 'phone-batteries-wholesale'],
  },

  {
    slug: 'refurbished-iphones-wholesale',
    nav: 'Refurbished iPhones',
    title: 'Wholesale Refurbished iPhones, IMEI-Checked | Ériu',
    description: 'Wholesale refurbished iPhones and Samsungs graded to your rules: IMEI, activation lock, battery health and function checked phone by phone before they ship.',
    eyebrow: 'Wholesale refurbished phones',
    h1: 'Refurbished phones checked one by one, against your grades, not theirs.',
    sub: 'Graded iPhones and Samsungs bought through the Shenzhen and Hong Kong trade. Every phone IMEI-checked, lock-checked, battery-tested and function-tested before it ships, with a report you can stock from.',
    image: '/images/shenzhen-refurbished-phone-grading-testing-centre.webp',
    imageAlt: 'Technicians grading and testing refurbished smartphones in a Shenzhen refurbishment centre',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for refurbished phones? Models, storage and grades: ',
    pain: {
      h2: '"Grade A" tells you how a phone looks. It tells you nothing else.',
      paras: [
        'A grade says nothing about whether the phone is blacklisted, still locked to someone\'s account, or running a battery at 79%. And every trader defines "Grade A" differently. One bad batch of locked phones can wipe out the margin on months of good ones.',
        'So we buy against your written grade definitions and check every phone ourselves before it is packed.',
      ],
    },
    grades: [
      ['Grade A', 'Your definition: marks allowed, minimum battery health', 'Front-of-shop resale'],
      ['Grade B', 'Light visible wear, battery minimum you set', 'Value tier'],
      ['Grade C', 'Visible wear, fully working', 'Budget tier and trade customers'],
    ],
    tests: [
      'IMEI checked against blacklist databases; reported phones rejected',
      'Activation lock and account lock checked; locked phones rejected',
      'Network-unlocked stock as standard',
      'Battery health read and recorded against your minimum',
      'Full function test: screen, touch, cameras, speakers, mics, charging, Wi-Fi, Bluetooth, biometrics',
      'iPhone parts and service history recorded per phone',
    ],
    extra: {
      h2: 'Check your VAT before you price',
      paras: [
        'Many countries let dealers charge VAT only on their margin for second-hand goods, but the rules for phones you import yourself from outside your trading bloc are often different. In the EU, for example, margin schemes generally do not cover second-hand phones a dealer imports from outside the EU, so import VAT falls on the full value. Check with your accountant before you set prices.',
      ],
    },
    faqs: [
      { q: 'How do you make sure phones are not stolen?', a: 'Every IMEI is checked against blacklist databases before we buy, and any phone reported lost or stolen is rejected, along with any phone still locked to an account. You get the IMEI list with your shipment.' },
      { q: 'What does each grade mean?', a: 'Whatever we agree in writing. Grades only describe cosmetics and every trader defines them differently, so we set your definitions (allowed marks, minimum battery health, replaced parts) and check every phone against them.' },
      { q: 'Do you supply Samsung as well as iPhone?', a: 'Yes, recent Galaxy S and A models as well as iPhones.' },
    ],
    related: ['phone-accessories-wholesale', 'iphone-screens-wholesale', 'phone-batteries-wholesale'],
  },

  {
    slug: 'phone-accessories-wholesale',
    nav: 'Accessories',
    title: 'Wholesale Phone Accessories from Shenzhen | Ériu',
    description: 'Wholesale tempered glass, cases, USB-C chargers, cables, earbuds and smartwatches from Shenzhen factories, batch-inspected and shipped to phone shops worldwide.',
    eyebrow: 'Wholesale phone accessories',
    h1: 'The counter sale that pays for the coffee, bought where it is made.',
    sub: 'Tempered glass, cases, USB-C chargers, cables, earbuds and smartwatches from the Shenzhen factories that make them, own-brand if you want it. Batch-inspected, safety paperwork checked, and shipped with your parts.',
    image: '/images/phone-shop-accessories-wall-display.webp',
    imageAlt: 'A phone shop wall display of cases, screen protectors, chargers, cables and earbuds',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for accessories? Items: ',
    pain: {
      h2: 'Every screen repair is a screen protector you should be selling.',
      paras: [
        'Accessories are the highest-margin thing in a phone shop and the easiest add-on at the counter: a protector with every screen, a case with every phone, a charger when theirs has given up. Buying them through two layers of wholesalers gives that margin away.',
        'The risk is chargers and anything electrical. Badly made chargers are a fire risk, and the wrong paperwork can stop a shipment at customs. We buy from factories with real test reports for the exact model.',
      ],
    },
    grades: [
      ['Screen protection', 'Tempered glass (clear, privacy, full cover), lens protectors', 'An add-on with every screen repair'],
      ['Cases', 'Clear, silicone, rugged and MagSafe-compatible', 'Every phone you sell or fix'],
      ['Charging and audio', 'USB-C and GaN chargers, cables, wireless chargers, earbuds', 'The steady counter sellers'],
      ['Wearables and gadgets', 'Smartwatches, fitness bands, power banks', 'Higher-ticket counter sales'],
    ],
    tests: [
      'Batch inspection to AQL on every line',
      'Chargers and earbuds function-tested',
      'Safety test reports checked for the exact charger model',
      'Wireless products checked for radio compliance documents',
      'Own-brand packaging and barcodes checked against your artwork',
      'No logo-copied brand accessories',
    ],
    extra: null,
    faqs: [
      { q: 'Can I put my own brand on accessories?', a: 'Yes. Shenzhen factories routinely produce own-brand packaging, barcodes and inserts. Own-brand raises the minimum per item, which we confirm in your quote.' },
      { q: 'Are cheap chargers safe?', a: 'Only if they are built and tested properly. We only buy chargers from factories with genuine electrical safety test reports for the exact model, and we function-test them in the batch inspection.' },
      { q: 'Can accessories ship with my parts?', a: 'Yes. Smaller mixed orders travel by express with your parts; larger own-brand runs can go by sea to cut the cost per unit.' },
    ],
    related: ['refurbished-iphones-wholesale', 'iphone-screens-wholesale', 'phone-repair-parts-wholesale'],
  },
];
