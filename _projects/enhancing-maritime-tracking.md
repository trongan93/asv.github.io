---
title: Enhancing Real-Time Maritime Object Tracking with Satellite-Based Edge AI and Deep Reinforcement Learning
subtitle: UAAT-TAMUS Collaborative Project (2024/12–2025/11)
group: featured
image: /images/projects/uaat-tamus.png
link: https://iase.ntut.edu.tw/
description: >
  1. Implement Edge AI on satellites to process remote sensing data, enabling real-time detection and tracking of maritime activities in the Taiwan Strait.  
  2. Create an integrated communication network using LEO satellites and UAVs/Ships to optimize data rates and ensure reliable data transmission.
tags:
  - international-research
date: 2025-03-21
layout: project
---

## 📌 Introduction

This project is supported by the **Ministry of Education, Taiwan**, under the **2024 University Academic Alliance in Taiwan (UAAT) – The Texas A&M University System (TAMUS) Integrated Program: Interdisciplinary Capacity Building for the New Space Generation**. It represents a collaborative initiative between **Taipei Tech (Taiwan Tech)** and **Texas A&M University** to strengthen academic and technological capabilities in aerospace and remote sensing through real-world research applications.

---

This project focuses on **real-time maritime object tracking** using Edge AI and **Deep Reinforcement Learning**. While the overarching vision involves satellite-based processing, the **current development and testing are centered on UAV platforms**. Specifically, the project involves:

- **Processing remote sensing data with AI models on UAVs** to simulate future satellite integration.
- **Tracking maritime activities in the Taiwan Strait** using onboard Edge AI for real-time ship detection and classification.
- **Developing and testing a UAV-based communication network** to validate architecture and data transmission strategies planned for eventual LEO satellite deployment.

> 🛠️ *Note:* Satellite systems are not included in the testing phase or KPIs of the current project cycle. UAVs serve as a testbed for core AI and communication technologies that will later scale to satellite applications.

---

## 📝 Midterm Report (as of May 2025)

### 1. Project Overview

This collaborative research project aims to enhance maritime object tracking using Edge AI and deep reinforcement learning technologies. Although the long-term vision includes **satellite-based AI processing**, the **current phase is focused exclusively on UAV-based implementation and validation**.

### 2. Objectives

1. **Implement Edge AI on UAV platforms** to enable real-time processing of remote sensing data for ship detection and tracking.  
2. **Develop a UAV-based communication network** to ensure efficient and reliable data transmission between UAVs and ground stations.  
3. Lay the groundwork for eventual integration with satellite systems through UAV-based testing of algorithms, models, and network behavior.

### 3. Scope Clarification

While the project title references satellite-based tracking, all **development, integration, and validation** during this project period are performed using **UAV platforms only**. Satellites are not involved in hardware or system testing in this phase.

### 4. Progress Highlights

- ✅ **Edge AI Deployment on UAVs**: Onboard object detection models (e.g., YOLOv5, MobileNet) successfully integrated on embedded GPU platforms.
- ✅ **Scenario Modeling**: Simulated maritime activity and environmental data over the Taiwan Strait used to train AI models.
- 🔄 **UAV Communication Prototyping**: UAV-to-UAV and UAV-to-ground communication protocols prototyped and tested under various network topologies.
- 🔄 **Reinforcement Learning Development**: Initial RL policies under training to manage UAV routing and communication optimization.

### 5. System Integration Diagram

The following diagram shows the integrated architecture for the UAV and ground station systems, including AI-based image recognition, RF front-end design, and broadband communication via the S-band:

![UAV and Ground Station System Architecture](/images/projects/uav-ground-station-architecture.png)

### 5.1 UAV Platform Setup

This image shows the hardware setup of the UAV, integrating the FPGA module, camera, and S-band communication payload:

![UAV Hardware Platform Setup](/images/projects/uav-hardware-setup.png)

**Key Components:**

- **FPGA (Xilinx)** for onboard AI inference
- **Air Unit Camera** for visual input
- **S-band Payload** for real-time transmission

### 5.2 Tracking Performance Comparison

To evaluate object tracking robustness, a comparative analysis was conducted between the baseline YOLO tracker and the proposed architecture. The sequence below shows object ID consistency across frames under occlusion conditions.

**Tracking by YOLO:**

![YOLO Tracking Sequence](/images/projects/yolo-tracking.png)

**Tracking by Proposed Model:**

![Proposed Tracking Sequence](/images/projects/proposed-tracking.png)

The results demonstrate that the proposed system improves tracking consistency by:

- **Reducing ID switches**  
- **Improving occlusion handling**

> The object retains a consistent ID even through temporary visual occlusion, showing the benefit of integrating motion prediction into the model.

### 5.3 Real-Time Tracking Demo (GIF)

The following animation demonstrates performance gains of the proposed tracking system compared to YOLO:

![Tracking Comparison Animation](/images/projects/tracking-comparison.gif)

> 📌 *The GIF highlights smoother tracking transitions and better ID retention through occlusion, critical for UAV-based missions.*

### 6. Next Steps

- Conduct **multi-UAV flight tests** to validate full AI + communication system pipeline.
- Optimize **model efficiency** for edge hardware (compute, power, bandwidth).
- Expand and evaluate reinforcement learning performance under more complex environmental dynamics.

### 7. Summary

Although satellites are a long-term integration target, this project cycle uses UAVs as a practical test platform to build, test, and refine AI and communication technologies needed for real-time maritime monitoring in the Taiwan Strait. The outcomes will directly support scalable transition to LEO satellite-based systems in future phases.

### 8. Research Output

As part of this **UAAT–TAMUS project**, the following peer-reviewed publication has been submitted and accepted for presentation:

**Ho, T., Bui, T.-A., Lee, P.-J., Lin, H.-P., Selva, D., Le, T.-T., & Tran, H.**  
“**Mitigating Occlusion and Re-Identification Challenges in UAV Object Tracking**”  
*Proceedings of the 2025 IEEE International Conference on Consumer Electronics – Taiwan (ICCE-Taiwan)*, Kaohsiung, Taiwan, July 15, 2025.

> 📝 *This paper addresses key challenges in UAV-based object tracking, including occlusion handling and identity preservation. It reflects foundational work developed under the scope of this project.*
