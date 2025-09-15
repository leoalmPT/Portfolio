import { awards } from "$lib/data/awards";
import { certifications } from "$lib/data/certification";

const recognition = [...awards, ...certifications];

export function match(value: string) {
    return recognition.find(rec => rec.id === value);
}