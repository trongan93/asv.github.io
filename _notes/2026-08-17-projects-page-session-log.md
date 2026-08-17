# Session log — rebuilding the Projects page from funding records

**Date:** 2026-08-15 → 2026-08-17
**Outcome:** shipped as `9b0b68c` + `9eff20a`, live at https://asvlab.com/projects/
**Companion:** [nstc-project-reconciliation.md](nstc-project-reconciliation.md) — the *data* record (every figure and its source). This file is the *process* record: what was decided, why, and how to repeat it.

Read this first when you next revise the Projects page. It exists so the next revision does not have to re-derive the reasoning.

---

## 1. What this session actually did

Started as "export a Drive folder to Markdown". Became a rebuild of how the site records funding, because the data model could not represent what the documents actually said.

| # | Change | Why |
|---|---|---|
| 1 | Exported the Drive reconciliation to `_notes/` | Original ask |
| 2 | Counted **programs**, not records | 7 NSTC records were being shown as "7 funded programs" — they are 5 programs, two of them multi-phase |
| 3 | Qualified every money figure with its **level** | NT$28.6M read as personal funding; it is project-level |
| 4 | Added the 3 MOE teaching grants | Absent from the site entirely |
| 5 | Added UAAT–TAMUS (2 phases) | Had a write-up in `_projects/` but **no entry in the funding data at all** |
| 6 | Added the TASA commission | Absent; a third funding type |
| 7 | Added periods + official project numbers | No way for a reader to verify any entry |
| 8 | Fixed status on 5 records | Phases and teaching grants had ended but were published as active |
| 9 | Fixed UAAT titles | Both carried the umbrella programme name, not the Subproject 3 titles |

Funding total went NT$28.6M → **NT$43.1M**, entirely from adding real programs that were missing — no figure was revised upward.

---

## 2. The rules that now govern `_data/grants.yaml`

These are written into the file's header. They are the whole point of the rebuild; do not quietly drop them.

**Rule 1 — money is recorded at a stated level, and levels are never conflated.**
- `amount` + `amount-level` — the budget at the level *this lab holds it*. `project` for NSTC and TASA; `subproject` for UAAT, where NTUT's Subproject 3 allocation is what the lab holds as Co-PI.
- `programme-amount` — the umbrella award. **Context only, never summed.** For UAAT the award letter is addressed to another institution entirely.
- `allocated` — the lab's own documented share, only where a formal budget document exists.

**Rule 2 — records are not programs, and each phase closes separately.**
A multi-year program holds one entry per annual phase. Count `program` ids through `uniq` for programs; `.size` for records; say which one you mean. Each phase is funded separately, so it *closes* separately — one program legitimately shows a completed phase beside a running one. Never hold an ended phase open because its successor runs; never close a program because one phase ended.

**Rule 3 — teaching is role-only.**
MOE teaching grants record the role and nothing else: no `amount`, no `allocated`, no `kind`, no subtotal. They sit in their own section, out of every research total. Teaching is different work; NT$20,000 mentorship awards are not comparable to project-level research budgets.

**Categories:** `research` (NSTC + MOE UAAT) · `industry` (TASA, government industry-academia) · `teaching` (MOE education). Research and industry are counted together and share the theme grouping; teaching is kept wholly apart.

---

## 3. Where the data comes from

| Source | Gives you | Does not give you |
|---|---|---|
| **NSTC public profile** ([link](https://arspb.nstc.gov.tw/NSCWebFront/modules/talentSearch/talentSearch.do?action=initRsm17new&rsNo=692e939b0e8044b8bf92c0b2f35b8756&LANG=eng)) | The 7 award records + amounts, citable publicly | periods, project numbers, status |
| **NSTC 申辦系統** (logged in) | execution periods, 計畫編號, live status (執行中 / 計畫到期 / 審查中) | — must be pasted in; not fetchable |
| **Drive `PlumCard2026/`** | `nstc_project_reconciliation_*.md`, `plum_blossom_card_evidence_inventory_en.md` (MOE + TASA detail) | — |
| **Drive `個人簡歷_裴重恩_2026`** | most current: subproject titles, teaching names/numbers/periods, PI project numbers | — |
| **NTUT project record** | 計畫類型, budget composition, 主計 allocations, instalments | — pasted in |

**Precedence when they disagree: CV > NTUT record > evidence inventory.** The CV corrected the inventory on UAAT titles and on all three teaching grants. The inventory was written 2026-07-15; the CV 2026-08-16.

---

## 4. Judgement calls worth keeping

- **Only awarded work is listed.** Two things are deliberately *off* the site: the FY115 LEO-security (2/2) application (審查中, submitted 2025-07-24) and the 2026–27 UAAT–TAMUS phase (proposal drafts only in Drive folder `UAAT-TMAUS-2026-1`, no award letter or budget). Add either the moment an award document exists.
- **Personal remuneration is not published.** UAAT NT$73,524 / NT$60,000, the MOE teaching allocations, and the TASA instalment schedule stay in the reconciliation note. Published figures are institutional.
- **The funder split exists so three award types are never read as one number.** It reconciles exactly to the headline — if you change an amount, check it still does.
- **`_data/projects.yaml` is dead.** Verified: nothing references `site.data.projects`. Left in place rather than deleted; it duplicates `_projects/*.md`.

---

## 5. How to verify without a working build

**Local Jekyll does not run in this environment.** Docker gets no DNS; host Ruby is 3.2 and `posix-spawn` / `nokogiri` won't compile without `ruby-dev`. Two options: install `ruby-dev` (needs sudo), or rely on CI.

What worked instead — simulate the template logic against the YAML in Python:

```bash
python3 -c "
import yaml
g = yaml.safe_load(open('_data/grants.yaml'))
res = [x for x in g if x.get('category') != 'teaching']
print('total', sum(x['amount'] for x in res))
print('programs', len({x['program'] for x in res}), 'records', len(res))
print('active', len([x for x in res if x['status']=='active']))
"
```

Also check: Liquid tag balance (`{% if/for/comment %}` vs `{% end %}` counts), and that no generated HTML in a `.md` file is indented 4+ spaces — kramdown turns that into a code block, which is what caused an earlier bug on this page.

Then push and watch CI — `on push to main` → `on pages deploy`. The build is the real check. Afterwards, verify the *live* HTML, not the source:

```bash
curl -sSL https://asvlab.com/projects/ | grep -c 'article class="grant"'   # expect 13
```

---

## 6. Files that make up this feature

| File | Role |
|---|---|
| `_data/grants.yaml` | **The source of truth.** Rules in the header; edit here first |
| `_data/project-kinds.yaml` | Research themes; shared with `research/index.md` so the two pages can't drift |
| `projects/index.md` | Stat tiles, funder split, theme grouping, teaching section |
| `research/index.md` | Reads the same data — **update both when changing counting logic** |
| `_includes/grant.html` | One grant card; handles missing amount / discipline / year / grant-no |
| `_styles/grant.scss`, `_styles/stat.scss` | `.grant-note`, `.grant-amount-level`, `.grant-no`, `.funder-split`, `.stat-note` |
| `_projects/enhancing-maritime-tracking.md` | UAAT phase 1 write-up; its title matches the phase-1 subproject title |

Adding a program: append to `_data/grants.yaml` with `program`, `category`, `amount` + `amount-level`, `role`, `status`, `kind`, `agency`, and `grant-no` if one exists. Everything else follows automatically.

---

## 7. Open items for next time

1. **2026–27 UAAT–TAMUS phase** — add when awarded; this is the change that would move the total.
2. **FY115 LEO-security (2/2)** — add when approved.
3. **TASA research theme is inferred** — filed under `comms-security` from its title. If that payload is the same surveillance/tracking family as the NSTC CubeSat program, move it to `detection-tracking`.
4. **UAAT has no project numbers** — MOE subproject schedules don't issue them. If one turns up, add `grant-no`.
5. **Status drift is the recurring failure.** Statuses were wrong twice in three days because terms end quietly. Recheck against the portal each time; LEO-security ended 2026-08-31 and needs closing.
6. **Privacy — resolved knowingly, still worth noting.** `nstc-project-reconciliation.md` is in this public repo and names four co-PIs with their individual TASA allocations. This was flagged and the decision was to commit everything. Removing it now would need a history rewrite, not just a delete. Don't add more third-party financial detail without a deliberate decision.

---

## 8. Working notes

- The Drive folder is spelled **`PlumCard2026`**, not "PumCard2026" — it took a filesystem-wide search and a Drive title query to find.
- Liquid 4.0 (pinned via Jekyll 4.3) has **no `sum` filter**; accumulate with `plus` in a loop. An unknown filter silently passes its input through, which is how a previous bug rendered every total as 0.
- Jekyll's `sort` handles nil properties (sorts them first), so a record missing `year` won't crash the build.
- `_notes/` is outside the build — underscore directory, not a declared collection — so files here are in the repo but never published.
