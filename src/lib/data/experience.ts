import { type Experience } from "$lib/data/types";

import content1 from "$lib/md/experience/1.md";

export const experiences: Experience[] = [
    {
        id: "experience-1",
        title: "Researcher",
        description: `
            Docs: <br />
            - https://svelte.dev/docs/kit/introduction
            - https://www.shadcn-svelte.com/docs
            - https://svelte.dev/docs/kit/introduction
            - https://www.shadcn-svelte.com/docshttps
        `,
        content: content1,
        company: "University of Aveiro",
        date: "2022-01-01",
        skills: ["Svelte", "Proxmox", "MQTT"],
        endDate: "Present"
    }
];

experiences.forEach(exp => {
    exp.category = "Experience";
});