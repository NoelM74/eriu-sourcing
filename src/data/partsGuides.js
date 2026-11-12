// Buyer guides for Ériu Phones & Parts (/phone-parts/guides/), worldwide audience.
// Facts used, with sources:
//   - Parts and Service History in Settings (iOS 15.2+), "Unknown Part" and
//     "Used" labels: Apple Support, "About iPhone parts and service history".
//   - Battery: iPhone 14 and earlier designed to retain 80% of original capacity
//     at 500 cycles; iPhone 15 and later at 1,000 cycles: Apple Support,
//     "iPhone battery and performance" / iPhone battery service page.
//   - Carrier Lock line in Settings > General > About (iOS 14+): Apple Support.
//   - US iPhone 14 and later eSIM-only; iPhone 17 range eSIM-only in the US,
//     Canada, Japan, Mexico and several Gulf states; iPhone Air eSIM-only
//     everywhere (Apple announcements, Sept 2022 and Sept 2025; heise.de).
//   - Huawei phones without Google Mobile Services since the May 2019 US
//     export restrictions.
//   - Xiaomi HyperOS 3 region check bricking flashed China units (reported by
//     Gizmochina / Tecnoblog, 2025).
// No invented stats or customer stories.

export const partsGuides = [
  {
    slug: 'used-iphone-grades-explained',
    title: 'Used iPhone Grades Explained: A+, A, B, C | Ériu',
    description: 'What used iPhone grades A+, A, B and C really mean, what they leave out, and how to write a grade spec that protects your margin when you buy wholesale.',
    h1: 'Used iPhone grades explained: what A+, A, B and C mean, and what they leave out',
    eyebrow: 'Buyer guide',
    publishDate: '2026-10-16',
    image: '/images/used-iphones-pile.webp',
    imageAlt: 'A pile of used iPhones of different generations',
    credit: 'blakespot',
    excerpt: 'Grades describe how a used iPhone looks, not how it works. Here is what each grade usually means and the written spec that stops surprises.',
    body: `<p class="article-summary"><strong>The short answer:</strong> there is no official grading standard for used iPhones. In the wholesale trade, Grade A+ or "mint" usually means no visible wear, Grade A means light marks, Grade B means visible wear, and Grade C means heavy wear, all fully working. Grades describe cosmetics only. They say nothing about battery health, replaced parts, locks or the market the phone was made for, so put those in writing before you buy.</p>

<h2>What the grades usually mean</h2>
<p>Every trader uses the same letters and nobody means quite the same thing. As a rough guide to how they are used in the trade:</p>
<ul>
<li><strong>A+ / Mint / Like new:</strong> no visible marks on screen, frame or back at arm's length.</li>
<li><strong>Grade A:</strong> light marks you see when you look for them, typically on the frame. Screen clean in normal use.</li>
<li><strong>Grade B:</strong> visible wear: scratches on the frame or back, light marks on the screen that disappear when it is on.</li>
<li><strong>Grade C:</strong> heavy wear, dents or deep scratches, still fully working.</li>
<li><strong>Grade D / For parts:</strong> faulty in some way. Fine for a repair shop harvesting parts, if the faults are listed and the phone is not locked.</li>
</ul>
<p>Notice what is missing. Two "Grade A" iPhone 13s can have batteries at 98% and 79%, an original screen and a replacement, and come from two different countries. Both are honestly Grade A.</p>

<h2>Battery health: the number that decides your returns</h2>
<p>An iPhone shows its own battery health in Settings, under Battery. Apple says iPhone 14 and earlier models are designed to keep 80% of their original capacity at 500 full charge cycles, and iPhone 15 and later at 1,000 cycles. Below 80%, the phone may show a service message, and your customer will notice the battery before you do.</p>
<p>So set a minimum per grade, for example 85% for Grade A and 80% for Grade B, and ask for the reading on every phone, not a sample.</p>

<h2>Replaced parts: check the phone's own history</h2>
<p>On iOS 15.2 and later, Settings, General, About shows a <em>Parts and Service History</em> section when a phone has had parts replaced. It lists the battery, display or camera as a genuine Apple part, an "Unknown Part", or, on newer models, a "Used" genuine part from another iPhone. A phone with an Unknown Part display can be perfectly usable, but it is not the same product as one with its original screen, and it shouldn't be the same price.</p>

<h2>The written spec that protects your margin</h2>
<p>Before you buy a single box, agree this in writing with your supplier:</p>
<ul>
<li>What marks are allowed on the screen, frame and back for each grade.</li>
<li>The minimum battery health for each grade.</li>
<li>Whether replaced parts are allowed, and if so which, and declared phone by phone.</li>
<li>No Activation Lock, no remote management (MDM), no blacklisted IMEIs, ever.</li>
<li>Network-unlocked, or the lock status declared per phone.</li>
<li>Which markets the phones were made for (US, Japan, Hong Kong, Europe), shown by model number.</li>
<li>What happens to phones that don't meet the spec: replaced, credited or returned.</li>
</ul>
<p>We work exactly like this: your definitions, checked on every phone, with a test record and a <a href="/phone-parts/how-we-test/">video of your batch</a> before you pay the balance. See <a href="/phone-parts/used-iphones-wholesale/">wholesale used iPhones</a>.</p>`,
    faq: [
      { q: 'Is there an official grading standard for used iPhones?', a: 'No. Grades A+, A, B and C are trade conventions and vary between suppliers. Agree written definitions for each grade before you buy.' },
      { q: 'What battery health should Grade A used iPhones have?', a: 'There is no standard, so set your own minimum. Many shops ask for 85% or higher for Grade A and 80% or higher for Grade B, recorded phone by phone.' },
      { q: 'How can I tell if a used iPhone has had its screen replaced?', a: 'On iOS 15.2 and later, look in Settings, General, About for Parts and Service History. A replaced display shows as Unknown Part, or as a Used genuine part on newer models.' },
    ],
  },
  {
    slug: 'global-vs-china-version-phones',
    title: 'Global vs China Version Phones: A Wholesale Guide | Ériu',
    description: 'China, global and regional phone versions look identical but differ in Google services, network bands and software. What wholesale buyers must check first.',
    h1: 'Global vs China version phones: what wholesale buyers must check before they order',
    eyebrow: 'Buyer guide',
    publishDate: '2026-10-16',
    image: '/images/shenzhen-phone-mall-trading-counters.webp',
    imageAlt: 'Rows of phone trading counters in a Shenzhen phone market',
    credit: 'oskay',
    excerpt: 'The same phone model is made in China, global and regional versions. Buy the wrong one and your customers lose Google apps, network bands or updates.',
    body: `<p class="article-summary"><strong>The short answer:</strong> many Android phones are made in a China version and a global version, and sometimes several regional versions. China versions usually ship without Google Play services and can lack network bands your operators use. Global versions come with Google services and international bands. Never assume: confirm the version, the firmware and the bands for your country before you buy, and avoid China-version phones flashed with global software.</p>

<h2>Why there are different versions</h2>
<p>Brands such as Xiaomi, Redmi, POCO, OPPO, realme, vivo, OnePlus and Honor build phones for the Chinese market and for export. In China, Google services are not part of daily life, so China versions use the brand's own app store and services instead. Export versions are certified by Google and ship with Google Play, Gmail, Maps and the rest.</p>
<p>Prices in Shenzhen are often lower for China versions, which is exactly why they turn up in wholesale offers sold to buyers abroad.</p>

<h2>Five things that differ between versions</h2>
<ul>
<li><strong>Google services.</strong> Global versions have them. China versions usually do not, and adding them afterwards is unreliable.</li>
<li><strong>Network bands.</strong> A China version can be missing 4G or 5G bands your operators rely on, which shows up as weak signal indoors or no 5G at all. Check the bands against your main operators, model by model.</li>
<li><strong>Software and languages.</strong> China firmware is built around Chinese apps and services, and some languages may be missing.</li>
<li><strong>Updates.</strong> Updates come from the region the phone was built for. A phone running software from another region is on its own.</li>
<li><strong>Plug, box and warranty.</strong> Chinese plugs, Chinese-language boxes, and a manufacturer warranty that may not be honoured in your country.</li>
</ul>

<h2>The flashed-ROM trap</h2>
<p>Some traders install global software on China-version phones and sell them as global. They look right on day one. The risk comes later: after the HyperOS 3 update, owners of some China-version Xiaomi phones running modified global software reported that their phones would no longer start properly, because the update checks that the software region matches the hardware. A shop that sold those phones owns that problem.</p>
<p>Ask for the version to be confirmed on a sealed unit from the same batch. On Xiaomi phones, the software version string carries a region code (for example CN for China, MI for global, EU for Europe).</p>

<h2>Huawei and Google services</h2>
<p>Since US export restrictions in 2019, new Huawei phones ship without Google Mobile Services, wherever they are sold. That isn't a China-version issue; it applies to the global models too. Customers who live in Google apps need to know before they buy.</p>

<h2>What about iPhones?</h2>
<p>iOS is the same worldwide, but the hardware isn't. iPhones sold in the US since the iPhone 14 are eSIM-only, and the iPhone 17 range is eSIM-only in more countries, including Canada, Japan, Mexico and several Gulf states. Some mainland China and Hong Kong models take two physical SIMs. Japanese models play the camera shutter sound even on silent. The model number in Settings tells you the market each iPhone was made for.</p>

<h2>How we handle it</h2>
<p>We buy the version that matches your market, confirm the firmware and bands before purchase, and open one unit per batch on request to show you on video. If a cheaper China version is available, we tell you plainly what you would be giving up. See <a href="/phone-parts/new-android-phones-wholesale/">wholesale new Android phones</a>.</p>`,
    faq: [
      { q: 'Do China version phones have Google Play?', a: 'Usually not. China versions of most Android brands ship with the brand\'s own app store and services. Global versions are certified by Google and include Google Play.' },
      { q: 'Can I install global software on a China version phone?', a: 'It is sometimes done, but it is risky. After the HyperOS 3 update, owners of some China-version Xiaomi phones running modified global software reported phones that would no longer boot properly. Buy the global version instead.' },
      { q: 'Do Huawei phones have Google services?', a: 'New Huawei phones have shipped without Google Mobile Services since the 2019 US export restrictions, including the global models.' },
    ],
  },
  {
    slug: 'how-to-check-used-iphones-wholesale',
    title: 'How to Check Used iPhones Before Buying Wholesale | Ériu',
    description: 'A 9-point checklist for checking used iPhones in bulk: IMEI, Activation Lock, MDM, carrier lock, battery, parts history, model number, function and grade.',
    h1: 'How to check used iPhones before you buy them wholesale: a 9-point checklist',
    eyebrow: 'Buyer guide',
    publishDate: '2026-10-16',
    image: '/images/iphone-disassembled-screen-parts.webp',
    imageAlt: 'An iPhone taken apart on a workbench, with its screen, frame and parts laid out',
    credit: 'tsutano',
    excerpt: 'The nine checks that separate a profitable box of used iPhones from a box of problems, and where to find each one on the phone itself.',
    body: `<p class="article-summary"><strong>The short answer:</strong> before you pay for used iPhones, check every phone for nine things: a clean IMEI, Activation Lock off, no remote management, carrier-lock status, battery health, parts history, model number and market, a full function test, and the cosmetic grade against your written spec. Most of these are visible in the iPhone's own Settings app. Do them on every phone, not a sample.</p>

<h2>1. IMEI: not reported lost or stolen</h2>
<p>Check each IMEI against a blacklist database. A blacklisted phone may be blocked from networks in many countries, and selling it can drag your shop into a police matter. Reject any that come back reported.</p>

<h2>2. Activation Lock: off</h2>
<p>If Find My was left on, the phone is tied to the previous owner's Apple Account and cannot be set up by anyone else after a reset. There is no legitimate workaround. A locked phone is worth its parts, at best.</p>

<h2>3. Remote management (MDM): none</h2>
<p>Phones and iPads from companies and schools can be enrolled in device management. After a reset they show a Remote Management screen during setup and stay under the organisation's control. Reject any that show it.</p>

<h2>4. Carrier lock: declared</h2>
<p>In Settings, General, About, the Carrier Lock line shows "No SIM restrictions" on an unlocked iPhone. Locked phones only work on one network; know which you are buying.</p>

<h2>5. Battery health: above your minimum</h2>
<p>Settings, Battery shows the maximum capacity. Apple designs iPhone 14 and earlier to keep 80% at 500 full cycles, and iPhone 15 and later at 1,000. Set a minimum per grade and record the reading per phone.</p>

<h2>6. Parts and Service History: known</h2>
<p>On iOS 15.2 and later, Settings, General, About shows any replaced battery, display or camera as genuine, Unknown Part or, on newer models, Used. Decide in advance what you accept and at what price.</p>

<h2>7. Model number and market: as ordered</h2>
<p>Settings, General, About, Model Number. The first letter tells you what kind of unit it is: M for a retail unit, F for Apple refurbished, N for a replacement unit from Apple, P for a personalised (engraved) one. The letters before the slash show the market, for example LL for the US, B for the UK and Ireland, J for Japan, ZP for Hong Kong, CH for mainland China and X for Australia. That decides SIM type, shutter sound and more.</p>

<h2>8. Full function test</h2>
<p>Screen and touch edge to edge, Face ID or Touch ID, True Tone, front and rear cameras, every microphone, earpiece and speaker, charging port, wireless charging, Wi-Fi, Bluetooth, SIM, buttons, vibration and the proximity sensor. A few minutes per phone, and every check matters to the person who buys it.</p>

<h2>9. Cosmetic grade: against your written spec</h2>
<p>Grade under good light against the definitions you agreed, and photograph anything borderline. If you haven't written the definitions yet, start with our guide to <a href="/phone-parts/guides/used-iphone-grades-explained/">used iPhone grades</a>.</p>

<h2>Or let us do it on the floor</h2>
<p>This is exactly what our buyer and our bench do in Shenzhen, on every phone, before you pay the balance. You get the IMEI list, the test record and a video of your batch. See <a href="/phone-parts/used-iphones-wholesale/">wholesale used iPhones</a>.</p>`,
    faq: [
      { q: 'How can I tell if a used iPhone is unlocked?', a: 'Go to Settings, General, About and look at Carrier Lock. An unlocked iPhone shows No SIM restrictions.' },
      { q: 'How can I tell which country an iPhone was made for?', a: 'Check the Model Number in Settings, General, About. The letters before the slash show the market, for example LL for the US, B for the UK and Ireland, J for Japan, ZP for Hong Kong and CH for mainland China.' },
      { q: 'Can Activation Lock be removed from a used iPhone?', a: 'Only by the owner of the Apple Account it is tied to, or by Apple with proof of purchase. A wholesale buyer cannot remove it, so locked phones should be rejected.' },
    ],
  },
];
