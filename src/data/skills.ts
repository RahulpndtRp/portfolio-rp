
// src/data/skills.ts
import { Skill } from '@/types';

export const skills: Skill[] = [
    // Generative AI
    { name: 'RAG Systems', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LangChain', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LangGraph', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LlamaIndex', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Google ADK', category: 'AI/ML Frameworks', level: 4 },
    { name: 'AutoGen', category: 'AI/ML Frameworks', level: 4 },

    // LLM Models
    { name: 'OpenAI GPT', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Llama', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Gemini', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Mistral AI', category: 'AI/ML Frameworks', level: 4 },

    // Vector Databases
    { name: 'FAISS', category: 'Vector Databases', level: 5 },
    { name: 'Milvus', category: 'Vector Databases', level: 4 },
    { name: 'Qdrant', category: 'Vector Databases', level: 4 },
    { name: 'Pinecone', category: 'Vector Databases', level: 4 },

    // Cloud & DevOps
    { name: 'AWS SageMaker', category: 'Cloud & DevOps', level: 5 },
    { name: 'Azure', category: 'Cloud & DevOps', level: 5 },
    { name: 'Docker', category: 'Cloud & DevOps', level: 5 },
    { name: 'Kubernetes', category: 'Cloud & DevOps', level: 4 },
    { name: 'Databricks', category: 'Cloud & DevOps', level: 4 },

    // Programming
    { name: 'Python', category: 'Programming', level: 5 },
    { name: 'FastAPI', category: 'Programming', level: 5 },
    { name: 'PyTorch', category: 'Programming', level: 4 },
    { name: 'TensorFlow', category: 'Programming', level: 4 },

    // NVIDIA Tech
    { name: 'NVIDIA Omniverse', category: 'Hardware', level: 4 },
    { name: 'NVIDIA RIVA', category: 'Hardware', level: 4 },
    { name: 'NVIDIA NeMo', category: 'Hardware', level: 3 },
    { name: 'NVIDIA NIMs', category: 'Hardware', level: 3 }
];