# Funded Project Reconciliation — source note for the Projects page

Not a published page. `_notes/` is outside Jekyll's build (underscore directory,
not a declared collection), so this file exists only in the repo as the working
record behind `_data/grants.yaml` and `projects/index.md`.

- **Exported from:** Google Drive → `PlumCard2026/`
  - `nstc_project_reconciliation_en.md` / `_zh_tw.md` (modified 2026-07-15) — sections 1–3 below
  - `plum_blossom_card_evidence_inventory_en.md` (modified 2026-07-15) — the MOE and TASA material in sections 4–5
- **Exported on:** 2026-08-15
- **Applicant:** Trong-An Bui / 裴重恩
- **Official source:** NSTC Academic R&D Service, Researcher Query → 計畫 (Plan) tab
- **Source URL:** https://arspb.nstc.gov.tw/NSCWebFront/modules/talentSearch/talentSearch.do?action=initRsm17new&rsNo=692e939b0e8044b8bf92c0b2f35b8756&LANG=eng

---

## 1. Verified record

The official NSTC public profile lists **eight** NSTC records. One is a 2019
graduate-student international-conference grant. The other **seven are research
project funding records**: **two as Principal Investigator (PI)** and **five as
Co-Principal Investigator (Co-PI)**.

| FY (ROC) | AD | Discipline / project category | Project | Role | Approved amount shown by NSTC |
|---:|---:|---|---|---|---:|
| 115 | 2026 | 地球科學應用 Earth science applications; 一般策略專案計畫 general strategic project | SAR衛星成像整合軟體應用加值資料應用關鍵技術研究——SAR成像與光學影像異質融合技術及應用於碳儲量變化之驗證 (2/3) <br> *SAR Satellite Imaging Integrated Software Application Value-Added Data Application Key Technology Research — Heterogeneous Fusion of SAR and Optical Images and Validation for Carbon Stock Change (2/3)* | Co-PI | NT$830,000 |
| 115 | 2026 | 立方衛星關鍵技術研發計畫 CubeSat key-technology R&D; 一般策略專案計畫 general strategic project | 用於遠端目標監視與追蹤的人工智慧賦能通訊酬載 (2/4) <br> *AI-Enabled Communication Payload for Remote Target Surveillance and Tracking (2/4)* | Co-PI | NT$5,500,000 |
| 114 | 2025 | 立方衛星關鍵技術研發計畫 CubeSat key-technology R&D; 一般策略專案計畫 general strategic project | 用於遠端目標監視與追蹤的人工智慧賦能通訊酬載 (1/4) <br> *AI-Enabled Communication Payload for Remote Target Surveillance and Tracking (1/4)* | Co-PI | NT$5,000,000 |
| 114 | 2025 | 地球科學應用 Earth science applications; 一般策略專案計畫 general strategic project | SAR衛星成像整合軟體應用加值資料應用關鍵技術研究——SAR成像與光學影像異質融合技術及應用於碳儲量變化之驗證 (1/3) <br> *SAR Satellite Imaging … Carbon Stock Change (1/3)* | Co-PI | NT$650,000 |
| 114 | 2025 | 資安科技研究 Cybersecurity research; 一般策略專案計畫 general strategic project | 低軌衛星通訊系統之安全防護與韌性強化：安全防禦架構、異常行為與假訊息偵測、隱私強化、備援技術 (1/2) <br> *Security Protection and Resilience Enhancement for Low-Earth-Orbit Satellite Communications Systems (1/2)* | Co-PI | NT$13,600,000 |
| 114 | 2025 | 航太系統與應用 Aerospace systems and applications; 新進人員研究計畫 early-career researcher project | Orbit-AI：區域感知與情境自適應壓縮系統 <br> *Orbit-AI: Region-Aware and Context-Adaptive Compression System* | **PI** | NT$2,159,000 |
| 113 | 2024 | 航太系統與應用 Aerospace systems and applications; 新進人員研究計畫 early-career researcher project | 基於罐頭衛星（CanSAT）平台以邊緣運算的半監督學習模型為重建部分雲層遮蔽災害物件區域之開發 <br> *Development of a Semi-Supervised Learning Model with Edge Computing on a CanSAT Platform for Reconstructing Partially Cloud-Obscured Disaster-Object Areas* | **PI** | NT$850,000 |

**Total of the seven approved amounts displayed: NT$28,589,000.**

### Separate, non-research record (deliberately excluded from the site)

| FY | Record | Role | Approved amount |
|---:|---|---|---:|
| 108 | Graduate student attendance at the 2019 International Conference on System Science and Engineering (ICSSE) <br> 研究生出席 2019 年系統科學與工程國際會議 | PI | NT$25,000 |

---

## 2. Accuracy rules carried over from the source

These were written for the Plum Blossom Card application, but they constrain how
the Projects page may phrase things just as much.

1. **Seven records, not seven programs.** The list contains two annual phases of
   a *four-year* CubeSat project and two annual phases of a *three-year* SAR
   project. They must not be described as four unrelated projects. The seven
   funding records correspond to **five distinct research programs**.
2. **The total is project-level, not personal.** NT$28,589,000 is the aggregate
   of *project-level approval amounts*, not the applicant's personal research
   funding.
3. **Personal allocation needs a formal budget document.** It may be stated only
   where such a document supports it. Example: the separate NTUT export shows
   **NT$500,000 allocated to the applicant** for the LEO satellite-security
   project, whereas the public NSTC profile displays that project's full
   **NT$13,600,000**.
4. Phase markers "(1/4)", "(2/4)", "(1/3)", "(2/3)" must stay visible so readers
   can tell phases of one program from separate awards.

### Correct phrasing

> The applicant's public NSTC profile lists seven NSTC research-project funding
> records: two as PI and five as Co-PI.

> 申請人之國科會公開個人檔案列有 7 筆國科會研究計畫補助紀錄，其中 2 筆擔任計畫主持人、5 筆擔任共同主持人。

---

## 3. Reconciliation against the live site

Checked against `_data/grants.yaml` and `projects/index.md` on 2026-08-15.

**Matching:** all seven entries are present, with roles, ROC years, disciplines,
and amounts identical to the NSTC record. The seven amounts sum to
NT$28,589,000, which is what the "Total awarded" tile renders. The FY108 ICSSE
conference grant is correctly absent.

**Gaps found, and what was done — applied 2026-08-15:**

| # | Finding | Where | Resolution |
|---:|---|---|---|
| 1 | The stat tile read "**7** Funded programs", but the seven records are five distinct programs — CubeSat and SAR each appear twice as annual phases. This is exactly the overstatement rule 1 warns against. | `projects/index.md` | **Done.** Added a `program:` id shared by every phase of one program. The tile counts distinct programs, with records as the sub-line — "**7** Research programs · 10 annual funding records · 6 active" once the MOE and TASA entries in sections 4–5 were added. Theme headings show "1 program · 2 records" where the two differ, and the Research page counts distinct programs too. |
| 2 | "Total awarded NT$28.6M" carried no indication that it is project-level, so it read as personal funding. | same stat grid | **Done.** Relabelled "Approved subsidy", and a bilingual `stat-note` below the grid states that figures are project-level NSTC subsidies, not personal allocation. |
| 3 | The NT$500,000 personal allocation on the LEO security project was documented but recorded nowhere in the repo. | `_data/grants.yaml` | **Done.** Optional `allocated:` field, set only on that program, rendered as a per-card note by `_includes/grant.html`. |
| 4 | NSTC's project *category* (一般策略專案計畫 vs 新進人員研究計畫) was not captured. It is what distinguishes the two early-career PI awards from the large strategic ones. | `_data/grants.yaml` | **Done.** `scheme` / `scheme-en` on all seven rows, shown as a quiet badge on each card. |
| 5 | `title-en` for both SAR phases dropped the leading "SAR Satellite Imaging Integrated Software Application Value-Added Data Application Key Technology Research —" that NSTC shows. | `_data/grants.yaml` | **Done.** Official wording stored as `title-full-en`; the shortened `title-en` still drives display, since the full title is unreadable on a card. |
| 6 | No provenance — nothing pointed to the NSTC source URL or a verification date. | `_data/grants.yaml`, `projects/index.md` | **Done.** Source URL and the two accuracy rules head the data file; the page footnote links the NSTC profile and dates the reconciliation. |
| 7 | `_data/projects.yaml` lists only two projects and duplicates content now held in `_projects/*.md`. | `_data/projects.yaml` | **Verified unused** — no `site.data.projects` reference anywhere in the repo. Left in place; deleting it is a separate call. |

**Status field:** the FY113 CanSAT award is marked `completed`, the other six
`active`. NSTC's record does not state status, so this is site-maintained
information — recheck when the 115 phases close.

---

---

## 4. MOE record — added 2026-08-15

The first pass covered only the NSTC reconciliation appendix, which mentions an
"MOE section" it does not itself contain. The MOE detail lives in
`plum_blossom_card_evidence_inventory_en.md`, and is now on the site.

### 4a. Teaching and talent development (Co-PI)

| FY | Project | Role |
|---:|---|---|
| 114 | 大專校院學生雙語化學習計畫 — 全校型英語授課（EMI）教學精進計畫 <br> *Bilingual Learning Promotion in Higher Education: EMI Teaching Advancement Project* | Co-PI |
| 114 | 高等教育深耕計畫 — 教學導師 <br> *Higher Education Sprout Project: Teaching Mentorship* | Co-PI |
| 113 | 大專校院學生雙語化學習計畫 — 全校型英語授課（EMI）教學精進計畫 <br> *University-level EMI Teaching Advancement Project* | Co-PI |

**Site decision (2026-08-15): role only, no funding figures.** Teaching is
different work from a research program, so these entries deliberately carry no
`amount` and no `allocated`, and the section shows no subtotal. The NTUT export
does record NT$20,000 / NT$10,000 / NT$20,000 allocations, kept here for the
record but not published. They are held as `category: teaching`, listed in their
own section, and excluded from every research total and from the theme grouping.

### 4b. UAAT–TAMUS international collaboration (Co-PI)

*Multidisciplinary Capacity Building and Networking for a New Space Generation:
TAMUS–UAAT Space Technology.* Four distinct money levels, which must not be
conflated:

| Level | 113 (2024-12 → 2025-11) | 114 (2025-12 → 2026-11) |
|---|---:|---:|
| MOE programme award | NT$12,827,500 | NT$8,200,000 |
| Subproject 3 award | — (not separately stated) | NT$1,200,000 |
| NTUT Subproject 3 allocation | NT$2,183,333 | NT$240,000 |
| **Lab's Co-PI remuneration** | **NT$73,524** | **NT$60,000** |

**Critical limitation, carried from the source.** The MOE award letters are
addressed to National Central University and list NTUT as a participating
institution; they **do not name Trong-An Bui**. They are programme-level
evidence only. The named-role evidence is the detailed funding schedules, which
identify NTUT as Subproject 3 and the applicant as Co-PI. For 114, Subproject 3
is led by Prof. Lin Hsin-Piao (林信標) of NTUT, titled *Advancing Edge-AI Enabled
Airborne Systems for Maritime Intelligence and Cross-Border Collaboration*.

**Site decision (2026-08-15): the funded amount shown is NTUT's Subproject 3
allocation** — NT$2,183,333 and NT$240,000 — attributed to this lab in the Co-PI
role. `amount` holds that figure with `amount-level: subproject`, and every card
prints the level beneath the number, so it reads as a subproject budget held as
Co-PI rather than as personal funding. `programme-amount` holds the umbrella
award (NT$12,827,500 / NT$8,200,000) as clearly labelled context and is never
summed into any site total.

The personnel remuneration figures — NT$73,524 for 113 (a two-person Co-PI line
of NT$147,048 ÷ 2) and NT$60,000 for 114 — are **not published**. They are
recorded here because the application package needs them, and because the source
is emphatic that NT$73,524 is a personnel line, not a share of the NT$2,183,333
subproject budget.

The 113 phase links the existing write-up at
`_projects/enhancing-maritime-tracking.md`, which was on the site but had no
entry in the funding data at all.

### 4c. Personal allocations now recorded for NSTC entries

The evidence inventory establishes allocations the first pass did not carry:
Orbit-AI NT$2,159,000 and CanSAT NT$850,000 (both the full project amount, per
the NTUT export), alongside the LEO-security NT$500,000 already recorded. The
four remaining Co-PI records have **no allocation established by the public
profile**, so none is claimed.

---

## 5. TASA industry–academia collaboration — added 2026-08-15

Confirmed 2026-08-15 against the NTUT 【一般計畫】application record.

| Field | Value |
|---|---|
| NTUT record no. | 10135 (受理 114-11-24; 總計畫申請日期 114-10-29) |
| Project | 立方衛星通訊酬載開發與驗測委辦 <br> *Commissioned Project for CubeSat Communications-Payload Development and Verification* |
| 申請類別 | 一般計畫 |
| **計畫類型** | **政府產學計畫案 · Government Industry–Academia Project** |
| PI | 10823 林信標 Lin Hsin-Piao — 電資學院 太空所; this lab is one of four Co-PIs |
| Period | 114-10-14 → 115-10-13 (2025-10-14 → 2026-10-13), 期程 1 年 |
| 國內委託單位 | 國家太空中心 Taiwan Space Agency |
| 受惠機構 | 臺北科技大學 NTUT |
| 研發中心 | 前瞻通訊與遙測科技研究發展中心 |
| Accounting no. | 214I44 |
| 政府單位出資 | NT$12,123,700 (企業/其他/本校出資 0) |
| Lab allocation | NT$600,000 |

The official 計畫類型 is **政府產學計畫案**, which settles the classification: it
is a government industry-academia project, distinct from both the NSTC research
subsidies and the MOE grants. `scheme` now carries that exact label. It was a
tendered case (投標 2025-08-28) under 科學技術研究發展採購作業要點, TASA's parent
body being the NSTC per the contract's 投標須知.

**Budget composition** — the whole award is NTUT's, with no partner institution:

| Item | Amount |
|---|---:|
| 經常費 Operating | NT$7,112,454 |
| 設備費 Equipment | NT$4,300,000 |
| 管理費 Administrative (10%) | NT$711,246 |
| 營業稅 / 先期技轉金 | NT$0 |
| **Total** | **NT$12,123,700** |

**主計系統 allocation** — the figure NTUT's teacher research evaluation credits
("績效以實際分配至主計系統之金額始得採計"), and not changeable after the project
closes:

| Role | Person | Allocation |
|---|---|---:|
| PI | 林信標 | NT$4,219,316 |
| Co-PI | 陳志鏗 | NT$4,364,472 |
| Co-PI | 蔡孟伸 | NT$1,939,912 |
| Co-PI | 莊嶸騰 | NT$1,000,000 |
| **Co-PI** | **裴重恩 (this lab)** | **NT$600,000** |
| | **Total** | **NT$12,123,700** |

**Instalment schedule (開立收據), not published.** Receipts issued to date:
NT$2,424,740 + NT$3,030,925 + NT$3,030,925 = NT$8,486,590 — exactly 20% + 25% +
25% of the award, with 30% outstanding. The instalment schedule, accounting
number, and co-PI allocation table are internal finance detail and stay off the
site; `amount` records the full commissioned award and `allocated` this lab's
NT$600,000.

Confirmed as a **distinct project**, separate from the NSTC CubeSat records, so
there is no double count. Per the source, describe it as a Taiwan Space
Agency-commissioned government industry-academia collaboration, **never** as
private-industry sponsorship unless a company contract or company funding is
supplied.

It counts toward funded research and sits in the theme grouping, while the
funder breakdown under the stat grid reports NSTC, MOE, and TASA separately so
the three award types are never read as one undifferentiated total.

**One item still open.** The research theme was inferred: it is filed under
`comms-security` (LEO Communications & Security) from the title. If the payload
is the same surveillance-and-tracking family as the NSTC CubeSat program, move
it to `detection-tracking`.

---

## 5b. NSTC portal check — 2026-08-16

Checked against the NSTC 申辦系統 (學術研發服務網, logged-in view), which reports
execution periods, official project numbers, and live status — none of which the
public profile shows. Portal role counts: **計畫主持人 (1) · 共同主持人 (6)**, the
six being one application under review plus the five executing below.

| 計畫編號 | Project | Execution period | Portal status |
|---|---|---|---|
| 115-2119-M-011-001- | SAR–optical fusion, carbon stock (2/3) | 2026-05-01 → 2027-04-30 | 經費未結、報告未繳 |
| 115-2218-E-027-001- | AI-enabled communication payload (2/4) | 2026-07-01 → 2027-06-30 | 經費未結、報告未繳 |
| 114-2218-E-027-003- | AI-enabled communication payload (1/4) | 2025-07-01 → 2026-06-30 | **計畫到期**, 經費未結、報告已繳 |
| 114-2634-F-027-001-MBK | LEO satellite communications security (1/2) | 2025-08-01 → 2026-08-31 | 經費未結、報告已繳 |
| 114-2119-M-011-001- | SAR–optical fusion, carbon stock (1/3) | 2025-05-01 → 2026-04-30 | **計畫到期**, 經費報銷審核中、報告已繳 |

**Applied to the site:**

1. **Two status changes.** The FY114 CubeSat payload (1/4) and FY114 SAR (1/3)
   phases are 計畫到期 and now read `completed`. The FY114 LEO-security phase
   runs to 2026-08-31, so it stays `active` — for another two weeks.
2. **Execution periods** replace the bare Gregorian year on every card, so
   "民國 115 · 2026" becomes "民國 115 · 2026-05-01 – 2027-04-30".
3. **Official project numbers** are recorded in `grant-no` and shown as a
   monospaced badge. This is the canonical identifier for verifying any entry
   against NSTC, and closes the provenance gap noted in section 3.
4. Programme totals are unchanged; only status, periods, and identifiers moved.

**Under review, deliberately not on the site.** FY115 專題研究計畫（一般策略專案
計畫）低軌衛星通訊系統之安全防護與韌性強化 (2/2), submitted 2025-07-24, 審查中,
with no 申請經費 displayed. It is phase 2/2 of the existing LEO-security program.
Only awarded work is listed; add it when approved.

**Still missing.** The Orbit-AI FY114 program (the sole 計畫主持人 entry) has no
`period` or `grant-no` — the PI tab was not part of this check. Fill both from
計畫主持人 (1) at the next portal visit.

---

## 5c. CV cross-check — 2026-08-17

Checked against `個人簡歷_裴重恩_2026` (Drive → `PlumCard2026/`, created 2026-08-16),
which is more current than the evidence inventory and corrected several entries.
Where the two disagree, the CV wins.

**Corrected — UAAT–TAMUS titles.** Both phases were carrying the *umbrella
programme* name. They are Subproject 3, and each year has its own subproject
title:

| Phase | Correct title |
|---|---|
| 113 (2024-12 → 2025-11) | 基於衛星的邊緣人工智慧與深度強化學習增強即時海上物體追蹤 <br> *Enhancing Real-Time Maritime Object Tracking with Satellite-Based Edge AI and Deep Reinforcement Learning* |
| 114 (2025-12 → 2026-11) | 強化海事智慧與跨國合作之邊緣 AI 空中系統研發 <br> *Advancing Edge-AI Enabled Airborne Systems for Maritime Intelligence and Cross-Border Collaboration* |

The 113 title is exactly the title of `_projects/enhancing-maritime-tracking.md`,
which confirms that write-up belongs to phase 1. The programme name is retained
as `title-full-en`.

**Corrected — three teaching entries were wrong on name, number, period, and
status.** All three had in fact already ended; two were published as `active`:

| Was | Now |
|---|---|
| 全校型英語授課（EMI）教學精進計畫, FY114, active | 114 年全英語授課教學共進計畫, 7141108-1, 2025-08 → 2026-01, **completed** |
| 教學導師, FY114, active | 114 年高等教育深耕計畫－教學薪傳, 7141101, 2025-01 → 2026-07, **completed** |
| 全校型英語授課（EMI）教學精進計畫, FY113 | 113 年校級全英語授課教學共進計畫, 7131108-4, 2024-02 → 2025-07, completed |

**Added — the two PI projects gained periods and project numbers**, closing the
gap left open in section 5b:

| Project | 計畫編號 | Period | Status |
|---|---|---|---|
| Orbit-AI (114–116 年度) | 114-2221-E-027-030-MY2 | 2025-08 → 2027-07 | active — an **MY2 two-year award**, not a single year |
| CanSAT (113–114 年度) | 113-2222-E-027-011 | 2024-12 → 2025-11 | completed |

The TASA commission's 計畫編號 214I44 is now recorded as `grant-no` too; the CV
cites it as the project number, not merely an accounting code.

Every NSTC and TASA entry now carries an official project number. The two UAAT
phases have none — MOE subproject schedules do not issue one.

**Not added: the 2026–27 UAAT–TAMUS phase.** Drive folder `UAAT-TMAUS-2026-1`
holds a proposal for 12/01/2026 → 11/30/2027, *Edge Intelligence for Autonomous
Earth-Observation Sensor Webs and Satellite Communications*, PI 林信標, this lab
as Co-PI, with Daniel Selva (Texas A&M) as the TAMUS PI. The folder contains only
RFP drafts (v1–v3, dated 2026-08-10 → 08-14), a dean's letter of commitment, and
figures — **no award letter and no budget**. By the same rule as the NSTC 審查中
application, it stays off the site until awarded.

---

## 6. Published state as of 2026-08-17

What the Projects page now reports, after sections 3–5b were applied:

| | |
|---|---|
| Approved research funding | **NT$43,136,033** (NT$43.1M) |
| Programs / records | 7 programs · 10 annual funding records · 6 active |
| Roles | 2 as PI · 5 as Co-PI |
| Disciplines / agencies | 6 disciplines across 3 agencies |
| Funder split | NSTC NT$28,589,000 · MOE NT$2,423,333 · TASA NT$12,123,700 |
| Teaching | 2 programs · 3 records, role only, no figures, excluded from the total |
| Status | 6 active records · 4 completed (per the 2026-08-16 portal check) |

The funder split sums exactly to the headline. Figures **not** published anywhere
on the site, by decision: the UAAT personnel remuneration (NT$73,524 /
NT$60,000), the MOE teaching allocations (NT$20,000 / NT$10,000 / NT$20,000),
and the TASA instalment schedule, accounting number, and co-PI allocation table.

Remaining open item: the TASA commission's research theme is inferred
(`comms-security`); see the end of section 5.

---

## 7. Other files in the Drive folder (not exported)

`PlumCard2026/` also holds the Plum Blossom Card application package itself —
supporting-evidence PDFs, submission checklists, and institutional
recommendation letter drafts (EN and ZH-TW). The evidence inventory additionally
contains masked student-mentoring records, publication/citation counts, and
academic-rank certificate details; none of that belongs on the Projects page and
none of it is reproduced here.
