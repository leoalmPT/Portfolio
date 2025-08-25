import { type Experience } from "./types";

import content1 from "$lib/md/experience/1.md";

export const experiences: Experience[] = [
    {
        id: "experience-1",
        title: "Researcher",
        description: "random text",
        content: content1,
        company: "University of Aveiro",
        date: "2022-01-01",
        skills: ["svelte"],
        endDate: "Present"
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});