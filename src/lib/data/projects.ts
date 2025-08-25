import { type Project } from "./types";

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Project 1",
        description: "Description for project 1",
        skills: ["skill1", "skill2"]
    },
    {
        id: "project-2",
        title: "Project 2",
        description: "Description for project 2",
        skills: ["skill2", "skill3"]
    },
    {
        id: "project-3",
        title: "Project 3",
        description: "Description for project 2",
        skills: ["skill2", "skill3"]
    },
    {
        id: "project-4",
        title: "Project 4",
        description: "Description for project 2",
        skills: ["skill2", "skill3"]
    },
    {
        id: "project-5",
        title: "Project 5",
        description: "Description for project 2",
        skills: ["skill2", "skill3"]
    },
    {
        id: "project-6",
        title: "Project 6",
        description: "Description for project 2",
        skills: ["skill2", "skill3"]
    },
];

projects.forEach(project => {
    project.category = "Project";
});
