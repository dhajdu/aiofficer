# AI Officer Institute — Content & Design Standards Audit
**Prepared by:** QA (Every.to methodology)
**Audit date:** 2026-03-31
**Method:** Full MD source → HTML diff across all tracks + design token / style guide compliance check
**Source of truth:** `/AIO/Educational Content/context/web-style-guide.md`

---

## Executive Summary

Three categories of problems found, in descending severity:

1. **Broken page** (P0): Blog index links to a post HTML that does not exist → immediate 404
2. **Unpublished content** (P0–P1): All 4 Generative AI "Words to Know" pages are stubs — the MD source has 12–16 terms each, the HTML renders a header card and nothing else
3. **Partially synced content** (P1–P2): Several Agentic AI words pages have significantly fewer terms than the MD source; one has more terms than the MD (suspect wrong content was used)

---

## Section 1 — Blog: Missing & Mismatched Pages

### Findings

| ID | Priority | Issue | Detail |
|----|----------|-------|--------|
| BUG-BLOG-01 | **P0** | `eight-marketing-trends-already-happening.html` does not exist | Blog index links to this file; clicking it will 404. The MD source is at `/Blog/2026-03-30 Eight Marketing Trends Already Happening/`. |
| BUG-BLOG-02 | **P1** | `8-marketing-trends-2026.html` is the old February 2026 post | Title: "8 Marketing Trends for 2026 That Actually Matter". A new post with the same topic ("8 Marketing Trends That Are Already Happening") exists as MD but its HTML is missing (see BUG-BLOG-01). The old post should stay; the new one needs to be built and published. |
| BUG-BLOG-03 | **P2** | Blog index links "The Four Offices of the Future" twice | Once in the featured slot and once in the sidebar list. Duplicate entry in the index. |

### Blog MD vs HTML coverage

| MD Source Folder | HTML File | Status |
|-----------------|-----------|--------|
| 2025-12-31 Interactive AI Avatars | interactive-ai-avatars.html | ✓ Published |
| 2026-01-06 Google AI Studio | google-ai-studio.html | ✓ Published |
| 2026-01-13 7 AI Dictation Tools | ai-dictation-tools.html | ✓ Published |
| 2026-01-20 Custom GPTs | custom-gpts.html | ✓ Published |
| 2026-01-29 The Leadership Brand | leadership-brand.html | ✓ Published |
| 2026-02-04 8 Marketing Trends (original) | 8-marketing-trends-2026.html | ✓ Published |
| 2026-02-27 Jack Dorsey Layoffs | jack-dorsey-layoffs.html | ✓ Published |
| 2026-03-10 Iteration Is the Secret Weapon | iteration-secret-weapon.html | ✓ Published |
| 2026-03-13 Talent System That Scales | talent-system-that-scales.html | ✓ Published |
| 2026-03-19 Four Offices of the Future | four-offices-of-the-future.html | ✓ Published |
| 2026-03-30 Eight Marketing Trends Already Happening | eight-marketing-trends-already-happening.html | ⚠️ **HTML MISSING — index 404** |
| 2026-03-30 18 Entrepreneurial Learnings | 18-entrepreneurial-learnings-worlds-toughest-markets.html | ✓ Published |
| 2026-03-30 The Hotel AI Personalization Gap | hotel-ai-personalization-guest-experience.html | ✓ Published |
| 2026-03-30 Using AI Was 2025, Leading AI Is 2026 | using-ai-was-2025-leading-ai-is-2026.html | ✓ Published |

---

## Section 2 — Generative AI: Words to Know Pages (All Stubs)

**All four Generative AI "Words to Know" pages are effectively empty.** The HTML contains only 2 "term cards" — a malformed header item (the page title rendered as a term) and one blank stub. The MD source files contain 12–16 fully written terms each.

### Term count: MD source vs HTML

| Page | Terms in MD | Terms in HTML | Gap | Status |
|------|-------------|---------------|-----|--------|
| generative-ai/mission-1-words.html | 16 | 2 | −14 | ⚠️ STUB |
| generative-ai/mission-2-words.html | 14 | 2 | −12 | ⚠️ STUB |
| generative-ai/mission-3-words.html | 12 | 2 | −10 | ⚠️ STUB |
| generative-ai/mission-4-words.html | 12 | 2 | −10 | ⚠️ STUB |

### Terms missing from Generative AI mission-1-words.html

The MD (`Mission_1_Words_to_Know.md`) defines: 50/50 Era, AI Officer, Leading AI, Narrow AI, AGI, LLM, AI Model, Training Data, Hallucination, RACE Framework, AI Interview, The AI Kingdoms, The 6 Beliefs of an AI Officer, The 5 Daily Moves, Context Window, Four Offices — **none of these appear in the HTML**.

---

## Section 3 — Agentic AI: Words to Know Pages (Partially Synced)

Agentic AI words pages were built from the MD source but several are out of sync — some are under-populated, one appears to have content from the wrong source.

### Term count: MD source vs HTML

| Page | Terms in MD | Terms in HTML | Gap | Status |
|------|-------------|---------------|-----|--------|
| agentic-ai/mission-1-words.html | 24 | 2 | −22 | ⚠️ STUB |
| agentic-ai/mission-2-words.html | 23 | 8 | −15 | ⚠️ Incomplete |
| agentic-ai/mission-3-words.html | 3 | 8 | +5 | ⚠️ Suspect wrong source |
| agentic-ai/mission-4-words.html | 45 | 12 | −33 | ⚠️ Incomplete |
| agentic-ai/mission-5-words.html | 0 (MD empty) | 27 | N/A | ⚠️ MD not written yet |
| agentic-ai/mission-6-words.html | 36 | 7 | −29 | ⚠️ Incomplete |

**Notable:** Mission-3 HTML has more terms than the MD. The MD only has 3 terms; the HTML has 8. Likely content from another mission was used to populate this page.

---

## Section 4 — Generative AI: Textbook / Slides / Prompts Pages

Spot-checked against MD source files. These appear substantially populated, but require a full read-through for accuracy. Lower priority than the empty words pages.

| Page Type | Gen AI Coverage | Notes |
|-----------|----------------|-------|
| mission-X.html (main) | Missions 1–4 | Appears in sync |
| mission-X-slides.html | Missions 1–4 | Appears in sync |
| mission-X-textbook.html | Missions 1–4 | Appears in sync |
| mission-X-prompts.html | Missions 1–4 | Appears in sync |
| mission-X-words.html | Missions 1–4 | **All stubs — see Section 2** |

---

## Section 5 — Agentic AI: Full Coverage Check

| Page Type | Missions | Notes |
|-----------|----------|-------|
| mission-X.html (main) | 1–6 | Present |
| mission-X-slides.html | 1–6 | Present |
| mission-X-textbook.html | 1–6 | Present |
| mission-X-prompts.html | 1–6 | Present |
| mission-X-words.html | 1–6 | Present but partially synced — see Section 3 |

---

## Section 6 — Micro-Sessions: Coverage

All 17 micro-sessions have all 6 page types (main, prompts, recap, resources, slides, video). No missing HTML files detected. Spot-check of deep-research recap confirms heading structure is in sync with MD source.

**Minor issue:** `build-ai-team-paperclip.html` is a duplicate/legacy file (the canonical slug is `build-your-ai-team-paperclip.html`). The `cowork-first-workflow.html` file already has a meta-refresh redirect to the canonical page. `build-ai-team-paperclip.html` should either redirect or be removed.

---

## Section 7 — Design Standards Compliance

Against `/AIO/Educational Content/context/web-style-guide.md`.

### Typography

| Standard | Expected | Finding |
|----------|----------|---------|
| Body font | DM Sans only | ✓ Shared via Google Fonts import on all pages |
| Mono font | JetBrains Mono for numbers/code | ✓ Used in sidebar numbers and badges |
| Body size | 15.5px | ⚠️ Shared styles define 15px — 0.5px off spec |
| h1 size | 32px | ✓ Mission pages |
| h2 size | 22px | ✓ |
| h2 margin-top | 48px | Needs verification on per-page basis |
| Line-height body | 1.7 | ✓ Shared styles |

### Color tokens

| Token | Expected | Status |
|-------|----------|--------|
| --navy | #04102D | ✓ Defined in shared/styles.css |
| --blue | #287BE8 | ✓ |
| --mint | #6FF2C1 | ✓ |
| --magenta | #D1458B | ✓ |
| --royal / --fuchsia | Removed (were aliases for --blue) | ✓ Cleaned in index.html |
| --border-hover | #b0b6cc | ✓ Added to shared :root in this session |

### Hero eyebrow treatment

| Page | Class | Text color | Mint line | Status |
|------|-------|-----------|-----------|--------|
| coaching.html | hero-eyebrow | rgba(255,255,255,0.85) | ✓ ::before | ✓ Fixed this session |
| certification.html | hero-eyebrow | rgba(255,255,255,0.85) | ✓ ::before | ✓ Rebuilt this session |
| micro-sessions/index.html | hero-eyebrow | rgba(255,255,255,0.85) | ✓ ::before | ✓ |
| generative-ai/mission-X pages | N/A — uses .mission-header | — | — | Different pattern, by design |

---

## Prioritised Fix Register

| ID | Priority | Category | Description | Effort |
|----|----------|----------|-------------|--------|
| BUG-BLOG-01 | **P0** | Blog | `eight-marketing-trends-already-happening.html` missing — blog index 404 | Build post HTML from MD |
| BUG-WORDS-GEN-01 | **P0** | Content | All 4 Gen AI words pages are stubs (2 items vs 12–16 in MD) | Rebuild 4 pages from MD |
| BUG-WORDS-AGE-01 | **P1** | Content | Agentic AI mission-1 words page is a stub (2 items vs 24 in MD) | Rebuild from MD |
| BUG-WORDS-AGE-02 | **P1** | Content | Agentic AI mission-6 words page has 7 items vs 36 in MD | Sync from MD |
| BUG-WORDS-AGE-03 | **P1** | Content | Agentic AI mission-4 words page has 12 items vs 45 in MD | Sync from MD |
| BUG-WORDS-AGE-04 | **P1** | Content | Agentic AI mission-3 words page has 8 items — more than the 3 in MD; suspect wrong source | Verify and correct |
| BUG-WORDS-AGE-05 | **P2** | Content | Agentic AI mission-2 words page has 8 items vs 23 in MD | Sync from MD |
| BUG-WORDS-AGE-06 | **P2** | Content | Agentic AI mission-5 words page has 27 items but MD is empty — needs MD written first | Depends on content authorship |
| BUG-BLOG-02 | **P2** | Blog | Blog index links "The Four Offices of the Future" twice | Remove duplicate entry |
| BUG-MICRO-01 | **P3** | Routing | `build-ai-team-paperclip.html` has no redirect to canonical slug | Add meta-refresh redirect |
| BUG-STYLE-01 | **P3** | Design | Body text spec is 15.5px; shared styles use 15px | Update shared/styles.css |

---

## Recommended Sprint Order

**This week (P0 blockers):**
1. Build `eight-marketing-trends-already-happening.html` from MD source → fixes live 404
2. Rebuild all 4 Gen AI words pages from MD source → restores critical vocabulary reference for paying students

**Next week (P1 content sync):**
3. Rebuild Agentic AI mission-1 words page
4. Sync Agentic AI missions 2, 4, 6 words pages from MD
5. Investigate Agentic AI mission-3 words page content mismatch

**Polish (P2–P3):**
6. Remove duplicate blog index entry
7. Add redirect on `build-ai-team-paperclip.html`
8. Correct body font-size to 15.5px

---

*Last updated: 2026-03-31*
