// src/components/sections/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export function Hero() {
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center hero-gradient tech-grid pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Left side - Text content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.stagger}
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        <motion.h1
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold"
                        >
                            Hi, I'm <span className="gradient-text">Rahul Pandey</span>
                            <span className="gradient-text block">Data Scientist & AI Engineer</span>
                        </motion.h1>

                        <motion.p
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                        >
                            Expert in multi-agent systems, RAG pipelines, and LLM orchestration.
                            Passionate about GPU optimization and edge AI deployment.
                        </motion.p>

                        <motion.div
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                onClick={() => handleScrollTo('projects')}
                                className="hover:scale-105"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => handleScrollTo('contact')}
                            >
                                Get in Touch
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Photo */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.stagger}
                        className="flex-shrink-0"
                    >
                        <motion.div
                            variants={ANIMATION_VARIANTS.scaleIn}
                            className="relative"
                        >
                            {/* All badges positioned around the photo */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                <img
                                    src="/images/rahul-photo.jpg"
                                    alt="Rahul Pandey - AI Engineer"
                                    className="w-full h-full rounded-full object-cover border-4 border-ai-blue/30 shadow-2xl shadow-ai-blue/20"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ai-blue/10 to-ai-purple/10"></div>

                                {/* Badges positioned around the circle */}

                                {/* Top */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Agentic AI
                                </div>

                                {/* Top Right */}
                                <div className="absolute top-8 -right-6 bg-ai-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    LLM Specialist
                                </div>

                                {/* Right */}
                                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-ai-purple text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    MLOps
                                </div>

                                {/* Bottom Right */}
                                <div className="absolute bottom-8 -right-6 bg-ai-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Cloud AI
                                </div>

                                {/* Bottom */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-ai-purple text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    4+ Years Experience
                                </div>

                                {/* Bottom Left */}
                                <div className="absolute bottom-8 -left-6 bg-ai-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    RAG Systems
                                </div>

                                {/* Left */}
                                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-ai-purple text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Data Scientist
                                </div>

                                {/* Top Left */}
                                <div className="absolute top-8 -left-6 bg-ai-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Generative AI
                                </div>

                                {/* Floating ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-ai-purple/20 animate-pulse"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating AI Icons - Updated positions for new layout */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-4 lg:left-10 text-4xl lg:text-6xl text-ai-blue opacity-20"
                >
                    🧠
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-32 right-4 lg:top-40 lg:right-20 text-4xl lg:text-6xl text-ai-purple opacity-20"
                >
                    🤖
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-32 left-4 lg:bottom-40 lg:left-20 text-4xl lg:text-6xl text-ai-blue opacity-20"
                >
                    ⚡
                </motion.div>
            </div>
        </section>
    );
}