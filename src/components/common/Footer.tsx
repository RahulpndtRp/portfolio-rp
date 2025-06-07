// src/components/common/Footer.tsx
import React from 'react';
import { Github, Linkedin, Mail, MapPin, Award, Clock } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const iconMap = {
    Github,
    Linkedin,
    Mail
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ai-dark border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand & Summary */}
                    <div className="md:col-span-2">
                        <span className="text-3xl font-bold gradient-text">{SITE_CONFIG.brandName}</span>
                        <div className="flex items-center gap-2 mt-2 mb-4">
                            <Award className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-ai-blue font-semibold">NVIDIA NIM Hackathon Winner 2024</span>
                        </div>
                        <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
                            Data Scientist & AI Engineer with 4+ years of experience building enterprise AI solutions.
                            Specializing in Generative AI, Multi-Agent Systems, and LLM Orchestration.
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
                                        className="bg-ai-gray hover:bg-ai-blue hover:text-ai-dark p-3 rounded-lg transition-all duration-200 group"
                                    >
                                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-ai-blue transition-colors duration-200 flex items-center gap-2">
                                <span className="w-1 h-1 bg-ai-blue rounded-full"></span>About Me
                            </a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-ai-blue transition-colors duration-200 flex items-center gap-2">
                                <span className="w-1 h-1 bg-ai-blue rounded-full"></span>Projects
                            </a></li>
                            <li><a href="#resume" className="text-gray-400 hover:text-ai-blue transition-colors duration-200 flex items-center gap-2">
                                <span className="w-1 h-1 bg-ai-blue rounded-full"></span>Experience
                            </a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-ai-blue transition-colors duration-200 flex items-center gap-2">
                                <span className="w-1 h-1 bg-ai-blue rounded-full"></span>Contact
                            </a></li>
                            <li><a href="/resume.pdf" download className="text-gray-400 hover:text-ai-blue transition-colors duration-200 flex items-center gap-2">
                                <span className="w-1 h-1 bg-ai-blue rounded-full"></span>Download Resume
                            </a></li>
                        </ul>
                    </div>

                    {/* Availability & Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Availability</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-gray-300 text-sm">Currently Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-ai-blue" />
                                <span className="text-gray-300 text-sm">India • Global Remote</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-ai-purple" />
                                <span className="text-gray-300 text-sm">IST (GMT+5:30)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-ai-blue" />
                                <span className="text-gray-300 text-sm">24h Response</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-ai-gray rounded-lg">
                            <p className="text-ai-blue text-xs font-semibold">Open for:</p>
                            <p className="text-gray-400 text-xs">AI/ML Roles • Consulting • Collaboration</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Rahul Pandey. Built with Next.js, TypeScript & Tailwind CSS.
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                                Designed for performance, accessibility, and modern web standards.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-ai-blue font-bold text-sm">15+</div>
                                <div className="text-gray-500 text-xs">Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-ai-purple font-bold text-sm">95%</div>
                                <div className="text-gray-500 text-xs">Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-ai-blue font-bold text-sm">4+</div>
                                <div className="text-gray-500 text-xs">Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}