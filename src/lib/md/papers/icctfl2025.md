## Overview

<!-- TODO -->
<span class="text-xl text-orange-300"> Paper not indexed yet. </span>

[Repository](https://github.com/leoalmPT/FlexFL/tree/ICCT) - [Paper](/files/papers/icctfl2025/paper.pdf)

This paper introduces a Resilient Federated Learning Framework, [**FlexFL**](/projects/flexfl), specifically designed to address the challenges of deploying Federated Learning (FL) in the dynamic, resource-constrained environments of 6G and Internet of Things (IoT) networks.

## About the Paper

Federated Learning (FL) is a promising paradigm for collaborative AI model training that preserves data privacy, making it ideal for 6G and IoT applications. However, its deployment in these dynamic environments faces significant challenges, including communication costs, frequent node failures, scalability issues, non-IID data distribution, and reliable model aggregation. Existing resilient FL solutions often lack modularity or public availability, hindering their adoption and adaptability.

Our work proposes a novel framework that directly tackles these issues. Key aspects and contributions include:

-   **Modular Design:** The framework is built upon 5 core modules (FL backend, ML backend, Dataset Manager, Neural Network Architecture, Communication Layer) and introduces 2 new modules (Worker Manager and Message Layer). This modularity enhances flexibility, allowing easy integration of new algorithms, communication protocols, and resilience strategies without extensive system changes.
-   **Enhanced Resilience:** The framework is designed to maintain training and performance even in the presence of node failures, delays, and dynamic network topologies. It incorporates mechanisms to handle worker joins/leaves and task completions/failures.
-   **Efficient Communication:** It highlights the critical role of communication protocols, specifically leveraging **Zenoh** as a decentralized, low-latency communication middleware for its efficiency, minimal overhead, privacy features, and fault tolerance, making it ideal for IoT and FL.
-   **Experimental Validation:** The framework was evaluated in an ARM-based server environment using 11 Virtual Machines (1 parameter server, 10 worker nodes) and the UNSW-NB15 dataset (for intrusion detection). Experiments compared Zenoh and MPI in failure-free scenarios and tested Zenoh's resilience under probabilistic worker failures.

**Key Findings:**
-   **Zenoh's Superiority:** Zenoh consistently achieved **lower average communication times** compared to MPI, leading to shorter or comparable overall run durations, indicating more efficient communication.
-   **Robust Convergence:** The framework successfully maintained model training and achieved convergence even when simulating **probabilistic worker failures**. For instance, with a 1% failure rate, the model converged with high accuracy (MCC of 0.9472, accuracy of 0.9958, and F1 score of 0.9958), similar to failure-free runs.
-   **Adaptability for Real-world Deployment:** The results underscore the framework's robustness to node failures and dynamic participation, crucial for real-world heterogeneous 6G and IoT environments.

### Comparison of times for different communication protocols (MPI vs. Zenoh).

<img src="/files/papers/icctfl2025/times.png" alt="Communication Protocol Times" width="600" />

### Worker status in each epoch (State matrix visualization showing idle, worked, and failed states).

<img src="/files/papers/icctfl2025/matrix.png" alt="Worker Status" width="600" />

Status:
- Blue: Idle
- Green: Worked
- Orange: Failed while idle
- Red: Failed while working
- Yellow: Failed after working

### Validation loss function over epochs (Demonstrating convergence despite failures).

<img src="/files/papers/icctfl2025/loss.png" alt="Validation Loss Curve" width="600" />

## Final Thoughts

This work presents a foundational modular and resilient Federated Learning framework that effectively addresses key challenges in 6G and IoT environments. By integrating an efficient communication protocol like **Zenoh** and demonstrating robust performance under worker failures, this framework provides a practical and scalable solution for deploying AI workloads at the edge, paving the way for more reliable and privacy-preserving distributed learning in next-generation networks.