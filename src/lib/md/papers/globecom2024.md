## Overview

[Paper](/files/papers/globecom2024/paper.pdf) - [DOI](https://doi.org/10.1109/gcwkshp64532.2024.11100910)

This paper investigates the critical balance between transparency and cost in Explainable AI (XAI) within the context of evolving 5G/6G networks and Machine Learning (ML) applications.

## About the Paper

As AI's role in 5G/6G networks expands, the need for transparency, auditability, and regulatory compliance (e.g., GDPR, AI Act) for ML models becomes paramount. However, the "black box" nature of many ML algorithms makes understanding their decisions challenging. While Explainable AI (XAI) techniques offer insights, their computational and energy costs, as well as the consistency of their explanations, are often not fully understood.

Our work addresses this gap by comprehensively analyzing three widely used XAI techniques: **SHapley Additive exPlanations (SHAP)**, **Local Interpretable Model-agnostic Explanations (LIME)**, and **Permutation Importance (PI)**. Key contributions include:

-   **Agreement Analysis:** We analyzed the agreement levels between feature relevance scores computed by SHAP, LIME, and PI across diverse ML models.
-   **Cost Assessment:** We quantified the execution time and energy consumption of these XAI techniques.
-   **Relationship between Inference and Explanation Costs:** We assessed how the computational costs of XAI relate to the inference costs of the underlying ML models.

**Methodology:**
The study applied the three XAI techniques to thirteen different ML models (Classical, Ensemble, and Deep Neural Networks) across five distinct 5G network datasets (KPI-KQI, UNAC, NSR, QoS-QoE, 5G Slicing). Spearman Correlation Coefficient (SRCC) was used to measure the consistency of XAI outputs, and an energy consumption model (from CloudSim and iFogSim) was adapted to estimate energy usage.

**Key Findings:**
-   **PI emerged as the most cost-efficient XAI method** in terms of both time and energy consumption.
-   Despite models achieving high accuracy, **significant disagreement can exist between XAI methods** regarding feature relevance, highlighting that relying on a single XAI technique can lead to biased or incomplete explanations.
-   The explainability process can consume **substantially more energy than the ML model's inference**, with LIME generally exhibiting the highest temporal and energy overhead. This underscores the need for judicious application of XAI, balancing the need for explanation against its computational burden.

### Correlation between XAI results regarding datasets for high-performance models.

<img src="/files/papers/globecom2024/correlation.png" alt="XAI Correlation High Performance" width="600" />

### Energy consumption ratios (XAI explanation cost relative to ML inference cost).

<img src="/files/papers/globecom2024/energy.png" alt="Energy Consumption Ratios" width="600" />

## Final Thoughts

This research provides crucial insights into the practical deployment of XAI, especially in dynamic environments like 5G/6G networks. It underscores that while XAI is essential for transparency and auditability, its application requires careful consideration of **computational costs and the potential for disagreement among different explanation methods**. To ensure robust and reliable explanations, practitioners should consider **employing multiple XAI techniques** and carefully balancing the frequency of XAI usage against its resource demands.