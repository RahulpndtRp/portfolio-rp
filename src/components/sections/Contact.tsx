// src/components/sections/Contact.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, CheckCircle, Send, Clock, Users } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Badge } from '@/components/ui/Badge';
import { useContactForm } from '@/hooks/useContactForm';
import { CONTACT_INFO, OPPORTUNITIES, CONTACT_TEXT, ANIMATION_VARIANTS } from '@/lib/constants';

const iconMap = {
    Mail,
    Github,
    Linkedin,
    MapPin
};

export function Contact() {
    const { form, errors, isSubmitting, isSuccess, updateField, submitForm } = useContactForm();
    const [responseTime, setResponseTime] = useState('24 hours');

    const contactInfo = [
        {
            icon: 'Mail' as const,
            label: CONTACT_INFO.email.label,
            value: CONTACT_INFO.email.display,
            href: `mailto:${CONTACT_INFO.email.value}`,
            color: 'text-ai-blue'
        },
        {
            icon: 'Github' as const,
            label: CONTACT_INFO.github.label,
            value: CONTACT_INFO.github.display,
            href: CONTACT_INFO.github.value,
            color: 'text-ai-purple'
        },
        {
            icon: 'Linkedin' as const,
            label: CONTACT_INFO.linkedin.label,
            value: CONTACT_INFO.linkedin.display,
            href: CONTACT_INFO.linkedin.value,
            color: 'text-ai-blue'
        },
        {
            icon: 'MapPin' as const,
            label: CONTACT_INFO.location.label,
            value: CONTACT_INFO.location.display,
            href: CONTACT_INFO.location.value,
            color: 'text-ai-purple'
        }
    ];

    const quickTopics = [
        'AI/ML Engineering Roles',
        'Generative AI Consulting',
        'Multi-Agent Systems',
        'Enterprise AI Solutions',
        'Speaking Opportunities',
        'Technical Collaboration'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm();
    };

    const handleQuickTopic = (topic: string) => {
        updateField('subject', topic);
        updateField('message', `Hi Rahul,\n\nI'm interested in discussing ${topic.toLowerCase()}. `);
    };

    return (
        <section id="contact" className="py-20 bg-ai-dark relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-ai-blue/5 to-ai-purple/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-ai-purple/5 to-ai-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-ai-blue/30 rounded-full`}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 10}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-blue/2 to-transparent"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        {CONTACT_TEXT.title}
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
                    >
                        {CONTACT_TEXT.subtitle}
                    </motion.p>

                    {/* Enhanced status indicators */}
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                    >
                        <motion.div 
                            className="bg-gradient-to-r from-ai-blue/20 to-ai-blue/10 border border-ai-blue/30 rounded-xl p-4 text-center backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Clock className="w-6 h-6 text-ai-blue mx-auto mb-2" />
                            <p className="text-white font-semibold text-sm">24h Response</p>
                            <p className="text-ai-blue/80 text-xs">Fast turnaround</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-r from-ai-purple/20 to-ai-purple/10 border border-ai-purple/30 rounded-xl p-4 text-center backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MapPin className="w-6 h-6 text-ai-purple mx-auto mb-2" />
                            <p className="text-white font-semibold text-sm">Global Reach</p>
                            <p className="text-ai-purple/80 text-xs">India • Worldwide</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-400/30 rounded-xl p-4 text-center backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="relative mx-auto mb-2 w-6 h-6 flex items-center justify-center">
                                <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 w-6 h-6 bg-green-400/50 rounded-full animate-ping"></div>
                            </div>
                            <p className="text-white font-semibold text-sm">Available Now</p>
                            <p className="text-green-400/80 text-xs">Open for projects</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-gradient-to-r from-ai-blue/20 to-cyan-500/10 border border-cyan-400/30 rounded-xl p-4 text-center backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                            <p className="text-white font-semibold text-sm">Remote Ready</p>
                            <p className="text-cyan-400/80 text-xs">Global teams</p>
                        </motion.div>
                    </motion.div>

                    {/* Timezone and work preferences */}
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-center mb-8"
                    >
                        <div className="glass-effect px-6 py-3 rounded-lg inline-block">
                            <p className="text-sm text-gray-300">
                                <span className="font-semibold text-ai-blue">Timezone:</span> IST (GMT+5:30) •
                                <span className="font-semibold text-ai-purple ml-2">Preferred:</span> Email & LinkedIn •
                                <span className="font-semibold text-ai-blue ml-2">Global:</span> Remote work ready
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info - Consolidated */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <div className="bg-gradient-to-br from-ai-dark via-ai-gray/50 to-ai-dark border border-ai-blue/20 rounded-2xl p-6 backdrop-blur-lg shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-purple">{CONTACT_TEXT.connectTitle}</h3>

                                {/* Contact Methods */}
                                <div className="space-y-3 mb-6">
                                    {contactInfo.map((info, index) => {
                                        const Icon = iconMap[info.icon];
                                        return (
                                            <motion.div
                                                key={info.label}
                                                className="group relative overflow-hidden"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 to-ai-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative flex items-center gap-4 p-4 rounded-xl border border-transparent group-hover:border-ai-blue/30 transition-all duration-300">
                                                    <div className={`bg-gradient-to-br from-${info.color.replace('text-', '')}/20 to-${info.color.replace('text-', '')}/10 p-3 rounded-xl backdrop-blur-sm border border-${info.color.replace('text-', '')}/20`}>
                                                        <Icon className={`w-6 h-6 ${info.color}`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <span className="text-gray-400 text-sm block mb-1">{info.label}</span>
                                                        {info.href && info.href !== '#' ? (
                                                            <a
                                                                href={info.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-white font-semibold hover:text-ai-blue transition-colors block group-hover:translate-x-1 duration-300"
                                                            >
                                                                {info.value}
                                                            </a>
                                                        ) : (
                                                            <p className="text-white font-semibold group-hover:translate-x-1 transition-transform duration-300">{info.value}</p>
                                                        )}
                                                    </div>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-pulse"></div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Availability & Communication - Enhanced */}
                                <div className="border-t border-gradient-to-r from-ai-blue/30 via-ai-purple/20 to-ai-blue/30 pt-6">
                                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ai-purple to-ai-blue mb-4">Availability & Work Preferences</h4>
                                    
                                    {/* Communication Preferences - Enhanced Pills */}
                                    <div className="mb-6">
                                        <h5 className="text-md font-semibold text-ai-blue mb-3">Preferred Communication</h5>
                                        <div className="flex flex-wrap gap-3">
                                            <motion.div 
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ai-blue/20 to-ai-blue/10 border border-ai-blue/30 rounded-full backdrop-blur-sm"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <span className="text-white text-sm">📧 Email</span>
                                                <Badge variant="primary" size="sm" className="bg-ai-blue/80">Primary</Badge>
                                            </motion.div>
                                            <motion.div 
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-ai-purple/20 to-ai-purple/10 border border-ai-purple/30 rounded-full backdrop-blur-sm"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <span className="text-white text-sm">💼 LinkedIn</span>
                                                <Badge variant="secondary" size="sm" className="bg-ai-purple/80">Professional</Badge>
                                            </motion.div>
                                            <motion.div 
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-400/10 border border-green-400/30 rounded-full backdrop-blur-sm"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <span className="text-white text-sm">⚡ Response</span>
                                                <Badge variant="outline" size="sm" className="border-green-400/50 text-green-400">24h</Badge>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Opportunities - Enhanced Grid */}
                                <div className="border-t border-gradient-to-r from-ai-blue/30 via-ai-purple/20 to-ai-blue/30 pt-6">
                                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ai-blue to-ai-purple mb-4">Open for Opportunities</h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {OPPORTUNITIES.map((opportunity, index) => (
                                            <motion.div 
                                                key={opportunity} 
                                                className="flex items-center gap-3 p-3 bg-gradient-to-r from-ai-blue/10 to-ai-blue/5 rounded-lg border border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.02, x: 4 }}
                                            >
                                                <div className="relative">
                                                    <CheckCircle className="w-4 h-4 text-ai-blue" />
                                                    <div className="absolute inset-0 w-4 h-4 bg-ai-blue/30 rounded-full animate-ping opacity-75"></div>
                                                </div>
                                                <span className="text-gray-300 text-sm font-medium">{opportunity}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    {/* Global Ready Banner */}
                                    <motion.div 
                                        className="mt-6 p-4 bg-gradient-to-r from-ai-blue/20 via-ai-purple/10 to-ai-blue/20 rounded-xl border border-ai-blue/30 backdrop-blur-sm relative overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ai-blue/5 to-transparent animate-pulse"></div>
                                        <div className="relative flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-ai-blue to-ai-purple rounded-full flex items-center justify-center">
                                                <span className="text-white text-lg">🌍</span>
                                            </div>
                                            <div>
                                                <p className="text-ai-blue text-sm font-semibold">Global Remote Ready</p>
                                                <p className="text-gray-400 text-sm">Experienced working with international teams across different timezones</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form - Enhanced */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.slideIn}
                    >
                        <div className="relative bg-gradient-to-br from-ai-dark via-ai-gray/30 to-ai-dark border border-ai-purple/20 rounded-2xl p-6 backdrop-blur-lg shadow-2xl overflow-hidden">
                            {/* Floating decorative elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-ai-blue/10 to-ai-purple/5 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-ai-purple/10 to-ai-blue/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-ai-blue/5 to-ai-purple/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            
                            {/* Animated border gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/20 via-ai-purple/10 to-ai-blue/20 rounded-2xl opacity-50 animate-pulse"></div>
                            
                            <div className="relative">
                                <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-ai-purple to-ai-blue flex items-center gap-3">
                                    <motion.div
                                        className="w-8 h-8 bg-gradient-to-br from-ai-purple to-ai-blue rounded-lg flex items-center justify-center"
                                        animate={{ 
                                            boxShadow: [
                                                '0 0 20px rgba(99, 102, 241, 0.5)',
                                                '0 0 30px rgba(168, 85, 247, 0.8)',
                                                '0 0 20px rgba(99, 102, 241, 0.5)'
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Send className="w-4 h-4 text-white" />
                                    </motion.div>
                                    {CONTACT_TEXT.formTitle}
                                </h3>

                            {/* Quick topic buttons - Enhanced */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-ai-purple rounded-full animate-pulse"></span>
                                    Quick Topics:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {quickTopics.map((topic, index) => (
                                        <motion.button
                                            key={topic}
                                            onClick={() => handleQuickTopic(topic)}
                                            className="text-xs bg-gradient-to-r from-ai-gray/50 to-ai-gray/30 hover:from-ai-blue/80 hover:to-ai-purple/80 hover:text-white border border-ai-gray/50 hover:border-ai-blue/50 px-3 py-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {topic}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        name="name"
                                        label="Name"
                                        value={form.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Your Name"
                                        required
                                    />
                                    <Input
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => updateField('email', e.target.value)}
                                        error={errors.email}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <Input
                                    name="subject"
                                    label="Subject"
                                    value={form.subject}
                                    onChange={(e) => updateField('subject', e.target.value)}
                                    error={errors.subject}
                                    placeholder="Project Collaboration"
                                    required
                                />

                                <Textarea
                                    name="message"
                                    label="Message"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => updateField('message', e.target.value)}
                                    error={errors.message}
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`w-full relative overflow-hidden group ${
                                        isSuccess 
                                            ? 'bg-gradient-to-r from-green-500 to-green-400' 
                                            : 'bg-gradient-to-r from-ai-blue via-ai-purple to-ai-blue'
                                    } text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50`}
                                    whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                                    animate={isSubmitting ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
                                    transition={{ duration: 2, repeat: isSubmitting ? Infinity : 0 }}
                                >
                                    {/* Animated background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    {/* Button content */}
                                    <div className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                <span>Sending Message...</span>
                                            </>
                                        ) : isSuccess ? (
                                            <>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", delay: 0.1 }}
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                </motion.div>
                                                <span>Message Sent Successfully!</span>
                                            </>
                                        ) : (
                                            <>
                                                <motion.div
                                                    whileHover={{ x: 2 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Send className="w-5 h-5" />
                                                </motion.div>
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </div>
                                    
                                    {/* Ripple effect */}
                                    {!isSubmitting && !isSuccess && (
                                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/0 via-white/5 to-ai-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    )}
                                </motion.button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="p-4 bg-gradient-to-r from-green-500/20 via-green-400/15 to-green-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
                                        <div className="relative flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-green-400 text-sm font-semibold">
                                                    Message sent successfully!
                                                </p>
                                                <p className="text-green-300/80 text-xs">
                                                    Thanks for reaching out! I'll get back to you within 24 hours.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </form>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}