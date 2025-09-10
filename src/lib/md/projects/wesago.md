## Overview

[Repository](https://github.com/Wesago/Wesago)

Wesago is a project focused on the robust deployment and infrastructure management of the open-source [**Misago**](https://github.com/rafalp/Misago) forum application and a complementary static website within a **Kubernetes cluster**. The project aimed to build a highly reliable, scalable, and observable cluster environment.

### Project page

<img src="/files/projects/wesago/website.png" alt="Wesago Logo" width="800" />

## About the Project

The core challenge involved deploying a multi-component, third-party web application and a static website, ensuring high availability and resilience in a Kubernetes cluster.

**Wesago Application Components:**
The Wesago application is based on Misago and consists of five main components:
*   **Django:** The core Python web framework, exposing a REST API and implementing business logic.
*   **PostgreSQL:** The primary database for storing all application data.
*   **Redis:** Used for caching and as a message broker for Celery.
*   **Celery:** Handles asynchronous tasks like notifications and database operations.
*   **Nginx:** Serves as a reverse proxy and load balancer for Django application instances.

**Product Website Components:**
A static website, built with Docusaurus and React, serves as the product's front page, served by Nginx.

**Kubernetes Deployment Strategy:**
The deployment leverages various Kubernetes resources to manage components:
*   **Deployments:** For stateless components like Django, Celery workers, and Nginx proxies.
*   **StatefulSets:** For stateful components like PostgreSQL and Redis, ensuring stable, unique identifiers and persistent storage.
*   **Services:** To expose components and enable internal communication.
*   **ConfigMaps & Secrets:** For managing non-sensitive and sensitive configuration data, respectively.
*   **PersistentVolumeClaims:** For static, media, and avatar files (Django), and configuration for databases.
*   **Ingresses:** To expose the Nginx web servers to the internet, with Traefik as the Ingress controller for the website.
*   **Jobs:** For initial Django setup tasks like database migrations, static file collection, and superuser creation.

**Reliability Enhancements:**
The project significantly improved reliability by focusing on key aspects:
*   **Automatic Deployment:** A single-click, modular deployment process automates Docker image building, pushing to a container registry, Kubernetes infrastructure creation, and initial job execution.   
*   **Healthchecks & Auto-Healing:** Implemented **Liveness Probes** for all applications (e.g., HTTP GET for Django, SQL query for PostgreSQL) to detect unresponsiveness and trigger automatic restarts. A custom external health check also verified external accessibility.
*   **Redundancy:**
    *   **Instance Replication:** PostgreSQL uses a fixed master-slave configuration (3 StatefulSet replicas) for data consistency and scalability. Redis uses a dynamic master-slave configuration with Redis Sentinels (3 StatefulSet replicas) for high availability and automatic failover.
    *   **Pod Distribution:** **PodAntiAffinity** rules ensure that replicas of the same component are distributed across different nodes in the cluster, enhancing fault tolerance.
*   **Autoscaling:** **Horizontal Pod Autoscaling (HPA)** was implemented to dynamically adjust the number of Nginx website replicas (min 2, max 5) based on CPU utilization, ensuring optimal performance under varying load and reducing costs.
*   **Monitoring & Observability:** Centralized logging with **Rsyslog** (sidecar agents in each pod send logs to a central Rsyslog server). Metrics collection with **Prometheus** and visualization using **Grafana dashboards** provide comprehensive insights into CPU, memory, network, and filesystem usage for each component and persistent volumes.
*   **Disaster Recovery:** A plan was defined with a **Recovery Point Objective (RPO) of 15 minutes** and a **Recovery Time Objective (RTO) of 1 hour**, utilizing Longhorn's snapshot functionality for data recovery and a structured approach for infrastructure and deployment recovery.

### Deployment Strategy

<img src="/files/projects/wesago/deployment.png" alt="Deployment Strategy" width="600" class="bg-white" />

### PostgreSQL Replication Architecture

<img src="/files/projects/wesago/postgres.png" alt="PostgreSQL Replication" width="600" />

### Redis Dynamic Master-Slave Architecture

<img src="/files/projects/wesago/redis.png" alt="Redis Replication" width="600" />

### Grafana Dashboard for Django

<img src="/files/projects/wesago/django.png" alt="Grafana Dashboard Django" width="800" />

## Final Thoughts

The Wesago project successfully demonstrated the deployment of a complex web application in a Kubernetes cluster, significantly enhancing its reliability, scalability, and observability through a well-articulated strategy. The implementation of redundancy, health checks, autoscaling, comprehensive monitoring, and a robust disaster recovery plan provided invaluable practical experience in managing cloud-native infrastructure, ensuring the application remains functional and resilient under various conditions.