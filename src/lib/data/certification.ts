import { type Certification } from "./types";

export const certifications: Certification[] = [
    {
        id: "certification-1",
        title: "Certification 1",
        description: "Description for Certification 1",
        date: "2022-01-01",
    },
    {
        id: "certification-2",
        title: "Certification 2",
        description: "Description for Certification 2",
        date: "2022-02-01",
    }
];

certifications.forEach(cert => {
    cert.category = "Certification";
});
