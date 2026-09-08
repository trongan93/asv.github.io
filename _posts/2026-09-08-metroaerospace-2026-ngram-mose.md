---
title: "賀！碩士生論文獲 IEEE MetroAeroSpace 2026 錄取並刊登於 IEEE Xplore"
image: /images/blogs/2026-09-08-metroaerospace-ngram-mose-banner.jpg
author: AeroSat Vision Lab
tags: [MetroAeroSpace, Remote Sensing, Super-Resolution, Mixture-of-Experts, Transformer, Landslide Detection, NTUT, Student Achievement]
date: 2026-09-08
layout: post
---

## 🎉 恭喜 黃耘宣、莊智宏 同學！

本實驗室碩士生 **黃耘宣（Yun-Hsuan Huang）** 與 **莊智宏（Chih-Hung Chuang）** 共同參與的研究論文，已獲 **第 13 屆 IEEE 航太計量國際研討會（13th IEEE International Workshop on Metrology for AeroSpace, MetroAeroSpace 2026）** 正式錄取並發表，論文全文亦已收錄於 **IEEE Xplore** 數位圖書館。

本次研討會於 **2026 年 7 月 1 日至 3 日** 在 **西班牙馬德里（Universidad Carlos III de Madrid）** 舉行，是航太量測與感測領域的重要國際交流平台。對碩士班同學而言，能在此規模的國際場合發表研究成果，是相當難得的歷練，也是對研究品質的肯定。

---

### 📄 論文資訊

> **NGram-MoSE: Efficient Remote Sensing Super-Resolution via N-Gram Context and Mixture-of-Experts**
>
> **作者**：Yun-Hsuan Huang、Trong-An Bui（通訊作者）、Chih-Hung Chuang
> **單位**：國立臺北科技大學 太空系統工程研究所
> （Institute of Aerospace and Systems Engineering, National Taipei University of Technology）

🔗 **正式出版版本（IEEE Xplore）**：[ieeexplore.ieee.org/document/11646695](https://ieeexplore.ieee.org/document/11646695)
🔗 **公開全文與預印本（arXiv）**：[arxiv.org/abs/2606.08535](https://arxiv.org/abs/2606.08535)

---

### 🛰 研究簡介

遙測影像在**空間細節**、**觀測時效**與**運算成本**之間，長期存在難以兼顧的取捨：解析度較低的影像容易取得，卻缺乏細緻的地表紋理；而高品質的超解析（Super-Resolution, SR）雖能改善視覺品質與後續分析效果，實務上卻要求模型必須同時具備**精確、輕量、可泛化**三項特性。

本研究提出 **NGram-MoSE**，透過兩項核心設計提升超解析的重建能力：

- **N-Gram Context Attention**：在進行注意力運算前先引入鄰近視窗（neighboring-window）的上下文線索，協助還原跨越局部視窗邊界的連續結構，強化跨視窗的一致性。
- **Sparse Mixture-of-Experts FFN**：以稀疏路由方式將特徵導向部分專家分支，在運算量受限的前提下有效擴充模型容量。

本研究並從**重建品質**、**運算效率**與**下游任務可用性**三個角度進行評估，而非僅比較影像指標。

---

### 📊 主要成果

在**地理上互不重疊（out-of-distribution, OOD）** 的遙測測試場景中：

| 項目 | 結果 |
| --- | --- |
| OOD PSNR | **31.68 dB** |
| OOD SSIM | **0.9089** |
| 模型參數量 | **1.70 M** |
| 運算量（FLOPs） | 相較 SwinIR **減少約 14 倍** |
| 下游山崩偵測 mAP@50 | 較 Bicubic 提升 **+4.47** 個百分點 |

在下游應用驗證中，研究團隊將超解析後的影像輸入 **YOLOv8-Seg 山崩偵測模型**，結果顯示影像重建品質的提升確實能轉化為實際分析效能的改善，而非僅停留在指標數字上。注意力圖的分析亦顯示，模型在物件輪廓、海岸線邊界、道路、建物及紋理不連續處具有較強的反應。

---

### 🖼 研討會海報

<img src="/images/blogs/2026-09-08-metroaerospace-ngram-mose-poster.jpg" alt="NGram-MoSE 於 IEEE MetroAeroSpace 2026 發表之研究海報" style="max-width:100%; height:auto;">

---

再次恭喜 **黃耘宣** 與 **莊智宏** 兩位同學！感謝你們在實驗設計、模型調校與大量消融實驗（ablation study）上投入的心力。也期待實驗室的同學們持續在遙測影像處理、星載 AI 與太空系統工程領域，將研究成果推向國際舞台。

若您對本研究、遙測超解析或星載 AI 推論有興趣，歡迎透過[聯絡頁面](/contact/)與我們交流。
