import { type Project } from "$lib/data/types";

import flexfl from "$lib/md/projects/flexfl.md";

export const projects: Project[] = [
    {
        id: "flexfl",
        title: "FlexFL - Resilient Federated Learning Framework",
        description: "Features a highly modular architecture with dynamic worker pool management and task rescheduling to ensure fault tolerance and continuous model convergence. Allows for various communication protocols and ML backends.",
        skills: [],
        content: flexfl
    },
    {
        id: "mepml",
        title: "MEPML",
        description: "",
        skills: [],
        
    }
];

projects.forEach(project => {
    project.category = "Project";
});
