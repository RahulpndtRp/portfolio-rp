// src/data/experience.ts
import { Experience, Education, Achievement, Certification } from '@/types';

export const experiences: Experience[] = [
    {
        id: 'accenture-senior-ai-engineer',
        title: 'Senior AI/ML Engineer',
        company: 'Accenture',
        duration: 'May 2024 - Present',
        description: [
            'Working on advanced AI/ML initiatives for enterprise clients',
            'Built a DevOps self-healing system using Multi-Agent system',
            'Digital Human based conversational Advisor using LLM',
            'Leading development of cutting-edge AI solutions using latest technologies',
        ],
        technologies: ['LangGraph', 'Google ADK', 'NVIDIA Omniverse', 'NVIDIA RIVA', 'NVIDIA ACE', 'FastAPI', 'Azure'],
        achievements: [
            'Won NVIDIA AI NIM Hackathon at NVIDIA AI Summit 2024',
            'Developed DevOps Self-Healing AI System with multi-agent architecture',
            'Built Avatar-based Conversational Advisor with 95% accuracy'
        ],
        teamSize: '5+ Engineers',
        budget: '$1M+ Projects',
        impact: [
            'Delivered innovative AI solutions showcasing technical expertise',
            'Achieved 95% accuracy in avatar-based conversational AI',
            'Implemented autonomous incident detection and remediation systems'
        ]
    },
    {
        id: 'to-the-new-data-scientist',
        title: 'Data Scientist',
        company: 'TO THE NEW',
        duration: 'September 2021 - April 2024',
        description: [
            'Built AI solutions for automatic PDF filling for 150+ insurance carriers',
            'Developed recommendation engines for OTT platforms and video content',
            'Created custom ML models for ticket classification and support systems',
            'Worked on multiple client projects across different industries'
        ],
        technologies: ['Python', 'AWS SageMaker', 'Docker', 'FastAPI', 'DistilBert', 'TensorFlow', 'LightFM', 'Scikit-learn'],
        achievements: [
            'Built AI solution for 150+ insurance carriers with 95% accuracy',
            'Deployed custom DistilBert model achieving 98% accuracy',
            'Created recommendation engine for VideoReady OTT platform',
            'Achieved 95% accuracy in ticket classification for Tata Play support'
        ],
        teamSize: '3+ Data Scientists',
        budget: '$500K+ Annual Projects',
        impact: [
            'Automated PDF filling process saving significant manual effort',
            'Improved recommendation system accuracy for OTT platforms',
            'Enhanced customer support efficiency through intelligent ticket classification',
            'Gained expertise across multiple AI/ML domains'
        ]
    }
];

export const education: Education[] = [
    {
        id: 'btech-cse',
        degree: 'Bachelor\'s Degree (B.Tech. – CSE)',
        institution: 'IMS Engineering College',
        duration: 'August 2017 - July 2021',
        description: 'Bachelor of Technology in Computer Science Engineering'
    }
];

export const achievements: Achievement[] = [
    {
        id: 'nvidia-hackathon-2024',
        title: 'Winner of NVIDIA AI NIM Hackathon at NVIDIA AI Summit 2024',
        description: 'Won the prestigious NVIDIA AI NIM Hackathon with an innovative video analysis system using NVIDIA VIA model to analyze football match feeds, generate automated articles, and answer queries about players, goals, penalties, and timestamps',
        date: '2024',
        category: 'Hackathon',
        impact: 'Top 1% among 500+ global participants - showcased innovative use of NVIDIA VIA for sports analytics'
    },
    {
        id: 'databricks-certification',
        title: 'Databricks Certified Machine Learning Associate',
        description: 'Achieved industry-recognized certification in machine learning engineering and MLOps practices',
        date: '2023',
        category: 'Award',
        impact: 'Professional validation of ML engineering capabilities'
    }
];

export const certifications: Certification[] = [
    {
        id: 'nvidia-hackathon-winner',
        name: 'Winner of NVIDIA AI NIM Hackathon at NVIDIA AI Summit 2024',
        issuer: 'NVIDIA Corporation',
        date: '2024',
        featured: true
    },
    {
        id: 'databricks-ml-associate',
        name: 'Databricks Certified Machine Learning Associate',
        issuer: 'Databricks',
        date: '2023',
        featured: true
    },
    {
        id: 'tensorflow-ai-ml',
        name: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
        issuer: 'Coursera',
        date: '2023',
        featured: true
    },
    {
        id: 'cnn-tensorflow',
        name: 'Convolutional Neural Networks in TensorFlow',
        issuer: 'Coursera',
        date: '2023',
        featured: false
    },
    {
        id: 'statistics-data-science',
        name: 'Statistics & Mathematics for Data Science & Data Analytics',
        issuer: 'Coursera',
        date: '2022',
        featured: false
    },
    {
        id: 'nlp-python',
        name: 'NLP-Natural Language Processing with Python',
        issuer: 'Coursera',
        date: '2022',
        featured: false
    }
];

// Career progression metrics based on actual resume - Updated for Senior Role
export const careerMetrics = {
    totalExperience: '4+ Years',
    projectsLed: '8+',
    clientsServed: '150+',
    budgetManaged: '$1.5M+',
    costSavingsGenerated: '$750K+',
    teamLeadership: 'Senior Level'
};