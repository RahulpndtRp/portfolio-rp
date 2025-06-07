// src/components/sections/Hero.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { Trophy, Award, Users, Code, MapPin, Clock } from 'lucide-react';

export function Hero() {
    const [currentSpecialty, setCurrentSpecialty] = useState(0);

    const specialties = [
        "Generative AI Expert",
        "Multi-Agent Systems Developer",
        "RAG Pipeline Architect",
        "NVIDIA Technology Specialist",
        "Enterprise AI Engineer"
    ];

    // Rotate specialties every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const keyHighlights = [
        { icon: Trophy, text: 'NVIDIA Hackathon Winner 2024', color: 'text-yellow-400' },
        { icon: Users, text: '150+ Enterprise Clients', color: 'text-ai-blue' },
        { icon: Code, text: '4+ Years Experience', color: 'text-ai-purple' },
        { icon: Award, text: '95% Average Accuracy', color: 'text-green-400' }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Left side - Text content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={ANIMATION_VARIANTS.stagger}
                        className="flex-1 text-center lg:text-left space-y-8"
                    >
                        {/* Main Heading with Rotating Specialty */}
                        <motion.div variants={ANIMATION_VARIANTS.fadeIn} className="space-y-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Hi, I'm <span className="gradient-text">Rahul Pandey</span>
                            </h1>
                            <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
                                <span className="text-white">Data Scientist & </span>
                                <div className="inline-block min-h-[1.2em]">
                                    <motion.span
                                        key={currentSpecialty}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="gradient-text"
                                    >
                                        {specialties[currentSpecialty]}
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Tagline with Location */}
                        <motion.p
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            4+ years building enterprise AI solutions • NVIDIA AI NIM Hackathon Winner 2024 •
                            Based in India, Available Globally
                        </motion.p>

                        {/* Availability Status */}
                        <motion.div
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="flex flex-wrap justify-center lg:justify-start gap-3"
                        >
                            <Badge variant="primary" className="flex items-center gap-2 px-4 py-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Available for new opportunities
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-2">
                                <MapPin className="w-3 h-3" />
                                India • Remote • Global
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-2">
                                <Clock className="w-3 h-3" />
                                Quick Response
                            </Badge>
                        </motion.div>

                        {/* Key Highlights */}
                        <motion.div
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0"
                        >
                            {keyHighlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={ANIMATION_VARIANTS.scaleIn}
                                        className="flex flex-col items-center lg:items-start gap-2 p-4 glass-effect rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Icon className={`w-6 h-6 ${highlight.color}`} />
                                        <span className="text-sm font-semibold text-white text-center lg:text-left">
                                            {highlight.text}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                            variants={ANIMATION_VARIANTS.fadeIn}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button
                                size="lg"
                                onClick={() => handleScrollTo('projects')}
                                className="hover:scale-105 transition-transform duration-200"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => handleScrollTo('contact')}
                                className="hover:scale-105 transition-transform duration-200"
                            >
                                Get in Touch
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Photo with original badge format */}
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
                            {/* All badges positioned around the photo - Original Format */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                <img
                                    src="/images/rahul-photo.jpg"
                                    alt="Rahul Pandey - AI Engineer"
                                    className="w-full h-full rounded-full object-cover border-4 border-ai-blue/30 shadow-2xl shadow-ai-blue/20"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMEYwRjIzIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNjAiIGZpbGw9IiM2MzY2RjEiLz4KPHBhdGggZD0iTTEwMCAzNTBIMzAwQzMwMCAzMDAgMjUwIDI1MCAyMDAgMjUwQzE1MCAyNTAgMTAwIDMwMCAxMDAgMzUwWiIgZmlsbD0iIzYzNjZGMSIvPgo8L3N2Zz4K';
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ai-blue/10 to-ai-purple/10"></div>

                                {/* Badges positioned around the circle - Original Format */}

                                {/* Top */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    NVIDIA Winner 2024
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

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating tech icons */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-4 lg:left-10 text-4xl lg:text-6xl text-ai-blue opacity-10"
                >
                    🧠
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-32 right-4 lg:top-40 lg:right-20 text-4xl lg:text-6xl text-ai-purple opacity-10"
                >
                    🤖
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-32 left-4 lg:bottom-40 lg:left-20 text-4xl lg:text-6xl text-ai-blue opacity-10"
                >
                    ⚡
                </motion.div>

                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-purple/5 rounded-full blur-3xl"></div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}