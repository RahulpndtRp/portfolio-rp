
// src/data/experience.ts
import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
    {
        id: 'senior-ai-engineer',
        title: 'Senior AI Engineer',
        company: 'AI Innovation Lab',
        duration: '2023 - Present',
        description: [
            'Led development of multi-agent systems serving 100K+ users',
            'Optimized RAG pipelines achieving 40% faster query response times',
            'Deployed LLMs on edge devices with custom CUDA kernels',
            'Built real-time token streaming interfaces with React/WebSockets'
        ],
        technologies: ['Python', 'LangChain', 'AWS', 'Docker', 'React']
    },
    {
        id: 'ai-research-engineer',
        title: 'AI Research Engineer',
        company: 'Tech Startup',
        duration: '2022 - 2023',
        description: [
            'Designed enterprise-grade knowledge management systems',
            'Implemented vector databases with 10M+ document capacity',
            'Created automated model deployment pipelines on AWS/Azure',
            'Collaborated with cross-functional teams on AI product strategy'
        ],
        technologies: ['Python', 'ChromaDB', 'Azure', 'Kubernetes', 'FastAPI']
    },
    {
        id: 'ml-engineer',
        title: 'ML Engineer',
        company: 'AI Consultancy',
        duration: '2021 - 2022',
        description: [
            'Built custom ML models for client-specific use cases',
            'Developed Python packages for model inference and monitoring',
            'Established MLOps best practices and CI/CD pipelines',
            'Mentored junior developers on AI/ML technologies'
        ],
        technologies: ['Python', 'TensorFlow', 'MLOps', 'Jenkins', 'PostgreSQL']
    }
];

export const education: Education[] = [
    {
        id: 'masters-cs',
        degree: 'M.S. Computer Science',
        institution: 'University Name • Specialization in AI/ML',
        duration: '2020 - 2021',
        description: 'Magna Cum Laude'
    },
    {
        id: 'bachelors-ce',
        degree: 'B.S. Computer Engineering',
        institution: 'University Name',
        duration: '2016 - 2020',
        description: 'Magna Cum Laude'
    }
];
