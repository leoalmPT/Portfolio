import { type Award } from "./types";

export const awards: Award[] = [
    {
        id: "award-1",
        title: "Award 1",
        description: "Description for Award 1",
        date: "2022-01-01",
    },
    {
        id: "award-2",
        title: "Award 2",
        description: "Description for Award 2",
        date: "2022-02-01",
    }
];

awards.forEach(award => {
    award.category = "Award";
});
