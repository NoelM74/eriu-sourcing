// Country markets = copy (marketsBase.js) + sourced import facts (marketFacts.js).
import { marketsBase } from './marketsBase.js';
import { marketFacts } from './marketFacts.js';

const order = ['uk', 'europe', 'usa', 'canada', 'australia', 'uae', 'south-africa'];
export const markets = order.map((k) => ({ ...marketsBase[k], ...marketFacts[k] }));
