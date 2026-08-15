---
title: Research
nav:
  order: 1
  tooltip: Publications and research areas
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

AeroSat Vision Lab 致力於神經網路、電腦視覺與遙測技術在航太與衛星應用領域的前瞻研究。我們專注於太空載具之人工智慧自主系統開發，特別是以 OrbitAI 為核心的嵌入式 AI 平台。

AeroSat Vision Lab advances neural networks, computer vision, and remote sensing for aerospace and satellite systems. Our work centres on AI-driven autonomy for spacecraft — combining deep learning, embedded computing, and space-grade sensor integration to change how intelligent systems operate in orbit.

{% comment %}
  Publication figures are computed from _data/citations.yaml, which the cite
  workflow regenerates from ORCID. Stub records with no venue and no date are
  excluded so the counts match what actually renders below.
{% endcomment %}
{% assign pubs = site.data.citations | where_exp: "c", "c.publisher != blank" %}
{% assign pub_years = pubs | map: "date" | compact %}
{% assign first_year = pub_years | sort | first | date: "%Y" %}
{% assign journals = pubs | where_exp: "c", "c.publisher contains 'Journal' or c.publisher contains 'Transactions' or c.publisher contains 'Access' or c.publisher contains 'Letters'" %}
{% assign coauthors = pubs | map: "authors" | join: "," | split: "," | uniq %}

{% comment %}
  Liquid 4.0 (pinned via jekyll 4.3) has no `sum` filter; that arrived in
  Liquid 5.4. An unknown filter passes its input through untouched, so
  `map: "amount" | sum` would hand the whole array to divided_by and render 0.
{% endcomment %}
{% assign grant_total = 0 %}
{% for g in site.data.grants %}{% assign grant_total = grant_total | plus: g.amount %}{% endfor %}

<div class="stat-grid">
<div class="stat">
 <span class="stat-value">{{ pubs.size }}</span>
 <span class="stat-label">Publications<br><span class="stat-sub">since {{ first_year }}</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ journals.size }}</span>
 <span class="stat-label">Journal articles<br><span class="stat-sub">{{ pubs.size | minus: journals.size }} conference papers</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ coauthors.size }}</span>
 <span class="stat-label">Co-authors<br><span class="stat-sub">unique collaborators</span></span>
</div>
<div class="stat">
 <span class="stat-value">{{ grant_total | divided_by: 1000000.0 | round: 1 }}M</span>
 <span class="stat-label">NT$ in grants<br><span class="stat-sub"><a href="{{ "projects" | relative_url }}">see programs</a></span></span>
</div>
</div>

### 學術檔案 Scholarly Profiles

完整且持續更新的出版紀錄，請參閱以下學術檔案。The records below are the authoritative, continuously updated source — this page is generated from ORCID.

<div class="profile-links">
<a class="profile-link" href="https://orcid.org/{{ site.links.orcid }}" target="_blank" rel="noopener">
    {% include icon.html icon="fa-brands fa-orcid" %}
 <span class="profile-link-text">
  <strong>ORCID</strong>
  <span>{{ site.links.orcid }}</span>
 </span>
</a>
<a class="profile-link" href="https://scholar.google.com/citations?user={{ site.links.google-scholar }}" target="_blank" rel="noopener">
    {% include icon.html icon="fa-brands fa-google" %}
 <span class="profile-link-text">
  <strong>Google Scholar</strong>
  <span>Citations, h-index, and co-author graph</span>
 </span>
</a>
<a class="profile-link" href="https://github.com/{{ site.links.github }}" target="_blank" rel="noopener">
    {% include icon.html icon="fa-brands fa-github" %}
 <span class="profile-link-text">
  <strong>GitHub</strong>
  <span>Code and datasets released with our papers</span>
 </span>
</a>
</div>

{% include section.html %}

## 研究方向 Research Areas

{% comment %}
  themes come from _data/project-kinds.yaml, the same file that groups the
  funded programs on the projects page, so the two stay consistent
{% endcomment %}
<div class="area-grid">
{% for kind in site.data.project-kinds %}
{% assign programs = site.data.grants | where: "kind", kind.id %}
<div class="area">
 {% include icon.html icon=kind.icon %}
 <h3>{{ kind.label-en }}<span class="area-zh">{{ kind.label }}</span></h3>
 <p>{{ kind.blurb }}</p>
 {% if programs.size > 0 %}<a class="area-link" href="{{ "projects" | relative_url }}#kind-{{ kind.id }}">{{ programs.size }} funded program{% if programs.size != 1 %}s{% endif %}{% include icon.html icon="fa-solid fa-arrow-right" %}</a>{% endif %}
</div>
{% endfor %}
</div>

{% include section.html %}

## 代表著作 Selected Publications

{% include citation.html lookup="Cloud-Aware SAR Fusion" style="rich" %}
{% include citation.html lookup="doi:10.1109/JSTARS.2024.3357093" style="rich" %}
{% include citation.html lookup="doi:10.1109/JSTARS.2023.3328118" style="rich" %}

{% include section.html %}

## 全部著作 All Publications

依年份排列，共 {{ pubs.size }} 篇。{{ pubs.size }} publications, newest first. Filter by title, author, or venue.

{% include search-box.html %}

{% include search-info.html %}

{% assign dated = pubs | where_exp: "c", "c.date != blank" %}
{% assign by_year = dated | group_by_exp: "c", "c.date | date: '%Y'" | sort: "name" | reverse %}

<nav class="year-jump" aria-label="Jump to publication year">
  {% for year in by_year %}
 <a href="#pub-{{ year.name }}">{{ year.name }}<span>{{ year.items.size }}</span></a>
  {% endfor %}
</nav>

{% for year in by_year %}
  <h3 class="pub-year" id="pub-{{ year.name }}">
    {{ year.name }}
 <span class="pub-year-count">{{ year.items.size }} publication{% if year.items.size != 1 %}s{% endif %}</span>
  </h3>

  <div data-search-group>
    {% assign items = year.items | sort: "date" | reverse %}
    {% for c in items %}
      {%
        include citation.html
        id=c.id
        title=c.title
        authors=c.authors
        publisher=c.publisher
        date=c.date
        link=c.link
        image=c.image
        style="rich"
      %}
    {% endfor %}
</div>
{% endfor %}
