import { projects } from "$lib/data/projects";

export function match(value: string) {
    return projects.find(project => project.id === value);
}
