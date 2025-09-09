## Overview

[Project page](https://mep-org.github.io/website-for-communication/) - [Repositories](https://github.com/orgs/MEP-org/repositories) - [Demo Video](https://youtu.be/vz1BaUeZsS8?si=QLGkIk4V0qoEDXSE) [Website](https://mepml.pages.dev/) - [Prototype](https://mep-org.github.io/Prototype/)

MepML (ML/AI model evaluation platform) is a web application developed as a final project for the [**Bachelor's degree**](/recognition/bachelors). It aims to streamline the process of teaching and learning Machine Learning by providing a collaborative and intuitive platform for professors to assign and evaluate ML exercises, and for students to submit their models and receive immediate performance feedback.

### Demonstration Video

<iframe class="aspect-video rounded-lg border-2 max-w-[800px]" src="https://www.youtube.com/embed/vz1BaUeZsS8?si=HlhozhA-2Law_sug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## About the Project

The project was motivated by the challenges faced in traditional ML education, such as the manual and time-consuming evaluation of student models, difficulty in tracking student progress, and a lack of immediate feedback for students on their model performance. MepML addresses these issues by offering a dedicated environment tailored for academic ML exercises.

Key features and functionalities include:

**For Professors:**
*   **Exercise Creation & Management:** Professors can easily create new ML exercises, define guidelines using a markdown editor, set deadlines, and specify submission limits.
*   **Customizable Metrics:** The platform allows professors to add and reuse custom Python-based evaluation metrics, providing flexibility in assessing student solutions beyond standard metrics.
*   **Class Management:** Tools to define and manage classes, including adding, removing, and importing students, and assigning exercises to specific groups.
*   **Student Progress Tracking:** Access to student results and submitted code, enabling efficient monitoring of individual and class-wide progress.
*   **Slack Notifications:** An integrated Slack bot automatically notifies students of new assignments, improving communication and engagement.

**For Students:**
*   **Exercise Access:** Students can view public and assigned exercises, download necessary training and incomplete test datasets.
*   **Solution Submission:** Ability to upload their trained models (e.g., Jupyter Notebooks) and prediction files for automatic evaluation.
*   **Performance Feedback:** Immediate evaluation of submitted models based on defined metrics, allowing students to understand their model's performance.
*   **Peer Comparison & Ranking:** View their ranking and compare their results with classmates, fostering a competitive and learning-oriented environment.

## Technical Details

MepML is built with a **layered architecture** to ensure maintainability, scalability, and security.

*   **Presentation Layer:** Developed using **React** for a dynamic and intuitive user interface.
*   **Authentication Layer:** Leverages **Firebase Authentication** for secure user login and registration, providing distinct profiles for students and professors.
*   **Business Layer:** Implemented with **Django REST Framework** in Python, handling the core logic, API endpoints, and includes a **secure sandbox environment** for executing custom evaluation metrics safely. A **FastAPI** service integrates with the Slack API for notifications.
*   **Data Layer:** Utilizes **MySQL** for robust relational data storage, managed through Django's ORM.
*   **Cloud Storage:** **Google Cloud Storage** is used for scalable storage of datasets and user-submitted files.
*   **Deployment:** The application is deployed on **Google Cloud Platform**, utilizing services like **Cloud Run** for the Django backend (serverless containers), and **Compute Engine Instances** for the MySQL database and Slack bot. A **CI/CD pipeline** with GitHub Actions and Google Cloud Build ensures continuous deployment.

### MepML System Architecture
<img class="bg-white" src="/files/projects/mepml/architecture.png" alt="MepML System Architecture" width="800" />

### MepML Deployment Architecture
<img src="/files/projects/mepml/deployment.png" alt="MepML Deployment Architecture" width="800" />

## Final Thoughts

MepML successfully delivers a comprehensive platform that enhances the educational experience for both ML/AI students and professors. Through its thoughtful design and robust implementation, it simplifies complex evaluation processes, provides meaningful feedback, and fosters an engaging learning environment, ultimately contributing to more effective ML education at the university level.