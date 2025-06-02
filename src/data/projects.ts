// src/data/projects.ts
import { Project } from '@/types';
export const projects: Project[] = [
    {
        id: 'mem-rp',
        title: 'MEM-RP - Memory-First RAG System',
        description: 'A Streamlit-based memory-first RAG system leveraging STM, LTM, and structured LLM reasoning. Built an AI chatbot with short-term and long-term memory fusion for contextual continuity.',
        technologies: ['Streamlit', 'OpenAI', 'FAISS', 'Python', 'RAG', 'Memory Systems'],
        category: 'RAG Pipeline',
        githubUrl: 'https://github.com/RahulpndtRp/mem-rp',
        liveUrl: 'https://memlite.streamlit.app',
        featured: true
    },
    {
        id: 'askgenie',
        title: 'AskGenie - Intelligent Answering Engine',
        description: 'A FastAPI-powered intelligent answering engine combining RAG, real-time search, and LLM reasoning. Features web search, web scraping, FAISS RAG, and function calling with OpenAI/Groq models.',
        technologies: ['FastAPI', 'OpenAI', 'Groq', 'FAISS', 'Redis', 'Python'],
        category: 'LLM Orchestration',
        githubUrl: 'https://github.com/RahulpndtRp/AskGenie',
        liveUrl: 'https://askgenie-rahulpndt.onrender.com/',
        featured: true
    },
    {
        id: 'ai-learning-assistant',
        title: 'AI Learning Assistant',
        description: 'A modular FastAPI application offering AI-powered document analysis and learning tools. Features YouTube summarization, document Q&A, and multi-PDF comparison.',
        technologies: ['FastAPI', 'LangChain', 'OpenAI', 'YouTube API', 'PDF Processing'],
        category: 'Full-Stack AI',
        githubUrl: 'https://github.com/RahulpndtRp/ai-learning-assistant',
        featured: true
    },
    {
        id: 'devops-self-healing',
        title: 'DevOps Self-Healing AI System',
        description: 'Agentic DevOps automation framework enabling autonomous incident detection, root cause analysis, and intelligent remediation through multi-agent architecture.',
        technologies: ['LangGraph', 'Google ADK', 'Splunk', 'Prometheus', 'Ansible', 'FAISS'],
        category: 'Multi-Agent',
        featured: true
    }
];