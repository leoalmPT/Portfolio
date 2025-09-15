import { papers } from '$lib/data/papers';

export function match(value: string) {
    return papers.find(paper => paper.id === value);
}