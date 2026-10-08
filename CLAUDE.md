# Ériu Sourcing website

Astro 6 static site + Tailwind v4, deployed on Cloudflare Pages from `main`.
Full working context, integrity rules and roadmap: `.claude/SESSION-HANDOFF.md`. Read it at the start of every session.

## Compact instructions

When compacting or summarising this conversation, always keep:

1. **Where the site stands.** Which version is live, the latest commit hash and PR number on `main`, the working branch, and anything half-done (uncommitted edits, unmerged PRs, a build or test that was mid-run).
2. **The owner's decisions, word for word.** Prices, shipping, returns, legal and VAT position, product facts, warranty wording, and copy approvals or rejections. Quote numbers and policies exactly. Never paraphrase, round or merge them.
3. **Open questions and steps waiting on the owner.** List each one with what is needed to unblock it.
4. **Actions the safety rules blocked** (for example writing secrets, bulk deletes, force pushes), so they are not retried.
5. **Errors and their fixes**, one line each, so the same dead ends are not repeated.
6. **The hard rules:**
   - Never commit private files: `.env*`, credentials, API keys, test screenshots, or temporary dev dependencies such as `playwright-core`.
   - Secrets go in `.env` (gitignored) locally or in the Cloudflare Pages environment variables. Never in source code, commit messages, PR text or chat summaries.
   - No invented claims: no fabricated testimonials, stats, prices, certifications or client results. Only facts the owner has confirmed or that cite a verifiable source.
   - The integrity rules in `.claude/SESSION-HANDOFF.md` ("Hard policies") still apply in full.

Drop: long file contents, logs from tests or builds that passed, and step-by-step accounts of finished work. Keep the file paths and commit/PR numbers instead.
