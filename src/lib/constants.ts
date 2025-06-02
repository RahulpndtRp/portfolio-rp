
// src/lib/constants.ts
export const SITE_CONFIG = {
    name: 'Rahul Pandey - AI Portfolio',
    title: 'Rahul Pandey | AI Engineer Portfolio',
    description: 'Expert in Generative AI frameworks, multi-agent systems, RAG pipelines, and GPU optimization.',
    url: 'https://rahulpandey-ai-portfolio.vercel.app',
    ogImage: '/og-image.png',
    links: {
        github: 'https://github.com/RahulpndtRp',
        linkedin: 'https://www.linkedin.com/in/rp-rahulpandey',
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

export const TECH_CATEGORIES = {
    'AI/ML Frameworks': '#00D4FF',
    'Vector Databases': '#6366F1',
    'Cloud & DevOps': '#00D4FF',
    'Programming': '#6366F1',
    'Hardware': '#00D4FF'
};

export const PROJECT_CATEGORIES = [
    'All',
    'Multi-Agent',
    'RAG Pipeline',
    'GPU Optimization',
    'LLM Orchestration',
    'Full-Stack AI',
    'Vector DB'
] as const;