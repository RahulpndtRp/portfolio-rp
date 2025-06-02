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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={ANIMATION_VARIANTS.stagger}
                    className="space-y-8"
                >
                    <motion.h1
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold"
                    >
                        Hi, I'm <span className="gradient-text">Rahul Pandey</span>
                        <span className="gradient-text block">Building the Future with AI</span>
                    </motion.h1>

                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Expert in multi-agent systems, RAG pipelines, and LLM orchestration.
                        Passionate about GPU optimization and edge AI deployment.
                    </motion.p>
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
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
            </div>

            {/* Floating AI Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 text-6xl text-ai-blue opacity-20"
                >
                    🧠
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-40 right-20 text-6xl text-ai-purple opacity-20"
                >
                    🤖
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-40 left-20 text-6xl text-ai-blue opacity-20"
                >
                    ⚡
                </motion.div>
            </div>
        </section>
    );
}