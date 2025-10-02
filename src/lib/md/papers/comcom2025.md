## Overview

[Paper](/files/papers/comcom2025/paper.pdf) - [DOI](https://doi.org/10.1016/j.comcom.2025.108312)

This paper was published in the *Computer Communications* journal as part of the Special Issue on *Advances in IoT and Cloud Continuum*. It presents a comprehensive comparative analysis of Deep Learning (DL) and Shallow Machine Learning (ML) models for 5G/6G network tasks, evaluating not only performance but also time, energy consumption, and explainability.

## About the Paper

The rapid evolution of 5G and upcoming 6G networks, driven by applications demanding ultra-low latency and high throughput (like autonomous driving and AR/VR), necessitates the use of Machine Learning (ML) for network optimization. The trend has been to adopt complex **Deep Neural Networks (DNNs)**, but their practicality is often constrained by the limited resources and time available in telecommunication environments.

This work addresses this critical gap by performing a comprehensive comparative analysis of **Deep Learning (DL)** models against **Shallow ML** models (such as Random Forest, Decision Tree, k-NN, etc.). Our study went **beyond performance (accuracy)** to evaluate the **total cost** of applying these models in common 5G-related tasks (Network Slice Attribution, QoE Prediction, and Intrusion Detection Systems - IDS).

### Key Contributions and Findings:

- **Comparable Performance:** Shallow ML models demonstrated performance (measured by MCC) comparable to or even better than state-of-the-art DNNs across most of the nine tested tabular datasets.
- **Superior Efficiency:** Shallow models achieved **up to 90% acceleration** in both training and inference times compared to the DNN counterparts.
- **Lower Energy Cost:** The reduced complexity of shallow models resulted in **orders of magnitude lower energy consumption** during training and inference.
- **Higher Explainability:** While shallow models are inherently explainable, XAI metrics (Permutation Importance and Partial Dependence Variance) used to explain DNNs often provided **inconsistent feature importance rankings** (low correlation). This highlights the unresolved "black-box" nature and lack of transparency of complex DNNs, which is a significant concern under the EU AI Act.

Our results strongly suggest that for many critical 5G/6G tasks involving tabular data, the industry's default approach of deploying complex DNNs is inefficient and unnecessary, with simple, **cost-effective Shallow ML models** offering a more practical solution.

### Energy consumption during training for IDS datasets in kJ.

<img src="/files/papers/comcom2025/energy.png" alt="Energy Consumption" width="600" />

## Final Thoughts

This comparative analysis provides essential guidance for future 5G/6G network design, demonstrating that **simplicity and efficiency** often outweigh complexity. It makes a strong case for prioritizing robust and resource-efficient ML models over high-cost, black-box DL architectures in dynamic and constrained edge computing environments.