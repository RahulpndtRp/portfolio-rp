// src/data/projects.ts
import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 'mem-rp',
        title: 'MEM-RP - Memory-First RAG System',
        description: 'A Streamlit-based memory-first RAG system leveraging STM, LTM, and structured LLM reasoning for contextual continuity.',
        longDescription: 'Revolutionary memory architecture that combines short-term and long-term memory with ring buffer optimization. Built to solve the context limitation problem in traditional RAG systems by maintaining conversation continuity across sessions.',
        technologies: ['Streamlit', 'OpenAI GPT-4', 'FAISS', 'Python', 'RAG Architecture', 'Memory Systems'],
        category: 'RAG Pipeline',
        githubUrl: 'https://github.com/RahulpndtRp/mem-rp',
        liveUrl: 'https://memlite.streamlit.app',
        featured: true,
        architecture: {
            overview: 'Hybrid memory system with STM ring buffer and LTM vector storage',
            components: ['Short-Term Memory (Ring Buffer)', 'Long-Term Memory (FAISS)', 'Memory Fusion Engine', 'LLM Reasoning Layer'],
            dataFlow: 'User Query → Memory Retrieval → Context Fusion → LLM Processing → Response + Memory Update',
            scalability: 'Handles 10K+ conversation turns with constant memory footprint'
        },
        metrics: {
            performance: '40% better context retention vs standard RAG',
            accuracy: '92% context relevance across sessions',
            scale: '10K+ conversation turns tested',
            users: '500+ developers using the system'
        },
        challenges: [
            'Memory overflow management in long conversations',
            'Balancing STM speed with LTM relevance',
            'Context ranking algorithm optimization'
        ],
        innovations: [
            'Ring buffer architecture for STM management',
            'Hybrid retrieval scoring system',
            'Dynamic context window optimization'
        ]
    },
    {
        id: 'askgenie',
        title: 'AskGenie - Intelligent Answering Engine',
        description: 'A FastAPI-powered intelligent answering engine combining RAG, real-time search, and LLM reasoning with multi-model support.',
        longDescription: 'Enterprise-grade question answering system that intelligently routes queries through multiple AI models, combines web search with document retrieval, and provides real-time responses with citation tracking.',
        technologies: ['FastAPI', 'OpenAI GPT-4', 'Groq Llama', 'FAISS', 'Redis', 'Python', 'AsyncIO'],
        category: 'LLM Orchestration',
        githubUrl: 'https://github.com/RahulpndtRp/AskGenie',
        liveUrl: 'https://askgenie-rahulpndt.onrender.com/',
        featured: true,
        architecture: {
            overview: 'Microservices architecture with async processing and multi-model routing',
            components: ['Query Router', 'Web Search Engine', 'Document RAG System', 'LLM Orchestrator', 'Citation Tracker'],
            dataFlow: 'Query Analysis → Route Selection → Parallel Processing → Response Fusion → Citation Generation',
            scalability: 'Async processing supports 100+ concurrent users'
        },
        metrics: {
            performance: '2.3s average response time',
            accuracy: '94% answer relevance score',
            scale: '1000+ queries/day handled',
            costSavings: '60% cost reduction vs single-model approach'
        },
        challenges: [
            'Multi-model response consistency',
            'Real-time web scraping at scale',
            'Citation accuracy and verification'
        ],
        innovations: [
            'Intelligent model routing based on query type',
            'Parallel processing with async FastAPI',
            'Dynamic citation scoring system'
        ]
    },
    {
        id: 'ai-learning-assistant',
        title: 'AI Learning Assistant',
        description: 'A modular FastAPI application offering AI-powered document analysis, YouTube summarization, and multi-PDF comparison tools.',
        longDescription: 'Comprehensive learning platform that transforms how students and professionals consume content. Features intelligent document processing, video summarization, and comparative analysis across multiple sources.',
        technologies: ['FastAPI', 'LangChain', 'OpenAI GPT-4', 'YouTube API', 'PDF Processing', 'Streamlit'],
        category: 'Full-Stack AI',
        githubUrl: 'https://github.com/RahulpndtRp/ai-learning-assistant',
        featured: true,
        architecture: {
            overview: 'Modular microservices with specialized processing pipelines',
            components: ['Document Processor', 'Video Summarizer', 'Comparison Engine', 'Knowledge Graph Builder'],
            dataFlow: 'Content Upload → Format Detection → Processing Pipeline → Analysis → Interactive Results',
            scalability: 'Handles 100MB+ documents with chunked processing'
        },
        metrics: {
            performance: '85% faster than manual analysis',
            accuracy: '91% summary quality score',
            scale: 'Processes 50+ page documents in 30 seconds',
            users: '200+ students and professionals'
        },
        challenges: [
            'Large document processing without memory overflow',
            'YouTube API rate limiting',
            'Multi-format document compatibility'
        ],
        innovations: [
            'Intelligent chunking strategy for large documents',
            'Comparative analysis across different content types',
            'Interactive knowledge graph visualization'
        ]
    },
    {
        id: 'devops-self-healing',
        title: 'DevOps Self-Healing AI System',
        description: 'Agentic DevOps automation framework enabling autonomous incident detection, root cause analysis, and intelligent remediation.',
        longDescription: 'Revolutionary DevOps automation that uses multi-agent architecture to detect, diagnose, and resolve infrastructure issues without human intervention. Built with LangGraph for complex decision workflows.',
        technologies: ['LangGraph', 'Google ADK', 'Splunk', 'Prometheus', 'Ansible', 'FAISS', 'Multi-Agent Systems'],
        category: 'Multi-Agent',
        featured: true,
        architecture: {
            overview: 'Multi-agent system with specialized roles for monitoring, analysis, and remediation',
            components: ['Monitoring Agent', 'Analysis Agent', 'Remediation Agent', 'Learning Agent', 'Coordination Hub'],
            dataFlow: 'Issue Detection → Multi-Agent Analysis → Solution Generation → Automated Remediation → Learning Update',
            scalability: 'Manages 1000+ servers across multiple environments'
        },
        metrics: {
            performance: '70% faster incident resolution',
            accuracy: '88% successful auto-remediation rate',
            scale: '1000+ servers monitored',
            costSavings: '$200K+ annual savings in ops costs'
        },
        challenges: [
            'Complex multi-agent coordination',
            'Safe automated remediation without downtime',
            'Learning from failed remediation attempts'
        ],
        innovations: [
            'LangGraph-based decision workflows',
            'Risk assessment before automated actions',
            'Continuous learning from incident patterns'
        ]
    },
    {
        id: 'video-summarization',
        title: 'AI Video Summarization System (Hackathon Project)',
        description: 'Hackathon project: Intelligent video summarization system that extracts key highlights, generates automated summaries, and provides searchable video content insights.',
        longDescription: 'Hackathon-developed video processing system that uses AI to analyze video content, extract key moments, generate comprehensive summaries, and create searchable transcripts with intelligent tagging and categorization.',
        technologies: ['Python', 'Computer Vision', 'NLP', 'Video Processing', 'Machine Learning', 'Speech-to-Text'],
        category: 'Full-Stack AI',
        featured: true,
        architecture: {
            overview: 'End-to-end video processing pipeline with AI-powered content analysis and summarization built during hackathon',
            components: ['Video Processor', 'Scene Detection', 'Speech-to-Text Engine', 'Content Analyzer', 'Summary Generator'],
            dataFlow: 'Video Upload → Scene Analysis → Video Frame Extraction → Content Summarization → Searchable Output',
            scalability: 'Processes multiple video formats with batch processing capabilities'
        },
        metrics: {
            performance: 'Automated video content analysis and summarization',
            accuracy: 'High-quality summaries with key moment detection',
            scale: 'Support for various video lengths and formats',
            users: 'Hackathon demonstration and proof of concept'
        },
        challenges: [
            'Accurate scene detection and segmentation within hackathon timeframe',
            'Quality transcript generation from diverse audio sources',
            'Meaningful summary generation from video content under time constraints'
        ],
        innovations: [
            'Rapid prototyping of intelligent scene change detection algorithms',
            'Multi-modal content analysis (visual + audio) implementation',
            'Automated highlight extraction and tagging system'
        ]
    },
    {
        id: 'avatar-conversational-ai',
        title: 'Avatar Based Conversational Advisor',
        description: 'Development of an Avatar based Advisor with real-time response to queries using NVIDIA Omniverse, ASR, and TTS technologies.',
        longDescription: 'Advanced conversational AI system featuring avatar-based interaction with 95% accuracy, enhanced conversation flow through RAG integration, and optimized performance using NVIDIA technologies.',
        technologies: ['NVIDIA Omniverse', 'NVIDIA RIVA ASR', 'NVIDIA TTS', 'NVIDIA ACE', 'NVIDIA NeMo', 'NVIDIA NIM', 'RAG', 'MemGPT', 'FastAPI', 'Azure'],
        category: 'NVIDIA Tech',
        featured: true,
        architecture: {
            overview: 'Avatar-based conversational system with real-time speech processing and response generation',
            components: ['Avatar Rendering', 'ASR Processing', 'TTS Generation', 'RAG Integration', 'VectorDB Optimization'],
            dataFlow: 'Voice Input → ASR Processing → Query Understanding → Response Generation → TTS → Avatar Output',
            scalability: 'Azure App Services deployment with 40% scalability boost'
        },
        metrics: {
            accuracy: '95% avatar-based chatbot accuracy',
            performance: '30% conversation flow enhancement',
            scale: '98% language generation accuracy',
            users: '30% user satisfaction increase'
        },
        challenges: [
            'Real-time avatar response generation',
            'Integration of multiple NVIDIA technologies',
            'Optimization for dynamic conversation flow'
        ],
        innovations: [
            'NVIDIA Omniverse integration for lifelike avatars',
            'Enhanced conversation flow through RAG and MemGPT',
            '10x faster VectorDB optimization for dynamic chats'
        ]
    },
    {
        id: 'insurance-pdf-automation',
        title: 'Insurance PDF Automation System',
        description: 'Enterprise AI system automating PDF processing for 150+ insurance carriers with 95% accuracy using advanced NLP and form recognition.',
        longDescription: 'Large-scale document processing system that revolutionized insurance form handling. Deployed across 150+ carriers, processing thousands of documents daily with high accuracy and significant cost savings.',
        technologies: ['Python', 'NLP', 'OCR', 'FastAPI', 'AWS', 'Form Recognition', 'Document AI'],
        category: 'Enterprise AI',
        featured: true,
        architecture: {
            overview: 'Scalable document processing pipeline with AI-powered form recognition',
            components: ['OCR Engine', 'NLP Processor', 'Form Recognition AI', 'Validation System', 'Integration APIs'],
            dataFlow: 'PDF Upload → OCR Processing → NLP Analysis → Form Field Extraction → Validation → System Integration',
            scalability: 'Processes 10K+ documents daily across 150+ carriers'
        },
        metrics: {
            performance: '95% form field extraction accuracy',
            accuracy: '99.2% data validation success rate',
            scale: '150+ insurance carriers served',
            costSavings: '$500K+ annual processing cost savings'
        },
        challenges: [
            'Handling diverse form formats across carriers',
            'Maintaining accuracy with poor quality scans',
            'Scaling across different insurance domains'
        ],
        innovations: [
            'Adaptive form recognition for various formats',
            'Confidence scoring for uncertain extractions',
            'Automated quality assessment pipeline'
        ]
    },
    {
        id: 'real-time-streaming-ui',
        title: 'Real-Time AI Streaming Interface',
        description: 'Token-streaming React/Angular interfaces for LLM responses with WebSocket integration and optimized user experience.',
        longDescription: 'High-performance frontend system for real-time AI interactions. Built with React and Angular, featuring WebSocket communication, token streaming, and responsive UI components optimized for conversational AI.',
        technologies: ['React', 'Angular', 'WebSocket', 'TypeScript', 'Token Streaming', 'Real-time UI'],
        category: 'Real-time Systems',
        featured: false,
        architecture: {
            overview: 'Real-time frontend with WebSocket streaming and optimized rendering',
            components: ['WebSocket Manager', 'Token Stream Handler', 'UI State Manager', 'Response Renderer', 'Error Recovery System'],
            dataFlow: 'User Input → WebSocket → Token Stream → Real-time Rendering → User Interface',
            scalability: 'Handles 50+ concurrent streaming connections'
        },
        metrics: {
            performance: 'Sub-50ms token rendering latency',
            accuracy: '99.9% message delivery success',
            scale: '50+ concurrent users supported',
            users: 'Integrated in 5+ production applications'
        },
        challenges: [
            'Handling network interruptions gracefully',
            'Optimizing rendering for long responses',
            'Cross-browser WebSocket compatibility'
        ],
        innovations: [
            'Intelligent token buffering strategy',
            'Graceful degradation for slow connections',
            'Dynamic UI optimization based on response length'
        ]
    },
    {
        id: 'vector-db-optimization',
        title: 'Vector Database Performance Optimization',
        description: 'Advanced FAISS and ChromaDB optimization techniques achieving 3x faster similarity search with maintained accuracy.',
        longDescription: 'Comprehensive vector database optimization project focusing on FAISS index tuning, ChromaDB performance enhancement, and custom similarity algorithms for production-scale RAG systems.',
        technologies: ['FAISS', 'ChromaDB', 'Python', 'NumPy', 'Performance Optimization', 'Vector Search'],
        category: 'Vector DB',
        featured: false,
        architecture: {
            overview: 'Optimized vector storage and retrieval system with custom indexing strategies',
            components: ['Custom FAISS Indices', 'ChromaDB Optimizer', 'Similarity Algorithms', 'Caching Layer', 'Performance Monitor'],
            dataFlow: 'Vector Input → Index Optimization → Similarity Search → Result Ranking → Performance Tracking',
            scalability: 'Handles 10M+ vectors with sub-second search times'
        },
        metrics: {
            performance: '3x faster similarity search',
            accuracy: '98% search relevance maintained',
            scale: '10M+ vectors indexed',
            costSavings: '40% reduction in compute costs'
        },
        challenges: [
            'Balancing search speed with accuracy',
            'Memory optimization for large vector sets',
            'Index maintenance for dynamic datasets'
        ],
        innovations: [
            'Hybrid indexing strategy combining multiple algorithms',
            'Dynamic index switching based on query patterns',
            'Custom similarity metrics for domain-specific use cases'
        ]
    }
];

// Enhanced project categories with descriptions
export const projectCategories = {
    'All': 'Complete portfolio showcase',
    'Enterprise AI': 'Large-scale business solutions',
    'Multi-Agent': 'Complex AI system orchestration',
    'RAG Pipeline': 'Retrieval-augmented generation systems',
    'GPU Optimization': 'Hardware-accelerated AI performance',
    'LLM Orchestration': 'Large language model management',
    'Full-Stack AI': 'End-to-end AI applications',
    'Real-time Systems': 'Live streaming and interactive AI',
    'NVIDIA Tech': 'NVIDIA ecosystem integration',
    'Vector DB': 'Vector database and similarity search'
};

// Project metrics aggregation
export const portfolioStats = {
    totalProjects: projects.length,
    featuredProjects: projects.filter(p => p.featured).length,
    totalUsers: '2000+',
    avgAccuracy: '94%',
    enterpriseClients: '15+',
    costSavings: '$700K+',
    githubStars: '200+',
    liveDeployments: projects.filter(p => p.liveUrl).length
};