## Overview

[Repositories](https://github.com/orgs/PickAPoint/repositories)

PickAPoint consists of a network of Pickup Points that a customer can choose when placing an order. These Pickup Points are physical locations, such as stores or even gas stations, where the customer can pick up their order at a time that is convenient for them. This service benefits both customers and businesses. Additionally, the service also provides an API that can be integrated with e-commerce websites, allowing its customers to choose a Pickup Point when placing an order, and track their status progress.

PrintPlate is an e-commerce website where customers can buy art plates. The web application allows customers to choose an existing pickup point available in the PickAPoint network as the delivery method for their order. The website also allows customers to track their orders, and cancel them if they wish to do so.

### PickAPoint

<img src="/files/projects/pickapoint/pickapoint.png" alt="PickAPoint Logo" width="800" />

### PrintPlate

<img src="/files/projects/pickapoint/printplate.png" alt="PrintPlate Logo" width="800" />

## About the Project

The project addresses critical challenges in e-commerce logistics, such as the increasing difficulty of delivering packages to absent customers, leading to repeated delivery attempts, increased operational costs, and customer frustration. PickAPoint streamlines this process by creating a centralized platform for various user types:

*   **Pickup Points (Partners):** Businesses (e.g., gas stations, stores) can register to become collection points, receive orders, register package arrivals and collections, and monitor stored, expected, and canceled packages.
*   **E-Stores:** Online businesses can access a list of available pickup points, make delivery requests for customer orders, and track order status (pending, delivered, collected).
*   **Customers (Clients):** Customers receive SMS notifications with a package ID and a security token when their order arrives at a chosen pickup point, allowing for secure collection.
*   **Administrators:** Manage the network by accepting or denying new pickup point applications, and monitor overall operational statistics and package statuses.

**Key Features and Functionalities:**

*   **SMS Notifications:** Automated SMS alerts inform clients about package arrivals for convenient pickup.
*   **Order Tracking:** Comprehensive status tracking for e-stores and pickup points.
*   **Role-Based Access:** Distinct functionalities and interfaces for administrators, pickup points, e-stores, and clients.
*   **Agile Development:** The project followed an Agile methodology with 4 sprints, focusing on defining product concept, SQE strategy, implementing user stories, and deploying the application.

## Technical Details

PickAPoint utilizes a **layered architecture** (Presentation, Controller/Boundary, Service, Data Access, Database Layer) for maintainability and scalability.

*   **Frontend:** Developed using **Svelte**, along with **Tailwind CSS** and **Flowbite Svelte** for UI components, and **Vite** as a build tool.
*   **Backend:** Implemented with **Spring Boot** and exposes a **REST API**. Integrates **Twilio API** for sending SMS notifications.
*   **Database:** Employs **PostgreSQL** for persistent data storage, managed via Spring Data JPA.
*   **Deployment:** The frontends and backends (containerized with **Docker**) are deployed on **Google Compute Engine Virtual Machines**.

The project adhered to rigorous **Quality Assurance** practices:

*   **Code Quality:** Used SonarLint for local analysis and SonarCloud with GitHub integration for Quality Gates (e.g., 85% code coverage, 1% duplicated lines, 0 bugs/vulnerabilities, 'A' ratings for maintainability/reliability/security).
*   **Testing:** Implemented Test-Driven Development (TDD) for **Unit Tests** (Service, Controller, Utils layers using JUnit Jupiter, Hamcrest, Mockito, Spring Boot MockMvc). **Integration Tests** verified component interactions (controller-service, service-repository). **Functional Tests** used Behavior-Driven Development (BDD) with Cucumber and Selenium to simulate user interactions and validate acceptance criteria. **Performance Tests** were conducted using JMeter to evaluate Google infrastructure's ability to handle high HTTP request loads.
*   **CI/CD Pipeline:** Utilized GitHub Actions for an early CI pipeline, running tests and quality gates on pull requests, with Continuous Deployment to Google VM via SSH after merge to the main branch.~

### Deployment Architecture

<img src="/files/projects/pickapoint/architecture.png" alt="PickAPoint Deployment Architecture" width="1000" class="bg-white" />


## Final Thoughts

PickAPoint and PrintPlate successfully demonstrated the application of software quality assurance and enterprise architecture patterns to build a functional and reliable services. Its comprehensive approach to deployment, testing, and monitoring, combined with a user-centric design, provides a robust solution for a real-world e-commerce challenge and exemplifies strong development practices.

