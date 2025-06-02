// src/components/sections/Resume.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { experiences, education } from '@/data/experience';
import { skills } from '@/data/skills';
import { ANIMATION_VARIANTS, TECH_CATEGORIES } from '@/lib/constants';

export function Resume() {
    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const certifications = [
        'AWS Machine Learning Specialty',
        'NVIDIA Deep Learning Institute',
        'Google Cloud AI/ML',
        'Kubernetes Certified'
    ];

    return (
        <section id="resume" className="py-20 bg-ai-gray">
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
                        Resume
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Comprehensive overview of my technical expertise, experience, and achievements in AI engineering.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Skills & Technologies */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="lg:col-span-1 space-y-8"
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-blue">Core Technologies</h3>
                                <div className="space-y-4">
                                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                                        <div key={category}>
                                            <span
                                                className="text-sm font-semibold block mb-2"
                                                style={{ color: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}
                                            >
                                                {category}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {categorySkills.slice(0, 4).map((skill) => (
                                                    <Badge
                                                        key={skill.name}
                                                        variant="outline"
                                                        size="sm"
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

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-purple">Specializations</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {[
                                        'Multi-Agent Systems',
                                        'RAG Pipelines',
                                        'LLM Orchestration',
                                        'GPU Optimization',
                                        'Edge AI Deployment'
                                    ].map((spec) => (
                                        <li key={spec} className="flex items-center gap-3">
                                            <span className="text-ai-blue">•</span>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={ANIMATION_VARIANTS.slideIn}
                            className="text-center"
                        >
                            <Button size="lg">
                                <Download className="w-5 h-5 mr-2" />
                                Download PDF
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Experience & Education */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="lg:col-span-2 space-y-8"
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-6 text-ai-blue">Professional Experience</h3>

                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div key={exp.id} className="border-l-2 border-ai-blue pl-6 relative">
                                            <div className="absolute w-3 h-3 bg-ai-blue rounded-full -left-2 top-2"></div>
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                                                <div className="flex items-center text-ai-blue text-sm font-semibold">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {exp.duration}
                                                </div>
                                            </div>
                                            <p className="text-ai-purple font-medium mb-2">{exp.company}</p>
                                            <ul className="text-gray-300 text-sm space-y-1">
                                                {exp.description.map((desc, i) => (
                                                    <li key={i}>• {desc}</li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {exp.technologies.map((tech) => (
                                                    <Badge key={tech} variant="outline" size="sm">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-6 text-ai-purple">Education & Certifications</h3>

                                <div className="space-y-4 mb-6">
                                    {education.map((edu) => (
                                        <div key={edu.id} className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                                                <p className="text-ai-blue">{edu.institution}</p>
                                                {edu.description && (
                                                    <p className="text-gray-400 text-sm">{edu.description}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center text-ai-purple text-sm font-semibold">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {edu.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-600">
                                    <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {certifications.map((cert, index) => (
                                            <div key={cert} className="bg-ai-dark p-3 rounded-lg">
                                                <span className={`font-semibold text-sm ${index % 2 === 0 ? 'text-ai-blue' : 'text-ai-purple'}`}>
                                                    {cert}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}