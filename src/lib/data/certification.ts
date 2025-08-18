import { type Certification } from "./types";

export const certifications: Certification[] = [
    {
        title: "Certification 1",
        description: "Description for Certification 1",
        content: "content-1.md",
        date: "2022-01-01",
    },
    {
        title: "Certification 2",
        description: "Description for Certification 2",
        date: "2022-02-01",
        content: "content-2.md"
    }
];

certifications.forEach(cert => {
    cert.category = "Certification";
});
