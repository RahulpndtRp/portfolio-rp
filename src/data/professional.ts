// src/data/professional.ts
import { Achievement, Milestone } from '@/types';

export const professionalHighlights = [
    {
        icon: '🏆',
        title: 'NVIDIA NIM Hackathon Winner 2024',
        description: 'Recognized for innovative avatar-based conversational AI implementation using NVIDIA Omniverse',
        metric: 'Top 1% of 500+ submissions'
    },
    {
        icon: '⚡',
        title: '4+ Years Data Science Excellence',
        description: 'Evolution from traditional ML to cutting-edge generative AI and multi-agent systems',
        metric: '95% average model accuracy'
    },
    {
        icon: '🚀',
        title: 'Production AI at Enterprise Scale',
        description: 'Built and deployed AI systems serving major enterprise clients across multiple industries',
        metric: '150+ insurance carriers automated'
    },
    {
        icon: '🎯',
        title: 'Multi-Agent Architecture Pioneer',
        description: 'Specialized in complex AI system orchestration using LangGraph and Microsoft Autogen',
        metric: '10+ multi-agent systems deployed'
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
        title: 'Multi-Agent Systems Expert',
        description: 'Advanced to complex AI orchestration, winning NVIDIA hackathon and joining enterprise AI team',
        technologies: ['LangGraph', 'Microsoft Autogen', 'NVIDIA Omniverse', 'Multi-Agent Systems', 'NVIDIA ACE'],
        achievements: [
            'Won NVIDIA NIM Hackathon 2024',
            'Promoted to AI/ML Computational Science Analyst at Accenture',
            'Built DevOps Self-Healing AI System'
        ],
        company: 'Accenture',
        impact: 'Leading enterprise AI initiatives for Fortune 500 clients'
    },
    {
        year: '2025',
        title: 'Enterprise AI Architecture',
        description: 'Leading large-scale AI implementations with focus on performance optimization and edge computing',
        technologies: ['Enterprise AI', 'Run:AI', 'Kubernetes', 'Jetson Orin Nano', 'System Optimization'],
        focus: 'Quantum Computing & Edge AI Research',
        impact: 'Architecting next-generation AI solutions for global enterprises'
    }
];

export const skillRadarData = [
    { skill: 'Generative AI', level: 95 },
    { skill: 'Multi-Agent Systems', level: 90 },
    { skill: 'Vector Databases', level: 95 },
    { skill: 'Cloud Deployment', level: 85 },
    { skill: 'GPU Optimization', level: 80 },
    { skill: 'System Architecture', level: 85 },
    { skill: 'Real-time Systems', level: 80 },
    { skill: 'NVIDIA Technologies', level: 85 }
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

// Performance metrics for dashboard
export const performanceMetrics = {
    totalProjects: 15,
    enterpriseClients: 150,
    averageAccuracy: 95,
    annualSavings: 500000,
    yearsExperience: 4,
    multiAgentSystems: 10,
    certifications: 8,
    technologiesMastered: 45
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