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
{% endcomment %}
{% assign grants = site.data.grants %}
{% assign total = 0 %}
{% for g in grants %}{% assign total = total | plus: g.amount %}{% endfor %}
{% assign active = grants | where: "status", "active" %}
{% assign as_pi = grants | where: "role", "pi" %}
{% assign disciplines = grants | map: "discipline-en" | uniq %}

<div class="stat-grid">
<div class="stat">
 <span class="stat-value">NT${{ total | divided_by: 1000000.0 | round: 1 }}M</span>
 <span class="stat-label">Total awarded<br><span class="stat-sub">NT${% include number.html value=total %}</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ grants.size }}</span>
 <span class="stat-label">Funded programs<br><span class="stat-sub">{{ active.size }} currently active</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ as_pi.size }}</span>
 <span class="stat-label">Led as PI<br><span class="stat-sub">{{ grants.size | minus: as_pi.size }} as Co-PI</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ disciplines.size }}</span>
 <span class="stat-label">Disciplines<br><span class="stat-sub">aerospace to cybersecurity</span></span>
</div>
</div>

{% include section.html %}

## 補助計畫 Funded Research Programs

國科會補助計畫一覽，依研究主題分類。NSTC subsidy programs, grouped by research theme.

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
{% assign kind_total = 0 %}
{% for g in in_kind %}{% assign kind_total = kind_total | plus: g.amount %}{% endfor %}
<h3 class="kind-heading" id="kind-{{ kind.id }}">{% include icon.html icon=kind.icon %}{{ kind.label }} · {{ kind.label-en }}<span class="kind-count">{{ in_kind.size }} program{% if in_kind.size != 1 %}s{% endif %} · NT${% include number.html value=kind_total %}</span></h3>
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
<h3 class="kind-heading" id="kind-other">{% include icon.html icon="fa-solid fa-folder-open" %}其他 · Other<span class="kind-count">{{ leftovers }} program{% if leftovers != 1 %}s{% endif %}</span></h3>
<div class="grant-list" data-search-group>
{% for grant in grants %}{% assign known = kinds | where: "id", grant.kind %}{% if known.size == 0 %}{% include grant.html grant=grant %}{% endif %}{% endfor %}
</div>
{% endif %}

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
