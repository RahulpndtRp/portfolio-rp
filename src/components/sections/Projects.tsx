// src/components/sections/Projects.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    ExternalLink,
    Eye,
    Users,
    Zap,
    Target,
    TrendingUp,
    Code,
    Database,
    BarChart3,
    Award,
    X
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { projects, projectCategories, portfolioStats } from '@/data/projects';
import { PROJECT_CATEGORIES, ANIMATION_VARIANTS } from '@/lib/constants';
import { Project } from '@/types';

// Icon mapping for different metrics
const metricIcons = {
    performance: Zap,
    accuracy: Target,
    scale: TrendingUp,
    users: Users,
    costSavings: BarChart3
};

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'metrics'>('overview');

    // Filter projects based on active filter
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projects;
        }
        return projects.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    const ProjectDetailModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
        const tabs = [
            { id: 'overview', label: 'Overview', icon: Eye },
            { id: 'architecture', label: 'Architecture', icon: Code },
            { id: 'metrics', label: 'Performance', icon: BarChart3 }
        ];

        return (
            <Modal isOpen={!!project} onClose={onClose} size="xl">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="primary">{project.category}</Badge>
                                {project.featured && (
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Award className="w-3 h-3" />
                                        Featured
                                    </Badge>
                                )}
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={onClose}>
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 p-1 bg-ai-dark rounded-lg">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Button
                                    key={tab.id}
                                    variant={activeTab === tab.id ? 'primary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className="flex items-center gap-2 flex-1"
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </Button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[400px]">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {project.longDescription || project.description}
                                    </p>
                                </div>

                                {project.challenges && (
                                    <div>
                                        <h4 className="text-md font-semibold text-ai-blue mb-3">Key Challenges</h4>
                                        <ul className="space-y-2">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                                    <span className="text-ai-blue mt-1">•</span>
                                                    {challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.innovations && (
                                    <div>
                                        <h4 className="text-md font-semibold text-ai-purple mb-3">Technical Innovations</h4>
                                        <ul className="space-y-2">
                                            {project.innovations.map((innovation, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                                    <span className="text-ai-purple mt-1">•</span>
                                                    {innovation}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-md font-semibold text-white mb-3">Technology Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" size="sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'architecture' && project.architecture && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3">System Architecture</h3>
                                    <p className="text-gray-300 mb-4">{project.architecture.overview}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-md font-semibold text-ai-blue mb-3">Core Components</h4>
                                        <div className="space-y-3">
                                            {project.architecture.components.map((component, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-ai-dark rounded-lg hover:bg-opacity-80 transition-all duration-200">
                                                    <div className="w-8 h-8 bg-ai-blue bg-opacity-20 rounded-lg flex items-center justify-center">
                                                        <Database className="w-4 h-4 text-ai-blue" />
                                                    </div>
                                                    <span className="text-gray-300 text-sm">{component}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-ai-purple mb-3">Data Flow</h4>
                                        <div className="p-4 bg-ai-dark rounded-lg">
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {project.architecture.dataFlow}
                                            </p>
                                        </div>

                                        <h4 className="text-md font-semibold text-ai-blue mb-3 mt-4">Scalability</h4>
                                        <div className="p-4 bg-ai-dark rounded-lg">
                                            <p className="text-gray-300 text-sm">
                                                {project.architecture.scalability}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'metrics' && project.metrics && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-white mb-4">Performance Metrics</h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(project.metrics).map(([key, value]) => {
                                        const Icon = metricIcons[key as keyof typeof metricIcons] || BarChart3;
                                        return (
                                            <div key={key} className="text-center p-4 bg-ai-dark rounded-lg metric-glow">
                                                <Icon className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                                                <div className="text-lg font-bold text-white mb-1">{value}</div>
                                                <div className="text-xs text-gray-400 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Performance Insights */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-md font-semibold text-ai-blue mb-3">Key Achievements</h4>
                                        <div className="space-y-3">
                                            {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                                                <div key={key} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                                                    <span className="text-gray-300 text-sm">
                                                        <span className="text-white font-semibold">{value}</span> in {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-md font-semibold text-ai-purple mb-3">Impact & Scale</h4>
                                        <div className="space-y-3">
                                            {Object.entries(project.metrics).slice(2).map(([key, value]) => (
                                                <div key={key} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-ai-purple rounded-full"></div>
                                                    <span className="text-gray-300 text-sm">
                                                        <span className="text-white font-semibold">{value}</span> {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-600">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="outline" className="w-full flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    View Code
                                </Button>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="primary" className="w-full flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </Modal>
        );
    };

    return (
        <section id="projects" className="py-20 bg-ai-dark">
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
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
                    >
                        Portfolio-grade AI solutions showcasing enterprise-scale implementations,
                        technical innovation, and measurable business impact.
                    </motion.p>

                    {/* Portfolio Stats */}
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-ai-blue">{portfolioStats.totalProjects}</div>
                            <div className="text-sm text-gray-400">Total Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-ai-purple">{portfolioStats.totalUsers}</div>
                            <div className="text-sm text-gray-400">Users Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-ai-blue">{portfolioStats.avgAccuracy}</div>
                            <div className="text-sm text-gray-400">Avg Accuracy</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-ai-purple">{portfolioStats.costSavings}</div>
                            <div className="text-sm text-gray-400">Cost Savings</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Enhanced Filter Buttons */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {PROJECT_CATEGORIES.map((category) => (
                            <Button
                                key={category}
                                variant={activeFilter === category ? 'primary' : 'ghost'}
                                size="sm"
                                onClick={() => setActiveFilter(category)}
                                className="relative"
                            >
                                {category}
                                {category !== 'All' && (
                                    <span className="ml-2 text-xs opacity-60">
                                        ({projects.filter(p => p.category === category).length})
                                    </span>
                                )}
                            </Button>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4">
                        {projectCategories[activeFilter as keyof typeof projectCategories]}
                    </p>
                </motion.div>

                {/* Enhanced Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={ANIMATION_VARIANTS.stagger}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    variants={ANIMATION_VARIANTS.scaleIn}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                    className="project-card-enhanced"
                                >
                                    <Card className="h-full flex flex-col group cursor-pointer relative overflow-hidden">
                                        {/* Featured badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 z-10">
                                                <Badge variant="secondary" className="flex items-center gap-1">
                                                    <Award className="w-3 h-3" />
                                                    Featured
                                                </Badge>
                                            </div>
                                        )}

                                        <CardHeader>
                                            <div className="mb-4">
                                                <Badge
                                                    variant={project.category.includes('Multi') || project.category.includes('Enterprise') ? 'primary' : 'outline'}
                                                >
                                                    {project.category}
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-ai-blue group-hover:text-ai-purple transition-colors duration-200">
                                                {project.title}
                                            </h3>
                                        </CardHeader>

                                        <CardContent className="flex-grow">
                                            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Quick Metrics */}
                                            {project.metrics && (
                                                <div className="grid grid-cols-2 gap-2 mb-4">
                                                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                                                        <div key={key} className="text-center p-2 bg-ai-dark rounded transition-all duration-200 hover:bg-opacity-80">
                                                            <div className="text-xs font-bold text-ai-blue">{value}</div>
                                                            <div className="text-xs text-gray-400">
                                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <Badge key={tech} variant="outline" size="sm">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <Badge variant="outline" size="sm">
                                                        +{project.technologies.length - 3}
                                                    </Badge>
                                                )}
                                            </div>
                                        </CardContent>

                                        <CardFooter>
                                            <div className="flex gap-2 w-full">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    onClick={() => setSelectedProject(project)}
                                                    className="flex-1"
                                                >
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Details
                                                </Button>
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Button variant="ghost" size="sm">
                                                            <Github className="w-4 h-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Button variant="outline" size="sm">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-400 text-lg mb-4">
                                    No projects found for "{activeFilter}"
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => setActiveFilter('All')}
                                >
                                    View All Projects
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="text-center mt-16"
                >
                    <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Interested in Similar Solutions?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            I build custom AI solutions for enterprises. Let's discuss your project requirements
                            and create something amazing together.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                Start a Project
                            </Button>
                            <a href={`mailto:pyrahulpndt@gmail.com?subject=Project Inquiry`}>
                                <Button variant="outline" size="lg">
                                    Get in Touch
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => {
                        setSelectedProject(null);
                        setActiveTab('overview');
                    }}
                />
            )}
        </section>
    );
}