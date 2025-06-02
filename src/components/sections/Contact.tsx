// src/components/sections/Contact.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useContactForm } from '@/hooks/useContactForm';
import { SITE_CONFIG, ANIMATION_VARIANTS } from '@/lib/constants';

const iconMap = {
    Mail,
    Github,
    Linkedin,
    MapPin
};

export function Contact() {
    const { form, errors, isSubmitting, isSuccess, updateField, submitForm } = useContactForm();

    const contactInfo = [
        {
            icon: 'Mail' as const,
            label: 'Email',
            value: SITE_CONFIG.links.email,
            href: `mailto:${SITE_CONFIG.links.email}`,
            color: 'text-ai-blue'
        },
        {
            icon: 'Github' as const,
            label: 'GitHub',
            value: '@yourusername',
            href: SITE_CONFIG.links.github,
            color: 'text-ai-purple'
        },
        {
            icon: 'Linkedin' as const,
            label: 'LinkedIn',
            value: '@yourprofile',
            href: SITE_CONFIG.links.linkedin,
            color: 'text-ai-blue'
        },
        {
            icon: 'MapPin' as const,
            label: 'Location',
            value: 'Available Globally',
            href: '#',
            color: 'text-ai-purple'
        }
    ];

    const opportunities = [
        'AI/ML Engineering Roles',
        'Technical Consulting',
        'Open Source Collaboration',
        'Speaking & Workshops'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm();
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
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Interested in collaborating on AI projects or discussing opportunities?
                        Let's build something amazing together.
                    </motion.p>
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
                                <h3 className="text-2xl font-bold mb-6 text-ai-blue">Let's Connect</h3>

                                <div className="space-y-4">
                                    {contactInfo.map((info) => {
                                        const Icon = iconMap[info.icon];
                                        return (
                                            <div key={info.label} className="flex items-center gap-4">
                                                <div className={`bg-ai-blue bg-opacity-20 p-3 rounded-lg`}>
                                                    <Icon className={`w-6 h-6 ${info.color}`} />
                                                </div>
                                                <div>
                                                    <span className="text-gray-400 text-sm">{info.label}</span>
                                                    <p className="text-white font-semibold">{info.value}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-purple">Open for Opportunities</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {opportunities.map((opportunity) => (
                                        <li key={opportunity} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-ai-blue flex-shrink-0" />
                                            {opportunity}
                                        </li>
                                    ))}
                                </ul>
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
                            <h3 className="text-2xl font-bold mb-6 text-ai-blue">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        label="Name"
                                        value={form.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        error={errors.name}
                                        placeholder="Your Name"
                                        required
                                    />
                                    <Input
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
                                    label="Subject"
                                    value={form.subject}
                                    onChange={(e) => updateField('subject', e.target.value)}
                                    error={errors.subject}
                                    placeholder="Project Collaboration"
                                    required
                                />

                                <Textarea
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
                                    {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
