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
        <section id="contact" className="py-20 bg-ai-dark">
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
                        {CONTACT_TEXT.title}
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
                    >
                        {CONTACT_TEXT.subtitle}
                    </motion.p>

                    {/* Response time and location indicator */}
                    <motion.div
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-400 mb-4"
                    >
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-ai-blue" />
                            <span>Response within 24 hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-ai-purple" />
                            <span>Based in India • Available Globally</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-ai-blue" />
                            <span>Remote collaboration ready</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Currently available for opportunities</span>
                        </div>
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
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.stagger}
                        className="space-y-8"
                    >
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-2xl font-bold mb-6 text-ai-blue">{CONTACT_TEXT.connectTitle}</h3>

                                <div className="space-y-4">
                                    {contactInfo.map((info) => {
                                        const Icon = iconMap[info.icon];
                                        return (
                                            <motion.div
                                                key={info.label}
                                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-ai-gray/50 transition-colors duration-200"
                                                whileHover={{ x: 4 }}
                                            >
                                                <div className={`bg-ai-blue bg-opacity-20 p-3 rounded-lg`}>
                                                    <Icon className={`w-6 h-6 ${info.color}`} />
                                                </div>
                                                <div>
                                                    <span className="text-gray-400 text-sm">{info.label}</span>
                                                    {info.href && info.href !== '#' ? (
                                                        <a
                                                            href={info.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-white font-semibold hover:text-ai-blue transition-colors block"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-white font-semibold">{info.value}</p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </motion.div>

                        {/* Enhanced location and availability info */}
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-blue">Availability & Location</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 bg-ai-gray rounded-lg">
                                        <MapPin className="w-5 h-5 text-ai-blue" />
                                        <div>
                                            <p className="text-white font-semibold">Based in India</p>
                                            <p className="text-gray-400 text-sm">Available for global remote work</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-ai-gray rounded-lg">
                                        <Clock className="w-5 h-5 text-ai-purple" />
                                        <div>
                                            <p className="text-white font-semibold">IST Timezone (GMT+5:30)</p>
                                            <p className="text-gray-400 text-sm">Flexible with global teams</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-ai-gray rounded-lg">
                                        <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
                                        <div>
                                            <p className="text-white font-semibold">Currently Available</p>
                                            <p className="text-gray-400 text-sm">Open for new opportunities</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Communication preferences */}
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-purple">Communication</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-ai-gray rounded-lg">
                                        <span className="text-white">📧 Email</span>
                                        <Badge variant="primary" size="sm">Preferred</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-ai-gray rounded-lg">
                                        <span className="text-white">💼 LinkedIn</span>
                                        <Badge variant="secondary" size="sm">Professional</Badge>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-ai-gray rounded-lg">
                                        <span className="text-white">⚡ Response Time</span>
                                        <Badge variant="outline" size="sm">Within 24h</Badge>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Opportunities and global work */}
                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-blue">Open for Opportunities</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {OPPORTUNITIES.map((opportunity) => (
                                        <li key={opportunity} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-ai-blue flex-shrink-0" />
                                            {opportunity}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 p-3 bg-ai-dark rounded-lg border border-ai-blue/20">
                                    <p className="text-ai-blue text-sm font-semibold">🌍 Global Remote Ready</p>
                                    <p className="text-gray-400 text-sm">Experienced working with international teams across different timezones</p>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={ANIMATION_VARIANTS.slideIn}
                    >
                        <Card>
                            <h3 className="text-2xl font-bold mb-6 text-ai-blue">{CONTACT_TEXT.formTitle}</h3>

                            {/* Quick topic buttons */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-300 mb-3">Quick Topics:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {quickTopics.map((topic) => (
                                        <button
                                            key={topic}
                                            onClick={() => handleQuickTopic(topic)}
                                            className="text-xs bg-ai-gray hover:bg-ai-blue hover:text-ai-dark px-3 py-1 rounded-full transition-colors duration-200"
                                        >
                                            {topic}
                                        </button>
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

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : isSuccess ? (
                                        <>
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                                    >
                                        <p className="text-green-400 text-sm">
                                            Thanks for reaching out! I'll get back to you within 24 hours.
                                        </p>
                                    </motion.div>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeIn}
                    className="text-center mt-16"
                >
                    <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Whether you're looking for an AI engineer to join your team, need consultation on
                            generative AI projects, or want to collaborate on cutting-edge multi-agent systems,
                            I'm here to help bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:pyrahulpndt@gmail.com?subject=Project Collaboration">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Start a Project
                                </Button>
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Rahul_Pandey_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Download Resume
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}