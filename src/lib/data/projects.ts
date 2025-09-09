import { type Project } from "$lib/data/types";

import flexfl from "$lib/md/projects/flexfl.md";
import mepml from "$lib/md/projects/mepml.md";

export const projects: Project[] = [
    {
        id: "flexfl",
        title: "FlexFL - Resilient Federated Learning Framework",
        description: "Dissertation project that features a highly modular architecture with dynamic worker pool management and task rescheduling to ensure fault tolerance and continuous model convergence.",
        skills: ["Proxmox", "Python", "UV", "Docker", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Kafka", "MQTT", "Zenoh", "MPI", "Git"],
        content: flexfl
    },
    {
        id: "mepml",
        title: "MepML - ML/AI Model Evaluation Platform",
        description: "Bachelor's final project, a web-based platform designed for ML model evaluation, enabling university professors to create and manage ML exercises and students to submit models, receive immediate performance feedback, and compare results.",
        skills: ["GoogleCloud", "Docker", "GithubActions", "Python", "Django", "FastAPI", "MySQL", "React", "JavaScript", "Scikit-learn", "Pandas", "NumPy", "Git", "HTML", "CSS"],
        content: mepml
    }
];

projects.forEach(project => {
    project.category = "Project";
});
