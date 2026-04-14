# React Migration Plan — ai-officer.com
_Written 31 March 2026 — ready to execute when you are_

---

## Why migrate

The site currently has ~80+ HTML files, each carrying its own copy of the nav, head tags, and shared boilerplate. Adding a new nav link, changing a font, or tweaking a shared component means editing every file. React + Vite removes that entirely — one shared component, one build, one push.

It also makes pages like `2026-Q1-MicroSessions` first-class citizens rather than CDN hacks.

---

## What we're moving to

| Thing | Current | After |
|---|---|---|
| Build tool | None | Vite |
| Routing | File-based HTML | React Router (file-based, mirrors current URLs) |
| Shared nav | `shared/nav.js` vanilla JS | `<Nav />` React component |
| Shared styles | `shared/styles.css` | Keep as-is, import into Vite |
| Charts | CDN Recharts | npm Recharts |
| Deploy | `git push` → GitHub Pages | `npm run build` → `git push` → GitHub Pages |
| URLs | Unchanged | Unchanged |

---

## Phase 1 — Setup (30 min, do this first)

1. In `~/Documents/AIO/Website`, run:
   ```bash
   npm create vite@latest . -- --template react
   npm install
   npm install react-router-dom recharts
   ```

2. Vite will create `src/` and `index.html`. Move your existing `shared/styles.css` import into `src/main.jsx`.

3. Configure Vite for GitHub Pages in `vite.config.js`:
   ```js
   export default { base: '/' }
   ```

4. Add a build + deploy script to `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
   }
   ```
   _(Or keep using the `main` branch with a `docs/` output folder if that's how GitHub Pages is currently configured — check repo Settings → Pages.)_

---

## Phase 2 — Shared components (1–2 hours)

Convert the three things that are repeated on every page:

### `src/components/Nav.jsx`
Port `shared/nav.js` directly. The PAGES array stays the same, just becomes a proper React component with `<Link>` from React Router instead of `<a>` tags.

### `src/components/Layout.jsx`
Wraps every page — contains `<Nav />`, the `<head>` meta tags pattern, and the footer. Every page renders inside this.

### `src/styles/tokens.js`
The AIO colour tokens (`C = { navy, blue, magenta, mint... }`) are already defined inline in the feedback dashboard. Extract them to a single shared file so every component can import them.

---

## Phase 3 — Migrate pages (work in batches)

The site has roughly four categories of pages. Suggested migration order, easiest first:

### Batch A — Top-level standalone pages (easiest, ~1 hour)
`index.html`, `certification.html`, `coaching.html`, `my-team.html`, `ai-buddy.html`, `blog-workflow.html`

Each becomes `src/pages/Home.jsx`, `src/pages/Certification.jsx` etc. Copy the body HTML into JSX (mostly just adding `className=` and closing self-closing tags).

### Batch B — Blog posts (~2 hours)
`blog/posts/*.html` — 14 posts. These are probably the most repetitive. Create a `<BlogPost>` layout component and a shared data file for post metadata. Each post becomes a thin JSX file that imports the layout.

### Batch C — Micro-sessions (~3 hours)
`micro-sessions/*.html` — ~30+ files, but they follow a strict pattern (each session has a main page + prompts, recap, resources, slides, video sub-pages). Create a `<MicroSessionLayout>` component and the individual pages become very thin.

### Batch D — Course content (~3 hours)
`agentic-ai/` and `generative-ai/` — same pattern as micro-sessions. Each mission has 5–6 sub-pages. One `<MissionLayout>` component handles them all.

---

## Phase 4 — Routing

Set up React Router in `src/main.jsx` to mirror current URL structure exactly so no links break:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/certification" element={<Certification />} />
  <Route path="/blog" element={<BlogIndex />} />
  <Route path="/blog/posts/:slug" element={<BlogPost />} />
  <Route path="/micro-sessions/:slug" element={<MicroSession />} />
  <Route path="/agentic-ai/:slug" element={<Mission track="agentic-ai" />} />
  <Route path="/generative-ai/:slug" element={<Mission track="generative-ai" />} />
  <Route path="/feedback/:slug" element={<FeedbackDashboard />} />
</Routes>
```

---

## Phase 5 — Deploy config

GitHub Pages needs to know to serve the Vite `dist/` output. Two options:

**Option A — gh-pages branch** (recommended)
Build outputs to `dist/`, push that folder to a `gh-pages` branch. Set GitHub Pages source to that branch in repo Settings.

**Option B — docs/ folder on main**
Set `vite.config.js` `outDir: 'docs'`, commit `docs/` to main. GitHub Pages source → `docs/` folder on `main`. Keeps single-branch workflow.

Option B is closer to what you have now and requires no repo settings changes.

---

## What doesn't change

- All URLs stay the same — no redirects needed
- `shared/styles.css` can be imported as-is into Vite initially, refactored later
- `favicon.svg`, `og-image.jpg`, and other static assets move to `public/` folder (Vite serves these at root)
- `push.sh` / `ship.sh` scripts get replaced by `npm run deploy`

---

## Effort estimate

| Phase | Time |
|---|---|
| Phase 1 — Setup | 30 min |
| Phase 2 — Shared components | 1–2 hours |
| Phase 3A — Standalone pages | 1 hour |
| Phase 3B — Blog posts | 2 hours |
| Phase 3C — Micro-sessions | 3 hours |
| Phase 3D — Course content | 3 hours |
| Phase 4 — Routing | 1 hour |
| Phase 5 — Deploy config | 30 min |
| **Total** | **~12 hours** |

Realistically spread across 2–3 sessions. Phases 1–2 can be done in one sitting and give you the biggest immediate win (shared nav). The rest can be migrated incrementally — old HTML files and new JSX files can coexist during the transition.

---

## When you're ready

Start here:
```bash
cd ~/Documents/AIO/Website
npm create vite@latest . -- --template react
```

Then open a new session in this project and say "let's start the React migration — Phase 1".
