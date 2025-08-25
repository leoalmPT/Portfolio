import { type Experience } from "./types";

import content from "$lib/md/experience/1.md?raw";

export const experiences: Experience[] = [
    {
        id: "experience-1",
        title: "Researcher",
        description: "random text",
        content: content,
        company: "University of Aveiro",
        date: "2022-01-01",
        skills: ["svelte"],
        endDate: "Present"
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});