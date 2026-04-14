# CAIO Coach — QA Test Plan
**Version:** 1.0
**Date:** 2 April 2026
**Tester:** QA Review (based on every.to consistency methodology)
**Scope:** www.caiocoach.com — consistency-focused audit

---

## 1. Testing Methodology

This test plan is modelled on the **every.to consistency standard** — a publication-grade benchmark where:

- Every page uses **exactly the same navigation** with no variation in labels, dot colours, or hierarchy
- A **single typographic system** is applied throughout — no ad-hoc font sizes or weights
- **Component patterns are reused verbatim** — heroes, cards, CTAs, and pills follow identical structure on every page
- **CTA hierarchy is strict** — one primary action, one secondary, never mixed up
- **Error states are designed**, not default — 404 pages match the brand voice
- **Personality is applied uniformly** — the brand feel is present on every sub-page, not just the homepage

The core question for every test case: *"Would this look out of place on every.to, and why?"*

---

## 2. Pages in Scope

| Page | URL | Local File |
|------|-----|------------|
| Homepage | `/` | `index.html` |
| Coaching | `/coaching.html` | `coaching.html` |
| Blog Index | `/blog/index.html` | `blog/index.html` |
| Blog Post (sample) | `/blog/posts/four-offices-of-the-future.html` | `blog/posts/four-offices-of-the-future.html` |
| Blog Post (sample) | `/blog/posts/i-raised-9-5m-and-couldnt-read-my-own-codebase.html` | `blog/posts/i-raised-9-5m...html` |
| Certification | `/certification.html` | `certification.html` |
| Community | `/community.html` | `community.html` |
| Micro-Sessions Index | `/micro-sessions/index.html` | (not yet deployed) |
| My Team | `/my-team.html` | `my-team.html` |

---

## 3. Test Cases

### A. Navigation Consistency

> **Standard:** Every page must have identical nav labels, dot colours, and structure. One active state per page, always correct. (every.to never changes its nav across any page.)

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| A1 | Nav labels match across all pages | Visit each page, record nav items | All pages show: Coaching · Blog · Certification · Community |
| A2 | Homepage nav label | Homepage `/` nav | Must say "Blog" not "Thought Leadership" |
| A3 | Nav dot colours consistent | Compare dot colour on each page | Coaching=`#287BE8`, Blog=`#6FF2C1`, Certification=`#D1458B`, Community=`#1A9E74` |
| A4 | Active state on each page | Load each page | Active nav item matches the current page |
| A5 | No active state applied to wrong page | Load all pages | No two nav items active simultaneously |
| A6 | Brand logo links to homepage | Click CAIO Coach from any subpage | Always returns to `/` or `index.html` |
| A7 | Nav is present on every page | Load all pages | Topbar present and identical on all 8 pages |
| A8 | Mobile nav toggle present | Resize to <900px | Hamburger visible, nav collapses correctly |

---

### B. Hero Section Consistency

> **Standard:** All hub/landing pages use the same dark navy hero pattern. Sub-pages (blog posts, micro-session detail) use Pattern C (no hero). Mixing these is a failure.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| B1 | Hero present on all top-level pages | Load homepage, coaching, blog, certification | Dark navy hero with image background present |
| B2 | Hero eyebrow text format | Check eyebrow on each hero | Format: `SECTION · CAIO COACH` in uppercase monospace |
| B3 | Hero headline accent word | Check headline on each page | Final or key word in mint (`#6FF2C1`), rest in white |
| B4 | Hero pill pattern | Inspect hero pills | Info pills (plain) + CTA pill with `→` (last, outlined) |
| B5 | No hero on blog post sub-pages | Load any blog post | No hero section, starts with breadcrumb `← Blog` |
| B6 | Hero images load correctly | Visual check | No broken images, no layout shift on load |
| B7 | Hero text readable over image | Visual check | White/light text legible against dark overlay |

---

### C. Typography Consistency

> **Standard:** DM Sans for body, JetBrains Mono for labels/IDs/timestamps. No other fonts. Size scale from `shared/styles.css` is the only permitted scale.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| C1 | Body font is DM Sans | Inspect any paragraph element | `font-family` resolves to DM Sans |
| C2 | Monospace font is JetBrains Mono | Inspect timestamps, track labels, session numbers | `font-family` resolves to JetBrains Mono |
| C3 | No ad-hoc inline font sizes | Grep HTML for `font-size` outside `<style>` blocks | No inline `style="font-size:..."` found |
| C4 | Section labels are all-caps | Inspect section label elements | All uppercase, 10–11px, letter-spacing ≥ 1px |
| C5 | H1 is 32px+ on landing pages, 34px on sub-pages | Visual/inspect | Landing pages ≥32px, sub-page `.mission-title` = 34px |
| C6 | Body text is 14–16px | Inspect card/post body text | No body text smaller than 13px or larger than 16px |
| C7 | Line height on body text | Inspect | Line height ≥ 1.55 on all body paragraphs |
| C8 | JetBrains Mono loaded | Check network panel or font inspector | Both font families loaded; no fallback rendering |

---

### D. Colour & Token Consistency

> **Standard:** All colours must come from the CSS variable token set in `shared/styles.css`. Raw hex values are only acceptable for track-specific accent colours (gen/age/lead). No other hardcoded colours.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| D1 | Page background uses `--surface` | Inspect `<body>` on all pages | `background: var(--surface)` or `#f4f6fa` |
| D2 | Card backgrounds use `--card-bg` | Inspect card components | `background: var(--card-bg)` or `#ffffff` |
| D3 | Primary text uses `--text-primary` | Inspect headings | `color: var(--text-primary)` or `#1a1f36` |
| D4 | Secondary text uses `--text-secondary` | Inspect body paragraphs | `color: var(--text-secondary)` or `#4a5068` |
| D5 | Muted text uses `--text-muted` | Inspect labels, metadata | `color: var(--text-muted)` or `#6b7194` |
| D6 | Border colour consistent | Inspect card borders | `var(--border)` or `#d8dce8` |
| D7 | Blue accent is `#287BE8` | Inspect CTAs, links, card labels | No blue other than `#287BE8` used for UI |
| D8 | Mint accent is `#6FF2C1` | Inspect hero accent words, highlights | No other greens/mints used outside track tokens |
| D9 | Magenta only for Gen AI track | Inspect track pills | `#D1458B` only on `.gen` track elements |
| D10 | Mint-dark only for Leadership track | Inspect track pills | `#1a9e74` only on `.lead` track elements |

---

### E. Component Patterns

> **Standard:** Every component type (card, pill, resource card, session card, step list) must follow the exact same structure. Mixing patterns within a component type is a failure.

#### Content Cards
| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| E1 | All cards have `.card-label` | Inspect each card | `card-label` in blue, 10px, uppercase, letter-spaced |
| E2 | Card hover state consistent | Hover over cards | Blue border glow + slight Y translate on all cards |
| E3 | Card padding consistent | Inspect | All cards: `24px 28px` padding |

#### Buttons & CTAs
| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| E4 | Primary CTA style | Inspect `.btn-primary` | Solid fill (blue or navy), white text |
| E5 | Secondary CTA style | Inspect `.btn-secondary` | Outlined, matching section accent, no fill |
| E6 | CTA with arrow `→` | Check all CTAs | Arrow CTAs are consistently the *final* option (never first) |
| E7 | No mixed CTA hierarchy | Review each page | Never more than one filled CTA in a single section |
| E8 | Hero info pills vs CTA pills | Check hero pill set | Info pills have no interaction; CTA pill is the last pill with `→` |

#### Session Cards (Micro-Sessions / Coaching)
| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| E9 | `data-track` attribute present | Inspect every `.session-card` | All session cards have `data-track="gen"`, `"age"`, or `"lead"` |
| E10 | Track pill style matches track | Visual check | `.gen` = magenta, `.age` = blue, `.lead` = mint-dark |
| E11 | Session card footer border | Inspect | `border-top: 1px solid var(--surface)` on all `.session-footer` |

#### Resource Sidebar
| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| E12 | Active resource card highlighted | Load any micro-session sub-page | Current page's resource card has `.active` class |
| E13 | Resource icons have correct bg colour | Inspect | Video=blue, Slides=magenta, distinct per type |

---

### F. Content & Labelling Consistency

> **Standard:** Labels, section headings, and CTA copy must be consistent across equivalent pages. Every page title follows `[Page Name] — CAIO Coach`.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| F1 | Page `<title>` format | Check `<title>` tag on all pages | Format: `[Page Name] — CAIO Coach` (em dash, not hyphen) |
| F2 | Eyebrow text capitalisation | Check all hero eyebrows | All uppercase, `·` separator (middot, not dash) |
| F3 | Section label capitalisation | Check all `.card-label` and section labels | All uppercase, no mixed case |
| F4 | "Blog" vs "Thought Leadership" | Compare nav label on all pages | All pages must say "Blog" |
| F5 | Footer copyright format | Inspect footers | `© 2026 Edge8 AI · Community · Coaching` on all pages |
| F6 | CTA copy imperative tense | Check all CTA buttons | All CTAs start with a verb: "Start Coaching →", "Enroll Now →" |
| F7 | Breadcrumb text per section | Check sub-page breadcrumbs | Blog posts: `← Blog`, micro-sessions: `← Micro-Sessions` |
| F8 | "CAIO" capitalisation | Grep across all HTML | Always `CAIO` (all caps), never `Caio` or `caio` |

---

### G. Links & Routing

> **Standard:** No broken links, no dead routes, no nav items pointing to 404 pages.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| G1 | All nav links resolve | Click every nav item from homepage | No 404 responses |
| G2 | Blog post links resolve | Click post cards on blog index | All posts load, no 404 |
| G3 | Community nav link | Navigate to `/community.html` | Page loads, not 404 |
| G4 | Micro-sessions not yet deployed | Navigate to `/micro-sessions/index.html` | Confirm 404 — this section is not yet pushed |
| G5 | Homepage CTA "Start Coaching →" | Click from homepage | Lands on `/coaching.html` |
| G6 | Blog index "View all →" | Click from homepage | Lands on `/blog/index.html` |
| G7 | Favicon loads | Check browser tab | Favicon visible, no broken icon |
| G8 | No `file://` paths in deployed HTML | Grep deployed HTML | Zero occurrences of `file:///` in any href |

---

### H. Layout & Spacing

> **Standard:** Hub pages use the two-column layout (1fr 320px sidebar), sub-pages use the mission body grid (1fr 300px). These collapse to single column at 900px. No ad-hoc margins or padding overriding the system.

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| H1 | Hub pages use two-column layout | Load blog/index, micro-sessions/index | `.hub-body` with `grid-template-columns: 1fr 320px` |
| H2 | Sub-pages use mission layout | Load any blog post | `.mission-body` with `grid-template-columns: 1fr 300px` |
| H3 | Grid collapses at 900px | Resize browser to 899px | Both grids collapse to `1fr` single column |
| H4 | Topbar nav hidden at 900px | Resize to 899px | `.topbar-nav` and `.topbar-right` not visible |
| H5 | Hamburger appears at 900px | Resize to 899px | `.nav-toggle` button visible |
| H6 | Page max-width respected | Wide screen (1440px+) | Content constrained to `max-width: 1060px` |
| H7 | Hub main padding | Inspect `.hub-main` | `48px 40px 100px` (collapses to `32px 20px 80px` on mobile) |

---

### I. Favicon & Metadata

| TC | Test | Check | Pass Criteria |
|----|------|-------|---------------|
| I1 | Favicon is `/favicon.svg` absolute path | Grep all HTML files | `href="/favicon.svg"` — not `../favicon.svg` |
| I2 | Viewport meta present | Inspect `<head>` | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| I3 | Charset UTF-8 declared | Inspect `<head>` | `<meta charset="UTF-8">` is first tag in `<head>` |
| I4 | Google Fonts both families loaded | Inspect `<head>` | DM Sans AND JetBrains Mono in same `<link>` tag |

---

## 4. Known Issues (Pre-Audit Scan)

These issues were identified during reconnaissance before formal testing:

| Severity | Location | Issue | TC Reference |
|----------|----------|-------|--------------|
| 🔴 Critical | Homepage (`/`) — live site | Nav label reads "Thought Leadership" instead of "Blog" | A1, A2, F4 |
| 🟡 Warning | Live site vs local files | Homepage nav dot colours differ between live and local | A3 |
| 🟡 Warning | `/micro-sessions/index.html` | Micro-sessions section returns 404 on live site — not yet deployed | G4 |
| 🟡 Warning | Blog index | Page renders blank below hero (possible JS or render issue) | B1 |

---

## 5. Pass/Fail Criteria

| Rating | Definition |
|--------|------------|
| ✅ Pass | Behaviour matches the spec exactly |
| ⚠️ Minor | Small deviation that doesn't affect UX (e.g. 1px spacing diff) |
| 🟡 Moderate | Inconsistency visible to users; degrades brand perception |
| 🔴 Critical | Breaks navigation, shows wrong content, or causes a 404 |

A page passes QA if it has **zero Critical** and **fewer than 3 Moderate** issues.
A full site release is blocked if **any Critical** issue remains open.

---

## 6. Test Execution Order

Run in this order to surface critical navigation and routing bugs first:

1. A (Navigation) → find systemic nav bugs early
2. G (Links & Routing) → identify dead pages before auditing content
3. B (Hero) → validate the most visible page element
4. F (Content & Labelling) → spot copy inconsistencies
5. E (Components) → deep-dive into card and CTA patterns
6. D (Colour & Tokens) → confirm design system adherence
7. C (Typography) → validate font stack
8. H (Layout & Spacing) → verify grid and responsive behaviour
9. I (Favicon & Metadata) → confirm technical hygiene

---

*Test plan version 1.0 — CAIO Coach QA · April 2026*
