// src/types/index.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    category: 'Multi-Agent' | 'RAG Pipeline' | 'GPU Optimization' | 'LLM Orchestration' | 'Full-Stack AI' | 'Vector DB';
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    featured: boolean;
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    duration: string;
    description?: string;
}

export interface Skill {
    name: string;
    category: 'AI/ML Frameworks' | 'Vector Databases' | 'Cloud & DevOps' | 'Programming' | 'Hardware';
    level: number; // 1-5
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: 'Technical' | 'Architecture' | 'Performance' | 'Tutorial';
    readTime: string;
    publishDate: string;
    tags: string[];
    featured: boolean;
    url?: string;
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface NavItem {
    label: string;
    href: string;
}

