// src/components/sections/Projects.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { PROJECT_CATEGORIES, ANIMATION_VARIANTS } from '@/lib/constants';

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Use useMemo to properly memoize the filtered results
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projects;
        }
        return projects.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    // Debug logging (remove in production)
    // console.log('Active Filter:', activeFilter);
    // console.log('All Projects:', projects.length);
    // console.log('Filtered Projects:', filteredProjects.length);

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
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Portfolio-grade AI solutions showcasing multi-agent systems, RAG pipelines, and GPU optimization.
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {PROJECT_CATEGORIES.map((category) => (
                        <Button
                            key={category}
                            variant={activeFilter === category ? 'primary' : 'ghost'}
                            size="sm"
                            onClick={() => {
                                // console.log('Switching to filter:', category);
                                setActiveFilter(category);
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Debug Info (remove in production) */}
                {/* {process.env.NODE_ENV === 'development' && (
                    <div className="text-white text-sm mb-4 text-center bg-gray-800 p-2 rounded">
                        Debug: Active Filter: "{activeFilter}" |
                        Total Projects: {projects.length} |
                        Filtered: {filteredProjects.length}
                    </div>
                )} */}

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.stagger}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    key={activeFilter} // Add key to force re-render when filter changes
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${project.id}-${activeFilter}`} // Unique key with filter
                                variants={ANIMATION_VARIANTS.scaleIn}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full flex flex-col">
                                    <CardHeader>
                                        <div className="mb-4">
                                            <Badge
                                                variant={project.category.includes('Multi') ? 'primary' : 'secondary'}
                                            >
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-ai-blue">
                                            {project.title}
                                        </h3>
                                    </CardHeader>

                                    <CardContent className="flex-grow">
                                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
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
                                        <div className="flex gap-3 w-full">
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Button variant="ghost" size="sm" className="w-full">
                                                        <Github className="w-4 h-4 mr-2" />
                                                        GitHub
                                                    </Button>
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Button variant="outline" size="sm" className="w-full">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Demo
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
                            <p className="text-gray-400 text-lg">
                                No projects found for "{activeFilter}"
                            </p>
                            <Button
                                variant="ghost"
                                onClick={() => setActiveFilter('All')}
                                className="mt-4"
                            >
                                View All Projects
                            </Button>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="text-center mt-12"
                >
                    <Button size="lg">
                        View All Projects
                        <ExternalLink className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div >
        </section >
    );
}