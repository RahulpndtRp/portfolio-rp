// Create src/components/ui/AIChatbot.tsx
'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './Button';

const RAHUL_KNOWLEDGE = {
    "who are you": "I'm Rahul Pandey, an AI Engineer with 4+ years of experience. I won the NVIDIA NIM Hackathon 2024 and specialize in RAG pipelines, multi-agent systems, and LLM orchestration.",
    "experience": "I'm currently an AI/ML Computational Science Analyst at Accenture. Previously worked at TO THE NEW as a Software Engineer - Data Scientist for 2.5+ years.",
    "projects": "I've built MEM-RP (memory-first RAG system), AskGenie (intelligent answering engine), DevOps Self-Healing AI System, and Avatar-based Conversational Advisor using NVIDIA Omniverse.",
    "skills": "Expert in Python, LangChain, LangGraph, FAISS, ChromaDB, AWS SageMaker, Azure, Docker, NVIDIA technologies (Omniverse, RIVA, NeMo), and multi-agent frameworks.",
    "achievements": "Winner of NVIDIA NIM Hackathon 2024, Databricks Certified ML Associate, built AI solutions for 150+ insurance carriers with 95% accuracy.",
    "contact": "You can reach me at pyrahulpndt@gmail.com, check my GitHub @RahulpndtRp, or connect on LinkedIn @rp-rahulpandey."
};

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm an AI assistant that knows all about Rahul Pandey. Ask me anything about his experience, projects, or skills! 🤖" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        // Simple keyword matching
        const lowerInput = input.toLowerCase();
        let response = "I'd be happy to tell you more about Rahul! Try asking about his experience, projects, skills, achievements, or how to contact him.";

        for (const [key, value] of Object.entries(RAHUL_KNOWLEDGE)) {
            if (lowerInput.includes(key)) {
                response = value;
                break;
            }
        }

        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text: response }]);
        }, 500);

        setInput('');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen ? (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full w-16 h-16 shadow-2xl shadow-ai-blue/30 hover:scale-110 transition-transform"
                >
                    <MessageCircle className="w-8 h-8" />
                </Button>
            ) : (
                <div className="glass-effect rounded-2xl w-96 h-96 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <h3 className="font-bold text-ai-blue">Ask About Rahul</h3>
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs p-3 rounded-lg text-sm ${message.type === 'user'
                                        ? 'bg-ai-blue text-ai-dark'
                                        : 'bg-ai-gray text-white'
                                    }`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about Rahul..."
                                className="flex-1 bg-ai-gray rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                            />
                            <Button size="sm" onClick={handleSend}>
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}