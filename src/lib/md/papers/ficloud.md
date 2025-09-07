## Overview

[Paper](/files/papers/ficloud2024/paper.pdf) - [DOI](https://doi.org/10.1109/ficloud62933.2024.00055)

This paper critically assesses the trade-offs between shallow and deep learning models in the context of emerging 5G and Beyond-5G (B5G) network applications, focusing on efficiency and performance for real-time tasks.

## About the Paper

The exponential growth of mobile network traffic and increasingly demanding application requirements in 5G/B5G networks necessitate intelligent solutions. While Deep Learning (DL) has emerged as a powerful tool for Artificial Intelligence (AI) in these environments, its computational expense, particularly for large and complex models, often hinders real-time deployment.

Our work investigates the viability of **shallow Machine Learning (ML) models** as an efficient alternative to state-of-the-art DL models for two critical 5G/B5G tasks: **network slicing attribution** and **Intrusion Detection Systems (IDS)**. Key contributions include:

-   **Extensive Analysis:** A thorough examination of various shallow ML models (Logistic Regression, SVM, k-NN, Decision Tree, Random Forest, AdaBoost, Gradient Boosting, Gaussian Naive Bayes) for network slicing and IDS.
-   **Comparative Performance:** A direct comparison of these shallow models against state-of-the-art Deep Neural Network (DNN) models, considering not only classification performance but also **training and inference times**.
-   **Efficiency Gains:** The results consistently demonstrate that most shallow models achieve comparable performance to DNNs while offering **significantly faster training and prediction times, leading to an acceleration of over 90% in most cases**. This high efficiency is crucial for meeting the stringent real-time requirements of 5G/B5G.
-   **Trade-off Discussion:** An in-depth discussion on the inherent trade-offs between deep and shallow models and their applicability in real-world scenarios, emphasizing that simple shallow neural networks were often sufficient for best results.
-   **Hardware Requirements:** The shallow models were able to achieve these results using only a CPU, in contrast to DNNs which often relied on GPUs, further highlighting their practical deployment advantages.

This research underscores that for many 5G/B5G networking tasks, less complex shallow ML models can offer a highly efficient and effective solution, avoiding the computational overhead associated with deep learning while maintaining high performance.

## Final Thoughts

This work provides compelling evidence that **shallow Machine Learning models are highly effective and significantly more efficient** for critical 5G/B5G networking tasks like network slicing and intrusion detection. By demonstrating comparable performance to deep learning models with drastically reduced training and inference times (over 90% acceleration) and lower hardware requirements, the paper advocates for prioritizing efficiency, especially in real-time, resource-constrained environments. This research bridges a crucial gap, guiding future ML deployments in next-generation networks towards more practical and sustainable solutions.