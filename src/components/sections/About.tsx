// src/components/sections/About.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { skills } from '@/data/skills';
import { SkillRadarVisualization } from '@/components/sections/SkillRadarVisualization';
import { JourneyVisualization } from '@/components/sections/JourneyVisualization';
import { TechStackVisualization } from '@/components/sections/TechStackVisualization';
import {
    ANIMATION_VARIANTS,
    TECH_CATEGORIES,
    PROFESSIONAL_HIGHLIGHTS,
    TECH_JOURNEY,
    SKILL_RADAR_DATA
} from '@/lib/constants';
import { Trophy, Calendar, Users, TrendingUp, Code, Zap, Target, Cpu } from 'lucide-react';

// Icon mapping for professional highlights
const iconMap = {
    '🏆': Trophy,
    '⚡': Zap,
    '🚀': TrendingUp,
    '🎯': Target
};

export function About() {
    const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'skills'>('overview');

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const tabs = [
        { id: 'overview', label: 'Professional Overview', icon: Users },
        { id: 'journey', label: 'Technical Journey', icon: Calendar },
        { id: 'skills', label: 'Expertise Radar', icon: Code }
    ];

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
                        className="text-xl text-gray-300 max-w-4xl mx-auto"
                    >
                        AI/ML Engineer • 4+ years of enterprise AI excellence • NVIDIA NIM Hackathon Winner 2024 •
                        Leading next-generation AI architecture and multi-agent systems
                    </motion.p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="flex justify-center mb-12"
                >
                    <div className="glass-effect rounded-lg p-2 flex gap-2">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Button
                                    key={tab.id}
                                    variant={activeTab === tab.id ? 'primary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className="flex items-center gap-2"
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </Button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Tab Content */}
                <div className="min-h-[600px]">
                    {/* Professional Overview Tab */}
                    {activeTab === 'overview' && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATION_VARIANTS.stagger}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {/* Left Column - Professional Highlights */}
                            <div className="space-y-6">
                                <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                                    <Card>
                                        <h3 className="text-2xl font-bold mb-6 text-ai-blue flex items-center gap-2">
                                            <Trophy className="w-6 h-6" />
                                            Professional Highlights
                                        </h3>
                                        <div className="space-y-6">
                                            {PROFESSIONAL_HIGHLIGHTS.map((highlight, index) => {
                                                const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];
                                                return (
                                                    <motion.div 
                                                        key={index} 
                                                        className="flex gap-4 group cursor-pointer"
                                                        whileHover={{ scale: 1.02 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="bg-ai-blue bg-opacity-20 p-3 rounded-lg flex-shrink-0 group-hover:bg-opacity-30 transition-all duration-300">
                                                            <IconComponent className="w-6 h-6 text-ai-blue group-hover:scale-110 transition-transform duration-300" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-1 group-hover:text-ai-blue transition-colors duration-300">
                                                                {highlight.title}
                                                            </h4>
                                                            <p className="text-gray-300 text-sm mb-2">
                                                                {highlight.description}
                                                            </p>
                                                            <Badge variant="outline" size="sm">
                                                                {highlight.metric}
                                                            </Badge>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </Card>
                                </motion.div>

                                <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                                    <Card>
                                        <h3 className="text-xl font-bold mb-4 text-ai-purple flex items-center gap-2">
                                            <Cpu className="w-5 h-5" />
                                            Core Expertise
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="text-center p-4 bg-ai-dark rounded-lg metric-glow">
                                                <div className="text-2xl font-bold text-ai-blue mb-1">200+</div>
                                                <div className="text-sm text-gray-400">Enterprise Clients</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg metric-glow">
                                                <div className="text-2xl font-bold text-ai-purple mb-1">96%</div>
                                                <div className="text-sm text-gray-400">Avg Model Accuracy</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg metric-glow">
                                                <div className="text-2xl font-bold text-ai-blue mb-1">15+</div>
                                                <div className="text-sm text-gray-400">Multi-Agent Systems</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg metric-glow">
                                                <div className="text-2xl font-bold text-ai-purple mb-1">$2M+</div>
                                                <div className="text-sm text-gray-400">Cost Optimization</div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Right Column - Quick Skills Overview */}
                            <div className="space-y-6">
                                <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                                    <Card>
                                        <h3 className="text-2xl font-bold mb-6 text-ai-blue">Technology Stack</h3>
                                        <div className="space-y-4">
                                            {Object.entries(groupedSkills).slice(0, 4).map(([category, categorySkills]) => (
                                                <div key={category}>
                                                    <h4
                                                        className="text-sm font-semibold mb-2"
                                                        style={{ color: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}
                                                    >
                                                        {category} ({categorySkills.length} technologies)
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {categorySkills.slice(0, 4).map((skill) => (
                                                            <Badge
                                                                key={skill.name}
                                                                variant={skill.level >= 4 ? 'primary' : 'outline'}
                                                                size="sm"
                                                            >
                                                                {skill.name}
                                                            </Badge>
                                                        ))}
                                                        {categorySkills.length > 4 && (
                                                            <Badge variant="outline" size="sm">
                                                                +{categorySkills.length - 4} more
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-4 border-t border-gray-600">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setActiveTab('skills')}
                                                className="w-full"
                                            >
                                                View Complete Skill Analysis →
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* Technical Journey Tab */}
                    {activeTab === 'journey' && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATION_VARIANTS.stagger}
                        >
                            <JourneyVisualization />
                        </motion.div>
                    )}

                    {/* Skills Radar Tab */}
                    {activeTab === 'skills' && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={ANIMATION_VARIANTS.stagger}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            {/* Skills Radar Visualization */}
                            <div>
                                <SkillRadarVisualization />
                            </div>

                            {/* Tech Stack Visualization */}
                            <div>
                                <TechStackVisualization />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}