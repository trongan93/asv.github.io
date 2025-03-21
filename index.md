---
---

# Introduction
歡迎來到AeroSat Vision Lab，這裡是航空航太、人工智慧和衛星技術領域的尖端研究與技術創新的交匯處。在裴重恩博士的領導下，我們的實驗室致力於推進神經網路、電腦視覺和遙感技術的前沿研究，以推動航空航太和衛星應用的突破。

在AeroSat Vision Lab，我們致力於促進國際合作和產業夥伴關係，將研究成果轉化為現實世界的解決方案。我們的項目獲得了包括國家科學技術委員會在內的知名資助機構的支持，專注於開發創新技術，以增強衛星酬載和遙感能力。

加入我們的行列，讓我們利用人工智能和航空航天技術的力量，共同塑造衛星應用的未來，並為全球航空航天研究的進步作出貢獻。

Welcome to the AeroSat Vision Lab, where cutting-edge research meets technological innovation in the fields of aerospace, artificial intelligence, and satellite technology. Under the leadership of Dr. Trong-An Bui, our lab is dedicated to advancing the frontiers of neural networks, computer vision, and remote sensing to drive breakthroughs in aerospace and satellite applications.

At AeroSat Vision Lab, we are committed to fostering international collaborations and industry partnerships to transform research into real-world solutions. Our projects are supported by prestigious funding bodies, including the National Science and Technology Council, and focus on developing innovative technologies that enhance satellite payloads and remote sensing capabilities.

Join us on our journey as we harness the power of AI and aerospace technology to shape the future of satellite applications and contribute to the advancement of global aerospace research.

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
