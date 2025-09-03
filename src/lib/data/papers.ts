import {type Paper} from './types';

import sensors2025 from "$lib/md/papers/sensors2025.md";
import bigdata2025 from "$lib/md/papers/bigdata2025.md";

export const papers: Paper[] = [
    {
        id: "sensors2025",
        title: "Federated Learning for a Dynamic Edge: A Modular and Resilient Approach",
        date: "2025-06",
        publisher: "MDPI - Sensors",
        description: "Implementation of a Federated Learning framework with multiple algorithms and communication protocols. Evaluation shows fault tolerance, efficient communication, and model convergence with worker failures.",
        authors: ["Leonardo Almeida", "Rafael Teixeira", "Gabriele Baldoni", "Mário Antunes", "Rui L. Aguiar"],
        content: sensors2025
    },
    {
        id: "bigdata2025",
        title: "Efficient training: Federated learning cost analysis",
        date: "2025-05",
        publisher: "Big Data Research",
        description: "Analysis of the performance and costs of various Federated Learning approaches, demonstrating their impact on training time and communication overhead in 6G networks for efficient, privacy-preserving AI.",
        authors: ["Rafael Teixeira", "Leonardo Almeida", "Mário Antunes", "Diogo Gomes", "Rui L. Aguiar"],
        content: bigdata2025
    },
    {
        id: "dcc2025",
        title: "AIDetx: A Compression-Based Method for Identification of Machine-Learning Generated Text",
        date: "2025-03-18",
        publisher: "2025 Data Compression Conference",
        description: "",
        authors: ["Leonardo Almeida", "Pedro Rodrigues", "Diogo Magalhães", "Armando J. Pinho", "Diogo Pratas"]
    },
    {
        id: "globecom2024",
        title: "From Black Box to Transparency: Consistency and Cost within XAI",
        date: "2024-12-08",
        publisher: "2024 IEEE Globecom Workshops",
        description: "",
        authors: ["Julio Corona", "Pedro Rodrigues", "Leonardo Almeida", "Rafael Teixeira", "Mário Antunes", "Rui L. Aguiar"]
    },
    {
        id: "ficloud2024",
        title: "Shallow vs. Deep Learning: Prioritizing Efficiency in Next Generation Networks",
        date: "2024-08-19",
        publisher: "FiCloud 2024",
        description: "",
        authors: ["Rafael Teixeira", "Leonardo Almeida", "Pedro Rodrigues", "Mário Antunes", "Diogo Gomes", "Rui L. Aguiar"]
    },
    {
        id: "melecon2024",
        title: "Privacy-Preserving Defense: Intrusion Detection in IoT using Federated Learning",
        date: "2024-06-25",
        publisher: "2024 IEEE MELECON",
        description: "",
        authors: ["Leonardo Almeida", "Pedro Rodrigues", "Rafael Teixeira", "Mário Antunes", "Rui L. Aguiar"]
    }
];

papers.forEach(paper => {
    paper.category = "Paper";
});
