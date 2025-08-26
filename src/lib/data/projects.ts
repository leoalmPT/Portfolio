import { type Project } from "./types";

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Project 1",
        description: "Description for project 1",
        skills: ["Python", "Cpp"]
    },
    {
        id: "project-2",
        title: "Project 2",
        description: "Description for project 2",
        skills: ["Python", "Cpp"]
    },
    {
        id: "project-3",
        title: "Project 3",
        description: "Description for project 2",
        skills: ["Python", "Cpp"]
    },
    {
        id: "project-4",
        title: "Project 4",
        description: "Description for project 2",
        skills: ["Python", "Cpp"]
    },
    {
        id: "project-5",
        title: "Project 5",
        description: "Description for project 2",
        skills: ["Python", "Cpp"]
    },
    {
        id: "project-6",
        title: "Project 6",
        description: "Description for project 2",
        skills: ["Python", "Cpp"]
    },
];

projects.forEach(project => {
    project.category = "Project";
});
