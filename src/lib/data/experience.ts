import { type Experience } from "$lib/data/types";

import content1 from "$lib/md/experience/1.md";

export const experiences: Experience[] = [
    {
        id: "experience-1",
        title: "Researcher",
        description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        content: content1,
        date: "2022-01-01",
        skills: ["Svelte", "Proxmox", "MQTT"],
        endDate: "Present",
        company: "Some University"
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});