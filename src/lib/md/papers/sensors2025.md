## Overview

[Repository](https://github.com/leoalmPT/FlexFL/tree/MDPI) - [Paper](/files/papers/sensors2025/paper.pdf) - [DOI](https://doi.org/10.3390/s25123812)

This paper was published as part of the *Edge Computing in IoT Networks Based on Artificial Intelligence* special issue. It extends the work from my dissertation, [**FlexFL**](TODO), by iterating on the framework to improve **modularity** and **resilience** for real-world edge deployments.  

## About the Paper

The work addresses the challenges of **federated learning (FL) at the edge** in dynamic, resource-constrained environments such as IoT and 5G/6G networks.  
Traditional FL systems often break down when devices disconnect, networks fluctuate, or workloads vary. Our contribution was to design and implement a **modular, resilient FL framework** with the following key aspects:

- **Modularity:** the framework separates FL logic, ML backends, communication, and worker management into independent modules.  
- **Resilience:** it maintains operation even under probabilistic worker failures and disconnections.  
- **Communication flexibility:** we evaluated multiple protocols (MQTT, Kafka, Zenoh) and showed that protocol choice drastically affects performance.  
- **Experimental validation:** tested on IDS data (UNSW-NB15 dataset) across different FL paradigms (centralized/decentralized, sync/async).  

The results showed that the system can maintain convergence with high accuracy (MCC = 0.9453) even under simulated device failures, with **Zenoh emerging as the most efficient communication protocol**.

### Timeline of workers during training with Zenoh protocol at 5% failure rate.

<img src="/files/papers/sensors2025/timeline.png" alt="Timeline" width="1000" />

### Validation loss curve during training with Zenoh protocol at 5% failure rate.

<img src="/files/papers/sensors2025/loss.png" alt="Validation Loss" width="600" />

## Final Thoughts

This work demonstrates how a **modular and fault-tolerant design** can make federated learning practical for **real-world IoT and edge computing environments**, bridging the gap between research frameworks and production-ready deployments.
