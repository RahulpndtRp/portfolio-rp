
// src/data/blog.ts
import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
    {
        id: 'optimizing-rag-pipelines',
        title: 'Optimizing RAG Pipelines for Production',
        excerpt: 'Deep dive into vector database optimization, embedding strategies, and query performance tuning for large-scale RAG systems.',
        category: 'Technical',
        readTime: '8 min read',
        publishDate: 'Coming Soon',
        tags: ['RAG', 'Vector Databases', 'Performance'],
        featured: true
    },
    {
        id: 'multi-agent-design-patterns',
        title: 'Multi-Agent Systems: Design Patterns',
        excerpt: 'Exploring coordination patterns, communication protocols, and fault tolerance in distributed AI agent architectures.',
        category: 'Architecture',
        readTime: '12 min read',
        publishDate: 'Coming Soon',
        tags: ['Multi-Agent', 'Architecture', 'LangChain'],
        featured: true
    },
    {
        id: 'gpu-optimization-edge-ai',
        title: 'GPU Optimization for Edge AI',
        excerpt: 'Techniques for deploying LLMs on edge devices. Model quantization, memory optimization, and real-world performance benchmarks.',
        category: 'Performance',
        readTime: '15 min read',
        publishDate: 'Coming Soon',
        tags: ['GPU', 'Edge AI', 'Optimization'],
        featured: true
    }
];