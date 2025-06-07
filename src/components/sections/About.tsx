// src/components/sections/About.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { skills } from '@/data/skills';
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
                        4+ years of data science excellence • NVIDIA NIM Hackathon Winner 2024 •
                        Building enterprise AI solutions from concept to production
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
                                                    <div key={index} className="flex gap-4">
                                                        <div className="bg-ai-blue bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                                                            <IconComponent className="w-6 h-6 text-ai-blue" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-1">
                                                                {highlight.title}
                                                            </h4>
                                                            <p className="text-gray-300 text-sm mb-2">
                                                                {highlight.description}
                                                            </p>
                                                            <Badge variant="outline" size="sm">
                                                                {highlight.metric}
                                                            </Badge>
                                                        </div>
                                                    </div>
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
                                            <div className="text-center p-4 bg-ai-dark rounded-lg">
                                                <div className="text-2xl font-bold text-ai-blue mb-1">15+</div>
                                                <div className="text-sm text-gray-400">Enterprise Clients</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg">
                                                <div className="text-2xl font-bold text-ai-purple mb-1">95%</div>
                                                <div className="text-sm text-gray-400">Avg Model Accuracy</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg">
                                                <div className="text-2xl font-bold text-ai-blue mb-1">10+</div>
                                                <div className="text-sm text-gray-400">Multi-Agent Systems</div>
                                            </div>
                                            <div className="text-center p-4 bg-ai-dark rounded-lg">
                                                <div className="text-2xl font-bold text-ai-purple mb-1">$500K+</div>
                                                <div className="text-sm text-gray-400">Annual Savings</div>
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
                            <Card>
                                <h3 className="text-2xl font-bold mb-8 text-ai-blue text-center">
                                    My Data Science Journey (2021-2025)
                                </h3>
                                <div className="relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-blue to-ai-purple"></div>

                                    <div className="space-y-8">
                                        {TECH_JOURNEY.map((milestone, index) => (
                                            <motion.div
                                                key={milestone.year}
                                                variants={ANIMATION_VARIANTS.fadeIn}
                                                className="relative flex items-start gap-6"
                                            >
                                                {/* Timeline Dot */}
                                                <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 border-4 border-ai-gray">
                                                    {milestone.year}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pb-8">
                                                    <div className="glass-effect p-6 rounded-xl">
                                                        <h4 className="text-xl font-bold text-white mb-2">
                                                            {milestone.title}
                                                        </h4>
                                                        <p className="text-gray-300 mb-4">
                                                            {milestone.description}
                                                        </p>

                                                        {milestone.company && (
                                                            <div className="mb-3">
                                                                <Badge variant="secondary" size="sm">
                                                                    {milestone.company}
                                                                </Badge>
                                                            </div>
                                                        )}

                                                        <div className="flex flex-wrap gap-2 mb-4">
                                                            {milestone.technologies.map((tech) => (
                                                                <Badge key={tech} variant="outline" size="sm">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>

                                                        {milestone.achievements && (
                                                            <div className="space-y-1">
                                                                {milestone.achievements.map((achievement, i) => (
                                                                    <div key={i} className="flex items-center gap-2 text-sm text-ai-blue">
                                                                        <Trophy className="w-4 h-4" />
                                                                        {achievement}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {milestone.focus && (
                                                            <div className="mt-3 p-3 bg-ai-dark rounded-lg">
                                                                <div className="text-sm font-semibold text-ai-purple mb-1">
                                                                    Current Focus:
                                                                </div>
                                                                <div className="text-sm text-gray-300">
                                                                    {milestone.focus}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
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
                            {/* Skills Radar Chart Placeholder */}
                            <div>
                                <Card>
                                    <h3 className="text-xl font-bold mb-6 text-ai-blue">Skill Proficiency Radar</h3>
                                    <div className="space-y-4">
                                        {SKILL_RADAR_DATA.map((skill) => (
                                            <div key={skill.skill}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-white font-medium">{skill.skill}</span>
                                                    <span className="text-ai-blue font-bold">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-ai-dark rounded-full h-2">
                                                    <motion.div
                                                        className="bg-gradient-to-r from-ai-blue to-ai-purple h-2 rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>

                            {/* Detailed Skills Breakdown */}
                            <div>
                                <Card>
                                    <h3 className="text-xl font-bold mb-6 text-ai-purple">Complete Tech Stack</h3>
                                    <div className="space-y-6 max-h-96 overflow-y-auto">
                                        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                                            <div key={category}>
                                                <h4
                                                    className="text-sm font-semibold mb-3 flex items-center gap-2"
                                                    style={{ color: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}
                                                >
                                                    <div
                                                        className="w-3 h-3 rounded-full"
                                                        style={{ backgroundColor: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}
                                                    />
                                                    {category} ({categorySkills.length})
                                                </h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {categorySkills.map((skill) => (
                                                        <div key={skill.name} className="flex items-center justify-between bg-ai-dark p-2 rounded">
                                                            <span className="text-xs text-white">{skill.name}</span>
                                                            <div className="flex gap-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`w-2 h-2 rounded-full ${i < skill.level ? 'bg-ai-blue' : 'bg-gray-600'
                                                                            }`}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}