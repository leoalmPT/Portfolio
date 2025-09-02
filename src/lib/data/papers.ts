import {type Paper} from './types';

import sensors2025 from "$lib/md/papers/sensors2025.md";

export const papers: Paper[] = [
    {
        id: "sensors2025",
        title: "Federated Learning for a Dynamic Edge: A Modular and Resilient Approach",
        date: "2025-06",
        publisher: "MDPI - Sensors",
        description: "Implemented a Federated Learning framework with multiple algorithms and communication protocols. Evaluation shows fault tolerance, efficient communication, and model convergence with worker failures.",
        authors: ["Leonardo Almeida", "Rafael Teixeira", "Gabriele Baldoni", "Mário Antunes", "Rui L. Aguiar"],
        content: sensors2025
    },
];

papers.forEach(paper => {
    paper.category = "Paper";
});
