import { type Award } from "$lib/data/types";

import hackathon2024 from "$lib/md/awards/hackathon2024.md";
import researchgrant2024 from "$lib/md/awards/researchgrant2024.md";
import researchgrant2023 from "$lib/md/awards/researchgrant2023.md";
import thinktwice2022 from "$lib/md/awards/thinktwice.md";
import scholarship2020 from "$lib/md/awards/scholarship2020.md";

export const awards: Award[] = [
    {
        id: "hackathon2024",
        title: "Hackathon - Aveiro TechWeek 2024",
        date: "2024-10",
        description: "Awarded First Place at Altice Labs' challenge for developing an innovative AI-powered system that creates personalized TV experiences with enriched, LLM-generated content summaries, winning a 5000€ prize.",
        content: hackathon2024
    },
    {
        id: "researchgrant2024",
        title: "Research Grant - University of Aveiro",
        date: "2024-09",
        description: "Secured a Research Grant at the University of Aveiro, as part of the NEXUS Project, furthering advanced ML and distributed systems research.",
        content: researchgrant2024
    },
    {
        id: "researchgrant2023",
        title: "Research Grant - Instituto de Telecomunicações",
        date: "2023-09",
        description: "Awarded a Research Grant at the Instituto de Telecomunicações, focusing on Networks and Services and laying the groundwork for advanced distributed machine learning research.",
        content: researchgrant2023
    },
    {
        id: "thinktwice2022",
        title: "Think Twice 4th edition - University of Aveiro",
        date: "2022-03",
        description: "First Place in the Algorithmic Category by solving competitive programming challenges under time constraints.",
        content: thinktwice2022
    },
    {
        id: "scholarship2020",
        title: "Merit Scholarship - University of Aveiro",
        date: "2020-11",
        description: "Awarded the University of Aveiro Academic Merit Scholarship for outstanding entry grades (18.95/20), covering full annual tuition throughout my Bachelor's degree and recognizing sustained academic excellence.",
        content: scholarship2020
    }
];

awards.forEach(award => {
    award.category = "Award";
});
