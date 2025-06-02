// src/components/sections/Blog.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { blogPosts } from '@/data/blog';
import { ANIMATION_VARIANTS } from '@/lib/constants';

export function Blog() {
    return (
        <section id="blog" className="py-20 bg-ai-gray">
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
                        Latest Insights
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Thoughts on AI trends, technical deep-dives, and lessons learned from building production AI systems.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.stagger}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            variants={ANIMATION_VARIANTS.scaleIn}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge
                                            variant={post.category === 'Technical' ? 'primary' :
                                                post.category === 'Architecture' ? 'secondary' : 'primary'}
                                        >
                                            {post.category}
                                        </Badge>
                                        <span className="text-gray-400 text-sm">{post.publishDate}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">
                                        {post.title}
                                    </h3>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <Badge key={tag} variant="outline" size="sm">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {post.readTime}
                                        </div>
                                        <Button variant="ghost" size="sm">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="text-center mt-12"
                >
                    <Button size="lg">
                        View All Posts
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}