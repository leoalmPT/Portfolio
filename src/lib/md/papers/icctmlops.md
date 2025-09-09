## Overview

<!-- TODO -->
<span class="text-xl text-orange-300"> Paper not indexed yet. </span>

[Paper](/files/papers/icctmlops2025/paper.pdf)

This paper introduces an optimized task placement system for Machine Learning Operations (MLOps) pipelines, specifically designed to accelerate ML model development and deployment in heterogeneous computing environments.

## About the Paper

Machine Learning Operations (MLOps) workflows, particularly ML pipelines, are often the most time-consuming and computationally intensive parts of the ML lifecycle. To improve efficiency, it's crucial to leverage the heterogeneity of modern computing environments (CPUs, GPUs). However, existing MLOps platforms typically lack the capability to automatically and intelligently assign pipeline tasks to the most suitable machine, often relying on manual configuration or simple algorithms.

Our work proposes a novel **task placement system for ML pipelines** that automates this assignment to minimize overall execution time. Key aspects and contributions include:

-   **Modular System Architecture:** The system integrates seamlessly with existing MLOps platforms and consists of five main components: Pipeline Manager, Cluster Node Manager, Model Manager, Data Manager, and a central Placement Decision Unit.
-   **Two-Phase Placement Strategy:**
    1.  **Pipeline Scheduling:** Uses the **Shortest Job First (SJF) algorithm** to determine the optimal execution order for multiple pipelines submitted within a time window. This prioritizes shorter pipelines, reducing average waiting times. Pipeline length is estimated based on the total number of operations, model parameters, data characteristics, and theoretical computational complexity.
    2.  **Task Placement:** Employs a **heuristic-based approach** to assign each pipeline task to the most suitable machine. This considers input data characteristics, ML model family and parameters, current machine load, and hardware resource availability. Specific mapping rules are defined for different ML model types (e.g., linear models to low/medium performance machines, deep learning models to high performance machines).
-   **Experimental Validation:** The proposed solution was evaluated on a computing cluster with 10 heterogeneous nodes, using 8 distinct ML pipelines covering various classification datasets (Adult Income, KDD Cup 99, UNSW-NB15, MNIST, CIFAR-10) and ML algorithms (Logistic Regression, Decision Tree, Random Forest, SVM, DNN, CNN). The system's performance was compared against three baseline strategies: random scheduling/placement, FCFS with random placement, and FCFS with Round-Robin placement.

**Key Findings:**
-   **Significant Performance Gains:** The proposed system consistently **outperformed all baseline strategies** in terms of both total execution time and average waiting time.
-   **Reduced Execution Time:** Achieved reductions of **68.61%**, **59.36%**, and **50.72%** in total execution time compared to random, FCFS-random, and FCFS-RR strategies, respectively.
-   **Reduced Waiting Time:** Demonstrated even greater improvements in average waiting time, with reductions of **89.16%**, **65.59%**, and **80.72%** compared to the baselines.

### Solution Architecture of the proposed task placement system.

<img src="/files/papers/icctmlops2025/architecture.png" alt="Solution Architecture" width="800" />

### Performance comparison of baseline strategies and the proposed solution (Total execution time).

<img src="/files/papers/icctmlops2025/totaltime.png" alt="Total Execution Time Comparison" width="600" />

### Performance comparison of baseline strategies and the proposed solution (Average waiting time).

<img src="/files/papers/icctmlops2025/avgtime.png" alt="Average Waiting Time Comparison" width="600" />

## Final Thoughts

This work presents a critical advancement in MLOps by introducing an intelligent task placement system that effectively manages heterogeneous computing resources. By automating the scheduling and assignment of ML pipeline tasks, the system significantly **reduces execution times and waiting times**, making ML model development and deployment substantially more efficient. This approach is vital for accelerating MLOps workflows in modern, diverse computing environments, bridging a key gap in current platforms.