interface Base {
    title: string;
    description: string;
    content: string;
    images?: string[];
    category?: "Award" | "Experience" | "Paper" | "Certification" | "Project";
}

export interface Project extends Base {
    skills: string[];
}

export interface Experience extends Base {
    company: string;
    skills: string[];
    date: string;
    endDate: string;
}

export interface Paper extends Base {
    authors: string[];
    date: string;
    publisher: string;
}

export interface Award extends Base {
    date: string;
}

export interface Certification extends Base {
    date: string;
}

export type Item = Project | Experience | Paper | Award | Certification;