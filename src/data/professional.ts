// src/data/professional.ts
import { Achievement, Milestone } from '@/types';

export const professionalHighlights = [
    {
        icon: '🎯',
        title: 'Senior AI/ML Engineer Promotion',
        description: 'Recently promoted to Senior AI/ML position, leading enterprise AI initiatives and architectural decisions',
        metric: 'Advanced to senior level in 2025'
    },
    {
        icon: '🏆',
        title: 'NVIDIA NIM Hackathon Winner 2024',
        description: 'Recognized for innovative avatar-based conversational AI implementation using NVIDIA Omniverse',
        metric: 'Top 1% of 500+ submissions'
    },
    {
        icon: '⚡',
        title: '4+ Years Data Science Excellence',
        description: 'Evolution from traditional ML to cutting-edge generative AI and multi-agent systems leadership',
        metric: '95% average model accuracy'
    },
    {
        icon: '🚀',
        title: 'Enterprise AI Architecture Leader',
        description: 'Leading AI system architecture for Fortune 500 clients with focus on scalability and performance',
        metric: '$2M+ cost optimization achieved'
    }
];

export const techJourney: Milestone[] = [
    {
        year: '2021',
        title: 'Data Science Foundation',
        description: 'Started as Software Engineer - Data Scientist, building traditional ML models and recommendation systems',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Traditional ML'],
        company: 'TO THE NEW',
        impact: 'Built foundation in data preprocessing, feature engineering, and model deployment'
    },
    {
        year: '2022',
        title: 'AI Pipeline Mastery',
        description: 'Deep dive into NLP, recommendation engines, and production ML pipelines for OTT platforms',
        technologies: ['FastAPI', 'NLP', 'Recommendation Systems', 'AWS', 'Docker'],
        achievements: ['Built scalable recommendation engine for OTT platform'],
        impact: 'Scaled ML systems to handle millions of user interactions'
    },
    {
        year: '2023',
        title: 'Generative AI Pioneer',
        description: 'Embraced the LLM revolution, mastering RAG architectures and vector databases',
        technologies: ['LangChain', 'RAG Systems', 'FAISS', 'OpenAI GPT', 'Vector DBs'],
        achievements: ['Automated PDF processing for 150+ insurance carriers with 95% accuracy'],
        impact: 'Generated $500K+ annual savings through intelligent automation'
    },
    {
        year: '2024',
        title: 'Multi-Agent Systems Expert & NVIDIA Winner',
        description: 'Mastered complex AI orchestration, winning prestigious NVIDIA hackathon and advancing to senior enterprise AI roles',
        technologies: ['LangGraph', 'Microsoft Autogen', 'NVIDIA Omniverse', 'Multi-Agent Systems', 'NVIDIA ACE', 'Advanced RAG'],
        achievements: [
            'Won NVIDIA NIM Hackathon 2024 (Top 1% globally)',
            'Promoted to AI/ML Computational Science Analyst at Accenture',
            'Built DevOps Self-Healing AI System with 70% faster incident resolution',
            'Led enterprise AI transformation for Fortune 500 clients'
        ],
        company: 'Accenture',
        impact: 'Delivered $2M+ cost optimization through intelligent automation'
    },
    {
        year: '2025',
        title: 'Senior AI/ML Engineer & Technical Leader',
        description: 'Promoted to Senior AI/ML Engineer, leading architectural decisions and mentoring teams on next-generation AI systems',
        technologies: ['Enterprise AI Architecture', 'Run:AI', 'Kubernetes', 'Jetson Orin Nano', 'Quantum Computing', 'Edge AI'],
        achievements: [
            'Promoted to Senior AI/ML Engineer',
            'Leading AI architecture for global enterprise clients',
            'Pioneering quantum-classical hybrid computing research',
            'Mentoring junior engineers and establishing AI best practices'
        ],
        company: 'Accenture (Senior Role)',
        focus: 'Agentic Architecture, Quantum Computing Integration & Edge AI Research',
        impact: 'Architecting next-generation AI solutions with focus on scalability and innovation'
    }
];

export const skillRadarData = [
    { skill: 'Enterprise AI Architecture', level: 95 },
    { skill: 'Generative AI & LLMs', level: 98 },
    { skill: 'Multi-Agent Systems', level: 95 },
    { skill: 'Vector Databases & RAG', level: 96 },
    { skill: 'Cloud & GPU Optimization', level: 90 },
    { skill: 'System Design & Scalability', level: 92 },
    { skill: 'Real-time AI Systems', level: 88 },
    { skill: 'NVIDIA Tech & Edge AI', level: 90 },
    { skill: 'Technical Leadership', level: 87 },
    { skill: 'DevOps & Automation', level: 85 }
];

export const achievements: Achievement[] = [
    {
        id: 'nvidia-hackathon-2024',
        title: 'NVIDIA NIM Hackathon Winner 2024',
        description: 'Built avatar-based conversational AI using NVIDIA Omniverse, RIVA ASR, and advanced TTS systems',
        date: '2024',
        category: 'Hackathon',
        impact: 'Recognized among top 1% of 500+ global submissions',
        url: '#'
    },
    {
        id: 'enterprise-automation',
        title: 'Enterprise AI Automation Success',
        description: 'Automated PDF processing system serving 150+ insurance carriers with 95% accuracy',
        date: '2023',
        category: 'Recognition',
        impact: '$500K+ annual cost savings for clients'
    },
    {
        id: 'databricks-certification',
        title: 'Databricks Certified ML Associate',
        description: 'Achieved industry-recognized certification in machine learning engineering',
        date: '2023',
        category: 'Award'
    },
    {
        id: 'multi-agent-pioneer',
        title: 'Multi-Agent Systems Innovation',
        description: 'Pioneered DevOps Self-Healing AI System using LangGraph and autonomous agents',
        date: '2024',
        category: 'Recognition',
        impact: 'Reduced incident response time by 70%'
    }
];

// Performance metrics for dashboard (updated for senior role)
export const performanceMetrics = {
    totalProjects: 20,
    enterpriseClients: 200,
    averageAccuracy: 96,
    annualSavings: 2000000,
    yearsExperience: 4.5,
    multiAgentSystems: 15,
    certifications: 10,
    technologiesMastered: 55,
    teamsMentored: 5,
    architecturalsolutions: 8
};

// Current focus areas
export const currentFocus = [
    {
        area: 'Quantum Computing Research',
        description: 'Exploring quantum algorithms for AI optimization',
        technologies: ['Quantum Computing', 'Qiskit', 'Research']
    },
    {
        area: 'Edge AI Deployment',
        description: 'Optimizing AI models for edge devices using Jetson Orin Nano',
        technologies: ['NVIDIA Jetson', 'Edge Computing', 'Model Optimization']
    },
    {
        area: 'Enterprise AI Architecture',
        description: 'Designing scalable AI solutions for Fortune 500 companies',
        technologies: ['Kubernetes', 'Run:AI', 'System Architecture']
    },
    {
        area: 'Real-time AI Systems',
        description: 'Building responsive AI interfaces with token streaming',
        technologies: ['React', 'WebSocket', 'Real-time Processing']
    }
];