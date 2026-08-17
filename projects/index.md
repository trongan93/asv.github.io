---
title: Projects
nav:
  order: 2
  tooltip: Funded programs, software, and datasets
---

# {% include icon.html icon="fa-solid fa-satellite" %}Projects

本實驗室的研究計畫涵蓋衛星酬載的嵌入式人工智慧、SAR 與光學影像融合、低軌衛星通訊安全，以及災害遙測應用，並由國家科學及技術委員會等單位支持。

Our programs span embedded AI for satellite payloads, SAR and optical image fusion, security for LEO satellite communications, and remote sensing for disaster response — supported by the National Science and Technology Council and partner institutions.

{% include section.html %}

## 計畫概況 Funding at a Glance

{% comment %}
  NOTE: keep generated HTML at no more than three leading spaces. Kramdown
  treats a line indented four or more spaces after a blank line as a code
  block, which silently turns markup into visible source.

  NOTE: Liquid 4.0 (pinned via jekyll 4.3) has no `sum` filter — it is a
  Liquid 5.4 addition. An unknown filter passes its input straight through,
  so `map: "amount" | sum` yields the array and every total renders as 0.
  Accumulate with `plus` instead.

  NOTE: a multi-year program holds one entry per annual phase, so
  `grants.size` is a count of funding RECORDS, not of programs — see the
  rules at the top of _data/grants.yaml. Anything describing distinct
  programs must count `program` ids through `uniq`, and any tile showing a
  number has to say which of the two it means. Ten records, seven programs.

  NOTE: teaching is never combined with the research programs. Teaching is
  different work, and those entries deliberately carry no funding figures at
  all — see rule 3 in _data/grants.yaml. `grants` below is research plus
  industry-academia; `teaching` is kept wholly separate.
{% endcomment %}
{% assign all_grants = site.data.grants %}
{% assign teaching = all_grants | where: "category", "teaching" %}
{% assign grants = all_grants | where_exp: "g", "g.category != 'teaching'" %}

{% assign total = 0 %}
{% for g in grants %}{% assign total = total | plus: g.amount %}{% endfor %}
{% assign programs = grants | map: "program" | uniq %}
{% assign active = grants | where: "status", "active" | map: "program" | uniq %}
{% assign as_pi = grants | where: "role", "pi" | map: "program" | uniq %}
{% assign disciplines = grants | map: "discipline-en" | uniq %}
{% assign agencies = all_grants | map: "agency" | uniq %}

<div class="stat-grid">
<div class="stat">
 <span class="stat-value">NT${{ total | divided_by: 1000000.0 | round: 1 }}M</span>
 <span class="stat-label">Approved research funding<br><span class="stat-sub">NT${% include number.html value=total %} across all phases</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ programs.size }}</span>
 <span class="stat-label">Research programs<br><span class="stat-sub">{{ grants.size }} annual funding records · {{ active.size }} active</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ as_pi.size }}</span>
 <span class="stat-label">Led as PI<br><span class="stat-sub">{{ programs.size | minus: as_pi.size }} as Co-PI</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ disciplines.size }}</span>
 <span class="stat-label">Disciplines<br><span class="stat-sub">across {{ agencies.size }} funding agencies, aerospace to cybersecurity</span></span>
</div>
</div>

{% comment %}
  Funding sources are three different kinds of award and are reported apart:
  a national research-council subsidy, an MOE international-collaboration
  programme, and a government-commissioned industry-academia project.
{% endcomment %}
{% assign nstc = grants | where: "agency", "NSTC" %}
{% assign moe = grants | where: "agency", "MOE" %}
{% assign industry = grants | where: "category", "industry" %}
{% assign nstc_total = 0 %}{% for g in nstc %}{% assign nstc_total = nstc_total | plus: g.amount %}{% endfor %}
{% assign moe_total = 0 %}{% for g in moe %}{% assign moe_total = moe_total | plus: g.amount %}{% endfor %}
{% assign industry_total = 0 %}{% for g in industry %}{% assign industry_total = industry_total | plus: g.amount %}{% endfor %}

<ul class="funder-split">
{% if nstc.size > 0 %}<li><strong>國科會 NSTC</strong><span>研究計畫 · Research subsidy</span><span class="funder-amount">NT${% include number.html value=nstc_total %}</span></li>{% endif %}
{% if moe.size > 0 %}<li><strong>教育部 MOE</strong><span>國際合作 · UAAT–TAMUS collaboration</span><span class="funder-amount">NT${% include number.html value=moe_total %}</span></li>{% endif %}
{% if industry.size > 0 %}<li><strong>國家太空中心 TASA</strong><span>產學合作 · Industry–academia</span><span class="funder-amount">NT${% include number.html value=industry_total %}</span></li>{% endif %}
</ul>

<p class="stat-note">
{% include icon.html icon="fa-solid fa-circle-info" %}
上列金額為<strong>核定經費</strong>：國科會與國家太空中心為計畫核定額，UAAT–TAMUS 為本實驗室以共同主持人身分承接之本校子計畫分配額。各計畫如有正式經費文件佐證之個人分配額，另於該計畫卡片標示。多年期計畫依年度階段分列並各自結案，故同一計畫可能同時有已結案與執行中之階段；{{ programs.size }} 項計畫共 {{ grants.size }} 筆補助紀錄，各階段均標示國科會計畫編號以供查證。教育部教學計畫性質不同，另列於下方且不計入上列總額。
<br>
Figures are <strong>approved budgets</strong>: for the NSTC and TASA the project-level award, and for UAAT–TAMUS the allocation to NTUT's Subproject 3, which this lab holds as Co-PI. Where a formal budget document records a share within that award, it is shown on the program itself. Multi-year programs are funded one annual phase at a time and each phase closes on its own term, so a single program may show a completed phase alongside a running one — {{ programs.size }} programs account for {{ grants.size }} funding records, each carrying its NSTC project number for verification. MOE teaching grants are a different kind of work, listed separately below and excluded from this total. NSTC entries reconciled against the
<a href="https://arspb.nstc.gov.tw/NSCWebFront/modules/talentSearch/talentSearch.do?action=initRsm17new&amp;rsNo=692e939b0e8044b8bf92c0b2f35b8756&amp;LANG=eng" target="_blank" rel="noopener">NSTC researcher profile</a>
on 2026-08-15; MOE and TASA entries from the NTUT research export, the UAAT–TAMUS funding schedules, and the commission record.
</p>

{% include section.html %}

## 補助計畫 Funded Research Programs

國科會與教育部補助之研究計畫一覽，依研究主題分類。Research programs supported by the NSTC and the Ministry of Education, grouped by research theme.

{% include search-box.html %}

{% include search-info.html %}

{% assign kinds = site.data.project-kinds %}

<nav class="kind-nav" aria-label="Jump to research theme">
{% for kind in kinds %}{% assign in_kind = grants | where: "kind", kind.id %}{% if in_kind.size > 0 %}
<a href="#kind-{{ kind.id }}">{% include icon.html icon=kind.icon %}{{ kind.label-en }}<span>{{ in_kind.size }}</span></a>
{% endif %}{% endfor %}
</nav>

{% assign classified = 0 %}
{% for kind in kinds %}
{% assign in_kind = grants | where: "kind", kind.id | sort: "year" | reverse %}
{% if in_kind.size > 0 %}
{% assign classified = classified | plus: in_kind.size %}
{% assign kind_programs = in_kind | map: "program" | uniq %}
{% assign kind_total = 0 %}
{% for g in in_kind %}{% assign kind_total = kind_total | plus: g.amount %}{% endfor %}
<h3 class="kind-heading" id="kind-{{ kind.id }}">{% include icon.html icon=kind.icon %}{{ kind.label }} · {{ kind.label-en }}<span class="kind-count">{{ kind_programs.size }} program{% if kind_programs.size != 1 %}s{% endif %}{% if in_kind.size != kind_programs.size %} · {{ in_kind.size }} records{% endif %} · NT${% include number.html value=kind_total %}</span></h3>
<div class="grant-list" data-search-group>
{% for grant in in_kind %}{% include grant.html grant=grant %}{% endfor %}
</div>
{% endif %}
{% endfor %}

{% comment %}
  anything whose kind is unset, or points at a theme that no longer exists
{% endcomment %}
{% assign leftovers = grants.size | minus: classified %}
{% if leftovers > 0 %}
<h3 class="kind-heading" id="kind-other">{% include icon.html icon="fa-solid fa-folder-open" %}其他 · Other<span class="kind-count">{{ leftovers }} record{% if leftovers != 1 %}s{% endif %}</span></h3>
<div class="grant-list" data-search-group>
{% for grant in grants %}{% assign known = kinds | where: "id", grant.kind %}{% if known.size == 0 %}{% include grant.html grant=grant %}{% endif %}{% endfor %}
</div>
{% endif %}

{% include section.html %}

## 教學與人才培育 Teaching & Talent Development

{% comment %}
  Education grants, kept apart from the research programs above on purpose —
  see rule 3 in _data/grants.yaml. Teaching is different work from a research
  program, so these entries record the role only and carry no funding figures.
  Do not add amounts or a subtotal here.
{% endcomment %}
{% assign teaching_programs = teaching | map: "program" | uniq %}

教育部補助之雙語教學與教學輔導計畫，本實驗室均擔任共同主持人。Ministry of Education grants for bilingual teaching and teaching mentorship, all held as Co-PI.

<h3 class="kind-heading" id="kind-teaching">{% include icon.html icon="fa-solid fa-chalkboard-user" %}教學計畫 · Teaching Grants<span class="kind-count">{{ teaching_programs.size }} program{% if teaching_programs.size != 1 %}s{% endif %}{% if teaching.size != teaching_programs.size %} · {{ teaching.size }} records{% endif %}</span></h3>
<div class="grant-list" data-search-group>
{% for grant in teaching %}{% include grant.html grant=grant %}{% endfor %}
</div>

{% include section.html %}

## 專案紀錄 Project Write-ups

深入介紹本實驗室的重點研究計畫，包含方法與實驗結果。In-depth accounts of selected projects, covering methods, results, and hardware validation.

{% for project in site.projects %}
<div class="post-excerpt-container">
<div class="post-excerpt">
{% if project.image %}
<a href="{{ project.url | relative_url }}" class="post-excerpt-image">
 <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy">
</a>
{% endif %}
<div class="post-excerpt-text">
 <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
 {% if project.subtitle %}<p class="post-excerpt-subtitle">{{ project.subtitle }}</p>{% endif %}
 {% if project.tags %}{% include tags.html tags=project.tags %}{% endif %}
 <p>{{ project.description | strip_html | truncatewords: 45 }}</p>
 <a href="{{ project.url | relative_url }}" class="read-more">Read more...</a>
</div>
</div>
</div>
{% endfor %}
