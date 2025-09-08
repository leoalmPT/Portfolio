import { type Project } from "$lib/data/types";

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Project 1",
        description: "Description for project 1",
        skills: ["Python", "Cpp"]
    },
];

projects.forEach(project => {
    project.category = "Project";
});
