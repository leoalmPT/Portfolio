## Overview

[Repository](https://github.com/RLPR-org/LogiPack)

LogiPack is a comprehensive merchandise transport management system designed to digitalize and optimize logistics operations for distributors, transporters, and end-clients. The project emphasizes a multi-layered, enterprise-class software solution with a web and mobile focus.

### Transporters Panel

<img src="/files/projects/logipack/transporters.png" alt="LogiPack Transporters Panel" width="800" />

## About the Project

The project was conceived to address the growing need for digital transformation in the logistics sector, offering solutions to improve efficiency, reduce costs, and enhance communication across the supply chain. It tackles challenges such as real-time merchandise tracking, inventory management, and event logging.

**Key Features:**

*   **For Distributors:**
    *   Monitor active transporters and their routes.
    *   Track and manage orders.
    *   Consult historical order data for intelligent fleet management.
*   **For Transporters:**
    *   Access assigned trip details (delivery points, remaining time).
    *   Update order and personal status in real-time.
*   **For Clients:**
    *   Receive real-time notifications about order status and delivery.
    *   Confirm receipt of packages.
    *   Monitor current and past orders.
*   **Automation & Real-time Tracking:** Automates tasks like order tracking and event logging, providing real-time visibility into merchandise movement.
*   **Enhanced Collaboration:** Facilitates better communication between manufacturers, retailers, and distributors.
*   **Cost Reduction:** Optimizes processes to minimize risks and operational costs.

**Technical Details:**

LogiPack employs a **multi-layered architecture** to separate concerns and ensure maintainability and scalability.

*   **Frontend (Presentation Layer):**
    *   **Web App:** Developed using **ReactJS**, incorporating reusable components and Material UI for rich, interactive interfaces.
    *   **Mobile App:** Developed with **Flutter**, leveraging its cross-platform capabilities, widget-based UI development, and fast debugging tools.
*   **Backend (Controller, Service, Data Access Layers):**
    *   Built with **Spring Boot**, exposing a **RESTful API** with full CRUD (GET, POST, PUT, DELETE) operations, returning JSON, and supporting filtering.
    *   **Security:** Implements **token-based authentication with Spring Security** and the **OAuth2 authorization protocol**. **JSON Web Tokens (JWT)**, signed with RSA public/private keys, are used for secure information transmission.
*   **Data Persistence (Database Layer):**
    *   Utilizes a **dual-database approach** to cater to different data needs:
        *   **PostgreSQL:** A relational database (managed by Spring Data JPA) for structured, correlated data that requires persistent storage and REST API access.
        *   **MongoDB:** A document-oriented database for an **append-only log** of order and transporter states, suitable for continuous data insertion and real-time analytical functions.
*   **Data Generation & Messaging:**
    *   **Producer (Python):** Simulates data streams (e.g., vehicle sensors) and publishes them to a message broker.
    *   **Message Broker (RabbitMQ):** Facilitates lightweight, message-oriented communication for asynchronous data ingestion.
    *   **Consumer (Spring Boot):** A logging service subscribes to RabbitMQ's event bus to record data into MongoDB.
*   **Deployment:**
    *   **Containers-based:** The application layers are encapsulated in **Docker containers** for portability, isolation, and scalability in various environments, including production.
    *   **Continuous Deployment (CD):** A pipeline, orchestrated by **GitHub Actions** and an **IMAP listener (Python)**, automatically deploys updated code to the production environment (virtual machine) shortly after a push to the remote repository.

**Development Practices:**

The project adopted agile methodologies for project management:

*   **Agile Backlog Management:** Utilized concepts like **User Stories** for planning units, a **Backlog** for prioritization, and **Story Points** for effort quantification. **Atlassian Jira** was the chosen platform for backlog management.
*   **Feature-Branching Workflow:** Followed a feature-driven workflow using **Git** and **GitHub**, where new features were developed in separate branches and integrated via pull requests, subject to team review and approval.

### LogiPack Architecture Overview

<img src="/files/projects/logipack/architecture.png" alt="LogiPack Architecture Overview" width="1000" class="bg-white" />

### LogiPack Technologies Stack

<img src="/files/projects/logipack/technologies.png" alt="LogiPack Technologies Stack" width="1000" class="bg-white" />

## Final Thoughts

LogiPack successfully demonstrates a robust and scalable solution for modern logistics management, applying best practices in software engineering and agile methodologies. The integration of diverse technologies, from multi-platform frontends to dual database persistence and a message broker, alongside a well-defined continuous deployment pipeline, underscores the project's comprehensive approach to building enterprise-grade applications.