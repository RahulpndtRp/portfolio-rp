// src/data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'ai-research-assistant',
        title: 'AI Research Assistant',
        description: 'Multi-agent system for automated research using LangChain and GPT-4. Agents collaborate to gather, analyze, and synthesize information from multiple sources.',
        technologies: ['LangChain', 'OpenAI', 'FastAPI', 'Python', 'ChromaDB'],
        category: 'Multi-Agent',
        githubUrl: 'https://github.com/yourusername/ai-research-assistant',
        liveUrl: 'https://ai-research-demo.vercel.app',
        featured: true
    },
    {
        id: 'enterprise-knowledge-base',
        title: 'Enterprise Knowledge Base',
        description: 'Production RAG system with ChromaDB and custom embeddings. Handles 10M+ documents with sub-second query response times.',
        technologies: ['ChromaDB', 'Transformers', 'Docker', 'FastAPI', 'Redis'],
        category: 'RAG Pipeline',
        githubUrl: 'https://github.com/yourusername/enterprise-kb',
        featured: true
    },
    {
        id: 'realtime-llm-inference',
        title: 'Real-time LLM Inference',
        description: 'Optimized LLM inference on Jetson Orin Nano achieving 40% speedup. Custom CUDA kernels and model quantization techniques.',
        technologies: ['CUDA', 'TensorRT', 'Jetson', 'PyTorch', 'C++'],
        category: 'GPU Optimization',
        githubUrl: 'https://github.com/yourusername/llm-optimization',
        featured: true
    },
    {
        id: 'ai-code-reviewer',
        title: 'AI Code Review Agent',
        description: 'Automated code review system using multiple LLMs. Integrates with GitHub and provides security, performance, and style feedback.',
        technologies: ['Autogen', 'GitHub API', 'React', 'Node.js', 'OpenAI'],
        category: 'LLM Orchestration',
        githubUrl: 'https://github.com/yourusername/ai-code-reviewer',
        liveUrl: 'https://ai-code-review.vercel.app',
        featured: false
    },
    {
        id: 'token-streaming-chat',
        title: 'Token-Streaming Chat UI',
        description: 'Real-time AI chat interface with token streaming, typing indicators, and WebSocket connections. Built with React and Node.js.',
        technologies: ['React', 'WebSockets', 'Node.js', 'TypeScript', 'Tailwind'],
        category: 'Full-Stack AI',
        githubUrl: 'https://github.com/yourusername/streaming-chat',
        liveUrl: 'https://streaming-chat-demo.vercel.app',
        featured: false
    },
    {
        id: 'semantic-search-engine',
        title: 'Semantic Search Engine',
        description: 'High-performance semantic search using FAISS and custom embeddings. Supports multimodal search across text, images, and code.',
        technologies: ['FAISS', 'Sentence-BERT', 'FastAPI', 'Python', 'Docker'],
        category: 'Vector DB',
        githubUrl: 'https://github.com/yourusername/semantic-search',
        featured: false
    }
];
