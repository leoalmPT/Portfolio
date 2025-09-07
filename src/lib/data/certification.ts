import { type Certification } from "./types";

import masters from "$lib/md/certifications/masters.md";
import bachelors from "$lib/md/certifications/bachelors.md";
import awsAcademy from "$lib/md/certifications/aws-academy.md";

export const certifications: Certification[] = [
    {
        id: "masters",
        title: "MSc in Computer Science and Engineering",
        date: "2025-07",
        description: "Completed my Master's at the University of Aveiro with a final classification of 18.35/20, specializing in Software Engineering, Machine Learning, and Distributed Computing",
        content: masters
    },
    {
        id: "bachelors",
        title: "BSc in Computer Science and Engineering",
        date: "2023-06",
        description: "Completed my Bachelor's at the University of Aveiro with a final classification of 17/20, building a strong foundation in computer science and software engineering principles and practices.",
        content: bachelors
    },
    {
        id: "aws-academy",
        title: "AWS Academy Graduate",
        date: "2023-11",
        description: "Completed the AWS Academy Cloud Foundations program, demonstrating a foundational understanding of AWS cloud architecture, core services, security, and economics",
        content: awsAcademy
    }
];

certifications.forEach(cert => {
    cert.category = "Certification";
});
