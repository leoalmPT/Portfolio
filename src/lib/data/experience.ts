import { type Experience } from "$lib/data/types";

import researcher from "$lib/md/experience/researcher.md";

export const experiences: Experience[] = [
    {
        id: "researcher",
        title: "Researcher",
        description: "Researcher for two years, contributed to 9 papers, developed Federated Learning frameworks, designed experimental environments, and mentored bachelor's students final project.",
        date: "2023-09",
        endDate: "2025-08",
        company: "University of Aveiro and Instituto de Telecomunicações",
        skills: ["Proxmox", "Git", "UV", "Python", "Docker", "TensorFlow", "Keras", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Kafka", "MQTT", "Zenoh", "MPI"],
        content: researcher
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});