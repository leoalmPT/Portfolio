import {type Paper} from './types';

export const papers: Paper[] = [
    {
        id: "paper-1",
        title: "Paper 1",
        description: "Description for paper 1",
        date: "2022-01-01",
    },
    {
        id: "paper-2",
        title: "Paper 2",
        description: "Description for paper 2",
        date: "2022-02-01",
    },
    {
        id: "paper-3",
        title: "Paper 3",
        description: "Description for paper 1",
        date: "2022-01-01",
    },
    {
        id: "paper-4",
        title: "Paper 4",
        description: "Description for paper 2",
        date: "2022-02-01",
    }
];

papers.forEach(paper => {
    paper.category = "Paper";
});
