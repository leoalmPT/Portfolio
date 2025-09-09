## Overview

[Repository](https://github.com/leoalmPT/FL-analysis) - [Paper](/files/papers/ficloud2melecon2024/paper.pdf) - [DOI](https://doi.org/10.1109/melecon56669.2024.10608461)

This paper addresses the critical challenge of securing IoT networks by leveraging Federated Learning (FL) to train Intrusion Detection System (IDS) models, ensuring data privacy in resource-constrained environments.

## About the Paper

The proliferation of Internet of Things (IoT) devices introduces significant security vulnerabilities due to their vast deployment and limited resources. Traditional Machine Learning (ML)-based Intrusion Detection Systems (IDS) often struggle with these environments because IoT data is frequently private and cannot be centralized for training. Synthetic data, a common alternative, often fails to represent real-world scenarios accurately.

Our work explores **Federated Learning (FL)** as a privacy-preserving and efficient paradigm for training IDS models in IoT networks. Key aspects and contributions include:

-   **Privacy Preservation:** FL enables ML models to be trained across decentralized IoT devices or servers, keeping sensitive data localized and mitigating risks associated with data centralization.
-   **Performance Evaluation:** We compare FL-based training approaches with traditional single-machine training methods, assessing performance using metrics like F1 Score, Accuracy, and Matthew's Correlation Coefficient (MCC).
-   **Efficiency and Scalability:** The study investigates the impact of varying numbers of workers (2, 4, and 8) on FL training, demonstrating faster convergence times.
-   **State-of-the-Art Datasets:** Experiments were conducted using three contemporary IDS datasets tailored for IoT network traffic: UNSW-NB15, ToN-IoT, and IoT-DNL.
-   **Model Architectures:** Artificial Neural Network (ANN) models were employed, with architectures adapted from literature for each specific dataset, ensuring well-suited models for FL.

**Methodology:**
The experimental setup involved preprocessing datasets by removing irrelevant features, normalizing data, and splitting it into training, validation, and test sets. An early stopping mechanism based on validation MCC was implemented to prevent overfitting and speed up training. FL training was simulated on a single machine by assigning different workers to distinct processes, allowing for an evaluation of convergence and performance under various worker configurations.

**Key Findings:**
-   **Comparable Performance:** FL-based training yielded **comparable performance** to traditional single training methods across all performance metrics.
-   **Faster Convergence:** FL training demonstrated **faster convergence times**, reducing the time to train models by up to **89.3%** compared to single training.
-   **Scalability:** Configurations with 4 or 8 workers generally achieved better results and lower training times than those with 2 workers, highlighting the scalability benefits of FL in distributed environments.

### Experiments MCC (Matthew's Correlation Coefficient) for single and Federated Learning training.

<img src="/files/papers/melecon2024/mcc.png" alt="Experiments MCC Results" width="600" />

### Training times until early stop for single and Federated Learning training.

<img src="/files/papers/melecon2024/times.png" alt="Training Times Early Stop" width="600" />

## Final Thoughts

This work conclusively demonstrates the **feasibility and effectiveness of Federated Learning** as a privacy-preserving defense mechanism for Intrusion Detection Systems in IoT networks. By achieving comparable performance to centralized training while offering significantly faster convergence and allowing data to remain local, FL provides a robust framework to enhance network security and mitigate privacy concerns inherent in distributed, resource-constrained IoT environments.