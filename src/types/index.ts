// src/types/index.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    category: 'Multi-Agent' | 'RAG Pipeline' | 'GPU Optimization' | 'LLM Orchestration' | 'Full-Stack AI' | 'Vector DB' | 'Enterprise AI' | 'Real-time Systems' | 'NVIDIA Tech';
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
    featured: boolean;
    // Enhanced project details
    architecture?: {
        overview: string;
        components: string[];
        dataFlow: string;
        scalability: string;
    };
    metrics?: {
        performance?: string;
        accuracy?: string;
        scale?: string;
        costSavings?: string;
        users?: string;
    };
    challenges?: string[];
    innovations?: string[];
}

export interface Experience {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies: string[];
    // Enhanced experience details
    achievements?: string[];
    teamSize?: string;
    budget?: string;
    impact?: string[];
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    duration: string;
    description?: string;
    relevantCourses?: string[];
}

export interface Skill {
    name: string;
    category: 'Generative AI & LLMs' | 'Machine Learning' | 'Deep Learning' | 'Vector Databases' | 'Cloud & Infrastructure' | 'Programming Languages' | 'Web Development' | 'NVIDIA Technologies' | 'Development Tools';
    level: number; // 1-5
    yearsOfExperience?: number;
    projectsUsed?: string[];
    certifications?: string[];
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: 'Technical' | 'Architecture' | 'Performance' | 'Tutorial' | 'Case Study';
    readTime: string;
    publishDate: string;
    tags: string[];
    featured: boolean;
    url?: string;
    status?: 'published' | 'draft' | 'coming-soon';
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

// New enhanced types
export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    verificationUrl?: string;
    badge?: string;
    featured: boolean;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    category: 'Award' | 'Hackathon' | 'Publication' | 'Speaking' | 'Recognition';
    impact?: string;
    url?: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    verificationUrl?: string;
    badge?: string;
    featured: boolean;
}

export interface TechStack {
    frontend: string[];
    backend: string[];
    ai: string[];
    infrastructure: string[];
    databases: string[];
}

export interface SkillCategory {
    color: string;
    description: string;
    expertise: string;
}

export interface Milestone {
    year: string;
    title: string;
    description: string;
    technologies: string[];
    company?: string;
    achievements?: string[];
    impact?: string;
    focus?: string;
}