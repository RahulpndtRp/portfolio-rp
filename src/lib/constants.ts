// src/lib/constants.ts

// Import professional data
import {
    professionalHighlights,
    techJourney,
    skillRadarData
} from '@/data/professional';

export const SITE_CONFIG = {
    brandName: 'Rahul Pandey',
    name: 'Rahul Pandey - AI Engineer Portfolio',
    title: 'Rahul Pandey | Data Scientist & AI Engineer',
    description: 'AI Engineer specialized in LLMs, RAG Pipelines, Multi-Agent Systems, and Cloud Deployments. Winner of NVIDIA NIM Hackathon 2024.',
    url: 'https://portfoliorp.vercel.app/',
    ogImage: '/og-image.png',
    links: {
        github: 'https://github.com/RahulpndtRp',
        linkedin: 'https://www.linkedin.com/in/rp-rahulpandey/',
        email: 'pyrahulpndt@gmail.com',
        twitter: 'https://x.com/rahulpndtrp'
    }
};

export const NAV_ITEMS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: '#resume' }
];

export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        url: SITE_CONFIG.links.github,
        icon: 'Github'
    },
    {
        name: 'LinkedIn',
        url: SITE_CONFIG.links.linkedin,
        icon: 'Linkedin'
    },
    {
        name: 'Email',
        url: `mailto:${SITE_CONFIG.links.email}`,
        icon: 'Mail'
    }
];

export const ANIMATION_VARIANTS = {
    fadeIn: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },
    slideIn: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    stagger: {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }
};

// Enhanced Tech Categories with additional metadata
export const TECH_CATEGORIES = {
    'AI/ML Frameworks': '#00D4FF',
    'Vector Databases': '#6366F1',
    'Cloud & DevOps': '#00D4FF',
    'Programming': '#6366F1',
    'Frontend': '#00D4FF',
    'Hardware': '#6366F1',
    'Emerging Tech': '#00D4FF'
};

// Enhanced project categories reflecting your expertise
export const PROJECT_CATEGORIES = [
    'All',
    'Enterprise AI',       // For large-scale business solutions
    'Multi-Agent',         // Existing
    'RAG Pipeline',        // Existing
    'GPU Optimization',    // Existing
    'LLM Orchestration',   // Existing
    'Full-Stack AI',       // Existing
    'Real-time Systems',   // For token-streaming UIs
    'NVIDIA Tech',         // For your NVIDIA specialization
    'Vector DB'            // Existing
] as const;

export const CONTACT_INFO = {
    email: {
        label: 'Email',
        value: 'pyrahulpndt@gmail.com',
        display: 'pyrahulpndt@gmail.com'
    },
    github: {
        label: 'GitHub',
        value: 'https://github.com/RahulpndtRp',
        display: '@RahulpndtRp'
    },
    linkedin: {
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/rp-rahulpandey/',
        display: '@rp-rahulpandey'
    },
    location: {
        label: 'Location',
        value: '#',
        display: 'India (Remote Available)'
    }
};

export const OPPORTUNITIES = [
    'AI/ML Engineering Roles',
    'Generative AI Consulting',
    'RAG & LLM Implementation',
    'Multi-Agent System Development',
    'NVIDIA Tech Integration',
    'Real-time AI Systems',
    'Enterprise AI Architecture',
    'Speaking & Technical Workshops'
];

export const CONTACT_TEXT = {
    title: 'Get In Touch',
    subtitle: 'Interested in collaborating on AI projects or discussing opportunities? Let\'s build something amazing together.',
    connectTitle: 'Let\'s Connect',
    opportunitiesTitle: 'Open for Opportunities',
    formTitle: 'Send a Message'
};

export const FORM_CONFIG = {
    formspreeId: 'https://formspree.io/f/xrbkgagq',
    thankYouMessage: 'Thank you for your message! I\'ll get back to you soon.',
    placeholders: {
        name: 'Your Name',
        email: 'your@email.com',
        subject: 'Project Collaboration',
        message: 'Tell me about your project or opportunity...'
    }
};

// Enhanced certifications with more details
export const CERTIFICATIONS = [
    'Winner - NVIDIA NIM Hackathon 2024',
    'Databricks Certified ML Associate',
    'TensorFlow for AI/ML/DL Certification',
    'Convolutional Neural Networks in TensorFlow',
    'Natural Language Processing in TensorFlow',
    'Statistics & Mathematics for Data Science',
    'NLP with Python Certification',
    'Deep Learning Specialization'
];

// Export professional data for components
export const PROFESSIONAL_HIGHLIGHTS = professionalHighlights;
export const TECH_JOURNEY = techJourney;
export const SKILL_RADAR_DATA = skillRadarData;