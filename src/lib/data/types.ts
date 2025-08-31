type MarkdownComponentType = typeof import("*.md")["default"];


export const Skills = [
    // Programming Languages
    "Python", "C", "Cpp", "Java", "JavaScript", "TypeScript", "Lua",
    // CI/CD & Cloud
    "Git", "GithubActions", "Docker", "UV", "Maven", "Kubernetes", "Proxmox", "Terraform", "AWS", "Cloudflare",
    // Machine Learning
    "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV",
    // Full Stack
    "HTML", "CSS", "React", "Svelte", "Angular", "Django", "SpringBoot", "FastAPI", "Flask",
    // Data & Messaging
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "MQTT", "MPI"
] as const;

export type Skill = typeof Skills[number];


interface Base {
    id: string;
    title: string;
    description: string;
    content?: MarkdownComponentType;
    // media?: string[];
    category?: "Award" | "Experience" | "Paper" | "Certification" | "Project";
}

export interface Project extends Base {
    skills: Skill[];
}

export interface Experience extends Base {
    skills: Skill[];
    date: string;
    endDate: string;
    // company: string;
}

export interface Paper extends Base {
    date: string;
    // authors: string[];
    // publisher: string;
}

export interface Award extends Base {
    date: string;
}

export interface Certification extends Base {
    date: string;
}

export type Item = Project | Experience | Paper | Award | Certification;