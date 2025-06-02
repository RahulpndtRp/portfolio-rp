// src/components/sections/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/skills';
import { ANIMATION_VARIANTS, TECH_CATEGORIES } from '@/lib/constants';

export function About() {
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <section id="about" className="py-20 bg-ai-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.stagger}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Passionate AI engineer with expertise in cutting-edge generative AI frameworks and deployment solutions.
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Expertise */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="space-y-6"
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <div className="mb-4">
                                    <span className="text-4xl mb-4 block">🚀</span>
                                    <h3 className="text-2xl font-bold mb-4 text-ai-blue">Technical Expertise</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    Specialized in building production-ready AI systems using Hugging Face Transformers,
                                    LangChain, and Microsoft Autogen. Expert in designing multi-agent systems and
                                    RAG pipelines that scale.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <div className="mb-4">
                                    <span className="text-4xl mb-4 block">⚡</span>
                                    <h3 className="text-2xl font-bold mb-4 text-ai-purple">Performance Focus</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    Passionate about GPU optimization without compromising accuracy.
                                    Hands-on experience with NVIDIA ACE and deployment on Jetson Orin Nano
                                    for edge AI applications.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <div className="mb-4">
                                    <span className="text-4xl mb-4 block">🎯</span>
                                    <h3 className="text-2xl font-bold mb-4 text-ai-blue">Interests</h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    Beyond AI, I'm fascinated by quantum computing, hardware optimization,
                                    and system-level performance. Always learning and building impactful solutions.
                                </p>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Tech Stack */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="space-y-6"
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-2xl font-bold mb-6 text-ai-blue">Tech Stack</h3>
                                <div className="space-y-6">
                                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                                        <div key={category}>
                                            <h4 className="text-sm font-semibold mb-3" style={{ color: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}>
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {categorySkills.map((skill) => (
                                                    <Badge
                                                        key={skill.name}
                                                        variant={category.includes('Vector') ? 'secondary' : 'primary'}
                                                        className="text-xs"
                                                    >
                                                        {skill.name}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}