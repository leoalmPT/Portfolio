import { type Project } from "./types";

export const projects: Project[] = [
    {
        title: "Project 1",
        description: "Description for project 1",
        content: "project-1.md",
        skills: ["skill1", "skill2"]
    },
    {
        title: "Project 2",
        description: "Description for project 2",
        content: "project-2.md",
        skills: ["skill2", "skill3"]
    }
];

projects.forEach(project => {
    project.category = "Project";
});
