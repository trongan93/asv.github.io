---
title: Projects
nav:
  order: 2
  tooltip: Software, datasets, and more
---

# {% include icon.html icon="fa-solid fa-wrench" %} Projects

## 「國家科學及技術委員會全球資訊網」補助計畫一覽表  
### NSTC Subsidy Program List

| Fiscal Year           | Discipline Expertise           | Plan Name                                                                                     | Title       | Applied Subsidy (NT$) |
|-----------------------|--------------------------------|-----------------------------------------------------------------------------------------------|-------------|------------------------|
| 114 (In Processing)   | 航太系統與應用                 | Orbit-AI: 區域感知與情境自適應壓縮系統 <br> Orbit-AI: Region-Aware and Context-Adaptive Compression          | 計畫主持人 <br> (PI) | 2,159,000              |
| 114 (In Processing)   | 立方衛星關鍵技術研發計畫       | 用於遠端目標監視與追蹤的人工智慧賦能通訊酬載(1/4) <br> AI Empowered Communication Payload for Remote Target Surveillance and Tracking  | 共同主持人 <br> (Co-PI) | 5,000,000              |
| 114 (In Processing)   | 地球科學應用                   | SAR衛星成像整合軟體應用加值資料應用關鍵技術研究--SAR成像與光學影像異質融合技術及應用於碳儲量變化之驗證(1/3) <br> SAR imaging and optical image heterogeneous fusion and its application in the verification of carbon stock changes | 共同主持人 <br> (Co-PI) | 650,000                |
| 113 (In Processing)   | 航太系統與應用                 | 基於罐頭衛星平台以邊緣運算的半監督學習模型為重建部分雲層遮蔽災害物件區域之開發 <br> Development of a Semi-Supervised Learning Model for Disaster Object Reconstruction in Partially Cloud-Covered Areas Using Edge Computing on a CanSAT Platform | 計畫主持人 <br> (PI) | 850,000                |

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
