// src/components/sections/Resume.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    Calendar,
    Award,
    Users,
    DollarSign,
    TrendingUp,
    Star,
    ExternalLink,
    Building,
    Briefcase,
    GraduationCap,
    Trophy,
    Shield
} from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
    experiences,
    education,
    achievements,
    certifications,
    careerMetrics
} from '@/data/experience';
import { skills } from '@/data/skills';
import { ANIMATION_VARIANTS, TECH_CATEGORIES } from '@/lib/constants';

export function Resume() {
    const [activeTab, setActiveTab] = useState<'experience' | 'achievements' | 'certifications' | 'education'>('experience');

    const groupedSkills = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    const tabs = [
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'achievements', label: 'Achievements', icon: Trophy },
        { id: 'certifications', label: 'Certifications', icon: Shield },
        { id: 'education', label: 'Education', icon: GraduationCap }
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
                        Professional Journey
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                    >
                        4+ years of data science excellence • NVIDIA AI NIM Hackathon Winner 2024 •
                        Enterprise AI solutions serving 150+ insurance carriers
                    </motion.p>

                    {/* Career Metrics Dashboard */}
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
                    >
                        <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-ai-blue">{careerMetrics.totalExperience}</div>
                            <div className="text-sm text-gray-400">Experience</div>
                        </div>
                        <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-ai-purple">{careerMetrics.projectsLed}</div>
                            <div className="text-sm text-gray-400">Projects Led</div>
                        </div>
                        <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-ai-blue">{careerMetrics.clientsServed}</div>
                            <div className="text-sm text-gray-400">Clients Served</div>
                        </div>
                        <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-ai-purple">{careerMetrics.budgetManaged}</div>
                            <div className="text-sm text-gray-400">Budget Managed</div>
                        </div>
                        <div className="text-center p-4 glass-effect rounded-lg">
                            <div className="text-2xl font-bold text-ai-blue">{careerMetrics.costSavingsGenerated}</div>
                            <div className="text-sm text-gray-400">Cost Savings</div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Left Sidebar - Skills & Download */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Download Resume */}
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <CardContent className="text-center">
                                    <h3 className="text-lg font-bold text-ai-blue mb-4">Download Resume</h3>
                                    <div className="space-y-3">
                                        <a
                                            href="/resume.pdf"
                                            download="Rahul_Pandey_Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button size="lg" className="w-full">
                                                <Download className="w-4 h-4 mr-2" />
                                                PDF Version
                                            </Button>
                                        </a>
                                        <a
                                            href="mailto:pyrahulpndt@gmail.com?subject=Resume Request"
                                        >
                                            <Button variant="outline" size="sm" className="w-full">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Email Resume
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Core Skills Summary */}
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <CardContent>
                                    <h3 className="text-lg font-bold text-ai-purple mb-4">Core Expertise</h3>
                                    <div className="space-y-4">
                                        {Object.entries(groupedSkills).slice(0, 4).map(([category, categorySkills]) => (
                                            <div key={category}>
                                                <h4
                                                    className="text-sm font-semibold mb-2"
                                                    style={{ color: TECH_CATEGORIES[category as keyof typeof TECH_CATEGORIES] }}
                                                >
                                                    {category}
                                                </h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {categorySkills.slice(0, 4).map((skill) => (
                                                        <Badge
                                                            key={skill.name}
                                                            variant={skill.level >= 4 ? 'primary' : 'outline'}
                                                            size="sm"
                                                            className="text-xs"
                                                        >
                                                            {skill.name}
                                                        </Badge>
                                                    ))}
                                                    {categorySkills.length > 4 && (
                                                        <Badge variant="outline" size="sm" className="text-xs">
                                                            +{categorySkills.length - 4}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Main Content - Experience & Details */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="lg:col-span-3 space-y-6"
                    >
                        {/* Tab Navigation */}
                        <motion.div variants={ANIMATION_VARIANTS.fadeIn}>
                            <div className="flex flex-wrap gap-2 p-2 glass-effect rounded-lg">
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
                            {/* Experience Tab */}
                            {activeTab === 'experience' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={ANIMATION_VARIANTS.stagger}
                                >
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-2xl font-bold text-ai-blue flex items-center gap-2">
                                                <Briefcase className="w-6 h-6" />
                                                Professional Experience
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-8">
                                                {experiences.map((exp, index) => (
                                                    <div key={exp.id} className="relative timeline-item">
                                                        {/* Timeline Line */}
                                                        {index < experiences.length - 1 && (
                                                            <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-ai-blue to-ai-purple opacity-30"></div>
                                                        )}

                                                        <div className="flex gap-6">
                                                            {/* Company Icon */}
                                                            <div className="flex-shrink-0">
                                                                <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                                                                    <Building className="w-8 h-8 text-white" />
                                                                </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="flex-1">
                                                                <div className="glass-effect p-6 rounded-xl">
                                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                                        <div>
                                                                            <h4 className="text-xl font-bold text-white mb-1">
                                                                                {exp.title}
                                                                            </h4>
                                                                            <p className="text-ai-purple font-semibold mb-2">{exp.company}</p>
                                                                        </div>
                                                                        <div className="flex items-center gap-4 text-sm">
                                                                            <div className="flex items-center text-ai-blue">
                                                                                <Calendar className="w-4 h-4 mr-1" />
                                                                                {exp.duration}
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Key Metrics */}
                                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                                        <div className="text-center p-3 bg-ai-dark rounded-lg">
                                                                            <Users className="w-5 h-5 text-ai-blue mx-auto mb-1" />
                                                                            <div className="text-sm font-bold text-white">{exp.teamSize}</div>
                                                                            <div className="text-xs text-gray-400">Team Size</div>
                                                                        </div>
                                                                        <div className="text-center p-3 bg-ai-dark rounded-lg">
                                                                            <DollarSign className="w-5 h-5 text-ai-purple mx-auto mb-1" />
                                                                            <div className="text-sm font-bold text-white">{exp.budget}</div>
                                                                            <div className="text-xs text-gray-400">Budget</div>
                                                                        </div>
                                                                        <div className="text-center p-3 bg-ai-dark rounded-lg">
                                                                            <TrendingUp className="w-5 h-5 text-ai-blue mx-auto mb-1" />
                                                                            <div className="text-sm font-bold text-white">{exp.achievements?.length || 0}+</div>
                                                                            <div className="text-xs text-gray-400">Key Wins</div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Responsibilities */}
                                                                    <div className="mb-6">
                                                                        <h5 className="font-semibold text-white mb-3">Key Responsibilities:</h5>
                                                                        <ul className="space-y-2">
                                                                            {exp.description.map((desc, i) => (
                                                                                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                                                    <span className="text-ai-blue mt-1">•</span>
                                                                                    {desc}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    {/* Achievements */}
                                                                    {exp.achievements && exp.achievements.length > 0 && (
                                                                        <div className="mb-6">
                                                                            <h5 className="font-semibold text-ai-blue mb-3">Key Achievements:</h5>
                                                                            <ul className="space-y-2">
                                                                                {exp.achievements.map((achievement, i) => (
                                                                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                                                        <Trophy className="w-4 h-4 text-ai-purple mt-0.5 flex-shrink-0" />
                                                                                        {achievement}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}

                                                                    {/* Impact */}
                                                                    {exp.impact && exp.impact.length > 0 && (
                                                                        <div className="mb-6">
                                                                            <h5 className="font-semibold text-ai-purple mb-3">Business Impact:</h5>
                                                                            <ul className="space-y-2">
                                                                                {exp.impact.map((impact, i) => (
                                                                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                                                        <Star className="w-4 h-4 text-ai-blue mt-0.5 flex-shrink-0" />
                                                                                        {impact}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    )}

                                                                    {/* Technologies */}
                                                                    <div>
                                                                        <h5 className="font-semibold text-white mb-3">Technologies Used:</h5>
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {exp.technologies.map((tech) => (
                                                                                <Badge key={tech} variant="outline" size="sm">
                                                                                    {tech}
                                                                                </Badge>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            {/* Achievements Tab */}
                            {activeTab === 'achievements' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={ANIMATION_VARIANTS.stagger}
                                >
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-2xl font-bold text-ai-blue flex items-center gap-2">
                                                <Trophy className="w-6 h-6" />
                                                Professional Achievements
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {achievements.map((achievement, index) => (
                                                    <motion.div
                                                        key={achievement.id}
                                                        variants={ANIMATION_VARIANTS.scaleIn}
                                                        className="glass-effect p-6 rounded-xl"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="flex-shrink-0">
                                                                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                                                                    <Award className="w-6 h-6 text-white" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <Badge
                                                                        variant={achievement.category === 'Hackathon' ? 'primary' : 'secondary'}
                                                                        size="sm"
                                                                    >
                                                                        {achievement.category}
                                                                    </Badge>
                                                                    <span className="text-ai-blue text-sm font-semibold">
                                                                        {achievement.date}
                                                                    </span>
                                                                </div>
                                                                <h4 className="font-bold text-white mb-2">
                                                                    {achievement.title}
                                                                </h4>
                                                                <p className="text-gray-300 text-sm mb-3">
                                                                    {achievement.description}
                                                                </p>
                                                                <div className="p-3 bg-ai-dark rounded-lg">
                                                                    <p className="text-ai-purple text-sm font-semibold">
                                                                        Impact: {achievement.impact}
                                                                    </p>
                                                                </div>
                                                                {achievement.url && (
                                                                    <a
                                                                        href={achievement.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="inline-flex items-center gap-1 text-ai-blue text-sm hover:text-ai-purple transition-colors mt-3"
                                                                    >
                                                                        <ExternalLink className="w-4 h-4" />
                                                                        Learn More
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            {/* Certifications Tab */}
                            {activeTab === 'certifications' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={ANIMATION_VARIANTS.stagger}
                                >
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-2xl font-bold text-ai-blue flex items-center gap-2">
                                                <Shield className="w-6 h-6" />
                                                Professional Certifications
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            {/* Featured Certifications */}
                                            <div className="mb-8">
                                                <h4 className="text-lg font-semibold text-ai-purple mb-4">Featured Certifications</h4>
                                                <div className="grid md:grid-cols-3 gap-6">
                                                    {certifications.filter(cert => cert.featured).map((cert) => (
                                                        <motion.div
                                                            key={cert.id}
                                                            variants={ANIMATION_VARIANTS.scaleIn}
                                                            className="glass-effect p-6 rounded-xl text-center cert-card"
                                                        >
                                                            <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center mx-auto mb-4">
                                                                <Shield className="w-8 h-8 text-white" />
                                                            </div>
                                                            <h5 className="font-bold text-white mb-2">{cert.name}</h5>
                                                            <p className="text-ai-blue text-sm mb-2">{cert.issuer}</p>
                                                            <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                                                            {cert.verificationUrl && (
                                                                <a
                                                                    href={cert.verificationUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Button variant="outline" size="sm" className="w-full">
                                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                                        Verify
                                                                    </Button>
                                                                </a>
                                                            )}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* All Certifications */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-4">All Certifications</h4>
                                                <div className="space-y-4">
                                                    {certifications.map((cert) => (
                                                        <div key={cert.id} className="flex items-center justify-between p-4 bg-ai-dark rounded-lg">
                                                            <div className="flex items-center gap-4">
                                                                <Shield className="w-6 h-6 text-ai-blue" />
                                                                <div>
                                                                    <h5 className="font-semibold text-white">{cert.name}</h5>
                                                                    <p className="text-ai-blue text-sm">{cert.issuer} • {cert.date}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                {cert.featured && (
                                                                    <Badge variant="primary" size="sm">Featured</Badge>
                                                                )}
                                                                {cert.verificationUrl && (
                                                                    <a
                                                                        href={cert.verificationUrl}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <Button variant="ghost" size="sm">
                                                                            <ExternalLink className="w-4 h-4" />
                                                                        </Button>
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            {/* Education Tab */}
                            {activeTab === 'education' && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={ANIMATION_VARIANTS.stagger}
                                >
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-2xl font-bold text-ai-blue flex items-center gap-2">
                                                <GraduationCap className="w-6 h-6" />
                                                Educational Background
                                            </h3>
                                        </CardHeader>
                                        <CardContent>
                                            {education.map((edu) => (
                                                <motion.div
                                                    key={edu.id}
                                                    variants={ANIMATION_VARIANTS.fadeIn}
                                                    className="glass-effect p-6 rounded-xl"
                                                >
                                                    <div className="flex items-start gap-6">
                                                        <div className="flex-shrink-0">
                                                            <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                                                                <GraduationCap className="w-8 h-8 text-white" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                                <div>
                                                                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                                                    <p className="text-ai-purple font-semibold mb-2">{edu.institution}</p>
                                                                    {edu.description && (
                                                                        <p className="text-gray-300 text-sm">{edu.description}</p>
                                                                    )}
                                                                </div>
                                                                <div className="text-right">
                                                                    <div className="flex items-center text-ai-blue">
                                                                        <Calendar className="w-4 h-4 mr-1" />
                                                                        {edu.duration}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {edu.relevantCourses && (
                                                                <div>
                                                                    <h5 className="font-semibold text-white mb-3">Relevant Coursework:</h5>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {edu.relevantCourses.map((course) => (
                                                                            <Badge key={course} variant="outline" size="sm">
                                                                                {course}
                                                                            </Badge>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}