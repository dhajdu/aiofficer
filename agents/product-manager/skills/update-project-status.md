# Skill: Update Project Status

**Trigger:** Called automatically after any task that modifies `epic-status.md` or makes significant epic progress. Also invoked manually: "update status", "update monitor", "refresh the dashboard", "update the project status".

**Output:** Updated `project-status.html` for the current project + updated `claude-code-monitor.html` in caio-coach. Both committed and pushed.

---

## Project registry

| Project | Root | project-status.html | epic-status.md |
|---|---|---|---|
| longevity-coach | `/Users/davepro/code-projects/longevity-coach` | `public/project-status.html` | `docs/product/epic-status.md` |
| forever-app | `/Users/davepro/code-projects/forever-app` | `website/public/project-status.html` | `docs/product/epic-status.md` |
| eo-vietnam | `/Users/davepro/code-projects/eo-vietnam` | `public/project-status.html` | `docs/product/epic-status.md` |
| bhutan | `/Users/davepro/code-projects/bhutan` | `public/project-status.html` | `docs/product/epic-status.md` |
| caio-coach | `/Users/davepro/code-projects/caio-coach/site` | `public/project-status.html` | `docs/product/epic-status.md` |
| aio-website | `/Users/davepro/code-projects/aio-website` | `public/project-status.html` | `docs/product/epic-status.md` |
| aio-pad | `/Users/davepro/code-projects/aio-pad` | `public/project-status.html` | `docs/product/epic-status.md` |
| infinite-leverage | `/Users/davepro/code-projects/infinite-leverage` | `public/project-status.html` | `docs/product/epic-status.md` |
| dave-hajdu | `/Users/davepro/code-projects/dave-hajdu` | `public/project-status.html` | `docs/product/epic-status.md` |
| edge8 | `/Users/davepro/code-projects/edge8` | `public/project-status.html` | `docs/product/epic-status.md` |
| mahjong-tarot | `/Users/davepro/code-projects/mahjong-tarot` | `website/public/project-status.html` | `docs/product/epic-status.md` |
| fab-four | `/Users/davepro/code-projects/fab-four` | `public/project-status.html` | `docs/product/epic-status.md` |
| leadership-coach | `/Users/davepro/code-projects/leadership-coach` | `public/project-status.html` | `docs/product/epic-status.md` |

Monitor (live): `/Users/davepro/code-projects/caio-coach/site/public/claude-code-monitor.html`
History page:  `/Users/davepro/code-projects/caio-coach/site/public/claude-code-monitor-history.html`

---

## Steps

### Step 1 — Gather data

Run these in parallel:

```bash
# Today's date
date +%Y-%m-%d

# Today's commits for the current project (run from project root)
git log --oneline --since="$(date +%Y-%m-%d) 00:00"
```

Then read:
- `<project-root>/docs/product/epic-status.md` — source of truth for all epic data

### Step 2 — Parse epic-status.md

From the epic status table, extract for each epic:
- Epic number, name
- Status glyph: `✅` = shipped, `🔄` = in progress, `📋` = planned, `🆕` = needs planning
- % complete (use the number stated; if absent, estimate from glyph: ✅=100, 🔄=50 default, 📋=10, 🆕=0)
- Any gap/blocker notes from the `## Open Questions` or `## Needs Human Review` sections

**Calculate avg %** across all tracked epics (sum / count, round to nearest integer).

**Pipeline dot mapping** (5-dot scale: ●●●●●):

| % | Dots |
|---|---|
| 100 | `●●●●●` |
| 90-99 | `●●●●○` |
| 80-89 | `●●●●○` or `●●●○○` depending on notes |
| 70-79 | `●●●◐○` |
| 60-69 | `●●●○○` |
| 50-59 | `●●◐○○` |
| 40-49 | `●●○○○` |
| 30-39 | `●◐○○○` |
| 10-29 | `●○○○○` |
| 0-9 | `○○○○○` |

**Portfolio row pipeline** — one dot per epic, using the same mapping but collapsed to a single dot per epic.

### Step 3 — Update project-status.html

Read the existing file. Use targeted Edit calls — do NOT rewrite the entire file.

Changes to make:
1. **Footer date** — bump "Last updated" to today
2. **Hero avg %** — update to recalculated average
3. **Summary table rows** — update % and pipeline dots per epic (match epic number to row)
4. **Epic cards** — for each changed epic: update `pct` text, progress bar width%, pipeline stage dots, and description paragraph if the status changed meaningfully
5. **Build log** — prepend a new entry for today's session:

```html
<div class="log-entry">
  <span class="log-date">YYYY-MM-DD</span>
  <span class="log-msg">Brief summary of what shipped. N commits.</span>
  <span class="log-commits">
    <code>hash1</code>
    <code>hash2</code>
    <!-- etc — use up to 5 most significant commits -->
  </span>
</div>
```

If `project-status.html` does not exist, skip this step and note it in output.

### Step 4 — Update claude-code-monitor.html

Read the file at the monitor path. Use targeted Edit calls.

**4a. Nav date** — if today is newer than current nav date, update:
```html
<span class="nav-meta">Updated YYYY-MM-DD</span>
```

**4b. Completed Today section**

Check the `section-hint` date in `claude-code-monitor.html`:
- **Same date as today** — prepend this project's group to the top of `.completed-list` (inside the div, before the first existing group header)
- **Older date** — archive the existing `.completed-list` content to the history page first (step 4f), then replace Completed Today with just this project's new entries and update the `section-hint` date

Group format:
```html
<div class="completed-group-header">
  <span class="completed-group-name">project-name</span>
  <span class="completed-group-count">N commits</span>
</div>
<div class="completed-item"><div class="completed-msg"><strong>type:</strong> message</div><code class="completed-hash">hash</code></div>
```

Use all of today's commits. Limit to 20 per project if more than 20 (take the most recent).

**4f. Archive rollover to history page**

When the Completed Today date is older than today, open `claude-code-monitor-history.html` and prepend a new session block inside `.history-section > .wrap`, after the `section-header` div:

```html
<div class="session-block">
  <div class="session-header">
    <span class="session-date">YYYY-MM-DD</span>
    <span class="session-summary">N commits &middot; M projects</span>
  </div>
  <div class="completed-list">
    <!-- the archived entries from Completed Today -->
  </div>
</div>
```

Insert before the first existing `session-block` (most recent session always at top).

**4d. Portfolio table row** — find the project's `pt-row` and update pipeline dots to match the new epic-by-epic status.

**4e. Project card** — find the `<article>` with `id="project-name"` and update:
- Each epic table row: pipeline dots, % estimate
- `card-meta` phase text if phase changed
- Card foot "Updated" date

### Step 5 — Commit and push

**Current project** (only if project-status.html was updated):
```bash
cd <project-root>
git add <relative-path-to-project-status.html>
git commit -m "docs(project-status): update $(date +%Y-%m-%d) — <1-line summary of what changed>"
git push origin main
```

**caio-coach monitor**:
```bash
cd /Users/davepro/code-projects/caio-coach/site
git add public/claude-code-monitor.html
git commit -m "feat(monitor): update <project-name> — $(date +%Y-%m-%d) session"
git push origin main
```

---

## Rules

- Read the live `epic-status.md` every time — never use cached or assumed data
- Surgical edits only — do not rewrite sections that didn't change
- Never commit `.env`, unrelated files, or `git add .`
- If `project-status.html` doesn't exist for a project, note the gap but continue with the monitor update
- If there are 0 commits today, still update the HTML dates and percentages — just omit the commits block
- The avg % in the monitor card-meta is informational — format as `Phase description · NN% avg`
- No em dashes in any generated text
