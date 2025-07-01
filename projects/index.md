---
title: Projects
nav:
  order: 2
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %} Projects
## 補助計畫一覽表

| Fiscal Year | Discipline Expertise           | Plan Name                                                                                     | Title       | Applied Subsidy (NT$) |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------------|-------------|------------------------|
| 114         | 航太系統與應用                 | Orbit-AI: 區域感知與情境自適應壓縮系統                                                       | 計畫主持人 | 2,159,000              |
| 114         | 立方衛星關鍵技術研發計畫       | 用於遠端目標監視與追蹤的人工智慧賦能通訊酬載(1/4)                                            | 共同主持人 | 5,000,000              |
| 114         | 地球科學應用                   | SAR衛星成像整合軟體應用加值資料應用關鍵技術研究--SAR成像與光學影像異質融合技術及應用於碳儲量變化之驗證(1/3) | 共同主持人 | 650,000                |
| 113         | 航太系統與應用                 | 基於罐頭衛星 (CanSAT) 平台以邊緣運算的半監督學習模型(Semi Supervised Learning Model)為重建部分雲層遮蔽災害物件區域之開發 | 計畫主持人 | 850,000                |


{% include search-box.html %}

{% for project in site.projects %}
  <div class="post-excerpt-container">
    <div class="post-excerpt">
      {% assign url = project.url %}
      {% assign title = project.title %}
      {% assign image = project.image %}

      {% if image %}
        <a href="{{ url }}" class="post-excerpt-image">
          <img src="{{ image | relative_url }}" alt="{{ title }}">
        </a>
      {% endif %}

      <div class="post-excerpt-text">
        <a href="{{ url }}">{{ title }}</a>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
{% endfor %}
