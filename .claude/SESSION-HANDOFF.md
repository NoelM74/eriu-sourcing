# Session Handoff — Ériu modular funnel, UX & SEO work

_Last updated: 2026-06-13. Internal notes (not built into the site — lives outside `src/`/`public/`)._

## Repo & workflow
- **Repo:** `noelm74/eriu-sourcing` — Astro 6 + Tailwind v4 + Cloudflare Pages (static SSG, no adapter). Site: `https://eriusourcing.com`.
- **Two business lines:** factory-direct China sourcing (original) + **Modular Homes** (`/modular-homes/` silo).
- **Dev branch:** `claude/vigilant-cerf-izAZG`.
- **Ship workflow:** commit to branch → PR to `main` → **squash-merge** → `git merge origin/main` to reconcile branch (the "Reconcile branch with squash-merged main (#NN)" commits are expected). User has authorised live merges throughout.
- **Build:** `npm run build` (currently **116 pages**). Preview: `npx astro preview --port <port>`.
- Commit footer: `https://claude.ai/code/session_013N3ikcjpB8BSkkk3CwCi6X`. Model id `claude-opus-4-8` — **never** put in commits/PRs/artifacts.

## What shipped this session (all live on main)
1. **4 modular conversion spokes** (PR #52): `/modular-homes/home-for-adult-children-ireland/` (Family), `/rental-income-garden-home-ireland/` (Income — only page with a yield %), `/permanent-modular-home-ireland/` (Permanent), `/downsizing-granny-flat-ireland/` (Downsizing).
2. **Hub hero reposition** (PR #53): H1 "The garden home Ireland's rules were rewritten for."
3. **4 advertorials in `/blog/`** (PR #54), one per spoke, funnelling to it.
4. **Product schema `image` fix** (PR #55) — fixed Search Console "Merchant listings: Missing field 'image'".
5. **UI/UX audit fixes** (PR #56, 4 phases).
6. **SEO: 43 meta descriptions trimmed to 70–160 chars + mojibake fix** (PR #57). Fixed UTF-8 corruption in `blogPosts.js`: `ÔÇö`→— (×102), `ÔÇô`→– (×19), `├ë`→É (×3) — the **Incoterms** post (title+desc+body) and **private-label** post (title+desc) rendered garbage.
7. **SEO P2: internal-linking pass** (PR #58). Source product template now has a "More in {category}" sibling block (rotating window of 8, even coverage → construction-materials pages 1→9 inbound, machinery fully cross-linked). New `ZhengzhouNav.astro` cross-links the Zhengzhou pillar + 4 subs (1→4 inbound each).
8. **SEO P1: responsive images Phase 1** (PR #59). `astro:assets` build-time resize + srcset for the modular **funnel imagery + hub hero** (LCP). Hero 336kB→212kB + 640–1280w variants.

## Hard policies / integrity rules (DO NOT VIOLATE)
- **Pricing:** installed cost is **always site-specific** → **no single all-in number**. Pages show "we'll model your exact figure". `allIn`/`allInNum` stay **null by design** (canonical, not placeholder). Real anchors only: **€25,000 delivered** start; Irish-built **€110,000–€180,000**; **14–18 wks**; **A2 BER on a correctly installed unit**.
- **Yield %:** ONLY on the Income spoke, **modelled-per-quote** (never hardcoded). Caveats in the same breath.
- **Legal framing woven throughout:** draft / not-yet-enacted / "if enacted as drafted" / planning-exempt ≠ building-regs-exempt / confirm with accountant & solicitor.
- **Warranty:** "30-year anti-corrosion warranty" — **factory-given, carried by Ériu**. User confirmed real.
- **Stats (CSO-verified, cited):** 41% of 18–34 live with parents (Census 2022, 440k+, from 32% in 2011); 1m+ aged 65+ by 2030 (Pop & Labour Force Projections 2023–2057). The unsupported "~a third of 25–29" was **removed** — do not reintroduce.
- **No fabricated testimonials** on the modular funnel. Proof = factual process (in-person inspection, photographed at factory/port/site, compliance pack, Irish-owned).

## Key components / patterns
- **New:** `MediaFigure.astro` + `MediaStrip.astro` (funnel imagery — now use `astro:assets <Image>` via the resolver, with raw-`<img>` fallback), `ProofBar.astro` (factual trust strip), `ZhengzhouNav.astro` (cluster cross-links).
- **`src/lib/optimizedImages.ts`** — `import.meta.glob` resolver: maps `/images/<file>` → optimized `ImageMetadata` IF a copy exists under `src/assets/images/`. `responsiveWidths()` never upscales. **To optimise a new image: copy it into `src/assets/images/`** (keep the `/public` original for OG/schema absolute URLs — those are built as `${siteUrl}/images/...` strings and must stay valid).
- **Reused:** `Breadcrumbs.astro` (**auto-emits BreadcrumbList JSON-LD** — pages must NOT also pass their own), `FAQAccordion.astro` (`items=[{q,a}]`, used on homepage + hub + spokes).
- Spoke structure: imports BaseLayout + Breadcrumbs + MediaFigure + MediaStrip + ProofBar; `pageSchemas = [Product (+image[]), FAQPage]`; Product offer price 25000 EUR.

## Content model (for SEO/strategy work)
- **Source category pillars** (`src/data/sourcingPages.js`): electronics, furniture, construction-materials, hospitality-fitout, pet-supplies, modular-buildings, machinery.
- **Source product spokes** (`src/data/products.js`, rendered by `source/[category]/[product].astro`): construction-materials **21**, machinery 5, inflatables 2, furniture 2, cutting-tools 1. **electronics / hospitality-fitout / pet-supplies / modular-buildings have 0 spokes** (thin clusters).
- **Offer/BOFU pages** (`src/pages/source/*.astro`): glamping, cnc-cutting-tables, ev-charger, mini-excavators, precast, private-label, retail-wholesale, warehouse-racking; + `fiber-optic-cable/` cluster.
- **Blog** (`src/data/blogPosts.js`, 24 posts): mostly informational/TOFU + commercial-investigation/MOFU; 4 modular advertorials are "commercial".
- **Authority:** `/china-network/`, `/zhengzhou/` (pillar + 4 subs), `/how-it-works/`, `/why-direct/`, `/case-studies/`, `/about/`.

## SEO STRATEGY AUDIT — findings & roadmap (delivered 2026-06-13, not yet actioned)
**Tier 1 (biggest authority upside):**
1. **Build the Electronics cluster** — empty pillar, huge Shenzhen-sourcing demand, site has the base. 5–8 product spokes + BOFU. *Highest ROI.*
2. **Fill the other 3 empty pillars** (hospitality fit-out, pet supplies, modular buildings) — 3–5 spokes each.

**Tier 2 (capture & convert):**
3. **Resolve back-garden cannibalisation** — 3 pages compete on the theme: `/modular-homes/back-garden-homes-ireland/` (make canonical "money" page), `/modular-homes/auxiliary-dwelling-ireland/` (legal sub-intent), `/blog/ireland-april-2026-back-garden-home-rules-explained/` (news). Link sub-pages UP to canonical. *Quickest win.*
4. **Add BOFU "supplier/buy" landing pages** for deep categories (mirror the modular spoke model).
5. **Fix geo-targeting:** hreflang is **en-IE only** but several posts target "Europe"/"UK" (EV chargers, fiber optic, sandwich panels, glamping). Decide Ireland-only vs Ireland+UK+EU and align hreflang + content angle.

**Tier 3 (strategic):**
6. **Two-domain question:** modular vs sourcing split domain-level topical authority — decide if modular stays or eventually spins to its own domain before scaling further.
7. **Pre-build "regulations enacted" content** — April 2026 modular rules are still DRAFT; when enacted, that's a major SERP moment — have updates ready across the modular cluster.

## Responsive images — remaining phases (after PR #59)
- **Phase 2:** roll the `optimizedImages` resolver across data-driven templates (`source/[category]/[product]`, `blog/[slug]`, `modular-homes/models/[slug]` heroes) — bulk of the remaining ~31MB. Note blog/model heroes use `preloadImage` in BaseLayout (string path) — preload must point at the emitted URL or be dropped.
- **Phase 3:** zhengzhou skyline (644kB) + QC blog heroes (need preload handling); then de-dupe `/public` copies of migrated images.

## Other pending / minor
- **Titles >60 chars (23):** minor truncation, mostly the `| Ériu Sourcing` suffix — trim on the worst.
- **Blog `relatedSlugs` interlinking:** a few standalone posts thin on inbound links.
- **View transitions:** deferred — Astro `ClientRouter` would break the count-up + `.fade-up` scripts unless rewired to `astro:page-load` first.
- **`dtc-advertorial-builder`:** user asked if I used it — I did NOT (no such skill in this env). If they share the builder/spec, redo the 4 advertorials through it.
- **Search Console:** after deploy, re-test the 4 spoke Product schemas validate (image fix) and request indexing for the 8 new URLs. Submit `https://eriusourcing.com/sitemap-index.xml` (robots.txt already points to it).
- **Watch first Cloudflare prod build after PR #59** — confirm the `▶ /_astro/...webp (before/after)` image-optimisation step runs in their env (Sharp 0.34.5 is in the lockfile, so it should).

## Environment gotchas
- Screenshots: `npm i -D playwright-core`; chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` with `--no-sandbox`; **uninstall playwright-core + `git checkout -- package.json package-lock.json` before committing**. Disable `scroll-behavior:smooth` (`global.css`) when scripting scroll screenshots.
- `pkill -f "astro preview"` tends to kill the bash shell (exit 144) — avoid; start a fresh port instead.
- Redirects source = `public/_redirects` (Cloudflare). `blog/[slug].astro` has a category-conditional CTA (modular → site-review pitch).
- `/seo-audit`, `/seo-strategy`, `/compact` are NOT skills in this env — treat as requests (compact is a CLI command the user runs; I can't invoke it).
- GitHub only via `mcp__github__*` tools; repo scope `noelm74/eriu-sourcing`.
