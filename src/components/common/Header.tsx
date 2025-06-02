// src/components/common/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAV_ITEMS } from '@/lib/constants';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useScrollSpy(['home', 'about', 'projects', 'blog', 'contact', 'resume']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            isScrolled ? 'bg-ai-dark/20 backdrop-blur-sm' : 'bg-transparent'

        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with better hover effect */}
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-200 cursor-pointer">
                            Rahul Pandey
                        </span>
                    </div>

                    {/* Desktop Navigation with better hover effects */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={cn(
                                    'relative px-3 py-2 text-white hover:text-ai-blue transition-all duration-200 font-medium rounded-lg',
                                    'hover:bg-ai-blue/10 hover:shadow-lg hover:shadow-ai-blue/20',
                                    activeSection === item.href.slice(1) && 'text-ai-blue bg-ai-blue/20 shadow-md shadow-ai-blue/30'
                                )}
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
                        >
                            <Button
                                variant="primary"
                                size="sm"
                                className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 shadow-lg shadow-ai-blue/30"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                Download CV
                            </Button>
                        </a>
                    </div>

                    {/* Mobile menu button with better styling */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-ai-blue transition-colors p-2 rounded-lg hover:bg-ai-blue/10"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-ai-dark/95 backdrop-blur-lg border-t border-ai-blue/20 rounded-b-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        'block w-full text-left px-3 py-2 text-white hover:text-ai-blue transition-colors font-medium rounded-lg hover:bg-ai-blue/10',
                                        activeSection === item.href.slice(1) && 'text-ai-blue bg-ai-blue/20'
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                            {/* Mobile Download Button */}
                            <a
                                href="/resume.pdf"
                                download="Rahul_Pandey_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full px-3 py-2"
                            >
                                <Button variant="primary" size="sm" className="w-full flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    Download CV
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}