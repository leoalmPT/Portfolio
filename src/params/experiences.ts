import { experiences } from '$lib/data/experience';

export function match(value: string) {
    return experiences.find(exp => exp.id === value);
}