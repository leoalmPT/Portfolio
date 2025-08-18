import { type Experience } from "./types";

export const experiences: Experience[] = [
    {
        title: "Researcher",
        description: "random text",
        content: "file.md",
        company: "University of Aveiro",
        date: "2022-01-01",
        skills: ["svelte"],
        endDate: "Present"
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});