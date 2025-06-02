
// src/data/skills.ts
import { Skill } from '@/types';

export const skills: Skill[] = [
    // AI/ML Frameworks
    { name: 'Hugging Face', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LangChain', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Microsoft Autogen', category: 'AI/ML Frameworks', level: 4 },
    { name: 'TensorFlow', category: 'AI/ML Frameworks', level: 4 },
    { name: 'PyTorch', category: 'AI/ML Frameworks', level: 4 },

    // Vector Databases
    { name: 'FAISS', category: 'Vector Databases', level: 5 },
    { name: 'ChromaDB', category: 'Vector Databases', level: 5 },
    { name: 'Pinecone', category: 'Vector Databases', level: 4 },
    { name: 'Weaviate', category: 'Vector Databases', level: 3 },

    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud & DevOps', level: 4 },
    { name: 'Azure', category: 'Cloud & DevOps', level: 4 },
    { name: 'Docker', category: 'Cloud & DevOps', level: 5 },
    { name: 'Kubernetes', category: 'Cloud & DevOps', level: 4 },
    { name: 'Run:AI', category: 'Cloud & DevOps', level: 3 },

    // Programming
    { name: 'Python', category: 'Programming', level: 5 },
    { name: 'TypeScript', category: 'Programming', level: 4 },
    { name: 'React', category: 'Programming', level: 4 },
    { name: 'Node.js', category: 'Programming', level: 4 },

    // Hardware
    { name: 'NVIDIA Jetson', category: 'Hardware', level: 4 },
    { name: 'CUDA', category: 'Hardware', level: 3 },
    { name: 'TensorRT', category: 'Hardware', level: 3 }
];
