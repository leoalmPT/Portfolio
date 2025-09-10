import { type Project } from "$lib/data/types";

import flexfl from "$lib/md/projects/flexfl.md";
import mepml from "$lib/md/projects/mepml.md";
import aitv from "$lib/md/projects/aitv.md";
import aidtex from "$lib/md/projects/aidetx.md";
import noteally from "$lib/md/projects/noteally.md";
import wesago from "$lib/md/projects/wesago.md";
import pickapoint from "$lib/md/projects/pickapoint.md";

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
        skills: ["GoogleCloud", "Cloudflare", "Docker", "GithubActions", "Python", "React", "JavaScript", "Django", "FastAPI", "MySQL", "Scikit-learn", "Pandas", "NumPy", "Git", "HTML", "CSS"],
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
    },
    {
        id: "noteally",
        title: "NoteAlly - Students and Educators note sharing platform",
        description: "Microservices-based web platform designed to facilitate the exchange of academic resources like study materials, coding projects, and tutoring services.",
        skills: ["AWS", "Terraform", "Docker", "GithubActions", "Python", "Django", "Svelte", "JavaScript", "PostgreSQL", "Git", "HTML", "CSS"],
        content: noteally
    },
    {
        id: "wesago",
        title: "Wesago - Modern online forum",
        description: "Robust Kubernetes deployment of the Misago forum, with a static website. It features PostgreSQL and Redis replication, liveness health checks, CPU-based autoscaling, centralized logging, monitoring, and a disaster recovery plan.",
        skills: ["Kubernetes", "Docker", "Python", "Django", "React", "JavaScript", "PostgreSQL", "Redis", "Git", "HTML", "CSS"],
        content: wesago
    },
    {
        id: "pickapoint",
        title: "PickAPoint & PrintPlate - E-commerce deliveries and e-store platforms",
        description: "It enables businesses to register as collection points, e-stores to manage orders and track status, and customers to receive SMS notifications and collect packages securely.",
        skills: ["GoogleCloud", "Docker", "GithubActions", "Java", "SpringBoot", "Maven", "Svelte", "JavaScript", "PostgreSQL", "Git", "HTML", "CSS"],
        content: pickapoint
    }
];

projects.forEach(project => {
    project.category = "Project";
});
