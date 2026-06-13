# Session Handoff — Ériu modular funnel + UX work

_Last updated: 2026-06-13. Internal notes (not built into the site — lives outside `src/`/`public/`)._

## Repo & workflow
- **Repo:** `noelm74/eriu-sourcing` — Astro 6 + Tailwind v4 + Cloudflare Pages. Site: `https://eriusourcing.com`.
- **Two business lines:** factory-direct China sourcing (original) + **Modular Homes** (new).
- **Dev branch:** `claude/vigilant-cerf-izAZG`.
- **Ship workflow:** commit to branch → PR to `main` → **squash-merge** → `git merge origin/main` to reconcile branch (the repeated "Reconcile branch with squash-merged main (#NN)" commits are expected). User has authorized live merges throughout.
- **Build:** `npm run build` (currently **116 pages**). Preview: `npx astro preview --port <port>`.
- Commit message footer: `https://claude.ai/code/session_013N3ikcjpB8BSkkk3CwCi6X`. Model id `claude-opus-4-8` — **never** put in commits/PRs/artifacts.

## What shipped this session (all live on main)
1. **4 conversion spokes** (PR #52):
   - `/modular-homes/home-for-adult-children-ireland/` (Family)
   - `/modular-homes/rental-income-garden-home-ireland/` (Income — only page with a yield %)
   - `/modular-homes/permanent-modular-home-ireland/` (Permanent)
   - `/modular-homes/downsizing-granny-flat-ireland/` (Downsizing)
2. **Hub hero reposition** (PR #53): H1 "The garden home Ireland's rules were rewritten for."
3. **4 advertorials in `/blog/`** (PR #54), one per spoke, funnelling to it.
4. **Product schema `image` fix** (PR #55) — fixed Search Console "Merchant listings: Missing field 'image'".
5. **UI/UX audit fixes** (PR #56, 4 phases) — see below.

## Hard policies / integrity rules (DO NOT VIOLATE)
- **Pricing:** installed cost is **always site-specific** → there is **no single all-in number**. Pages show "we'll model your exact figure". The `allIn` / `allInNum` consts stay **null by design** (canonical, not a placeholder). Real anchors only: **€25,000 delivered** start price; Irish-built comparison **€110,000–€180,000**; **14–18 wks** order→installed; **A2 BER on a correctly installed unit**.
- **Yield %:** appears **ONLY on the Income spoke**, and is **modelled-per-quote** (never a hardcoded %). Caveats in the same breath.
- **Legal framing woven throughout** (not quarantined): draft / not-yet-enacted / "if enacted as drafted" / planning-exempt ≠ building-regs-exempt / confirm with accountant & solicitor.
- **Warranty:** "30-year anti-corrosion warranty" — **factory-given, carried by Ériu** (cover held in Ireland). User confirmed it's real.
- **Stats (CSO-verified, cited):** 41% of 18–34 live with parents (Census 2022, 440k+, up from 32% in 2011); 1m+ aged 65+ by 2030 (Population & Labour Force Projections 2023–2057). The unsupported "~a third of 25–29" was **removed** — do not reintroduce.
- **No fabricated testimonials** anywhere on the modular funnel. Proof = factual process (in-person inspection, photographed at factory/port/site, compliance pack, Irish-owned).

## Components (this session)
- **New:** `MediaFigure.astro` (single full-width image + caption), `MediaStrip.astro` (2–3 image row), `ProofBar.astro` (factual trust strip). All plain `<img>` from `/public` for now.
- **Reused:** `Breadcrumbs.astro` (**auto-emits BreadcrumbList JSON-LD** — pages must NOT also pass their own BreadcrumbList), `FAQAccordion.astro` (`items=[{q,a}]`).
- Spoke structure: imports BaseLayout + Breadcrumbs + MediaFigure + MediaStrip + ProofBar; `pageSchemas = [Product (+image[]), FAQPage]`; Product offers price 25000 EUR.

## UX audit — fixed (12 of 14)
- Phase 1: spoke imagery (showcase + interior strip + floor plan); hub hero legibility (accent `#7ff0dc`, darker overlay, text-shadow); visible breadcrumbs.
- Phase 2: WhatsApp float fades at footer (IntersectionObserver on `.site-footer`); homepage FAQ → `FAQAccordion` (DRY `faqs` array feeds schema too); branded `src/pages/404.astro` (noindex); `/testimonials/`→`/case-studies/` 301.
- Phase 3: `ProofBar` before each spoke CTA; footer **Modular Homes column** (grid now 5-col); stat counter fix (integer targets, 700ms — was showing "0.8 bases"; logic in `BaseLayout.astro` inline script); 44px touch targets (footer/legal, in `global.css`).
- Phase 4: blog meta "N min read" (225 wpm); testimonial avatars 46–52px→60–64px (`TestimonialsSection.astro` `.t-thumb`/`.t-initials`).

## Pending / follow-ups
- **#10 Responsive images** (deferred): images live in `/public` and bypass `astro:assets`. Real mobile-LCP win needs moving them into the asset pipeline. Heaviest: `zhengzhou-aerotropolis-skyline.webp` (644KB), compliance/QC blog heroes. Scope to funnel pages first.
- **#14 View transitions** (deferred): Astro `ClientRouter` would break the count-up + `.fade-up` reveal scripts unless first rewired to the `astro:page-load` event.
- **Advertorials / `dtc-advertorial-builder`:** user asked if I used it — I did **not** (no such skill exists in this env). If they provide the builder/spec, redo the 4 advertorials through it.
- **Search Console:** after deploy, re-test the 4 spoke Product schemas validate (image fix) and request indexing for the 8 new URLs. Sitemap to submit: `https://eriusourcing.com/sitemap-index.xml` (robots.txt already points to it — confirmed).

## Environment gotchas
- Screenshots: `npm i -D playwright-core`; chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` with `--no-sandbox`; **uninstall playwright-core + `git checkout -- package.json package-lock.json` before committing** (don't commit it as a dep). Disable `scroll-behavior:smooth` (in `global.css`) when scripting scroll screenshots.
- `pkill -f "astro preview"` tends to kill the bash shell (exit 144) — avoid; just start a fresh port.
- Redirects source = `public/_redirects` (Cloudflare). Blog posts are data-driven from `src/data/blogPosts.js` (HTML `body` strings); modular posts use `category: 'modular-homes'`; `blog/[slug].astro` has a category-conditional CTA (modular → site-review pitch).
- GitHub only via `mcp__github__*` tools; repo scope `noelm74/eriu-sourcing`.
