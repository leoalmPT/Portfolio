## Overview

[Project page](https://noteally.github.io/noteally-doc/docs/intro) - [Repositories](https://github.com/orgs/NoteAlly/repositories)

NoteAlly is a comprehensive web-based platform designed to serve the academic community, specifically university students and educators. Its primary goal is to provide a centralized hub for the exchange of university-related resources, including study materials, coding projects, notes, and tutoring services. It aims to enhance and gamify the academic experience of students and create opportunities for educators to share their knowledge and experience.

### Homepage

<img src="/files/projects/noteally/homepage.png" alt="NoteAlly Homepage" width="800" />

## About the Project

NoteAlly addresses the common challenges of fragmented academic resources and the lack of an engaging platform for their exchange within a university setting. The platform integrates several key features:

*   **Organized University Resources:** Resources are meticulously organized with tags, enabling easy search and access for students.
*   **Monetization Options:** Users can monetize their shared resources and tutoring services, providing an incentive for high-quality contributions.
*   **Gamified User Experience:** A "Karma" score-based user ranking system encourages active participation and quality content creation.
*   **Resource Filtering:** Advanced filtering capabilities allow users to quickly find the most relevant materials and services.
*   **Premium Features:** Exclusive premium features, such as increased resource limits and ad omission, are available to enhance the user experience.

## Technical Details

NoteAlly is built on a **Microservices Architecture**, composed of five distinct services: auth-service, user-service, tutor-service, material-service, and info-service. This design promotes modularity, scalability, and resilience, allowing independent updates and minimizing the impact of service failures.

The entire solution is integrated within the **AWS cloud environment**:

*   **Compute:** Services run on **Amazon ECS Fargate instances** within an **Amazon ECS Cluster**, providing secure, resizable, and serverless computing capacity with Docker containers for isolation. **Amazon ECR** is used to store and manage Docker images.
*   **API Management:** **AWS API Gateway** acts as a single entry point for all services, managing interactions and exposing API endpoints with defined authentication and authorization methods. A **VPC Link** ensures secure connection between the API Gateway and the private network resources.
*   **Storage:** **Amazon RDS (Relational Database Service)** houses all structured data for the NoteAlly frontend (User, Material, StudyArea, University, Like, Download entities). **Amazon S3 (Simple Storage Service)** is used for multimedia storage of study resources and notes, accommodating various file formats like videos and PDFs.
*   **Authentication & Authorization:** **Amazon Cognito** handles user authentication, including password storage, verification, salting, and resets. **OAuth** is employed for authorization, managing secure access to specific resources and APIs.
*   **Networking:** The network architecture features a **Virtual Private Cloud (VPC)** with one public and two private subnets. An **Internet Gateway** provides public access, while a **NAT Gateway** enables outbound connections from private subnets. **Route Tables** define network traffic flow, and **Security Groups** control inbound and outbound traffic rules. A **Network Load Balancer** distributes end-user requests across services.
*   **Monitoring & Deployment:** **AWS CloudWatch** monitors resources, collecting metrics for ECS Clusters, logs from services, and other AWS components. **AWS Amplify** is used for deploying and hosting the web application, offering scalability and real-time data connectivity. **Amazon Simple Notification Service (SNS)** handles user and administrator notifications using a publish/subscribe model.

**Development Practices:**

The project adopted rigorous development practices following **Agile methodologies** with sprints and sprint reviews. Key practices included:

*   **Definition of Done:** Criteria include code implementation, acceptance criteria met, all tests passed, quality gates passed (e.g., 80% code coverage, 3% duplicated lines, A ratings for maintainability/reliability/security), documentation updated, and peer review.
*   **Definition of Ready:** User stories must be small, independent, have defined acceptance criteria, be testable, prioritized, have an estimated cost, be valuable, and be clearly understood by the team.

### AWS Deployment Architecture

<img src="/files/projects/noteally/architecture.png" alt="NoteAlly AWS Deployment Architecture" width="800" class="bg-white" />

### Materials Sharing Page

<img src="/files/projects/noteally/materials.png" alt="NoteAlly Materials Sharing Page" width="800" />

## Final Thoughts

NoteAlly provides an innovative and robust platform for academic resource exchange, leveraging a modern microservices architecture and comprehensive AWS integration. The project's strong emphasis on gamification, monetization, and rigorous quality assurance practices ensures a highly available, secure, and user-friendly experience, making it a valuable tool for university communities. The lessons learned during development, particularly regarding communication, prioritization, and detailed user stories, proved crucial for its successful implementation.