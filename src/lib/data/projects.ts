import { type Project } from "$lib/data/types";

import flexfl from "$lib/md/projects/flexfl.md";
import mepml from "$lib/md/projects/mepml.md";
import aitv from "$lib/md/projects/aitv.md";
import aidtex from "$lib/md/projects/aidetx.md";

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
    },
    {
        id: "aitv",
        title: "AI-Powered Personalized TV Experience",
        description: "The project leveraged Altice Labs' Media Dive platform and Generative AI to create dynamic user profiles, recommend relevant programs, and deliver summarized news headlines and short video clips for an enhanced viewing experience.",
        skills: ["Python", "PyTorch", "Pandas", "NumPy", "Git"],
        content: aitv
    },
    {
        id: "aidtex",
        title: "AIDetx - Compression-Based Detection of AI-Generated Text",
        description: "AIDetx offers a computationally efficient and interpretable alternative to deep learning classifiers. Achieving up to 3.1 million characters per second using only a single CPU core.",
        skills: ["Cpp", "Python", "Pandas", "NumPy", "Scikit-learn", "Git"],
        content: aidtex
    }
];

projects.forEach(project => {
    project.category = "Project";
});
