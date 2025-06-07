// src/components/common/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const activeSection = useScrollSpy(['home', 'about', 'projects', 'blog', 'contact', 'resume']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Calculate scroll progress safely
            const scrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const maxScroll = documentHeight - windowHeight;

            if (maxScroll > 0) {
                const progress = Math.min(100, (scrollY / maxScroll) * 100);
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={cn(
            'fixed top-0 w-full z-50 transition-all duration-300',
            isScrolled ? 'bg-ai-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with enhanced accessibility */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => handleNavClick('#home')}
                            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ai-blue rounded-lg p-1"
                            aria-label="Go to homepage"
                        >
                            Rahul Pandey
                        </button>
                    </div>

                    {/* Desktop Navigation with enhanced accessibility */}
                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={cn(
                                    'relative px-4 py-2 text-white hover:text-ai-blue transition-all duration-200 font-medium rounded-lg',
                                    'hover:bg-ai-blue/10 hover:shadow-lg hover:shadow-ai-blue/20',
                                    'focus:outline-none focus:ring-2 focus:ring-ai-blue focus:ring-offset-2 focus:ring-offset-ai-dark',
                                    activeSection === item.href.slice(1) && 'text-ai-blue bg-ai-blue/20 shadow-md shadow-ai-blue/30'
                                )}
                                aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
                            >
                                {item.label}
                                {/* Active indicator */}
                                {activeSection === item.href.slice(1) && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-ai-blue rounded-full"></div>
                                )}
                            </button>
                        ))}

                        {/* Download Resume Button */}
                        <a
                            href="/resume.pdf"
                            download="Rahul_Pandey_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus:outline-none focus:ring-2 focus:ring-ai-blue focus:ring-offset-2 focus:ring-offset-ai-dark rounded-lg"
                        >
                            <Button
                                variant="primary"
                                size="sm"
                                className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg shadow-ai-blue/30"
                            >
                                <Download className="w-4 h-4" />
                                <span className="hidden lg:inline">Download CV</span>
                                <span className="lg:hidden">CV</span>
                            </Button>
                        </a>
                    </div>

                    {/* Mobile menu button with enhanced styling */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-ai-blue transition-colors p-2 rounded-lg hover:bg-ai-blue/10 focus:outline-none focus:ring-2 focus:ring-ai-blue"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isMenuOpen && (
                    <div
                        className="md:hidden bg-ai-dark/95 backdrop-blur-lg border-t border-ai-blue/20 rounded-b-lg shadow-2xl"
                        role="menu"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        'block w-full text-left px-4 py-3 text-white hover:text-ai-blue transition-colors font-medium rounded-lg hover:bg-ai-blue/10',
                                        'focus:outline-none focus:ring-2 focus:ring-ai-blue focus:ring-inset',
                                        activeSection === item.href.slice(1) && 'text-ai-blue bg-ai-blue/20'
                                    )}
                                    role="menuitem"
                                >
                                    {item.label}
                                </button>
                            ))}

                            {/* Mobile Download Button */}
                            <div className="pt-2 border-t border-ai-blue/20">
                                <a
                                    href="/resume.pdf"
                                    download="Rahul_Pandey_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-3 py-2"
                                >
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="w-full flex items-center justify-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        Download Resume
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Progress indicator */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ai-blue/20">
                <div
                    className="h-full bg-gradient-to-r from-ai-blue to-ai-purple transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
        </nav>
    );
}