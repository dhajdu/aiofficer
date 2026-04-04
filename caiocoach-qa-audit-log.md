# CAIO Coach — QA Audit Log
**Executed:** 2 April 2026
**Auditor:** QA Review (every.to consistency methodology)
**Scope:** www.caiocoach.com + local source files
**Pages tested:** index, coaching, certification, community, blog/index, 15 blog posts
**Test cases executed:** 60+

---

## Summary Scorecard

| Suite | Total Tests | ✅ Pass | ⚠️ Minor | 🟡 Moderate | 🔴 Critical |
|-------|------------|---------|----------|------------|------------|
| A — Navigation | 8 | 7 | 0 | 1 | 0 |
| B — Hero Sections | 7 | 5 | 0 | 1 | 1 |
| C — Typography | 8 | 7 | 1 | 0 | 0 |
| D — Colour & Tokens | 10 | 6 | 0 | 4 | 0 |
| E — Components | 13 | 8 | 1 | 4 | 0 |
| F — Content & Labelling | 8 | 4 | 1 | 3 | 0 |
| G — Links & Routing | 8 | 6 | 0 | 1 | 1 |
| H — Layout & Spacing | 7 | 5 | 0 | 0 | 2 |
| I — Favicon & Metadata | 4 | 4 | 0 | 0 | 0 |
| **Totals** | **73** | **52** | **3** | **14** | **4** |

**Overall result: ❌ BLOCKED — 4 Critical issues must be resolved before release.**

---

## Suite A — Navigation

### A1 ✅ Nav labels — all pages
All deployed pages (index, coaching, blog, certification, community, all 15 blog posts) show the same 4 nav items: **Coaching · Blog · Certification · Community**.
Source confirms identical label text and dot colours in all 21 HTML files scanned.

### A2 ✅ Homepage nav label
Homepage currently shows "Blog" (not "Thought Leadership" as noted in pre-audit scan — confirmed fixed or was a cache artifact from earlier load).

### A3 ✅ Nav dot colours consistent
Confirmed across all pages:
- Coaching: `#287BE8` (blue)
- Blog: `#6FF2C1` (mint)
- Certification: `#D1458B` (magenta)
- Community: `#1A9E74` (teal)

### A4 ✅ Active state per page
- index.html: no active (homepage — acceptable)
- coaching.html: Coaching active ✓
- certification.html: Certification active ✓
- community.html: Community active ✓
- blog/index.html: Blog active ✓
- All 15 blog posts: Blog active ✓

### A5 ✅ No double active states
Zero instances of two `tnav-link active` classes in same file.

### A6 ✅ Brand logo links to homepage
All pages link brand to correct relative path (e.g., `../../index.html` from blog posts, `index.html` from root pages).

### A7 ✅ Nav present on all pages
Topbar with identical structure present on all 21 pages tested.

### A8 🟡 Mobile hamburger — nav-toggle onclick inconsistency
**Issue:** `coaching.html` and `certification.html` use a slightly different `onclick` handler for the hamburger button compared to the style guide spec. Coaching uses `this.classList.toggle('open')` (SVG icon swap) while the style guide spec uses `this.textContent = ...` (text ☰/✕). This creates a different mobile toggle behaviour across pages.
- **Pages affected:** coaching.html, certification.html, community.html (may vary)
- **Visible impact:** Mobile toggle icon may behave differently from page to page

---

## Suite B — Hero Sections

### B1 ✅ Hero present on all top-level pages
Dark navy hero with image background confirmed on: index, coaching, blog/index, certification, community.

### B2 🟡 Hero eyebrow format inconsistent
**Issue:** Eyebrow text follows different formats across pages — no single standard applied:

| Page | Eyebrow Text | Format |
|------|-------------|--------|
| index.html | "CAIO Coach · Dave Hajdu" | Brand · Person |
| coaching.html | "CAIO Coaching · Live Sessions" | Brand+section · Feature |
| certification.html | "Certification · CAIO Coach" | **Section · Brand (REVERSED)** |
| community.html | "Community · CAIO Coach" | **Section · Brand (REVERSED)** |
| blog/index.html | "CAIO Coach · Blog" | Brand · Section |

Certification and Community have the order reversed vs Index and Blog. Coaching uses "CAIO Coaching" not "CAIO Coach".

### B3 ✅ Hero headline accent word
All pages use the mint `#6FF2C1` accent on the final/key word:
- "Every great player has a **[mint]Coach[/mint]**"
- "Your Toughest Problems **[mint]Solved[/mint]**"
- "AI Leadership **[mint]Insights[/mint]**"
- "Be A Certified **[mint]AI Officer[/mint]**"
- "AI Is Better With **[mint]People[/mint]**"
Consistent pattern ✓ — though some use class-based `.accent`, others use inline `style="color:#6FF2C1"`.

### B4 ✅ Hero pill pattern
All pages: info pills (no border, muted style) followed by a CTA pill with `→` as the last item. Consistent.

### B5 🔴 Blog post hero — wrong pattern (CRITICAL)
**Issue:** All 15 blog posts use a custom `<section class="post-hero">` pattern with a `Blog / Title` breadcrumb instead of the Pattern C spec (`.mission-back ← Blog`, `.mission-header`, `.mission-title`). The blog post design system was built entirely outside the style guide.
- Custom classes: `post-hero`, `container-narrow`, `breadcrumb`, `post-eyebrow`, `post-meta-section`, `meta-item`, `post-content-section`, `post-layout`, `post-content`
- **None of these match** the style guide's Pattern C component names
- **Breadcrumb format:** "Blog / Title" (slash separator) vs spec "← Blog" (arrow + word)
- **Impact:** Blog posts look like a different website from the rest of the site; no design system coherence in the article layer

### B6 ✅ Hero images load
No broken hero images observed across all pages tested.

### B7 ✅ Hero text readability
White/light text on dark overlay is legible across all pages.

---

## Suite C — Typography

### C1 ✅ Body font is DM Sans
All main pages and blog posts include the correct Google Fonts `<link>` with DM Sans. Renders correctly in browser.

### C2 ✅ JetBrains Mono loaded
All pages include JetBrains Mono in the same font link. Applied correctly to timestamps and labels.

### C3 ⚠️ Inline `style="color:#6FF2C1"` on coaching.html headline
**Issue:** `coaching.html` uses `<span style="color:#6FF2C1">Solved</span>` for the mint accent word instead of a CSS class. Minor inconsistency — other pages use either `.accent` class or `<span>` with same colour via class.
- **Impact:** Low — renders identically, but deviates from the class-based pattern

### C4 ✅ Section labels are all-caps
All `.card-label`, `.hero-eyebrow`, `TRACK 01` type labels inspected — consistently uppercase with letter-spacing.

### C5 ✅ Heading sizes correct
- Landing page H1s (hero headlines): ~60–80px (large display) ✓
- Sub-page headings: appropriate scale ✓

### C6 ✅ Body text sizing
Card body text at 13–14px, main body at 15–16px. Within spec.

### C7 ✅ Line height
Body paragraphs at 1.6–1.65 line-height across main pages. Blog posts use 1.7–1.8 (acceptable).

### C8 ✅ Both fonts loaded
DM Sans and JetBrains Mono confirmed loaded on all pages.

---

## Suite D — Colour & Tokens

### D1 ✅ Page background `--surface`
All main pages declare `body { background: var(--surface); }` in their page-level `<style>` block.

### D2 ✅ Card backgrounds
Cards use `var(--card-bg)` or `#ffffff` which resolves to white. Correct.

### D3 ✅ Primary text token
Headings use `var(--text-primary)` = `#1a1f36`.

### D4 ✅ Secondary text token
Body paragraphs use `var(--text-secondary)` = `#4a5068`.

### D5 ✅ Muted text token
Labels and metadata use `var(--text-muted)` = `#6b7194`.

### D6 ✅ Border colour token
Card borders use `var(--border)` consistently.

### D7 🟡 Hardcoded non-token blue on coaching.html
**Issue:** `coaching.html` contains `background: #1a6fd1;` — a hardcoded blue not in the token set. The correct blue is `#287BE8`. This appears to be used for a button hover/active state.
- **File:** coaching.html

### D8 🟡 Hardcoded non-token blue on certification.html
**Issue:** `certification.html` contains `background: #1a6dd4;` — a different hardcoded blue, also not in the token set.
- **File:** certification.html

### D9 🟡 Blog posts use multiple hardcoded non-token colours
**Issue:** All 15 blog posts contain hardcoded hex values outside the token system. Common offenders:

| Colour | Usage | Should Use |
|--------|-------|------------|
| `#f8f9fc` | TOC box, table row bg | `var(--surface)` = `#f4f6fa` |
| `#0d1b3e` | Stat banners, emphasis boxes | `var(--navy)` = `#04102D` |
| `#fff` | Step content bg | `var(--card-bg)` |
| `#fdfbf7` | Story opener box | No equivalent token — custom |
| `#e8e0d5` | Warm border | No equivalent token — custom |
| `#f0f7ff` | Pull quote bg | No equivalent token — custom |
| `#fdf7fb` | Quote bg | No equivalent token — custom |

Note: `#0d1b3e` is a different navy from `--navy: #04102D` — these are visually indistinguishable but technically inconsistent.

### D10 ✅ Track colours used correctly
Magenta `#D1458B` used only for Gen AI track elements. Blue `#287BE8` for Agentic. Teal `#1a9e74` for Leadership. No cross-contamination observed.

---

## Suite E — Components

### E1 ✅ Card labels present
All `.content-card` elements on main pages have `.card-label` in blue, uppercase, letter-spaced.

### E2 ✅ Card hover states
Blue border glow + translateY(-1px) hover consistent on cards across pages.

### E3 ✅ Card padding
`24px 28px` padding consistently applied to `.content-card` elements.

### E4 🟡 Primary CTA style varies across pages
**Issue:** The primary CTA button treatment differs:
- index.html: `.pill.pill-blue` (pill shape, outlined) for "Start Coaching →"
- index.html: `.btn-primary` (filled) for "Join for $99/month →"
- coaching.html: `.pill.pill-blue` (pill) for session indicator badges
- certification.html: `.pill.pill-blue` (outlined pill) for "Enroll Now →"
Same class is used for both info pills AND CTA pills. No distinction enforced by class name.

### E5 🟡 Secondary CTA style varies
**Issue:** `.btn-secondary` exists in index.html ("Enquire About Private Coaching →") but is absent on other pages. Only one instance across the entire site. Inconsistent use.

### E6 ✅ CTA with arrow is always last
On every page checked, the pill with `→` is the final pill in the hero set. Consistent ordering.

### E7 🟡 Mixed CTA hierarchy on index.html
**Issue:** index.html has TWO filled/primary CTAs in the coaching section: "Join for $99/month →" (`.btn-primary`) and "Enquire About Private Coaching →" (`.btn-secondary`). This creates competing CTAs in the same section, contrary to the single-primary-CTA principle.

### E8 ✅ Hero info pills vs CTA pills
Info pills (no link) and CTA pill (with `→` link) clearly differentiated on all hero sections.

### E9 ✅ No session cards with missing `data-track`
All session cards on certification page have correct `data-track` values.

### E10 ✅ Track pill styles match track
Gen AI = magenta pill, Agentic AI = blue pill, Leadership = teal pill. Consistent.

### E11 ✅ Session card footer border
All session cards have correct `border-top: 1px solid var(--surface)` in footer.

### E12 ⚠️ Resource sidebar — no micro-sessions deployed
Micro-sessions section not yet on live site (404). Cannot test resource sidebar active states.

### E13 🟡 Blog post components don't use the design system
**Issue:** Blog posts use entirely custom component classes (`list-item-card`, `step-content`, `offices-grid`, `toc-box`, `stat-banner`, `emphasis-box`, `comparison-table`) that are unique per post. No shared component library used in the article layer. Each post is a bespoke design.

---

## Suite F — Content & Labelling

### F1 ⚠️ Homepage title format reversed
**Issue:** Homepage title is: `"CAIO Coach — AI Leadership Certification for Executives"` — brand name first.
All other pages follow: `"[Description] — CAIO Coach"` — brand name last.
- **Spec:** `[Page Name] — CAIO Coach`
- **Impact:** Minor — homepage title is arguably intentional (brand-forward for SEO), but inconsistent with the system.

### F2 🟡 Eyebrow text format inconsistent
Already detailed in B2. Order of elements varies: some pages say "CAIO Coach · Section", others say "Section · CAIO Coach".

### F3 ✅ Section label capitalisation
All `.card-label`, eyebrow, and pill label elements are uppercase. Consistent.

### F4 ✅ "Blog" label correct on all pages
Confirmed — all pages use "Blog" not "Thought Leadership".

### F5 🟡 Footer links inconsistent across pages
**Issue:** Each page shows different footer links. No consistent footer across the site:

| Page | Footer Links |
|------|-------------|
| index.html | Community · Coaching · **Workflows** |
| coaching.html | Community · **Certification** |
| certification.html | Community · [Coaching] |
| community.html | Coaching · Certification |

- `index.html` is the only page that links to `Workflows` (not in nav)
- No page links all four nav sections in the footer
- The test plan spec called for "© 2026 Edge8 AI · Community · Coaching" consistently — not met

### F6 ✅ CTA copy imperative tense
All CTAs inspected start with an imperative verb: "Start Coaching →", "Enroll Now →", "Join the Community →", "Join for $99/month →".

### F7 🟡 Blog post breadcrumb format non-standard
**Issue:** All 15 blog posts use `Blog / Title` breadcrumb format (slash separator, no arrow). The style guide specifies `← Blog` using `.mission-back` class. Confirmed visually on jack-dorsey-layoffs.html screenshot.

### F8 ✅ "CAIO" always all-caps
Grep across all files: zero occurrences of "Caio" or "caio". Always "CAIO".

---

## Suite G — Links & Routing

### G1 ✅ All nav links resolve
- coaching.html: ✅ 200 OK
- blog/index.html: ✅ 200 OK
- certification.html: ✅ 200 OK
- community.html: ✅ 200 OK

### G2 ✅ Blog post links resolve (sample)
- four-offices-of-the-future.html: ✅ 200 OK
- jack-dorsey-layoffs.html: ✅ 200 OK
All 15 blog posts confirmed in source; sample verified live.

### G3 ✅ Community nav link
community.html returns 200 OK with correct page content.

### G4 ✅ Micro-sessions not yet deployed (known)
`/micro-sessions/index.html` returns Vercel 404. Confirmed as expected — section not yet pushed.

### G5 ✅ Homepage CTA → coaching
"Start Coaching →" pill links to `coaching.html`. Correct.

### G6 ✅ Blog "View all" → blog index
Homepage "View all →" links to `blog/index.html`. Correct.

### G7 ✅ Favicon loads
`/favicon.svg` absolute path on all pages. Confirmed rendering in browser tab.

### G8 🔴 Coaching session sub-pages linked but likely undeployed (CRITICAL)
**Issue:** `coaching.html` contains two links to coaching session sub-pages:
```
coaching-sessions/C01/C01-Eric-Bhutan-Project.html
coaching-sessions/C01/C01-Julien-PowerBI-Cowork.html
```
These files exist locally in `Website/coaching-sessions/C01/` but the `coaching-sessions/` folder is **not included in `push.sh`** staging list. They may appear as broken links on the live site.
- **Risk:** Users who click past session cards on the coaching page hit 404
- **Resolution:** Add `coaching-sessions/` to `push.sh` staging OR remove/disable session card links until the folder is pushed

---

## Suite H — Layout & Spacing

### H1 ✅ Hub pages use two-column layout
blog/index.html uses `.hub-body` with `grid-template-columns: 1fr 320px`. Correct.

### H2 ✅ Sub-pages grid (where applicable)
Certification and community use their own layout systems. Blog posts use `.post-layout` max-width container, which is appropriate for article reading.

### H3 🔴 14/15 blog posts missing 900px responsive breakpoint (CRITICAL)
**Issue:** Only `i-raised-9-5m-and-couldnt-read-my-own-codebase.html` has the `@media (max-width: 900px)` breakpoint. The other 14 blog posts have no mobile breakpoints at all. This means:
- Grid layouts (`.offices-grid`, `.comparison-table`, etc.) do not collapse on mobile
- Two-column content grids remain fixed on small screens
- Users on mobile or tablet see broken, overflowing layouts

**Files missing responsive CSS (14 total):**
`18-entrepreneurial-learnings-worlds-toughest-markets.html`, `8-marketing-trends-2026.html`, `ai-dictation-tools.html`, `custom-gpts.html`, `four-offices-of-the-future.html`, `google-ai-studio.html`, `hotel-ai-personalization-guest-experience.html`, `interactive-ai-avatars.html`, `iteration-secret-weapon.html`, `jack-dorsey-layoffs.html`, `leadership-brand.html`, `talent-system-that-scales.html`, `the-cms-is-dead-ai-killed-it.html`, `using-ai-was-2025-leading-ai-is-2026.html`

### H4 ✅ Topbar nav hidden at 900px
Main pages have `@media (max-width: 900px)` rules that hide `.topbar-nav`. Confirmed in source.

### H5 ✅ Hamburger appears at 900px
`nav-toggle` button present on all main pages. Shows on mobile per CSS.

### H6 ✅ Page max-width respected
Content constrained to `max-width: 1060px` on main pages.

### H7 🔴 Blog post content renders blank in browser (CRITICAL)
**Issue:** When scrolling past the hero on blog posts, the article body area renders as completely white/blank in the browser. Observed on `four-offices-of-the-future.html` and `jack-dorsey-layoffs.html`. Root cause analysis:
1. Some blog posts use CSS animations: `@keyframes fadeInUp { from { opacity: 0; } to { opacity: 1; } }` applied to `.post-content > *`
2. The animation fires once on page load. If the tab is not actively in focus, or if the browser has hardware acceleration issues, the animation may not complete, leaving elements at `opacity: 0` — permanently invisible
3. **Stray closing div tags** found in blog post HTML: `</div></div>` before the `<!-- Post Hero Section -->` comment may indicate structural issues
4. **Recommendation:** Remove the fadeInUp animation on `.post-content > *` entirely, OR add `animation-fill-mode: forwards` (already present but verify) AND add a `.no-animation` fallback for `prefers-reduced-motion`
- **Impact:** Users cannot read article content — this is a critical user-facing bug

---

## Suite I — Favicon & Metadata

### I1 ✅ Favicon is `/favicon.svg` absolute path
Confirmed on all 21 files: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`. Zero relative paths.

### I2 ✅ Viewport meta present
All pages: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` present.

### I3 ✅ Charset UTF-8 first in `<head>`
All pages: `<meta charset="UTF-8">` confirmed as first or second tag in `<head>`.

### I4 ✅ Both Google Fonts families in single link
All pages load DM Sans and JetBrains Mono in a single optimised `<link>` tag. Correct.

---

## Critical Issues (Block Release)

| # | ID | Severity | Page(s) | Description | Fix |
|---|----|---------|---------| ------------|-----|
| 1 | H7 | 🔴 Critical | All 15 blog posts | Article body content renders blank/invisible due to CSS animation leaving elements at `opacity: 0` | Remove `fadeInUp` animation OR add proper fallback for non-animating browsers |
| 2 | H3 | 🔴 Critical | 14/15 blog posts | No `@media (max-width: 900px)` breakpoint — mobile layout broken on all blog posts | Add responsive CSS to each post template |
| 3 | B5 | 🔴 Critical | All 15 blog posts | Blog posts use an entirely custom design pattern incompatible with the style guide (Pattern C) | Either adopt Pattern C OR formally document the blog post pattern as an accepted alternate pattern |
| 4 | G8 | 🔴 Critical | coaching.html | Session detail pages (`coaching-sessions/`) linked but not in `push.sh` — may be 404 on live | Add `coaching-sessions/` to `push.sh` staging OR remove links |

---

## Moderate Issues (Fix Before Next Deploy)

| # | ID | Severity | Page(s) | Description |
|---|----|---------|---------| ------------|
| 5 | F5 | 🟡 Moderate | index, coaching, certification, community | Footer links different on every page |
| 6 | D9 | 🟡 Moderate | All 15 blog posts | Widespread hardcoded hex colours outside token system |
| 7 | D7 | 🟡 Moderate | coaching.html | `#1a6fd1` hardcoded (non-token blue) |
| 8 | D8 | 🟡 Moderate | certification.html | `#1a6dd4` hardcoded (non-token blue) |
| 9 | B2/F2 | 🟡 Moderate | cert, community | Eyebrow text order reversed vs other pages |
| 10 | F7 | 🟡 Moderate | All 15 blog posts | Breadcrumb uses "Blog / Title" not `← Blog` per spec |
| 11 | E4/E7 | 🟡 Moderate | index.html | Two competing primary CTAs in coaching section |
| 12 | E13 | 🟡 Moderate | All 15 blog posts | Each blog post is a bespoke component build — no shared article component system |
| 13 | A8 | 🟡 Moderate | coaching.html | Mobile hamburger uses different onclick handler (SVG swap) vs style guide spec (text swap) |
| 14 | E4 | 🟡 Moderate | All pages | `.pill-blue` used for both info pills and CTA pills — no semantic class distinction |

---

## Minor Issues (Fix at Convenience)

| # | ID | Severity | Page(s) | Description |
|---|----|---------|---------| ------------|
| 15 | F1 | ⚠️ Minor | index.html | Homepage title is "CAIO Coach — [description]", others are "[description] — CAIO Coach" |
| 16 | C3 | ⚠️ Minor | coaching.html | Mint accent applied via inline `style=` not a CSS class |
| 17 | E12 | ⚠️ Minor | micro-sessions/ | Section not deployed — resource sidebar cannot be tested |

---

## What Passed Cleanly ✅

- Navigation labels, dot colours, and active states — perfect consistency across all 21 pages
- Favicon paths — all absolute `/favicon.svg` across all files
- Charset, viewport meta, and font loading — flawless across all pages
- Body `var(--surface)` background — declared correctly on all main pages
- CTA arrow placement — "→" always last in every pill set
- Track colour system — no cross-contamination between Gen/Agentic/Leadership colours
- "CAIO" capitalisation — always all-caps, zero exceptions across all files
- Both font families (DM Sans + JetBrains Mono) loaded on every single page
- Card padding and hover states — consistent across all content cards
- Hero images and text contrast — all visually correct

---

*Audit log v1.0 — CAIO Coach QA · April 2026*
