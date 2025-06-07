// src/data/skills.ts
import { Skill } from '@/types';

export const skills: Skill[] = [
    // Generative-AI
    { name: 'RAG (Retrieval Augmented Generation)', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LangChain', category: 'AI/ML Frameworks', level: 5 },
    { name: 'LlamaIndex', category: 'AI/ML Frameworks', level: 4 },
    { name: 'LangGraph', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Fine-Tuning', category: 'AI/ML Frameworks', level: 4 },
    { name: 'LORA', category: 'AI/ML Frameworks', level: 4 },
    { name: 'QLORA', category: 'AI/ML Frameworks', level: 4 },
    { name: 'PEFT', category: 'AI/ML Frameworks', level: 4 },
    { name: 'SFT', category: 'AI/ML Frameworks', level: 4 },

    // LLM Models
    { name: 'Llama', category: 'AI/ML Frameworks', level: 5 },
    { name: 'OpenAI', category: 'AI/ML Frameworks', level: 5 },
    { name: 'ChatGPT', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Gemini', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Mistral AI', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Hugging Face', category: 'AI/ML Frameworks', level: 5 },

    // Agentic-AI
    { name: 'LangGraph', category: 'AI/ML Frameworks', level: 5 },
    { name: 'Autogen', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Google ADK', category: 'AI/ML Frameworks', level: 4 },
    { name: 'PydanticAI', category: 'AI/ML Frameworks', level: 3 },
    { name: 'CrewAI', category: 'AI/ML Frameworks', level: 3 },

    // Machine Learning
    { name: 'Regression', category: 'Programming', level: 5 },
    { name: 'Classification', category: 'Programming', level: 5 },
    { name: 'Clustering', category: 'Programming', level: 5 },
    { name: 'Ensemble Learning', category: 'Programming', level: 4 },
    { name: 'XGBoost', category: 'Programming', level: 4 },
    { name: 'Random Forest', category: 'Programming', level: 4 },
    { name: 'Data Modelling', category: 'Programming', level: 5 },
    { name: 'Forecasting', category: 'Programming', level: 4 },
    { name: 'Predictive Analysis', category: 'Programming', level: 5 },
    { name: 'Statistical Analysis', category: 'Programming', level: 4 },

    // Deep Learning
    { name: 'Natural Language Processing', category: 'AI/ML Frameworks', level: 5 },
    { name: 'RNN', category: 'AI/ML Frameworks', level: 4 },
    { name: 'LSTM', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Transformers', category: 'AI/ML Frameworks', level: 5 },
    { name: 'BERT', category: 'AI/ML Frameworks', level: 5 },
    { name: 'CNN', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Image Processing', category: 'AI/ML Frameworks', level: 4 },
    { name: 'Sentiment Analysis', category: 'AI/ML Frameworks', level: 4 },
    { name: 'ASR', category: 'AI/ML Frameworks', level: 4 },
    { name: 'TTS', category: 'AI/ML Frameworks', level: 4 },

    // NVIDIA Tech
    { name: 'NVIDIA Omniverse', category: 'Hardware', level: 4 },
    { name: 'Meta-Human', category: 'Hardware', level: 3 },
    { name: 'Avatar', category: 'Hardware', level: 4 },
    { name: 'NVIDIA NIMs', category: 'Hardware', level: 4 },
    { name: 'NVIDIA NeMo', category: 'Hardware', level: 4 },
    { name: 'NVIDIA RIVA', category: 'Hardware', level: 4 },
    { name: 'NVIDIA ACE Agent', category: 'Hardware', level: 4 },
    { name: 'NVIDIA Guardrails', category: 'Hardware', level: 3 },

    // ML & DL Tools
    { name: 'NumPy', category: 'Programming', level: 5 },
    { name: 'TensorFlow', category: 'Programming', level: 4 },
    { name: 'PyTorch', category: 'Programming', level: 4 },
    { name: 'Scikit-learn', category: 'Programming', level: 5 },
    { name: 'Pandas', category: 'Programming', level: 5 },
    { name: 'PySpark', category: 'Programming', level: 4 },
    { name: 'NLTK', category: 'Programming', level: 4 },
    { name: 'MLRun', category: 'Programming', level: 3 },

    // IDE/Build Tools
    { name: 'Git', category: 'Cloud & DevOps', level: 5 },
    { name: 'Docker', category: 'Cloud & DevOps', level: 5 },
    { name: 'CI/CD', category: 'Cloud & DevOps', level: 4 },
    { name: 'Kubernetes', category: 'Cloud & DevOps', level: 4 },
    { name: 'Jupyter Notebook', category: 'Programming', level: 5 },
    { name: 'VS Code', category: 'Programming', level: 5 },

    // Cloud Services
    { name: 'AWS', category: 'Cloud & DevOps', level: 5 },
    { name: 'AWS SageMaker', category: 'Cloud & DevOps', level: 5 },
    { name: 'Databricks', category: 'Cloud & DevOps', level: 4 },
    { name: 'Azure', category: 'Cloud & DevOps', level: 4 },
    { name: 'GCP', category: 'Cloud & DevOps', level: 3 },

    // Database
    { name: 'Vector DB', category: 'Vector Databases', level: 5 },
    { name: 'GraphDB', category: 'Vector Databases', level: 4 },
    { name: 'Milvus', category: 'Vector Databases', level: 4 },
    { name: 'Qdrant', category: 'Vector Databases', level: 4 },
    { name: 'Pinecone', category: 'Vector Databases', level: 4 },
    { name: 'MySQL', category: 'Vector Databases', level: 4 },
    { name: 'MongoDB', category: 'Vector Databases', level: 4 },

    // Programming Languages/Frameworks
    { name: 'Python', category: 'Programming', level: 5 },
    { name: 'FastAPI', category: 'Programming', level: 5 },
    { name: 'Flask', category: 'Programming', level: 4 },
    { name: 'RestAPI', category: 'Programming', level: 5 }
];

// Skill categories with enhanced grouping
export const skillCategories = {
    'AI/ML Frameworks': {
        color: '#00D4FF',
        description: 'Generative AI, LLMs, and ML frameworks',
        expertise: 'Expert'
    },
    'Vector Databases': {
        color: '#6366F1',
        description: 'Vector storage and database systems',
        expertise: 'Advanced'
    },
    'Cloud & DevOps': {
        color: '#00D4FF',
        description: 'Cloud platforms and deployment',
        expertise: 'Expert'
    },
    'Programming': {
        color: '#6366F1',
        description: 'Programming languages and tools',
        expertise: 'Expert'
    },
    'Hardware': {
        color: '#00D4FF',
        description: 'NVIDIA technologies and hardware',
        expertise: 'Advanced'
    }
};

// Skill proficiency levels
export const skillLevels = {
    5: { label: 'Expert', description: 'Production experience, can architect solutions' },
    4: { label: 'Advanced', description: 'Strong hands-on experience' },
    3: { label: 'Intermediate', description: 'Practical knowledge and experience' },
    2: { label: 'Beginner', description: 'Basic understanding' },
    1: { label: 'Learning', description: 'Currently studying' }
};