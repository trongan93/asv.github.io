---
title: Development of a Semi-Supervised Learning Model for Disaster Object Reconstruction in Partially Cloud-Covered Areas Using Edge Computing on a CanSAT Platform
subtitle: 基於罐頭衛星 (CanSAT) 平台以邊緣運算的半監督學習模型
group: featured
image: /images/projects/Result-water.png
link: https://github.com/
description: >
本計畫針對光學地球觀測影像易受雲層遮蔽影響、導致災害應變與 環境監測等任務缺乏即時可用資料之問題，提出以合成孔徑雷達（SAR）引導之光學影像雲去除與雲遮蔽區域重建流程。由於SAR具全天候成像能力，可在雲雨條件下提供穩定的結構與紋理線索，本研究以SAR結構資訊輔助光學多光譜影像之雲遮蔽修補，提升雲覆蓋情境下光學產品的可用性。<br/>方法面包含三個關鍵模組(1) 以SAR與光學影像之重疊區域為處理範圍，採分塊（tile-wise）流程以符合資源受限的執行需求；(2)以確定性粗到細跨模態配準建立像素級對應：先利用地理定位/軌道等後設資訊將SAR與光學表達於共同網格，再以邊緣特徵之相位相關估測殘差平移並以門檻機制篩選不可靠配對，以降低幾何誤差造成的重建偽影；(3) 以雙分支深度網路分別萃取SAR與光學特徵，透過注意力導向融合整合SAR結構與光學光譜資訊，並以多階段聚合與殘差學習輸出雲修補後之多光譜影像。<br/> 訓練策略採雲感知（cloud-aware）更新：以改良之雲偵測（包含雪/冰抑制）於訓練階段產生雲區權重，對雲遮蔽像素進行損失加權以提升濃雲條件下的重建品質；推論階段不依賴雲遮罩以降低作業複雜度。實驗展示結果顯示，所提方法在中高雲量與近乎全雲覆蓋情境下仍可維持較佳的結構連續性，並支援下游應用（如水體輪廓擷取）。此外，本計畫完成邊緣運算驗證，將模型經量化與部署至FPGA平台，於維持重建品質下達成即時推論效能，顯示具備在邊緣/上板環境執行雲去除與快速產製可用光學產品之可行性。<br/> Cloud contamination remains a major limitation of optical Earth observation (EO), particularly in tropical and monsoon regions where persistent cloud cover reduces the availability of timely imagery for disaster response and environmental monitoring. This project develops a SAR-guided optical restoration workflow to generate cloud-refined multispectral imagery from paired synthetic aperture radar (SAR) and cloud-contaminated optical observations. SAR is largely insensitive to illumination and weather, and therefore provides stable structural cues (geometry, edges, and texture) that can complement the spectral information of optical sensors when optical measurements are degraded. <br/> The proposed workflow is designed with operational constraints in mind and consists of three key components. First, pre-processing is performed over the SAR–optical overlap region using a tile-wise strategy to keep memory usage bounded and to support resource-constrained execution. Second, a deterministic coarse-to-fine cross-modality co-registration module establishes pixel-level correspondence prior to fusion. Coarse alignment maps both modalities to a common projected grid using geolocation metadata and inverse geocoding/resampling. Residual within-tile misalignment is then approximated as an in-plane translation and refined using FFT-based phase correlation on modality-robust edge representations. A lightweight acceptance gate screens unreliable pairs (e.g., low-texture areas or insufficient optical structure under dense cloud) to reduce the risk of reconstruction artifacts caused by misregistration. Third, cloud restoration is performed by a two-stream neural network that extracts modality-specific features from SAR and optical inputs, integrates complementary cues through attention-guided fusion, and reconstructs a cloud-refined multispectral output via multi-stage feature aggregation and residual prediction. This design preserves radiometric consistency in clear-sky regions while focusing correction capacity on occluded areas. <br/> To address the strong spatial imbalance introduced by clouds, a cloud-aware training strategy is applied during model optimization. A refined cloud mask is generated at training time using multispectral cues and snow/ice suppression, and is used to form a pixel-wise weight map for loss reweighting. This increases supervision emphasis on cloud-occluded pixels, improving reconstruction fidelity under heavy cloud coverage. Importantly, the cloud mask is not required at inference, which reduces operational dependency on mask generation and simplifies deployment. Project results, as summarized in the poster materials, indicate that the SAR-guided approach improves structural completeness under both moderate and extreme cloud coverage and supports downstream analytics such as water-body delineation from the reconstructed products. In addition, the project validates edge/onboard feasibility using an FPGA-based edge-computing prototype. The deployment pathway includes calibration-driven low-precision quantization, compilation to an accelerator-ready artifact, tile-wise inference execution, and quantitative verification. The experiment measurements demonstrate real-time inference latency while maintaining high reconstruction quality, supporting the practicality of executing cloud removal locally under constrained compute, memory, and power budgets.<br/> Overall, this project provides an end-to-end, deployable pathway for cloud-resilient optical EO: deterministic SAR–optical co-registration to enable reliable pixel-level fusion, attention-guided SAR–optical restoration with cloud-aware training to improve performance under dense
occlusion, and verified edge execution to reduce latency and downlink dependence for time-sensitive EO applications.


tags:
  - NSTC
  - 國科會計劃
date: 2026-02-28
layout: project
---

# 前言 / Introduction

Cloud contamination remains one of the most persistent limitations of optical Earth observation (EO). In many regions—especially tropical and monsoon climates—cloud cover frequently obscures the surface, reducing the availability of timely imagery for disaster response, environmental monitoring, and land-use assessment. When observations are heavily occluded, downstream analysis (e.g., change detection, damage mapping, and situational awareness) becomes unreliable or delayed.

Synthetic Aperture Radar (SAR) complements optical EO because SAR measurements are largely insensitive to illumination and weather. As a result, SAR can preserve scene structure even when optical imagery is severely degraded by clouds. This cross-modality complementarity (Fig. <a href="#fig:motivation" data-reference-type="ref" data-reference="fig:motivation">1</a>) motivates SAR-guided restoration: SAR provides geometric and textural cues, while optical imagery provides rich spectral information for interpretable surface characterization.

Despite progress in SAR–optical fusion for cloud removal, practical gaps remain. First, many learning-based methods do not explicitly prioritize cloud-occluded pixels during optimization, which can limit reconstruction quality under heavy cloud coverage. Second, while cloud masks can improve training, requiring masks at inference increases operational complexity and reduces robustness in real deployments. Third, rapid-response and spaceborne scenarios impose strict constraints on latency, memory footprint, and power consumption; therefore, methods must be developed with deployability in mind.

<figure id="fig:motivation" data-latex-placement="H">
<img src="/images/projects/SAR_Optical_reg.png" style="width:60.0%" />
<figcaption>SAR–optical complementarity: SAR provides weather-independent structural cues that complement the spectral information available from optical imagery.</figcaption>
</figure>

To address these needs, this project develops a SAR-guided optical restoration workflow that emphasizes reconstruction quality in cloud-occluded regions while maintaining a deployable processing chain. The proposed approach combines reliable SAR–optical alignment, effective cross-modality fusion, and cloud-aware training strategies, and is validated under deployment-oriented settings.

# 研究目的 / Research Objectives

The overall goal is to develop a practical and deployable SAR-guided capability for restoring cloud-refined optical EO imagery under diverse cloud conditions, with particular emphasis on heavy occlusion and resource-constrained execution. The specific objectives are:

1.  **Enhance reconstruction in cloud-occluded regions.** Develop cloud-aware training and reconstruction strategies that increase optimization emphasis on occluded pixels, improving fidelity under severe cloud coverage.

2.  **Strengthen SAR–optical fusion robustness.** Design fusion mechanisms that effectively integrate SAR structural cues with optical spectral information and maintain stability from partially cloudy to fully cloudy cases.

3.  **Reduce inference-time operational dependencies.** Apply mask-guided supervision during training while avoiding reliance on cloud masks at inference, simplifying deployment in operational pipelines.

4.  **Support end-to-end mission-relevant processing.** Incorporate workflow requirements including SAR–optical overlap handling, acquisition pairing constraints, and coarse-to-fine co-registration to ensure effectiveness on real mission data.

5.  **Validate deployability under edge/onboard constraints.** Evaluate latency, throughput, and quality retention under deployment-oriented settings (e.g., quantization and FPGA/edge execution) to demonstrate feasibility for time-sensitive applications.

# 文獻探討 / Literature Review

Prior work on cloud-contaminated optical remote sensing can be grouped into (i) SAR–optical fusion for cloud removal, (ii) cloud masking and guided learning, (iii) cross-modality co-registration, and (iv) deployment-oriented processing under resource constraints. SAR–optical fusion is widely adopted because SAR provides weather-insensitive structural cues that complement the spectral information of optical imagery.

**SAR–optical fusion:** Early fusion relied on rule-based/statistical operations (e.g., histogram matching and filtering) to replace cloud-covered pixels using SAR cues . Deep learning improved end-to-end fusion, including CNN-based designs , graph aggregation , GAN-based restoration , and attention-based models that better capture long-range interactions . However, many high-performing architectures incur substantial compute and memory cost, limiting suitability for real-time or onboard execution.

**Cloud masking and learning strategy:** Mask-aware training can improve convergence and accuracy under dense occlusion , but inference-time dependence on masks increases operational complexity and can require additional detection pipelines that are error-prone in heterogeneous scenes . Mask-free approaches reduce dependencies but may degrade under severe occlusion .

**Deployment considerations and gap:** Reliable SAR–optical co-registration is essential for pixel-level fusion and must be computationally efficient for edge/onboard workflows. In addition, diffusion-based methods can yield strong perceptual quality but are typically too slow for low-latency missions . Overall, the key gap is an end-to-end solution that jointly addresses *robust co-registration*, *cloud-focused learning without inference-time mask dependence*, and *bounded compute/memory suitable for edge/onboard deployment*.

# 研究方法 / Research Methods

This project develops a SAR-guided optical restoration workflow to generate cloud-refined multispectral imagery from paired SAR observations and cloud-contaminated optical acquisitions. The workflow includes: (i) overlap-aware tile-wise processing, (ii) deterministic SAR–optical co-registration to establish pixel-level correspondence, (iii) two-stream feature extraction and attention-guided fusion, and (iv) cloud-aware training with loss reweighting to increase optimization emphasis in cloud-occluded regions. The implementation targets practical operation under bounded compute and memory constraints and supports edge/onboard deployment.

## Overview of the Cloud-Attentive Reconstruction Framework

Given a cloudy optical observation $`I_{\text{opt}}^{\text{cloud}}`$ and a paired SAR observation $`I_{\text{sar}}`$, the objective is to estimate a cloud-refined optical product $`\hat{I}_{\text{opt}}`$:
``` math
\hat{I}_{\text{opt}} = f\!\left(I_{\text{opt}}^{\text{cloud}}, I_{\text{sar}}\right),
```
where $`f(\cdot)`$ denotes the implemented restoration pipeline. As summarized in Fig. <a href="#fig:method-workflow" data-reference-type="ref" data-reference="fig:method-workflow">2</a>, the pipeline extracts features from each modality, fuses complementary information, and reconstructs a multispectral output while maintaining radiometric consistency in clear-sky regions.

<figure id="fig:method-workflow" data-latex-placement="H">
<img src="/images/projects/1-main-flowchart.png" style="width:80.0%" />
<figcaption>Workflow of the proposed <strong>Cloud-Attentive Reconstruction Framework</strong> for cloud-free optical imaging via SAR fusion.</figcaption>
</figure>

#### SAR–optical overlap and tile-wise processing.

Because SAR and optical acquisitions may differ in footprint and viewing geometry, fusion is restricted to their spatial overlap. The overlap region bounds the area where pixel-level correspondence can be established after co-registration. Fig. <a href="#fig:s12_footprints_full" data-reference-type="ref" data-reference="fig:s12_footprints_full">3</a> illustrates the overlap geometry used to determine valid fusion regions. When full-overlap processing is unnecessary or exceeds resource budgets, the workflow operates tile-wise by selecting bounded tiles (or AOI crops) within the overlap, while retaining the same co-registration and restoration steps.

<figure id="fig:s12_footprints_full" data-latex-placement="H">
<img src="/images/projects/s12-footprints.png" style="width:50.0%" />
<figcaption>Illustration of SAR–optical overlap geometry for fusion. The overlap region defines the maximum spatial extent that can be jointly processed after co-registration.</figcaption>
</figure>

## Cross-Modality Co-registration for SAR–Optical Fusion

Accurate SAR–optical co-registration is required for pixel-level fusion; residual mismatch can introduce structured artifacts, particularly near sharp boundaries and high-frequency textures. Co-registration is challenging due to differences in sensing geometry and radiometry (including SAR speckle). To ensure reliability with predictable runtime, a deterministic coarse-to-fine procedure is adopted: mapping to a common grid using metadata-driven inverse geocoding, refinement of residual translation using phase correlation on edge representations, and a lightweight acceptance gate to screen unreliable pairs (Fig. <a href="#fig:coreg_flowchart" data-reference-type="ref" data-reference="fig:coreg_flowchart">4</a>).

#### Coarse stage (common-grid mapping):

A projected reference grid is defined over the overlap region. SAR geolocation metadata provides correspondences between slant-geometry sampling coordinates $`(p,\ell)`$ and map coordinates, forming $`\mathcal{G}=\{(p_i,\ell_i)\leftrightarrow(x_i,y_i)\}_{i=1}^{N}`$. An inverse map is constructed by scattered interpolation,
$$
\begin{equation}
(p(\mathbf{u}),\ell(\mathbf{u})) = G^{-1}(\mathbf{u};\mathcal{G}),
\label{eq:inverse_map}
\end{equation}
$$
and the SAR tile is resampled on the common grid using bilinear interpolation in the *linear* domain,
$$
\begin{equation}
\tilde{I}_{S}(\mathbf{u}) = \mathrm{Bilinear}\big(I_S^{\mathrm{lin}},\, p(\mathbf{u}),\, \ell(\mathbf{u})\big),
\label{eq:sar_resample}
\end{equation}
$$
forming the coarse-aligned pair $`\{\tilde{I}_S,\,\tilde{I}_O\}`$.

<figure id="fig:coreg_flowchart" data-latex-placement="H">

<figcaption>Coarse-to-fine SAR–optical co-registration pipeline. Metadata-driven mapping establishes a common grid, phase correlation refines residual translation using edge representations, and an acceptance gate screens unreliable pairs prior to fusion.</figcaption>
</figure>

#### Fine stage (translation refinement):

After metadata-driven alignment, residual misregistration may remain due to ephemeris/attitude uncertainty, timing offsets, and interpolation residuals. Under tile-wise processing, this residual is approximated as a small in-plane translation on the common grid. Fine refinement therefore estimates a sub-pixel translation via phase correlation computed on edge maps:
``` math
\begin{equation}
\begin{aligned}
E_S &= \mathrm{Canny}\!\left(G_{\sigma_s} * \tilde{I}_S,\ \tau_l^s,\, \tau_h^s \right), \\
E_O &= \mathrm{Canny}\!\left(G_{\sigma_o} * \tilde{I}_O,\ \tau_l^o,\, \tau_h^o \right),
\end{aligned}
\label{eq:edge_maps}
\end{equation}
```
``` math
\begin{equation}
\begin{aligned}
R(u,v)&=\frac{\mathcal{F}\{E_O\}\cdot\mathcal{F}\{E_S\}^{*}}{\left|\mathcal{F}\{E_O\}\cdot\mathcal{F}\{E_S\}^{*}\right|}, \\
r(x,y)&=\mathcal{F}^{-1}\{R(u,v)\},
\end{aligned}
\label{eq:phase_corr}
\end{equation}
```
``` math
\begin{equation}
(\Delta x,\Delta y) = \arg\max_{x,y} |r(x,y)|.
\label{eq:shift_est}
\end{equation}
```
The alignment transform is updated as
``` math
\begin{equation}
T_\theta \leftarrow T_\theta \circ \mathcal{T}_{\Delta}, \qquad
\mathcal{T}_{\Delta}(\mathbf{u}) = \mathbf{u} + (\Delta x,\Delta y),
\label{eq:shift_apply}
\end{equation}
```
yielding the refined pair $`\{I_S^{\mathrm{fine}},\, I_O^{\mathrm{fine}}\}`$.

#### Acceptance gate:

To handle failure cases (e.g., weak optical structure under dense cloud, low-texture regions, or strong temporal change), edge consistency is measured by the IoU of dilated edge maps:
``` math
\begin{equation}
\mathrm{IoU}_{\mathrm{edge}}=\frac{|D_k(E_S)\cap D_k(E_O)|}{|D_k(E_S)\cup D_k(E_O)|}.
\label{eq:edge_iou}
\end{equation}
```
A candidate is accepted if $`\mathrm{IoU}_{\mathrm{edge}}\ge \tau_{\mathrm{IoU}}`$ and $`\delta_{\mathrm{res}}\le \tau_{\delta}`$; otherwise it is rejected or deferred.

## Feature Extraction, Fusion, and Cloud-Free Reconstruction

A two-stream network combines SAR structural cues with optical spectral information. SAR and optical inputs are first encoded independently to preserve modality characteristics. SAR provides stable structure under cloud cover but is affected by speckle noise , while optical imagery provides rich spectra but is degraded by cloud-induced occlusion . The optical stream is encoded into a multi-scale feature pyramid using strided convolutional embedding, and the SAR stream is encoded into matched-scale features using lightweight residual blocks and pooling.

Attention-guided fusion integrates SAR structure into optical features by combining dense residual feature propagation with attention-based refinement. Window-based self-attention is used to model spatial context with manageable complexity . The fusion mechanism is summarized in Fig. <a href="#fig:affm_flowchart" data-reference-type="ref" data-reference="fig:affm_flowchart">5</a>.

<figure id="fig:affm_flowchart" data-latex-placement="H">
<img src="/images/projects/2-AFFM-flowchart.png" style="width:70.0%" />
<figcaption>Attention-driven SAR–optical feature fusion mechanism used in the restoration network.</figcaption>
</figure>

Reconstruction aggregates multi-stage refined optical representations using a Global Feature Fusion (GFF) module and restores full-resolution multispectral output using an Image Reconstruction Network (IRN). Residual learning is used to preserve clear-sky radiometry by predicting a correction relative to the cloudy input:
``` math
\hat{I}_{\text{opt}} \;=\; \mathrm{IRN}\!\left(F_{\text{GFF}}^{\text{final}}\right) \;+\; I_{\text{opt}}^{\text{cloud}}.
```
The reconstruction stage is illustrated in Fig. <a href="#fig:recon_flowchart" data-reference-type="ref" data-reference="fig:recon_flowchart">6</a>.

<figure id="fig:recon_flowchart" data-latex-placement="H">
<img src="/images/projects/6-reconstruction-flowchart.png" style="width:80.0%" />
<figcaption>Cloud-free reconstruction using multi-stage feature aggregation (GFF) and the image reconstruction network (IRN).</figcaption>
</figure>

## Cloud-Aware Model Update Strategy

Cloud occlusion introduces strong spatial imbalance: only a subset of pixels is corrupted, while clear-sky regions should remain radiometrically consistent. A cloud-aware training strategy is therefore applied during optimization to increase emphasis on cloud-occluded regions, while keeping inference independent of cloud-mask preprocessing. The strategy consists of refined cloud mask generation (training-only) and adaptive loss weighting.

<figure id="fig:cloud-mask" data-latex-placement="H">
<img src="/images/projects/data-cloud-mask.png" style="width:45.0%" />
<figcaption>Example of a refined cloud mask <span class="math inline"><em>M</em><sup>′</sup>(<em>x</em>, <em>y</em>)</span> used to guide training-time loss reweighting. The refinement reduces false positives (e.g., snow-like regions) and improves spatial coherence of cloud delineation.</figcaption>
</figure>

#### Refined cloud mask generation (training-only):

A cloud probability score is computed from multispectral cues using an enhanced Sen2Cor-style procedure . A binary cloud mask is formed with a threshold $`T_{\text{cloud}}`$ and refined using the Normalized Difference Snow Index (NDSI) to reduce snow/ice false positives. The refined mask is denoted by $`M'(x,y)\in\{0,1\}`$. An example is shown in Fig. <a href="#fig:cloud-mask" data-reference-type="ref" data-reference="fig:cloud-mask">7</a>.

#### Adaptive loss weighting:

A pixel-wise weight map emphasizes cloud-occluded regions:
``` math
\begin{equation}
W_{\text{cloud}}(x,y) \;=\; \alpha \, M'(x,y) \;+\; (1-\alpha)\,[1-M'(x,y)],
\end{equation}
```
with $`\alpha=0.8`$. The cloud-aware objective combines reconstruction fidelity and structural similarity:
``` math
\begin{equation}
\mathcal{L}_{\text{final}} \;=\; \frac{1}{|\Omega|}\sum_{(x,y)\in\Omega}
W_{\text{cloud}}(x,y)\Big(\lambda_1\,\mathcal{L}_{\text{MSE}}(x,y)+\lambda_2\,\mathcal{L}_{\text{SSIM}}(x,y)\Big),
\label{eq:cloud_aware_loss}
\end{equation}
```
with $`\lambda_1=\lambda_2=0.5`$.

#### Mask-aware supervision with mask-free inference:

The refined mask is used only to reweight the training objective and is not required during inference. This avoids additional operational dependencies while maintaining the intended emphasis on occluded regions during learning. Fig. <a href="#fig:mask_aware_training_flow" data-reference-type="ref" data-reference="fig:mask_aware_training_flow">8</a> summarizes the separation between mask-aware training and mask-free deployment.

<figure id="fig:mask_aware_training_flow" data-latex-placement="H">

<figcaption><strong>Mask-aware supervision is confined to training.</strong> A refined cloud mask is computed offline and used only to reweight the training objective. In deployment, inference executes without cloud masks to avoid additional latency or preprocessing dependencies.</figcaption>
</figure>

## Algorithm Summary

**Inputs:** Cloud-contaminated multispectral optical image $`I_{\mathrm{opt}}^{\mathrm{cloud}}`$, paired SAR image $`I_{\mathrm{sar}}`$; *training only:* refined cloud mask $`M'(x,y)`$.\
**Output:** Cloud-refined multispectral optical estimate $`\hat{I}_{\mathrm{opt}}`$.

1.  **Tiling and overlap selection.** Determine the SAR–optical overlap region and form tiles (or AOI crops).

2.  **Co-registration.** Map both modalities to a common grid, refine residual translation via phase correlation on edge maps, and apply an acceptance gate to obtain $`\{I_S^{\mathrm{fine}}, I_O^{\mathrm{fine}}\}`$.

3.  **Encoding and fusion.** Extract modality-specific multi-scale features and integrate SAR and optical cues using attention-guided fusion.

4.  **Reconstruction.** Aggregate multi-stage features (GFF) and reconstruct the optical output (IRN) with residual prediction: $`\hat{I}_{\mathrm{opt}}=\mathrm{IRN}(F_{\mathrm{GFF}}^{\mathrm{final}})+I_{\mathrm{opt}}^{\mathrm{cloud}}`$.

5.  **Cloud-aware optimization (training only).** Reweight the objective using $`W_{\mathrm{cloud}}`$ derived from $`M'`$ and minimize $`\mathcal{L}_{\mathrm{final}}`$; inference runs without cloud masks.

# 邊緣運算平台與上板部署 / Edge Computing Platform & Onboard Deployment

Rapid-response Earth observation (EO) is often constrained by limited downlink capacity and end-to-end latency, especially when cloud cover reduces the usability of optical imagery. To improve timeliness and reduce dependence on ground-side processing, the proposed SAR–optical cloud removal pipeline is designed for edge/onboard execution. An edge-computing prototype is used to validate the deployment path by combining **FPGA-accelerated inference** with a host-side control and monitoring stack. This setup enables end-to-end evaluation under practical constraints, including bounded memory, deterministic execution, and reduced power consumption. The hardware configuration and the deployment workflow are summarized in Fig. <a href="#fig:edge-platform" data-reference-type="ref" data-reference="fig:edge-platform">9</a> and Fig. <a href="#fig:edge-perform" data-reference-type="ref" data-reference="fig:edge-perform">10</a>, respectively.

<figure id="fig:edge-platform" data-latex-placement="!htbp">
<img src="/images/projects/edge-computing-platform.jpg" style="width:80.0%" />
<figcaption>Edge-computing validation platform integrating a Xilinx FPGA inference accelerator and a host computer for real-time SAR–optical fusion and reconstruction.</figcaption>
</figure>

## Deployment Workflow and Edge Performance

Deployment follows a quantization-oriented workflow to satisfy hardware resource limits while preserving reconstruction quality. A trained floating-point checkpoint is exported and calibrated using data processed with the same normalization and tiling policy intended for deployment. Calibration statistics are used to determine stable low-precision scales, and the model is compiled into an accelerator-ready artifact for board-side execution . During inference, processing is performed **tile-wise** to bound the working set within on-chip memory and maintain predictable runtime. Platform I/O requirements are handled through interface-aligned formatting (e.g., channel padding to hardware-friendly dimensions) without altering the semantic content of the original spectral bands . The output is bounded to $`[0,1]`$ using a hardware-friendly piecewise-linear function (PWS) implemented as a clipped affine transform, which avoids expensive nonlinear operators and improves numerical stability under embedded execution .

<figure id="fig:edge-perform" data-latex-placement="H">
<img src="/images/projects/edge-perform.png" style="width:82.0%" />
<figcaption>Quantization-oriented deployment workflow for FPGA execution and the corresponding on-board inference performance metrics reported in the poster.</figcaption>
</figure>

The measurements indicate real-time edge inference with an average latency of **84.5 ms per image** (approximately **11.8 FPS**) while maintaining high reconstruction quality (**PSNR 34.15 dB**, **SSIM 0.94**). These results support the feasibility of executing cloud removal locally on edge hardware and delivering cloud-refined optical products with low latency for time-sensitive downstream tasks such as rapid mapping and water-body delineation.

# 結果與討論 / Results and Discussion

This section summarizes reconstruction performance and deployment feasibility evidenced in the project, and discusses practical implications for rapid-response Earth observation. The evaluation emphasizes (i) reconstruction quality under varying cloud coverage and (ii) runtime characteristics on an edge-computing prototype.

## Reconstruction Quality

#### Qualitative results and downstream usefulness:

Figure <a href="#fig:water-result" data-reference-type="ref" data-reference="fig:water-result">11</a> shows an end-to-end example from the poster. A cloud-obscured optical image paired with SAR structural cues is reconstructed into a cloud-refined optical product. The restored output preserves shoreline continuity and local boundary details while maintaining spectral consistency in non-occluded areas. As illustrated by the water recognition overlay (red contour), the reconstructed product enables reliable water-body delineation, supporting rapid mapping workflows where timely products are required. Visual comparisons under approximately 50% (Fig. <a href="#fig:compare-50" data-reference-type="ref" data-reference="fig:compare-50">12</a>) and 100% cloud coverage (Fig. <a href="#fig:compare-100" data-reference-type="ref" data-reference="fig:compare-100">13</a>) further indicate improved structural completeness under severe occlusion, where optical-only restoration is typically underconstrained.

<figure id="fig:water-result" data-latex-placement="H">
<img src="/images/projects/Result-water.png" style="width:90.0%" />
<figcaption>End-to-end outcome: <strong>cloudy optical</strong> + <strong>SAR</strong> <span class="math inline">⇒</span> <strong>cloud-free reconstruction</strong> <span class="math inline">⇒</span> <strong>water recognition</strong> (red contour).</figcaption>
</figure>

<figure id="fig:compare-50" data-latex-placement="H">
<img src="/images/projects/Results-50.png" />
<figcaption>Visual comparison under approximately ~50% cloud coverage. Labels (a)–(e) correspond to: Cloudy input, SAR, GLF-CR, Proposed method, and Ground truth.</figcaption>
</figure>

<figure id="fig:compare-100" data-latex-placement="H">
<img src="/images/projects/Results-100.png" />
<figcaption>Visual comparison under approximately ~100% cloud coverage. Labels (a)–(e) correspond to: Cloudy input, SAR, GLF-CR, Proposed method, and Ground truth.</figcaption>
</figure>

#### Quantitative comparison with baseline methods:

Table <a href="#tab:comparison" data-reference-type="ref" data-reference="tab:comparison">1</a> reports poster-provided metrics comparing the proposed method with representative baseline approaches. The proposed method achieves the best scores among the listed baselines (PSNR 31.01 dB, SSIM 0.918, MAE 0.017). Improvements over GLF-CR (PSNR 29.73 dB, SSIM 0.885, MAE 0.025) are consistent with the expected benefit of SAR-guided fusion together with cloud-aware training emphasis, which reduces reconstruction error in regions where optical spectral information is missing or corrupted. The qualitative panels in Fig. <a href="#fig:compare-50" data-reference-type="ref" data-reference="fig:compare-50">12</a> and Fig. <a href="#fig:compare-100" data-reference-type="ref" data-reference="fig:compare-100">13</a> are consistent with these numerical trends, showing improved structural continuity under heavy cloud coverage.

<div id="tab:comparison">

| **Method** | **PSNR (dB)**$`\uparrow`$ | **SSIM**$`\uparrow`$ | **MAE**$`\downarrow`$ |
|:---|:--:|:--:|:--:|
| SAR-Opt-cGAN | 25.29 | 0.764 | 0.043 |
| Simulation-FusionGAN | 24.55 | 0.701 | 0.046 |
| DSen2-CR | 27.38 | 0.874 | 0.032 |
| GLF-CR | 29.73 | 0.885 | 0.025 |
| UnCRtainTS | 30.15 | 0.880 | 0.023 |
| **Proposed Method** | **31.01** | **0.918** | **0.017** |

Comparison of cloud removal methods using PSNR, SSIM, and MAE .

</div>

## Edge/Onboard Feasibility

The edge-computing prototype integrates a Xilinx FPGA inference accelerator with a host-side control stack (Fig. <a href="#fig:edge-platform" data-reference-type="ref" data-reference="fig:edge-platform">9</a>) and is used to validate the deployment pathway, including model packaging, board-side inference, and performance measurement under bounded compute and memory resources. Poster measurements show an average latency of **84.5 ms per image** (approximately **11.8 FPS**) while maintaining high reconstruction quality (**PSNR 34.15 dB**, **SSIM 0.94**) (Fig. <a href="#fig:edge-perform" data-reference-type="ref" data-reference="fig:edge-perform">10</a>). These results support the feasibility of executing cloud removal locally on edge hardware and providing cloud-refined optical products with low latency for time-sensitive analytics.

## Discussion

#### Robustness under dense cloud cover:

Optical observations provide rich spectral information but become unreliable under dense cloud cover, whereas SAR is largely weather independent and provides stable structural cues. The qualitative examples and baseline comparison suggest that SAR-guided fusion improves structural recovery in heavily occluded regions, reducing ambiguity relative to optical-only restoration.

#### Effect of cloud-aware training emphasis.

Cloud-aware loss reweighting increases optimization emphasis on occluded pixels while avoiding unnecessary changes in clear-sky areas. The reported gains in PSNR/MAE and SSIM are consistent with this objective, indicating improved fidelity and structural consistency.

#### Operational implications and remaining considerations.

Combining reconstruction quality with demonstrated edge runtime supports rapid-response scenarios (e.g., flood extent mapping and shoreline monitoring), where both cloud cover and latency constraints can limit optical usability. Operational deployment would benefit from further stress testing across diverse geographies (e.g., low-texture water, deserts), stronger temporal change, and varying acquisition geometries. Reliable co-registration remains a prerequisite for artifact-free fusion, and autonomous failure detection (e.g., acceptance gating) remains important for robust operation.

# 研究產出 / Outputs

This project delivers algorithmic, system, and validation outputs that strengthen Taiwan’s capability for *cloud-resilient* Earth observation (EO). The outputs align with the needs of optical remote-sensing missions (e.g., the FORMOSAT-8 constellation, where frequent imaging can still be constrained by persistent cloud cover) and support the development direction of future all-weather sensing missions (e.g., SAR-enabled FORMOSAT-9 concepts) by establishing a practical SAR–optical fusion pathway and demonstrating deployability on edge hardware.

## Core Technical Outputs

- **SAR–optical cloud removal pipeline.** An end-to-end workflow to reconstruct cloud-refined multispectral optical imagery from paired SAR and cloudy optical inputs, implemented in a tile-wise form suitable for constrained execution.

- **Deterministic cross-modality co-registration module.** A coarse-to-fine alignment procedure (common-grid mapping, translation refinement, and acceptance gating) to improve pixel-level correspondence prior to fusion and reduce reconstruction artifacts caused by misalignment.

- **Cloud-aware training strategy (training-time only).** A mask-guided loss reweighting approach that increases optimization emphasis on cloud-occluded regions while keeping inference independent of cloud-mask computation, supporting simpler operational deployment.

- **Edge/onboard deployment workflow.** A deployment pathway including model export, calibration-driven low-precision quantization, compilation to an accelerator-ready artifact, tile-wise inference execution, and quantitative verification on an FPGA-based platform.

## Experimental and Validation Outputs

- **Reconstruction performance evidence.** Poster-reported qualitative panels and quantitative metrics (PSNR/SSIM/MAE) under moderate and extreme cloud conditions, supporting the effectiveness of SAR-guided restoration.

- **Downstream task demonstration.** An end-to-end example showing that reconstructed cloud-refined outputs enable practical analytics (e.g., water-body delineation) when optical inputs are severely occluded.

- **Edge-computing feasibility evidence.** FPGA-based validation results demonstrating real-time inference throughput while maintaining reconstruction quality, supporting feasibility under bounded compute/memory/energy constraints.

## Impact on Taiwan Space and Industrial Ecosystem

- **Improved usability of optical EO products under cloud-prone conditions.** For optical constellations designed to increase revisit and responsiveness (e.g., FORMOSAT-8), cloud cover can still reduce the fraction of actionable imagery during typhoon/monsoon seasons and rapid disasters. SAR-guided restoration improves the *cloud resilience* of optical products by recovering usable scene content in occluded regions, enabling faster generation of analysis-ready imagery for time-sensitive mapping.

- **Preparation for SAR-enabled, all-weather missions and fusion products.** SAR-oriented mission concepts (e.g., FORMOSAT-9 directions) enable imaging continuity under adverse weather. The modular workflow developed in this project (co-registration $`\rightarrow`$ fusion reconstruction $`\rightarrow`$ cloud-aware training) provides a reusable foundation for SAR–optical fusion products, where SAR supplies weather-independent structure and optical supplies spectral interpretation.

- **Acceleration of onboard/edge AI engineering practices.** The demonstrated deployment workflow (quantization, compilation, board execution, and verification) reduces the gap between research prototypes and operational implementations. This provides a practical reference pathway for teams working on payload processing, FPGA acceleration, embedded software, and rapid EO product generation under deterministic runtime constraints.

## Dissemination Outputs

- **Conference publications (2 papers).** Two conference papers were produced, covering SAR–optical cloud removal and transformer-based fusion for cloud removal .

- **Journal manuscript (in preparation).** An extended manuscript draft that consolidates the system workflow, co-registration approach, and deployment-oriented design considerations.

- **Project poster.** A poster summarizing motivation, method overview, representative results, baseline comparisons, and edge-computing validation outcomes.
