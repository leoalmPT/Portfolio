type MarkdownComponentType = typeof import("*.md")["default"];


export type Skill =
    // Programming Languages
    | "Python" | "C" | "Cpp" | "Java" | "JavaScript" | "TypeScript" | "Lua"
    // CI/CD & Cloud
    | "Git" | "GithubActions" | "Docker" | "UV" | "Maven" | "Kubernetes" | "Proxmox" | "Terraform" | "AWS" | "Cloudflare"
    // Machine Learning
    | "TensorFlow" | "Keras" | "PyTorch" | "Scikit-learn" | "Pandas" | "NumPy" | "OpenCV"
    // Full Stack
    | "HTML" | "CSS" | "React" | "Svelte" | "Angular" | "Django" | "SpringBoot" | "FastAPI" | "Flask"
    // Data & Messaging
    | "PostgreSQL" | "MySQL" | "MongoDB" | "Redis" | "RabbitMQ" | "Kafka" | "MQTT" | "MPI";


interface Base {
    id: string;
    title: string;
    description: string;
    content?: MarkdownComponentType;
    images?: string[];
    category?: "Award" | "Experience" | "Paper" | "Certification" | "Project";
}

export interface Project extends Base {
    skills: Skill[];
}

export interface Experience extends Base {
    company: string;
    skills: Skill[];
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