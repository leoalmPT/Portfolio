## Overview

[Paper](/files/papers/bigdata2025/paper.pdf) - [DOI](https://doi.org/10.1016/j.bdr.2025.100510)

This paper was published as part of the *Big Data, Machine Learning and Cloud Platform* special issue. It analyzes the performance and costs of various Federated Learning (FL) approaches, including training time, communication overhead, and energy consumption, specifically addressing challenges for AI model deployment in 6G networks.

## About the Paper

The work investigates the performance and costs of FL in the context of 6G networks, where Artificial Intelligence (AI) is expected to play a pivotal role but faces challenges like resource constraints and privacy concerns. The paper explores how different FL approaches compare in terms of:

*   **Training Costs:** Provides insights into the cost implications of various FL methods when applied to data from common network tasks.
*   **Communication Overhead:** Analyzes network communication patterns and the amount of data exchanged for different FL approaches.
*   **Training Time & Efficiency:** Characterizes the training time for FL approaches and their impact on overall model convergence speed.

The study compares traditional learning with four FL algorithms using datasets for network slice attribution and intrusion detection systems (IDS). The results indicate that while FL can offer significant acceleration, especially for the IDS dataset (achieving an average 66.08% acceleration with Decentralized Synchronous) and the slicing dataset (with an average 82.87% acceleration for Decentralized Asynchronous), the choice of FL approach and network conditions are crucial for optimal performance.

## Selected Figures

### Epoch time division by instructions using a logarithmic scale in the Slicing5G dataset.

<img src="/files/papers/bigdata2025/plot.png" alt="Plot" width="600" />

## Takeaway

This research demonstrates that Federated Learning approaches are not universally optimal, with their effectiveness highly dependent on the specific FL algorithm chosen, dataset characteristics, and network conditions. While FL can substantially accelerate training and reduce data transfer in certain scenarios, it can also lead to significant slowdowns and communication overhead if not carefully selected and implemented.