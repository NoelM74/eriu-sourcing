// Motorcycles & scooters section (/motorcycles/ and /motorcycles/<brand>/).
// Owner decisions (2026-11-11):
//   - Trade only: dealers, importers and fleets. No single bikes for private buyers.
//   - Ériu is presented as the sales agent at factory prices. Never name or
//     describe the wholesaler behind the supply.
//   - Terms: factory prices, FOB China or delivered; freight and lead time
//     confirmed in the quote; inspected before shipping. Buyers can visit and
//     see the bikes in Zhengzhou by appointment (never call it "our warehouse").
//   - Road approval / homologation: do not mention.
//   - Model names and specs: supplied and confirmed by the owner (from the
//     makers' published specs). Photos: the makers' own product photos, used
//     with the owner's approval as their sales agent.
//   - Used bikes: "coming soon", all five brands, fully checked and refurbished.
// Removed from the source copy as unverifiable or wrong: "first production
// cruiser with an inline four", "sells through Keeway", "default scooter
// brand in forty countries", "hundreds of units", "stock list the same day".

const IMG = '/images/motorcycles/';

export const motoBrands = [
  {
    slug: 'benda',
    name: 'Benda',
    kind: 'motorcycles',
    tagline: 'Cruisers with a difference.',
    focus: 'Cruisers',
    cover: { src: IMG + 'benda-motorcycles-wholesale', w: 1600, h: 900, alt: 'Benda LFC 700 cruiser motorcycle, side view on a dark background' },
    story: 'Benda was founded in Hangzhou in 2016 and builds cruisers, and not much else. The range runs from the Chinchilla 500, a V-twin cruiser, to the LFC 700, a low-slung cruiser powered by a 680 cc inline four with 84 hp and a seat just 695 mm from the ground.',
    dealerNote: 'A cruiser line with styling your customers will not see at the dealer down the road.',
    summary: 'V-twin and inline-four cruisers, from 500 cc to 680 cc.',
    models: [
      { name: 'LFC 700', type: 'Cruiser', img: 'benda-lfc-700-cruiser', w: 1000, h: 667, specs: ['680 cc inline four', '84 hp', '287 kg', '695 mm seat'] },
      { name: 'Chinchilla 500', type: 'Cruiser', img: 'benda-chinchilla-500-cruiser', w: 1000, h: 667, specs: ['500 cc V-twin'] },
      { name: 'LFC 700 Pro', type: 'Cruiser', img: 'benda-lfc-700-pro-cruiser', w: 1200, h: 675, specs: ['1,720 mm wheelbase', '650–730 mm seat', '300 mm rear tyre'] },
    ],
    also: [],
  },
  {
    slug: 'kove',
    name: 'Kove',
    kind: 'motorcycles',
    tagline: 'Rally bred, built light.',
    focus: 'Adventure and rally',
    cover: { src: IMG + 'kove-motorcycles-wholesale', w: 1600, h: 900, alt: 'Kove 800X adventure motorcycle in white, side view on a dark background' },
    story: 'Kove was founded in Chongqing in 2017 and went racing before it went selling: a factory rally team and a Dakar finish came first, and the road bikes were developed on the back of them. The range is built light. The 800X carries a 799 cc twin with 95 hp in a 183 kg chassis.',
    dealerNote: 'Adventure bikes with a racing story behind them, from a single-cylinder 450 to the 800X twin.',
    summary: 'Adventure and rally bikes, from the 450 Rally to the 800X.',
    models: [
      { name: '800X', type: 'Adventure', img: 'kove-800x-adventure', w: 1000, h: 667, specs: ['799 cc twin', '95 hp', '183 kg', '875 mm seat'] },
      { name: '450 Rally', type: 'Rally', img: 'kove-450-rally', w: 1000, h: 667, specs: ['449 cc single', '51 hp', '145 kg dry', '965 mm seat'] },
      { name: '625X', type: 'Adventure', img: 'kove-625x-adventure', w: 1000, h: 667, specs: ['625 cc class'] },
      { name: '800X Rally', type: 'Adventure', img: 'kove-800x-rally-adventure', w: 1200, h: 750, specs: ['799 cc', '69.5 kW', '176 kg curb', '890 mm seat'] },
    ],
    also: [],
  },
  {
    slug: 'cyclone',
    name: 'Cyclone',
    kind: 'motorcycles and scooters',
    tagline: "Zongshen's own brand.",
    focus: 'Adventure, naked, custom and scooters',
    cover: { src: IMG + 'cyclone-motorcycles-wholesale', w: 1600, h: 900, alt: 'Cyclone adventure motorcycle with aluminium panniers, side view on a dark background' },
    story: 'Cyclone is the motorcycle brand of Zongshen, one of China\'s biggest engine builders and in business since 1992. It is the widest range here: 125 cc adventure bikes, customs and nakeds, 289 cc scooters, the RX600 and RX4 adventure twins, and the RA1000, a 996 cc V-twin naked.',
    dealerNote: 'One brand that covers learner 125s, scooters, adventure twins and a big V-twin naked.',
    summary: '125 cc to 996 cc: adventure, naked, custom and scooters.',
    models: [
      { name: 'RX2', type: 'Adventure', img: 'cyclone-rx2-125-adventure', w: 1000, h: 667, specs: ['125 cc single', '15 hp', 'TCS + ABS'] },
      { name: 'Explorer', type: 'Adventure', img: 'cyclone-explorer-125', w: 1000, h: 667, specs: ['125 cc single', '12.6 hp', '141 kg', '820 mm seat'] },
      { name: 'RX600', type: 'Adventure', img: 'cyclone-rx600-adventure', w: 1024, h: 716, specs: ['550 cc twin', '47.5–59.2 hp', '219 kg', '820 mm seat'] },
      { name: 'RX4', type: 'Adventure', img: 'cyclone-rx4-adventure', w: 1024, h: 716, specs: ['401 cc twin', '36.2 hp', '215 kg', '810 mm seat'] },
      { name: 'RA1000', type: 'Naked', img: 'cyclone-ra1000-naked', w: 1024, h: 716, specs: ['996 cc V-twin', '106.7 hp', '225 kg', '780 mm seat'] },
      { name: 'Battlo', type: 'Naked', img: 'cyclone-battlo-125-naked', w: 1024, h: 716, specs: ['125 cc single', '15 hp', '149 kg', '765 mm seat'] },
      { name: 'RA2', type: 'Custom', img: 'cyclone-ra2-125-custom', w: 1024, h: 716, specs: ['125 cc single', '12 hp', '144 kg', '720 mm seat'] },
      { name: 'RA125 Plus', type: 'Custom', img: 'cyclone-ra125-plus-custom', w: 1024, h: 716, specs: ['124 cc single', '15 hp', '153 kg', '740 mm seat'] },
      { name: 'RT2', type: 'Scooter', img: 'cyclone-rt2-scooter', w: 1024, h: 716, specs: ['289 cc single', '24 hp', '183 kg', '795 mm seat'] },
      { name: 'RT3S', type: 'Scooter', img: 'cyclone-rt3s-scooter', w: 1024, h: 716, specs: ['289 cc single', '24 hp', '201 kg', '765 mm seat'] },
      { name: 'RT1', type: 'Scooter', img: 'cyclone-rt1-125-scooter', w: 1024, h: 716, specs: ['125 cc single', '11.7 hp', '142 kg', '810 mm seat'] },
    ],
    also: [
      { name: 'RX6', specs: ['650 cc twin', '70 hp'] },
      { name: 'RA600', specs: ['550 cc twin', '59 hp'] },
      { name: 'RX1 Pro', specs: ['125 cc class'] },
    ],
  },
  {
    slug: 'kymco',
    name: 'Kymco',
    kind: 'scooters and motorcycles',
    tagline: 'Scooters since 1963.',
    focus: 'Scooters, maxi scooters and three-wheelers',
    cover: { src: IMG + 'kymco-scooters-wholesale', w: 1600, h: 900, alt: 'Kymco maxi scooter parked in front of a modern office building' },
    story: 'Kymco has built two-wheelers in Kaohsiung, Taiwan, since 1963, first in partnership with Honda and later under its own name, and is one of the largest scooter makers in the world. The range runs from the 49 cc Agility 50 to the AK 575 twin-cylinder flagship, the three-wheeled CV3 and the DTX adventure scooters.',
    dealerNote: 'The scooter brand riders already know, from 50 cc city scooters to a 575 cc maxi.',
    summary: 'Scooters from 49 cc to the 575 cc AK 575, plus the three-wheeled CV3.',
    models: [
      { name: 'AK 575 Premium', type: 'Maxi scooter', img: 'kymco-ak-575-premium-maxi-scooter', w: 1000, h: 667, specs: ['575 cc twin', '51 hp', '226 kg'] },
      { name: 'CV3', type: 'Three-wheel maxi scooter', img: 'kymco-cv3-three-wheel-scooter', w: 1000, h: 667, specs: ['550 cc', 'Three wheels'] },
      { name: 'DTX 320', type: 'Adventure scooter', img: 'kymco-dtx-320-adventure-scooter', w: 1000, h: 667, specs: ['320 cc'] },
      { name: 'Downtown GT 350i', type: 'Scooter', img: 'kymco-downtown-gt-350i-scooter', w: 1024, h: 1024, specs: ['321 cc', '28.2 hp', '198 kg dry', '810 mm seat'] },
      { name: 'Like 150i', type: 'Scooter', img: 'kymco-like-150i-scooter', w: 1024, h: 922, specs: ['149.8 cc', '13.5 hp', '120 kg dry', '790 mm seat'] },
      { name: 'Agility 50', type: 'Scooter', img: 'kymco-agility-50-scooter', w: 1024, h: 1024, specs: ['49 cc', '92.5 kg dry', '737 mm seat'] },
    ],
    also: [
      { name: 'Xciting 400i', specs: [] },
      { name: 'Xciting VS400', specs: [] },
      { name: 'XTown 300i', specs: [] },
      { name: 'Agility S', specs: [] },
    ],
  },
  {
    slug: 'lifan',
    name: 'Lifan',
    kind: 'motorcycles',
    tagline: 'The commuter, done properly.',
    focus: 'Commuter and sport 200s',
    cover: { src: IMG + 'lifan-motorcycles-wholesale', w: 1600, h: 900, alt: 'Lifan KPR 200 faired motorcycle in red and black in a studio' },
    story: 'Lifan has built engines and motorcycles since 1992 for people who need to get to work. The brief has barely changed: cheap to buy, cheap to run and simple enough to service yourself. The KPR 200 adds a full fairing and fuel injection to that recipe.',
    dealerNote: 'Dependable 200 cc commuters for riders who buy on price and running costs.',
    summary: '198 cc fuel-injected commuters, faired and naked.',
    models: [
      { name: 'KPR 200', type: 'Sport', img: 'lifan-kpr-200-sport', w: 1000, h: 667, specs: ['198 cc single', '17 hp', '150 kg', '770 mm seat'] },
      { name: 'KP 200', type: 'Naked', img: 'lifan-kp-200-naked', w: 936, h: 620, specs: ['198 cc', '17 hp', '145 kg', '775 mm seat'] },
    ],
    also: [
      { name: 'KPM 200', specs: ['198 cc single', '17 hp', 'Naked'] },
    ],
  },
];

// One headline bike per brand for the main page, with the figures that separate them.
export const motoFeatured = [
  { brand: 'benda', model: 'LFC 700', desc: 'A cruiser built around a 680 cc inline four: 84 hp, and a seat only 695 mm from the ground.', ledger: { engine: '680 cc inline four', power: '84 hp', weight: '287 kg', seat: '695 mm' } },
  { brand: 'kove', model: '800X', desc: 'Rally know-how built for the road: a 799 cc twin with 95 hp in a 183 kg chassis.', ledger: { engine: '799 cc twin', power: '95 hp', weight: '183 kg', seat: '875 mm' } },
  { brand: 'cyclone', model: 'RX2', desc: 'A 125 cc adventure bike with 15 hp, long-travel suspension, traction control and ABS.', ledger: { engine: '125 cc single', power: '15 hp', weight: null, seat: null } },
  { brand: 'kymco', model: 'AK 575 Premium', desc: 'Kymco\'s flagship maxi scooter: a 575 cc twin with 51 hp.', ledger: { engine: '575 cc twin', power: '51 hp', weight: '226 kg', seat: null } },
  { brand: 'lifan', model: 'KPR 200', desc: 'Full fairing, fuel injection, 198 cc and 17 hp, at a price that still works once freight is added.', ledger: { engine: '198 cc single', power: '17 hp', weight: '150 kg', seat: '770 mm' } },
];

export const motoTerms = [
  ['Who we sell to', 'Dealers, importers and fleets. Wholesale only.'],
  ['Price', 'Factory prices, FOB China or delivered to your country.'],
  ['Freight and lead time', 'Confirmed in your quote, for your models and quantities.'],
  ['Inspection', 'Every order inspected before it ships. Visit and see the bikes in Zhengzhou by appointment.'],
];

export const motoTradeOnly = {
  yes: [
    'Motorcycle and scooter dealers',
    'Importers and distributors',
    'Rental, delivery and fleet operators',
  ],
  no: [
    'Single bikes for private riders. We sell wholesale to the trade only.',
  ],
};

export const motoModelCount = motoBrands.reduce((n, b) => n + b.models.length + b.also.length, 0);
export const motoImg = (name) => IMG + name;
export const motoContact = (slug) => `/contact/?product=${slug}`;
