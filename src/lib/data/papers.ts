import { type Paper } from "$lib/data/types";

import sensors2025 from "$lib/md/papers/sensors2025.md";
import bigdata2025 from "$lib/md/papers/bigdata2025.md";
import dcc2025 from "$lib/md/papers/dcc2025.md";
import globecom2024 from "$lib/md/papers/globecom2024.md";
import ficloud2024 from "$lib/md/papers/ficloud.md";
import melecon2024 from "$lib/md/papers/melecon2024.md";
import icctfl2025 from "$lib/md/papers/icctfl2025.md";
import icctmlops2025 from "$lib/md/papers/icctmlops.md";
import comcom2025 from "$lib/md/papers/comcom2025.md";

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
        id: "comcom2025",
        title: "Beyond performance comparing the costs of applying Deep and Shallow Learning",
        date: "2025-09",
        publisher: "Computer Communications",
        description: "Comparative study focusing on performance, time, energy, and explainability. Results show shallow models achieve comparable performance with up to 90% acceleration and lower resource consumption.",
        authors: ["Rafael Teixeira", "Leonardo Almeida", "Pedro Rodrigues", "Mário Antunes", "Diogo Gomes", "Rui L. Aguiar"],
        content: comcom2025
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
        description: "AIDetx introduces a compression-based method utilizing finite-context models to efficiently and interpretably detect machine-generated text, without requiring GPUs.",
        authors: ["Leonardo Almeida", "Pedro Rodrigues", "Diogo Magalhães", "Armando J. Pinho", "Diogo Pratas"],
        content: dcc2025
    },
    {
        id: "globecom2024",
        title: "From Black Box to Transparency: Consistency and Cost within XAI",
        date: "2024-12-08",
        publisher: "2024 IEEE Globecom Workshops",
        description: "Evaluation of consistency, temporal efficiency, and energy costs of SHAP, LIME, and Permutation Importance for explaining ML models. XAI methods can disagree on feature relevance.",
        authors: ["Julio Corona", "Pedro Rodrigues", "Leonardo Almeida", "Rafael Teixeira", "Mário Antunes", "Rui L. Aguiar"],
        content: globecom2024
    },
    {
        id: "ficloud2024",
        title: "Shallow vs. Deep Learning: Prioritizing Efficiency in Next Generation Networks",
        date: "2024-08-19",
        publisher: "FiCloud 2024",
        description: "Comparison of shallow and deep learning models. Results show that shallow models achieve comparable performance with over 90% faster training and prediction times.",
        authors: ["Rafael Teixeira", "Leonardo Almeida", "Pedro Rodrigues", "Mário Antunes", "Diogo Gomes", "Rui L. Aguiar"],
        content: ficloud2024
    },
    {
        id: "melecon2024",
        title: "Privacy-Preserving Defense: Intrusion Detection in IoT using Federated Learning",
        date: "2024-06-25",
        publisher: "2024 IEEE MELECON",
        description: "Federated Learning for privacy-preserving Intrusion Detection Systems in IoT. Results show that FL-based training achieves comparable performance and faster convergence than centralized methods.",
        authors: ["Leonardo Almeida", "Pedro Rodrigues", "Rafael Teixeira", "Mário Antunes", "Rui L. Aguiar"],
        content: melecon2024
    },
    {
        id: "icctfl2025",
        title: "Resilient Federated Learning Framework for 6G",
        date: "2025-04",
        publisher: "ICCT-Europe 2025",
        description: "Resilient Federated Learning framework for 6G and IoT, leveraging Zenoh for efficient communication. It demonstrates improved training speed and reliability, with simulated node failures.",
        authors: ["Leonardo Almeida", "Pedro Rodrigues", "Mário Antunes", "Rui L. Aguiar"],
        content: icctfl2025
    },
    {
        id: "icctmlops2025",
        title: "Optimised Task Placement for MLOps",
        date: "2025-04",
        publisher: "ICCT-Europe 2025",
        description: "Optimized task placement system for MLOps pipelines in heterogeneous environments, using SJF scheduling and heuristic-based task assignment to reduce overall execution and average waiting times compared to traditional strategies.",
        authors: ["Pedro Rodrigues", "Leonardo Almeida", "Julio Corona", "Mário Antunes", "Rui L. Aguiar"],
        content: icctmlops2025
    },
    // {
    //     id: "wimob2025",
    //     title: "Understanding What Federated Learning Models Learn: a Comparative Study with Traditional Models",
    //     date: "2025-10",
    //     publisher: "IEEE WiMob 2025",
    //     description: "",
    //     authors: ["Rafael Teixeira", "Leonardo Almeida", "Pedro Rodrigues", "Julio Corona", "Mário Antunes", "Rui L. Aguiar"],
    // }

];

papers.forEach(paper => {
    paper.category = "Paper";
});
