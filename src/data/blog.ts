
// src/data/blog.ts
import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
    {
        id: 'memory-rag-systems',
        title: 'Building Memory-First RAG Systems: MEM-RP Architecture',
        excerpt: 'Exploring the fusion of short-term and long-term memory in RAG systems. How we achieved contextual continuity in AI conversations using FAISS and ring buffers.',
        category: 'Architecture',
        readTime: '12 min read',
        publishDate: 'Coming Soon',
        tags: ['RAG', 'Memory', 'FAISS', 'Architecture'],
        featured: true
    },
    {
        id: 'devops-self-healing-ai',
        title: 'Autonomous DevOps: Building Self-Healing AI Systems',
        excerpt: 'How we created an intelligent DevOps automation framework with LangGraph and Google ADK. From incident detection to autonomous remediation.',
        category: 'Technical',
        readTime: '15 min read',
        publishDate: 'Coming Soon',
        tags: ['DevOps', 'LangGraph', 'Automation', 'AI'],
        featured: true
    },
    {
        id: 'avatar-conversational-ai',
        title: 'Avatar-Based AI: NVIDIA Omniverse in Production',
        excerpt: 'Building lifelike conversational AI with NVIDIA Omniverse, RIVA ASR, and TTS. Achieving 95% accuracy in real-time avatar interactions.',
        category: 'Performance',
        readTime: '8 min read',
        publishDate: 'Coming Soon',
        tags: ['NVIDIA', 'Avatar', 'Omniverse', 'RIVA'],
        featured: false
    }
];