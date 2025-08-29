// src/config/techstack.ts
import { Cpu, Database, Cloud, Code, Layers, Zap, Brain, Wrench } from 'lucide-react';

// Technology Categories Configuration
export const TECH_CATEGORIES = {
    // AI & Machine Learning
    'Generative AI & LLMs': {
        color: '#00D4FF',
        description: 'Large Language Models, RAG, and Generative AI',
        icon: Brain,
        expertise: 'Expert',
        priority: 1
    },
    'Machine Learning': {
        color: '#6366F1', 
        description: 'Traditional ML algorithms and techniques',
        icon: Brain,
        expertise: 'Expert',
        priority: 2
    },
    'Deep Learning': {
        color: '#8B5CF6',
        description: 'Neural networks, NLP, and computer vision',
        icon: Brain,
        expertise: 'Expert', 
        priority: 3
    },
    
    // Data & Infrastructure
    'Vector Databases': {
        color: '#10B981',
        description: 'Vector storage and similarity search systems',
        icon: Database,
        expertise: 'Expert',
        priority: 4
    },
    'Cloud & Infrastructure': {
        color: '#F59E0B',
        description: 'Cloud platforms, deployment, and DevOps',
        icon: Cloud,
        expertise: 'Expert',
        priority: 5
    },
    
    // Development
    'Programming Languages': {
        color: '#EF4444',
        description: 'Core programming languages and paradigms',
        icon: Code,
        expertise: 'Expert',
        priority: 6
    },
    'Web Development': {
        color: '#06B6D4',
        description: 'Frontend frameworks and web technologies',
        icon: Layers,
        expertise: 'Advanced',
        priority: 7
    },
    
    // Specialized Tech
    'NVIDIA Technologies': {
        color: '#84CC16',
        description: 'NVIDIA AI tools and hardware acceleration',
        icon: Zap,
        expertise: 'Advanced',
        priority: 8
    },
    'Development Tools': {
        color: '#6B7280',
        description: 'IDEs, version control, and productivity tools',
        icon: Wrench,
        expertise: 'Expert',
        priority: 9
    }
} as const;

// Skill Level Configuration
export const SKILL_LEVELS = {
    5: { 
        label: 'Expert', 
        description: 'Production experience, can architect solutions',
        color: '#00D4FF',
        bg: 'bg-ai-blue',
        variant: 'primary'
    },
    4: { 
        label: 'Advanced', 
        description: 'Strong hands-on experience with multiple projects',
        color: '#6366F1',
        bg: 'bg-ai-purple', 
        variant: 'secondary'
    },
    3: { 
        label: 'Proficient', 
        description: 'Solid understanding with practical experience',
        color: '#10B981',
        bg: 'bg-green-500',
        variant: 'outline'
    },
    2: { 
        label: 'Intermediate', 
        description: 'Basic understanding with some practice',
        color: '#F59E0B',
        bg: 'bg-yellow-500',
        variant: 'outline'
    },
    1: { 
        label: 'Learning', 
        description: 'Currently studying or exploring',
        color: '#6B7280',
        bg: 'bg-gray-500',
        variant: 'outline'
    }
} as const;

// Visual Configuration
export const VISUAL_CONFIG = {
    // Grid layouts
    categoryPreviewCount: 8, // Max skills to show in category preview
    skillsPerRow: {
        mobile: 1,
        tablet: 2, 
        desktop: 2
    },
    
    // Card dimensions
    skillCardHeight: 'auto',
    categoryCardPadding: 'p-4',
    skillItemPadding: 'p-3',
    
    // Animations
    animationDuration: 0.3,
    staggerDelay: 0.1,
    
    // Colors
    selectionBorder: 'border-ai-blue',
    hoverBorder: 'hover:border-gray-600',
    defaultBorder: 'border-gray-700',
    
    // Typography
    categoryTitle: 'text-base font-semibold',
    skillName: 'text-sm font-medium', 
    skillCategory: 'text-xs text-gray-400',
    levelText: 'text-xs text-gray-400'
};

// Search Configuration
export const SEARCH_CONFIG = {
    placeholder: 'Search technologies...',
    minSearchLength: 1,
    searchFields: ['name', 'category'],
    noResultsText: 'No technologies found matching your search.',
    debounceMs: 300
};

// View Mode Configuration
export const VIEW_MODES = {
    category: {
        label: 'Categories',
        description: 'Browse by technology category',
        defaultView: true
    },
    all: {
        label: 'All Skills', 
        description: 'View all technologies in a list',
        defaultView: false
    },
    search: {
        label: 'Search Results',
        description: 'Filtered search results', 
        defaultView: false
    }
} as const;

// Export helper functions
export const getCategoryInfo = (categoryName: string) => {
    return TECH_CATEGORIES[categoryName as keyof typeof TECH_CATEGORIES] || {
        color: '#6B7280',
        description: 'Technology category',
        icon: Code,
        expertise: 'Intermediate',
        priority: 99
    };
};

export const getSkillLevelInfo = (level: number) => {
    return SKILL_LEVELS[level as keyof typeof SKILL_LEVELS] || SKILL_LEVELS[1];
};