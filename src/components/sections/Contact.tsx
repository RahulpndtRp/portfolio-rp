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
import { CONTACT_INFO, OPPORTUNITIES, CONTACT_TEXT, FORM_CONFIG, ANIMATION_VARIANTS } from '@/lib/constants';

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


    const opportunities = [
        'AI/ML Engineering Roles',
        'Generative AI Consulting',
        'RAG & LLM Implementation',
        'Multi-Agent System Development',
        'NVIDIA Tech Integration',
        'Speaking & Technical Workshops'
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
                        {CONTACT_TEXT.title}
                    </motion.h2>
                    <motion.p
                        variants={ANIMATION_VARIANTS.fadeIn}
                        className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        {CONTACT_TEXT.subtitle}
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
                                <h3 className="text-2xl font-bold mb-6 text-ai-blue">{CONTACT_TEXT.connectTitle}</h3>

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
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div variants={ANIMATION_VARIANTS.slideIn}>
                            <Card>
                                <h3 className="text-xl font-bold mb-4 text-ai-purple">{CONTACT_TEXT.opportunitiesTitle}</h3>
                                <ul className="space-y-3 text-gray-300">
                                    {OPPORTUNITIES.map((opportunity) => (
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
                            <h3 className="text-2xl font-bold mb-6 text-ai-blue">{CONTACT_TEXT.formTitle}</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        name="name"
                                        label="Name"
                                        value={form.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                        error={errors.name}
                                        placeholder={FORM_CONFIG.placeholders.name}
                                        required
                                    />
                                    <Input
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => updateField('email', e.target.value)}
                                        error={errors.email}
                                        placeholder={FORM_CONFIG.placeholders.email}
                                        required
                                    />
                                </div>

                                <Input
                                    name="subject"
                                    label="Subject"
                                    value={form.subject}
                                    onChange={(e) => updateField('subject', e.target.value)}
                                    error={errors.subject}
                                    placeholder={FORM_CONFIG.placeholders.subject}
                                    required
                                />

                                <Textarea
                                    name="message"
                                    label="Message"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => updateField('message', e.target.value)}
                                    error={errors.message}
                                    placeholder={FORM_CONFIG.placeholders.message}
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
        </section >
    );
}