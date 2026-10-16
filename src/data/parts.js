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
    guides: ['used-iphone-grades-explained'],
    group: 'parts',
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
    group: 'parts',
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
    group: 'parts',
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
    group: 'parts',
    nav: 'Small Parts',
    title: 'Wholesale Phone Repair Parts: Ports, Glass, Cameras | Ériu',
    description: 'Wholesale charging-port flexes, back glass, cameras, speakers and small repair parts for iPhone and Samsung, checked in Shenzhen and shipped worldwide.',
    eyebrow: 'Wholesale phone repair parts',
    h1: 'The small parts that keep your bench moving, checked before they ship.',
    sub: 'Charging-port flexes, back glass and housings, rear and front cameras, speakers, buttons, flexes, SIM trays, screws and adhesive. Function-checked by batch, labelled by model, and shipped with your screens.',
    image: '/images/phone-flex-cables-parts-bags.webp',
    credit: 'peretzp',
    imageAlt: 'Bagged replacement phone flex cables and small parts piled on a repair counter',
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
    guides: ['used-iphone-grades-explained', 'how-to-check-used-iphones-wholesale'],
    group: 'devices',
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
    group: 'parts',
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
  // ── Devices (added 2026-10-16). Owner fact: a full-time Ériu buyer works
  // the Huaqiangbei market floors in Shenzhen.
  {
    slug: 'used-iphones-wholesale',
    guides: ['used-iphone-grades-explained', 'how-to-check-used-iphones-wholesale'],
    group: 'devices',
    nav: 'Used iPhones',
    title: 'Wholesale Used iPhones, Graded and IMEI-Checked | Ériu',
    description: 'Wholesale used iPhones from Shenzhen, graded to your rules. Every phone IMEI-checked, iCloud-checked, battery-read and tested. See the batch on video first.',
    eyebrow: 'Wholesale used iPhones',
    h1: 'Used iPhones that match the grade on the invoice. Every one, not most.',
    sub: 'Second-hand iPhones bought on the Huaqiangbei floor by our full-time buyer in Shenzhen. Every phone IMEI-checked, iCloud-checked, battery-read and function-tested before it ships, and you watch your batch on video before you pay the balance.',
    image: '/images/used-iphones-pile.webp',
    imageAlt: 'A pile of used iPhones of different generations stacked on a table',
    credit: 'blakespot',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for used iPhones? Models, storage, grades and quantities: ',
    pain: {
      h2: 'The phone that costs you money is the one you can\'t sell.',
      paras: [
        'Picture a box of fifty "Grade A" iPhone 13s. Most are exactly what you paid for. A few have batteries in the 70s. Two show a screen notice nobody mentioned. One is still signed in to a stranger\'s iCloud account, which makes it a very expensive paperweight. Those few phones eat the profit on all the good ones.',
        'Used iPhones aren\'t hard to buy. They\'re hard to buy blind. We aren\'t blind: our buyer is on the market floor in Shenzhen every working day, and every phone crosses our bench before it goes in your box.',
      ],
    },
    grades: [
      ['Grade A / A+', 'Little or no visible wear, original screen, battery at or above the minimum you set', 'Front-window stock and your best margins'],
      ['Grade B', 'Light wear on frame or back, fully working, battery minimum agreed', 'The value tier that still sells fast'],
      ['Grade C', 'Heavier cosmetic wear, fully working', 'Budget buyers, trade-in stock, onward export'],
      ['For parts', 'Faults listed phone by phone, never locked or blacklisted', 'Repair shops harvesting screens, cameras and housings'],
    ],
    tests: [
      'IMEI checked against blacklist databases; reported phones rejected',
      'Activation Lock off and no remote-management (MDM) profile; locked phones rejected',
      'Network-lock status checked and recorded per phone',
      'Battery health read and recorded against your minimum',
      'Parts and Service History checked in Settings, so you know which parts are not original',
      'Full function test: screen, touch, Face ID or Touch ID, cameras, speakers, mics, charging, Wi-Fi, Bluetooth, SIM',
    ],
    extra: {
      h2: 'US, Japanese, Hong Kong or European stock? It matters.',
      paras: [
        'iPhones sold in the US since the iPhone 14 have no SIM tray: they are eSIM-only. The iPhone 17 range is eSIM-only in a longer list of countries, including Canada, Japan, Mexico and several Gulf states, and the iPhone Air is eSIM-only everywhere. If your customers expect a physical SIM, that decides which stock you want.',
        'Japanese-market iPhones play the camera shutter sound even on silent. Some Hong Kong and mainland China models take two physical SIM cards. None of this is a fault, but a customer who wasn\'t told will treat it like one. Your packing list shows every phone\'s model number and the market it was made for, so you can price and describe each one honestly.',
      ],
    },
    faqs: [
      { q: 'How do you make sure used iPhones are not stolen or locked?', a: 'Every IMEI is checked against blacklist databases before we buy, and every phone is checked for Activation Lock and remote management (MDM). Any phone that is reported, locked or managed is rejected. You get the IMEI list with your shipment.' },
      { q: 'What battery health will I get?', a: 'Whatever minimum you set in writing, for example 85% and above for Grade A. We read and record battery health on every phone, so you can see it on the test record before you pay the balance.' },
      { q: 'Can I choose models, storage and colours?', a: 'Yes. Send your list with models, storage and grades. Colours can be specified or mixed; a mixed-colour batch is usually cheaper and quicker to fill.' },
      { q: 'Can used iPhones ship by express?', a: 'Yes. Phones with their batteries inside ship by express air under the rules for lithium batteries contained in equipment. We pack, label and declare them correctly.' },
      { q: 'Is there a minimum order?', a: 'Not on your first order. Buy enough to judge the grading for yourself.' },
    ],
    related: ['used-samsung-phones-wholesale', 'refurbished-iphones-wholesale', 'iphone-screens-wholesale'],
  },

  {
    slug: 'used-samsung-phones-wholesale',
    guides: ['global-vs-china-version-phones'],
    group: 'devices',
    nav: 'Used Samsung',
    title: 'Wholesale Used Samsung Galaxy Phones, Tested | Ériu',
    description: 'Wholesale used Samsung Galaxy S, A and Z phones from Shenzhen. Every phone checked for blacklist, Google lock, screen burn-in and battery before it ships.',
    eyebrow: 'Wholesale used Samsung Galaxy',
    h1: 'Used Galaxy phones checked for the faults buyers usually find after the money\'s gone.',
    sub: 'Galaxy S, A, Note and Z models bought in Shenzhen and tested one by one: blacklist, Google account lock, screen burn-in, battery and every function. Your batch on video before you pay the balance.',
    image: '/images/stack-of-used-smartphones.webp',
    imageAlt: 'A hand holding a stack of used smartphones in different cases and colours',
    credit: 'comedy_nose',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for used Samsung phones? Models, storage, grades and quantities: ',
    pain: {
      h2: 'Burn-in: the fault you only see on a grey screen.',
      paras: [
        'Samsung\'s OLED screens are beautiful, and after a few years of the same status bar and keyboard, some of them keep a faint ghost of it. On a busy home screen you\'d never notice. On a plain grey background, in your customer\'s hand, at your counter, you will.',
        'Add the phones still tied to someone\'s Google account, which won\'t get past setup after a reset, and you can see why buying used Galaxies blind is a gamble. So we test every phone on grey and white fields before it ships, and we reject any phone that is still locked.',
      ],
    },
    grades: [
      ['Grade A', 'Little or no visible wear, no burn-in, battery at your minimum', 'Front-window resale'],
      ['Grade B', 'Light wear, no burn-in visible in normal use, fully working', 'The value tier'],
      ['Grade C', 'Heavier wear or faint burn-in declared, fully working', 'Budget and trade customers'],
      ['For parts', 'Faults listed phone by phone, never locked or blacklisted', 'Repair shops harvesting parts'],
    ],
    tests: [
      'IMEI checked against blacklist databases; reported phones rejected',
      'Google account lock (Factory Reset Protection) and Samsung account removed; locked phones rejected',
      'Screen checked on grey, white and colour fields for burn-in, tint and dead pixels',
      'Battery condition checked and recorded against your minimum',
      'S Pen tested on Note and Ultra models; hinge and inner screen checked on foldables',
      'Full function test: touch, cameras, speakers, mics, charging, Wi-Fi, Bluetooth, fingerprint, SIM',
    ],
    extra: null,
    faqs: [
      { q: 'Which Samsung models can you supply used?', a: 'Galaxy S and A series are the bulk of the trade, plus Note, S Ultra and Z Flip and Fold. Tell us the models and storage you sell and we quote what the market has that week.' },
      { q: 'How do you handle screen burn-in?', a: 'Every phone is checked on grey, white and colour fields. Phones with visible burn-in are either rejected or sold as declared Grade C, never mixed into Grade A or B.' },
      { q: 'What about phones locked to a Google account?', a: 'We reject them. A phone with Factory Reset Protection still on won\'t complete setup after a reset, so it has no place in a resale batch.' },
      { q: 'Is there a minimum order?', a: 'Not on your first order.' },
    ],
    related: ['used-iphones-wholesale', 'new-android-phones-wholesale', 'samsung-screens-wholesale'],
  },

  {
    slug: 'new-android-phones-wholesale',
    guides: ['global-vs-china-version-phones'],
    group: 'devices',
    nav: 'New Android Phones',
    title: 'Wholesale New Android Phones, Global Versions | Ériu',
    description: 'Wholesale new Samsung, Xiaomi, Redmi, Honor, OPPO, realme and vivo phones from Shenzhen. Global versions, sealed and checked against your country\'s networks.',
    eyebrow: 'Wholesale new Android phones',
    h1: 'New Android phones that work properly in your country. Not just switch on.',
    sub: 'Sealed Samsung, Xiaomi, Redmi, POCO, Honor, OPPO, realme and vivo phones sourced in Shenzhen, in the right version for your market, with Google services, the right network bands and the right plug. Checked before they ship, explained before you buy.',
    image: '/images/shenzhen-phone-mall-trading-counters.webp',
    imageAlt: 'Busy rows of phone trading counters on the floor of a Shenzhen phone market, seen from above',
    credit: 'oskay',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for new Android phones? Brands, models, storage and quantities: ',
    pain: {
      h2: 'The cheapest version of a phone is often the one your customer can\'t use.',
      paras: [
        'The same model can be made in a China version, a global version and several regional versions. From the outside they look identical. Inside, the China version usually has no Google Play out of the box, may be missing the 4G and 5G bands your networks use, and comes with a plug that doesn\'t fit your wall.',
        'Some traders "fix" this by flashing global software onto China-version phones. It works until it doesn\'t: after the HyperOS 3 update, owners of some China-version Xiaomi phones running modified global software reported that they would no longer boot. You don\'t want to be the shop that sold those phones. So we buy the version that matches your market, and we tell you exactly what you\'re getting.',
      ],
    },
    grades: [
      ['Global version, sealed', 'Factory-sealed, global firmware with Google services, multi-language', 'Retail resale in most countries'],
      ['Regional version, sealed', 'Made for a specific region (EU, India, Latin America and others); bands and plugs vary', 'Matching your own networks exactly'],
      ['China version', 'Sealed, Chinese firmware, no Google services out of the box', 'Only when you ask for it and know your customers; we say so plainly'],
      ['Own-brand Android', 'Phones from Shenzhen factories under your brand, with your packaging', 'Shops and distributors building their own label'],
    ],
    tests: [
      'Version and firmware region confirmed before purchase, never assumed',
      'Network bands checked against the operators in your country',
      'Box seals, IMEI labels and serials matched to your order',
      'IMEIs checked against blacklist databases',
      'Charger plug type and box contents checked for your market',
      'One unit per batch opened on request to show firmware, Google services and bands on video',
    ],
    extra: {
      h2: 'The honest bit about manufacturer warranty',
      paras: [
        'Phones bought in China and shipped to you are not always covered by the manufacturer\'s warranty in your country. Some brands honour an international warranty, many don\'t. We tell you the position for each brand before you buy, so you can price in your own shop warranty and nobody is caught out.',
      ],
    },
    faqs: [
      { q: 'Which brands can you supply new?', a: 'Samsung, Xiaomi, Redmi, POCO, Honor, OPPO, realme, vivo, OnePlus, Motorola and others traded in Shenzhen, plus own-brand Android phones from Shenzhen factories. Send us your list and we quote what is available in the right version.' },
      { q: 'What is the difference between a global and a China version?', a: 'A global version ships with Google services, multi-language software and network bands for international markets. A China version is built for Chinese networks and apps and usually has no Google Play out of the box. We supply global or regional versions unless you ask otherwise.' },
      { q: 'Do you sell Huawei phones?', a: 'We can, but recent Huawei phones ship without Google Mobile Services, so apps like Google Play, Gmail and Google Maps are not available in the usual way. We make sure you know that before you order.' },
      { q: 'Is there a minimum order?', a: 'Not on your first order. Mix models and brands in one shipment.' },
    ],
    related: ['used-samsung-phones-wholesale', 'tablets-wholesale', 'phone-accessories-wholesale'],
  },

  {
    slug: 'tablets-wholesale',
    guides: ['how-to-check-used-iphones-wholesale'],
    group: 'devices',
    nav: 'Tablets & iPads',
    title: 'Wholesale Tablets and Used iPads from Shenzhen | Ériu',
    description: 'Wholesale used iPads and new Android tablets from Shenzhen. Every iPad checked for Activation Lock and school or company MDM before it ships worldwide.',
    eyebrow: 'Wholesale tablets and iPads',
    h1: 'Tablets you can resell, not ex-school iPads you can\'t unlock.',
    sub: 'Used and refurbished iPads, new Samsung, Xiaomi and Lenovo tablets, and own-brand Android tablets from Shenzhen factories. Every used tablet lock-checked, battery-read and touch-tested before it ships.',
    image: '/images/ipad-tablet-in-hands.webp',
    imageAlt: 'Two hands holding an iPad showing a calendar',
    credit: 'stocksnap-ipad',
    wa: 'Hi Noel, I run a shop in [city, country]. Could you send prices for tablets? Models, storage, Wi-Fi or cellular, and quantities: ',
    pain: {
      h2: 'Cheap used iPads are cheap for a reason. Sometimes it\'s a good reason.',
      paras: [
        'Schools and companies replace iPads in their thousands, and many of them reach the trade still enrolled in the organisation\'s device management. After a reset they show a "Remote Management" screen and belong, as far as the iPad is concerned, to someone else. You can\'t fix that at your counter.',
        'The good news: a clean, ex-fleet iPad is one of the best-value things a phone shop can sell. The trick is checking every single one. We do, before it is bought and again before it is packed.',
      ],
    },
    grades: [
      ['Used iPad, Grade A/B/C', 'Graded to your written definitions, battery minimum agreed', 'Resale, education and business customers'],
      ['New Android tablets', 'Samsung Galaxy Tab, Xiaomi Pad, Lenovo and others, global versions, sealed', 'New-device sales alongside phones'],
      ['Own-brand Android tablets', 'Made in Shenzhen under your brand: kids, education, retail and kiosk models', 'Distributors and resellers building a label'],
    ],
    tests: [
      'Activation Lock and remote management (MDM) checked; locked or managed iPads rejected',
      'Serial checked; Wi-Fi or cellular model confirmed against your order',
      'Battery health read and recorded where the device reports it',
      'Full touch-grid test, edge to edge, plus screen uniformity',
      'Charging port, cameras, speakers, buttons and Apple Pencil support checked',
      'Own-brand tablets: batch inspection and radio and safety documents checked',
    ],
    extra: null,
    faqs: [
      { q: 'How do you avoid MDM-locked iPads?', a: 'Every used iPad is checked for Activation Lock and for enrolment in remote management before we buy it. Any iPad that shows a lock or a management profile is rejected.' },
      { q: 'Can you make tablets under my own brand?', a: 'Yes. Shenzhen factories make Android tablets for kids, education, retail and kiosks with your logo, boot screen and packaging. Own-brand runs have a factory minimum, which we confirm in your quote.' },
      { q: 'Is there a minimum order?', a: 'Not on your first order of stock tablets. Own-brand production has a factory minimum.' },
    ],
    related: ['used-iphones-wholesale', 'new-android-phones-wholesale', 'smartwatches-earbuds-wholesale'],
  },

  {
    slug: 'smartwatches-earbuds-wholesale',
    group: 'devices',
    nav: 'Watches & Earbuds',
    title: 'Wholesale Smartwatches and Earbuds from Shenzhen | Ériu',
    description: 'Wholesale used Apple Watch and Galaxy Watch, plus own-brand smartwatches and wireless earbuds from Shenzhen factories. Tested, documented, never copies.',
    eyebrow: 'Wholesale smartwatches and earbuds',
    h1: 'Watches and earbuds that pair first time, from the city that makes them.',
    sub: 'Used Apple Watch and Galaxy Watch, plus smartwatches, fitness bands and wireless earbuds from the Shenzhen factories that build them, under your brand if you want. Tested, with the paperwork your customs will ask for.',
    image: '/images/apple-watch-airpods-flatlay.webp',
    imageAlt: 'A smartwatch and a pair of wireless earbuds with their case on a wooden table',
    credit: 'stocksnap-watch',
    wa: 'Hi Noel, I run a phone shop in [city, country]. Could you send prices for smartwatches and earbuds? Items and quantities: ',
    pain: {
      h2: 'Huaqiangbei sells a lot of earbuds that look exactly like the famous ones. We don\'t.',
      paras: [
        'Walk through any electronics market in Shenzhen and you\'ll see copies of famous earbuds and watches for a fraction of the price. They get seized at customs, they put your business in legal trouble, and they come back when the battery dies in a month.',
        'The real opportunity is the honest version: used genuine watches, checked properly, and own-brand smartwatches and earbuds made by the same factories, with real test reports and your name on the box. Good margins, no risk at the border.',
      ],
    },
    grades: [
      ['Used Apple Watch / Galaxy Watch', 'Graded, Activation Lock and account lock checked, battery read', 'Accessory sales to your phone customers'],
      ['Own-brand smartwatches', 'Shenzhen-made watches and fitness bands under your brand', 'Higher-ticket counter sales'],
      ['Own-brand wireless earbuds', 'TWS earbuds with your packaging and app pairing name', 'Steady add-on sales with every phone'],
    ],
    tests: [
      'Used watches: Activation Lock and account lock checked; locked units rejected',
      'Battery hold, charging and heart-rate sensor checked',
      'Earbuds: pairing, both channels, microphone, case charging and battery hold',
      'Radio and electrical safety documents checked for own-brand models',
      'Packaging, barcodes and manuals checked against your artwork',
      'No copied brand logos or lookalike packaging, ever',
    ],
    extra: null,
    faqs: [
      { q: 'Do you sell copy AirPods or copy Apple Watches?', a: 'No. Copies get seized at customs and can bring legal action. We supply genuine used watches, checked properly, and own-brand products made under your name.' },
      { q: 'What is the minimum for own-brand earbuds or watches?', a: 'Each factory sets its own minimum for branded runs, usually a few hundred units per model. We confirm it in your quote. Stock models with no branding can ship with no minimum on your first order.' },
      { q: 'Can these ship with my phones and parts?', a: 'Yes. Mixed orders ship together by express, packed and declared correctly for the batteries inside.' },
    ],
    related: ['phone-accessories-wholesale', 'tablets-wholesale', 'used-iphones-wholesale'],
  },

  {
    slug: 'low-moq-phone-wholesale',
    group: 'devices',
    nav: 'Mixed Orders, No Minimum',
    title: 'Low MOQ Phone Wholesale: Mixed Orders from Shenzhen | Ériu',
    description: 'Mix used iPhones, new Android phones, screens, batteries and accessories in one order, with no minimum on your first. Tested in Shenzhen, shipped worldwide.',
    eyebrow: 'Low MOQ phone wholesale',
    h1: 'Ten phones, twenty screens and a box of cases. One order. No minimum on the first.',
    sub: 'Most China suppliers want a big minimum per model before they\'ll talk to you. We\'d rather earn your second order. Mix phones, parts and accessories in one tested shipment, sized to what you can actually sell.',
    image: '/images/shenzhen-phone-mall-buyers-counters.webp',
    imageAlt: 'Buyers and traders at rows of phone counters on a busy Shenzhen phone market floor',
    credit: 'oskay-09',
    wa: 'Hi Noel, I run a phone shop in [city, country]. I\'d like to start with a small mixed order: ',
    pain: {
      h2: 'Big minimums protect the supplier. They don\'t protect you.',
      paras: [
        'A minimum order of a few thousand dollars, ten units per model, makes sense for a supplier who wants to ship fewer, bigger boxes. For you it means buying more than you need, of fewer models, from someone you have never tested. If the first batch is bad, you find out with all your money already spent.',
        'We turn that around. Your first order can be as small as you like, so you can judge our phones and parts on your own bench before you trust us with anything bigger. We are betting on the second order. That is the point.',
      ],
    },
    grades: [
      ['Trial order', 'A handful of phones or parts across the models you sell most', 'Testing us before you commit'],
      ['Mixed restock', 'Phones, screens, batteries and accessories in one shipment', 'Shops topping up every few weeks'],
      ['Volume order', 'Larger quantities per model, sea or express', 'Distributors and multi-store groups'],
    ],
    tests: [
      'The same checks on a five-phone order as on a five-hundred-phone order',
      'Every phone IMEI-checked and lock-checked',
      'Every screen powered up and touch-tested',
      'Batteries capacity-tested and date-checked',
      'One test record and one batch video for the whole mixed order',
      'One shipment, one tracking number, one invoice',
    ],
    extra: null,
    faqs: [
      { q: 'What is the smallest first order you will take?', a: 'There is no minimum on your first order. Shipping costs mean very small orders cost more per unit, so we will tell you where the sensible break points are for your country.' },
      { q: 'Can I mix phones, parts and accessories?', a: 'Yes. That is what most shops do. Everything is tested, packed and shipped together.' },
      { q: 'What happens after the first order?', a: 'We agree order sizes that make sense for you and for shipping costs. Most shops settle into a regular mixed restock.' },
    ],
    related: ['used-iphones-wholesale', 'iphone-screens-wholesale', 'phone-accessories-wholesale'],
  },
];

// Photo credits for real, openly licensed photos (CC BY / CC BY-SA need a
// visible credit; CC0 / public domain credited as a courtesy).
export const photoCredits = {
  oskay: { by: 'Windell Oskay', title: 'Cell phone market, Shenzhen (2009)', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', src: 'https://www.flickr.com/photos/17425845@N00/3300228180' },
  'oskay-09': { by: 'Windell Oskay', title: 'Cell phone market, Shenzhen (2009)', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', src: 'https://www.flickr.com/photos/17425845@N00/3299401503' },
  'oskay-08': { by: 'Windell Oskay', title: 'Cell phone market, Shenzhen (2009)', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', src: 'https://www.flickr.com/photos/17425845@N00/3299401271' },
  whitwell: { by: 'Tom Whitwell', title: 'Huaqiangbei electronics markets, Shenzhen', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', src: 'https://www.flickr.com/photos/71172892@N00/14309542576' },
  'whitwell-stall': { by: 'Tom Whitwell', title: 'Family workshop inside a Huaqiangbei mobile phone market', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', src: 'https://www.flickr.com/photos/71172892@N00/14329342811' },
  peretzp: { by: 'Peretz Partensky', title: 'Cell Phone Repair', license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/', src: 'https://www.flickr.com/photos/68877611@N00/3968804290' },
  blakespot: { by: 'blakespot', title: 'my iPhone family pile', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', src: 'https://www.flickr.com/photos/35448539@N00/4773693893' },
  tsutano: { by: 'Yutaka Tsutano', title: 'iPhone Disassembled', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', src: 'https://www.flickr.com/photos/23208360@N07/4615045968' },
  bagnaramatt: { by: 'bagnaramatt', title: 'Repair shop for cell phones', license: 'Public domain', licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/', src: 'https://www.flickr.com/photos/156324531@N04/40406769584' },
  comedy_nose: { by: 'comedy_nose', title: "Don't Call Me", license: 'Public domain', licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/', src: 'https://www.flickr.com/photos/23408922@N07/14045110170' },
  'stocksnap-ipad': { by: 'Marc Chouinard', title: 'iPad Tablet', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', src: 'https://stocksnap.io/photo/ipad-tablet-4SGERWWL1U' },
  'stocksnap-watch': { by: 'Design by Matt', title: 'Smart Watch', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', src: 'https://stocksnap.io/photo/smart-watch-IVWZ4IZI5Q' },
  granger: { by: 'Mx. Granger', title: 'Huaqiangbei walking street', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', src: 'https://commons.wikimedia.org/wiki/File:Huaqiangbei_walking_street.jpg' },
};
