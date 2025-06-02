
// src/data/experience.ts
import { Experience, Education } from '@/types';

export const experiences: Experience[] = [
    {
        id: 'accenture-ai-analyst',
        title: 'AI/ML Computational Science Analyst',
        company: 'Accenture',
        duration: 'May 2024 - Present',
        description: [
            'Leading AI/ML initiatives for enterprise clients',
            'Developing generative AI solutions and LLM applications',
            'Implementing cloud-based AI architectures on AWS and Azure',
            'Collaborating with cross-functional teams on AI strategy'
        ],
        technologies: ['Python', 'AWS', 'Azure', 'LLMs', 'GenerativeAI']
    },
    {
        id: 'to-the-new-data-scientist',
        title: 'Software Engineer - Data Scientist',
        company: 'TO THE NEW',
        duration: 'September 2021 - April 2024',
        description: [
            'Built DevOps Self-Healing AI System with multi-agent architecture',
            'Developed Avatar-based Conversational Advisor with 95% accuracy',
            'Created automatic PDF filling system for 150+ insurance carriers',
            'Implemented recommendation engines and ML pipelines for OTT platforms'
        ],
        technologies: ['Python', 'LangGraph', 'NVIDIA Omniverse', 'FastAPI', 'Docker', 'AWS']
    }
];

export const education: Education[] = [
    {
        id: 'btech-cse',
        degree: 'B.Tech - Computer Science Engineering',
        institution: 'IMS Engineering College',
        duration: 'August 2017 - July 2021',
        description: 'Bachelor of Technology in Computer Science'
    }
];