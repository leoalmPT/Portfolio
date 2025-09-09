## Overview

[Repository](https://github.com/leoalmPT/FlexFL) - [PyPI](https://pypi.org/project/flexfl/)

FlexFL is an open-source Resilient Federated Learning (FL) Framework, developed as the core of my [**Dissertation**](https://github.com/leoalmPT/Dissertation) project. It is specifically designed to address the significant challenges of deploying distributed machine learning in dynamic and resource-constrained edge environments, such as IoT and 5G/6G networks. The framework champions a highly modular architecture and robust resilience mechanisms to ensure continuous training and model convergence, even amidst node failures and fluctuating network conditions.

### Demonstration Video

<iframe width="800" class="aspect-video rounded-lg border-2" src="https://www.youtube.com/embed/XG3y8HlvgHY?si=jz38YtH6w3GatXtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## About the Project

Traditional FL systems often struggle with the unpredictable nature of real-world deployments, where devices may frequently disconnect, network conditions vary, and computational resources are heterogeneous. FlexFL addresses these limitations by introducing a novel, highly modular architecture that decouples key FL components, enabling flexible integration and robust operation. 

Key aspects and contributions of FlexFL include:

-   **Modular Architecture:** Comprising seven decoupled core modules (FL Backend, ML Backend, Dataset Manager, NN Architecture, Worker Manager, Communication Layer, Message Layer), FlexFL allows for flexible integration of various machine learning backends (Keras/TensorFlow, PyTorch, JAX), FL algorithms (Centralized/Decentralized, Synchronous/Asynchronous), and communication protocols.
-   **Enhanced Resilience & Fault Tolerance:** The framework incorporates advanced resilience mechanisms such as dynamic worker pool management, configurable task completion thresholds for synchronous approaches, and task rescheduling for asynchronous tasks. This ensures training continuity and model convergence even under probabilistic worker failures and disconnections.
-   **Communication Protocol Flexibility:** FlexFL supports and evaluates prominent communication protocols including Zenoh, MQTT, Kafka, and MPI. This allows for empirical assessment of their performance and suitability in dynamic network environments, with Zenoh and MQTT demonstrating superior efficiency in many scenarios.
-   **Rigorous Evaluation:** The framework's performance and robustness were extensively tested using real-world-representative IDS/IoT datasets (UNSW-NB15 and ToN-IoT) across diverse scenarios, including large-scale heterogeneous environments with significant simulated worker failures.
-   **Optimizations:** Optimized the model aggregation to reduce memory usage and improved training time by overlapping processes and implemented a dynamic argument parser that auto-discovers new classes, extracts arguments and their types through Python AST analysis, and improves memory usage and startup time by importing only what is necessary.
-   **Open-Source and Extensible:** FlexFL is available as an open-source project on GitHub and PyPI, facilitating community contributions, research, and integration with existing systems through its intuitive CLI tools and well-defined extension mechanisms.

The empirical evaluation demonstrated FlexFL's capability to successfully maintain training continuity and achieve high model convergence (e.g., MCC of 0.944 for UNSW-NB15 and 0.903 for ToN-IoT) even in challenging scenarios involving 40 workers with a 1% probabilistic failure rate per second. The asynchronous approaches, particularly when combined with Zenoh, exhibited efficiency in dynamic settings by allowing continuous progress and avoiding straggler problems.

### FlexFL Framework Architecture

<img src="/files/projects/flexfl/modules.png" alt="FlexFL Architecture" width="800" />

## Final Thoughts

FlexFL bridges the gap between theoretical FL research and practical deployments in real-world IoT and edge computing environments. Its modular and fault-tolerant design provides a robust and scalable solution for privacy-preserving distributed machine learning, setting a strong foundation for future advancements in adaptable and efficient FL systems.