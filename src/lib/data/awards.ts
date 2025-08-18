import { type Award } from "./types";

export const awards: Award[] = [
    {
        title: "Award 1",
        description: "Description for Award 1",
        content: "content-1.md",
        date: "2022-01-01",
    },
    {
        title: "Award 2",
        description: "Description for Award 2",
        date: "2022-02-01",
        content: "content-2.md"
    }
];

awards.forEach(award => {
    award.category = "Award";
});
