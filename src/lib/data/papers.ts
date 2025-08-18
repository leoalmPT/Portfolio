import {type Paper} from './types';

export const papers: Paper[] = [
    {
        title: "Paper 1",
        description: "Description for paper 1",
        content: "paper-1.md",
        authors: ["Author 1", "Author 2"],
        date: "2022-01-01",
        publisher: "Publisher 1"
    },
    {
        title: "Paper 2",
        description: "Description for paper 2",
        content: "paper-2.md",
        authors: ["Author 3"],
        date: "2022-02-01",
        publisher: "Publisher 2"
    }
];

papers.forEach(paper => {
    paper.category = "Paper";
});
