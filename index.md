---
---

# Introduction
歡迎來到 AeroSat Vision Lab，這裡是航空航太、人工智慧與衛星科技交會的創新基地。在裴重恩博士的領導下，我們專注於神經網路、電腦視覺與遙測技術的研究，推動衛星系統的智慧化與自主化。
我們與國內外大學與業界夥伴緊密合作，開發如OrbitAI等嵌入式 AI 系統，應用於衛星酬載中的資料壓縮、目標追蹤與多感測器融合等功能。研究計畫獲得國家科學及技術委員會等單位支持，致力於將創新研究轉化為實際應用，拓展智慧太空技術的新可能。

Welcome to the AeroSat Vision Lab, where aerospace engineering, artificial intelligence, and satellite technology converge. Led by Dr. Trong-An Bui, our lab advances research in neural networks, computer vision, and remote sensing to enable smarter, more autonomous satellite systems.
We collaborate with academic and industry partners worldwide to develop embedded AI platforms like OrbitAI, supporting key functions such as data compression, object tracking, and multi-sensor fusion for satellite payloads. Supported by the National Science and Technology Council, our work transforms cutting-edge research into real-world innovation—shaping the future of intelligent space systems.

{% include section.html %}

## Highlights

{% capture text %}

AeroSat Vision Lab 致力於神經網路、電腦視覺與遙測技術在航太與衛星應用領域的前瞻研究。我們專注於太空載具之人工智慧自主系統開發，特別是以 OrbitAI 為核心的嵌入式 AI 平台。透過深度學習、低功耗運算與感測器融合，我們正引領軌道上智慧系統的創新。
AeroSat Vision Lab is dedicated to advancing the frontiers of neural networks, computer vision, and remote sensing in aerospace and satellite domains. We focus on AI-driven autonomy for spacecraft systems, particularly through the development of onboard platforms like OrbitAI. By combining deep learning, embedded computing, and space-grade sensor integration, our research aims to redefine how intelligent systems operate in orbit.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/lab-research.webp"
  link="research"
  title="研究方向 Our Research"
  text=text
%}

{% capture text %}
本實驗室目前推動的主要項目為 OrbitAI 系統，這是一套專為太空酬載設計的即時嵌入式 AI 平台，支援資料壓縮、目標追蹤與多感測器資料融合等功能。系統以 FPGA、MCU、DPU 為基礎架構，實現低功耗高效率之太空智慧應用，助力次世代衛星與自主載具任務的落實。
Our lab is currently developing OrbitAI—an embedded AI system designed for real-time spacecraft operations. Integrated with satellite payloads, OrbitAI enables capabilities such as data compression, object tracking, and multi-sensor fusion using FPGA, MCU, and DPU architectures. These projects bridge theory and application, supporting intelligent satellite missions and next-generation space systems.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/background.jpg"
  link="projects"
  title="研究計畫 Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

實驗室由來自國立臺北科技大學太空系統工程研究所與電子所的碩士生組成，並與越南胡志明師範大學（HCMUE）的研究生共同參與。我們現正與美國德州農工大學（Texas A&M University）航太工程系展開學術合作，並與多家國內外產業夥伴攜手合作，致力於推動太空人工智慧與衛星系統技術的創新應用。
Our lab is composed of graduate students from the Graduate Institute of Space Systems Engineering and the Department of Electronic Engineering at National Taipei University of Technology (Taipei Tech), with active collaboration from graduate researchers at Ho Chi Minh City University of Education (HCMUE), Vietnam. We are currently engaged in academic collaboration with the Department of Aerospace Engineering at Texas A&M University, and work closely with several industry partners in Taiwan and internationally to advance innovation in space AI and satellite technologies.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/lab-team.webp"
  link="team"
  title="Our Team"
  text=text
%}

{% capture text %}
{% for post in site.posts limit:3 %}
- **[{{ post.title }}]({{ post.url }})**  
  _{{ post.date | date: "%B %d, %Y" }}_  
  {{ post.description | default: post.excerpt | strip_html | truncatewords: 20 }}
{% endfor %}

{%
  include button.html
  link="blog"
  text="View all blogs"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{% endcapture %}

{%
  include feature.html
  image="images/noti.png"
  link="blog"
  title="Latest Blog Posts"
  text=text
  flip=true
%}
