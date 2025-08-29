// src/data/skills.ts
import { Skill } from '@/types';

export const skills: Skill[] = [
    // Generative AI & LLMs
    { name: 'RAG (Retrieval Augmented Generation)', category: 'Generative AI & LLMs', level: 5 },
    { name: 'LangChain', category: 'Generative AI & LLMs', level: 5 },
    { name: 'LlamaIndex', category: 'Generative AI & LLMs', level: 4 },
    { name: 'LangGraph', category: 'Generative AI & LLMs', level: 5 },
    { name: 'Fine-Tuning', category: 'Generative AI & LLMs', level: 4 },
    { name: 'LORA', category: 'Generative AI & LLMs', level: 4 },
    { name: 'QLORA', category: 'Generative AI & LLMs', level: 4 },
    { name: 'PEFT', category: 'Generative AI & LLMs', level: 4 },
    { name: 'SFT', category: 'Generative AI & LLMs', level: 4 },
    { name: 'Llama', category: 'Generative AI & LLMs', level: 5 },
    { name: 'OpenAI GPT', category: 'Generative AI & LLMs', level: 5 },
    { name: 'Gemini', category: 'Generative AI & LLMs', level: 4 },
    { name: 'Mistral AI', category: 'Generative AI & LLMs', level: 4 },
    { name: 'Hugging Face', category: 'Generative AI & LLMs', level: 5 },
    { name: 'Autogen', category: 'Generative AI & LLMs', level: 4 },
    { name: 'PydanticAI', category: 'Generative AI & LLMs', level: 3 },
    { name: 'CrewAI', category: 'Generative AI & LLMs', level: 3 },

    // Machine Learning
    { name: 'Regression', category: 'Machine Learning', level: 5 },
    { name: 'Classification', category: 'Machine Learning', level: 5 },
    { name: 'Clustering', category: 'Machine Learning', level: 5 },
    { name: 'Ensemble Learning', category: 'Machine Learning', level: 4 },
    { name: 'XGBoost', category: 'Machine Learning', level: 4 },
    { name: 'Random Forest', category: 'Machine Learning', level: 4 },
    { name: 'Data Modeling', category: 'Machine Learning', level: 5 },
    { name: 'Forecasting', category: 'Machine Learning', level: 4 },
    { name: 'Predictive Analysis', category: 'Machine Learning', level: 5 },
    { name: 'Statistical Analysis', category: 'Machine Learning', level: 4 },
    { name: 'Scikit-learn', category: 'Machine Learning', level: 5 },
    { name: 'MLRun', category: 'Machine Learning', level: 3 },

    // Deep Learning
    { name: 'Natural Language Processing', category: 'Deep Learning', level: 5 },
    { name: 'RNN', category: 'Deep Learning', level: 4 },
    { name: 'LSTM', category: 'Deep Learning', level: 4 },
    { name: 'Transformers', category: 'Deep Learning', level: 5 },
    { name: 'BERT', category: 'Deep Learning', level: 5 },
    { name: 'CNN', category: 'Deep Learning', level: 4 },
    { name: 'Computer Vision', category: 'Deep Learning', level: 4 },
    { name: 'Sentiment Analysis', category: 'Deep Learning', level: 4 },
    { name: 'ASR (Speech Recognition)', category: 'Deep Learning', level: 4 },
    { name: 'TTS (Text-to-Speech)', category: 'Deep Learning', level: 4 },
    { name: 'TensorFlow', category: 'Deep Learning', level: 4 },
    { name: 'PyTorch', category: 'Deep Learning', level: 4 },
    { name: 'NLTK', category: 'Deep Learning', level: 4 },

    // Vector Databases
    { name: 'Vector Databases', category: 'Vector Databases', level: 5 },
    { name: 'FAISS', category: 'Vector Databases', level: 5 },
    { name: 'Milvus', category: 'Vector Databases', level: 4 },
    { name: 'Qdrant', category: 'Vector Databases', level: 4 },
    { name: 'Pinecone', category: 'Vector Databases', level: 4 },
    { name: 'ChromaDB', category: 'Vector Databases', level: 4 },
    { name: 'Weaviate', category: 'Vector Databases', level: 3 },
    { name: 'Neo4j', category: 'Vector Databases', level: 3 },
    { name: 'MongoDB', category: 'Vector Databases', level: 4 },
    { name: 'MySQL', category: 'Vector Databases', level: 4 },

    // Cloud & Infrastructure  
    { name: 'AWS', category: 'Cloud & Infrastructure', level: 5 },
    { name: 'AWS SageMaker', category: 'Cloud & Infrastructure', level: 5 },
    { name: 'Databricks', category: 'Cloud & Infrastructure', level: 4 },
    { name: 'Azure', category: 'Cloud & Infrastructure', level: 4 },
    { name: 'Google Cloud Platform', category: 'Cloud & Infrastructure', level: 3 },
    { name: 'Docker', category: 'Cloud & Infrastructure', level: 5 },
    { name: 'Kubernetes', category: 'Cloud & Infrastructure', level: 4 },
    { name: 'CI/CD', category: 'Cloud & Infrastructure', level: 4 },
    { name: 'Terraform', category: 'Cloud & Infrastructure', level: 3 },
    { name: 'Lambda Functions', category: 'Cloud & Infrastructure', level: 4 },

    // Programming Languages
    { name: 'Python', category: 'Programming Languages', level: 5 },
    { name: 'JavaScript', category: 'Programming Languages', level: 4 },
    { name: 'TypeScript', category: 'Programming Languages', level: 4 },
    { name: 'SQL', category: 'Programming Languages', level: 5 },
    { name: 'Bash/Shell', category: 'Programming Languages', level: 4 },
    { name: 'R', category: 'Programming Languages', level: 3 },
    { name: 'NumPy', category: 'Programming Languages', level: 5 },
    { name: 'Pandas', category: 'Programming Languages', level: 5 },
    { name: 'PySpark', category: 'Programming Languages', level: 4 },

    // Web Development
    { name: 'React', category: 'Web Development', level: 4 },
    { name: 'Next.js', category: 'Web Development', level: 4 },
    { name: 'FastAPI', category: 'Web Development', level: 5 },
    { name: 'Flask', category: 'Web Development', level: 4 },
    { name: 'REST APIs', category: 'Web Development', level: 5 },
    { name: 'GraphQL', category: 'Web Development', level: 3 },
    { name: 'Streamlit', category: 'Web Development', level: 4 },
    { name: 'Gradio', category: 'Web Development', level: 4 },
    { name: 'HTML/CSS', category: 'Web Development', level: 4 },
    { name: 'Tailwind CSS', category: 'Web Development', level: 4 },

    // NVIDIA Technologies
    { name: 'NVIDIA Omniverse', category: 'NVIDIA Technologies', level: 4 },
    { name: 'NVIDIA NIMs', category: 'NVIDIA Technologies', level: 4 },
    { name: 'NVIDIA NeMo', category: 'NVIDIA Technologies', level: 4 },
    { name: 'NVIDIA RIVA', category: 'NVIDIA Technologies', level: 4 },
    { name: 'NVIDIA ACE', category: 'NVIDIA Technologies', level: 4 },
    { name: 'NVIDIA Guardrails', category: 'NVIDIA Technologies', level: 3 },
    { name: 'CUDA', category: 'NVIDIA Technologies', level: 3 },
    { name: 'Jetson Orin Nano', category: 'NVIDIA Technologies', level: 3 },

    // Development Tools
    { name: 'Git', category: 'Development Tools', level: 5 },
    { name: 'GitHub', category: 'Development Tools', level: 5 },
    { name: 'VS Code', category: 'Development Tools', level: 5 },
    { name: 'Jupyter Notebook', category: 'Development Tools', level: 5 },
    { name: 'PyCharm', category: 'Development Tools', level: 4 },
    { name: 'Postman', category: 'Development Tools', level: 4 },
    { name: 'Linux', category: 'Development Tools', level: 4 },
    { name: 'Ubuntu', category: 'Development Tools', level: 4 },
    { name: 'Conda', category: 'Development Tools', level: 5 },
    { name: 'pip', category: 'Development Tools', level: 5 }
];

// Export skills data for easy access
export default skills;