// Motorcycles & scooters section (/motorcycles/, /motorcycles/<brand>/, /motorcycles/<brand>/<model>/).
//
// Owner decisions (2026-11-11):
//   - Trade only: dealers, importers and fleets. No single bikes for private buyers.
//   - Ériu is presented as the sales agent at factory prices. Never name or
//     describe the wholesaler behind the supply.
//   - Terms: factory prices, FOB China or delivered; freight and lead time
//     confirmed in the quote; inspected before shipping. Buyers can visit and
//     see the bikes in Zhengzhou by appointment (never call it "our warehouse").
//   - Road approval / homologation / emissions: do not mention.
//   - Model data and photos: from the makers' own sites (owner, 2026-11-11:
//     "research some of the brand pages directly for exact specs and photos").
//     Built into src/data/moto/<brand>.json by scripts/build-moto-data.mjs.
//   - Used bikes: "coming soon", all five brands, fully checked and refurbished.

import benda from './moto/benda.json';
import kove from './moto/kove.json';
import cyclone from './moto/cyclone.json';
import kymco from './moto/kymco.json';
import lifan from './moto/lifan.json';

const research = { benda, kove, cyclone, kymco, lifan };

// Brand-level copy written for the site; the model data comes from research.
const brandMeta = [
  { slug: 'benda', name: 'Benda', kind: 'motorcycles', focus: 'Cruisers and bobbers', tagline: 'Cruisers with a difference.', dealerNote: 'A cruiser line with styling your customers will not see at the dealer down the road.', hero: 'lfc-700' },
  { slug: 'kove', name: 'Kove', kind: 'motorcycles', focus: 'Adventure, rally and sport', tagline: 'Rally bred, built light.', dealerNote: 'Adventure, rally, sport and off-road bikes built light, with a racing story behind them.', hero: '800x-pro' },
  { slug: 'cyclone', name: 'Cyclone', kind: 'motorcycles and scooters', focus: 'Adventure, naked, custom and scooters', tagline: "Zongshen's own brand.", dealerNote: 'One brand that covers learner 125s, scooters, adventure twins and a big V-twin naked.', hero: 'rx600' },
  { slug: 'kymco', name: 'Kymco', kind: 'scooters and motorcycles', focus: 'Scooters, maxi scooters and three-wheelers', tagline: 'Scooters since 1963.', dealerNote: 'The scooter brand riders already know, from 50 cc city scooters to a 575 cc maxi.', hero: 'ak-575-premium' },
  { slug: 'lifan', name: 'Lifan', kind: 'motorcycles', focus: 'Commuter and sport', tagline: 'The commuter, done properly.', dealerNote: 'Dependable everyday motorcycles for riders who buy on price and running costs.', hero: 'kpr-200' },
];

export const motoBrands = brandMeta.map((b) => {
  const r = research[b.slug];
  const models = r.models.map((m) => ({ ...m, brand: b.slug, brandName: b.name, url: `/motorcycles/${b.slug}/${m.slug}/` }));
  const heroModel = models.find((m) => m.slug === b.hero) ?? models.find((m) => m.images.length) ?? models[0];
  const categories = [...new Set(models.map((m) => m.category))];
  const ccs = models.map((m) => m.key?.cc).filter(Boolean);
  return {
    ...b,
    story: r.brandStory,
    checked: r.checked,
    models,
    heroModel,
    categories,
    ccRange: ccs.length ? [Math.min(...ccs), Math.max(...ccs)] : null,
    url: `/motorcycles/${b.slug}/`,
  };
});

export const allModels = motoBrands.flatMap((b) => b.models);
export const motoModelCount = allModels.length;
const allCc = allModels.map((m) => m.key?.cc).filter(Boolean);
export const motoCcRange = [Math.min(...allCc), Math.max(...allCc)];
export const motoCategories = [...new Set(allModels.map((m) => m.category))];

export const motoTerms = [
  ['Who we sell to', 'Dealers, importers and fleets. Wholesale only.'],
  ['Price', 'Factory prices, FOB China or delivered to your country.'],
  ['Freight and lead time', 'Confirmed in your quote, for your models and quantities.'],
  ['Inspection', 'Every order inspected before it ships. Visit and see the bikes in Zhengzhou by appointment.'],
];

export const motoTradeOnly = {
  yes: ['Motorcycle and scooter dealers', 'Importers and distributors', 'Rental, delivery and fleet operators'],
  no: ['Single bikes for private riders. We sell wholesale to the trade only.'],
};

export const motoContact = (slug) => `/contact/?product=${slug}`;
export const modelContactSlug = (m) => `moto-${m.brand}-${m.slug}`;
export const fullName = (m) => `${m.brandName} ${m.name}`;
