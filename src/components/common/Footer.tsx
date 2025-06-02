// src/components/common/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const iconMap = {
    Github,
    Linkedin,
    Mail
};

export function Footer() {
    return (
        <footer className="bg-ai-dark border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <span className="text-3xl font-bold gradient-text">AI.Portfolio</span>
                        <p className="text-gray-400 mt-4 max-w-md">
                            Building the future of AI with cutting-edge solutions,
                            one algorithm at a time. Expert in generative AI,
                            multi-agent systems, and production deployment.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {SOCIAL_LINKS.map((link) => {
                                const Icon = iconMap[link.icon as keyof typeof iconMap];
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-ai-gray hover:bg-ai-blue hover:text-ai-dark p-3 rounded-lg transition-all duration-200"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-ai-blue transition-colors duration-200">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-ai-blue transition-colors duration-200">Projects</a></li>
                            <li><a href="#blog" className="text-gray-400 hover:text-ai-blue transition-colors duration-200">Blog</a></li>
                            <li><a href="#resume" className="text-gray-400 hover:text-ai-blue transition-colors duration-200">Resume</a></li>
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                        <ul className="space-y-2">
                            <li><span className="text-gray-400">Hugging Face</span></li>
                            <li><span className="text-gray-400">LangChain</span></li>
                            <li><span className="text-gray-400">Multi-Agent Systems</span></li>
                            <li><span className="text-gray-400">Vector Databases</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 AI Portfolio. Built with modern web technologies.
                        <span className="text-ai-blue ml-2">Ready to innovate together?</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}