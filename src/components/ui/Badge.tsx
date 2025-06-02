// src/components/ui/Badge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({ children, variant = 'primary', size = 'sm', className }: BadgeProps) {
    const variants = {
        primary: 'bg-ai-blue text-ai-dark',
        secondary: 'bg-ai-purple text-white',
        outline: 'border border-ai-blue text-ai-blue'
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm'
    };

    return (
        <span className={cn(
            'inline-flex items-center rounded-full font-semibold',
            variants[variant],
            sizes[size],
            className
        )}>
            {children}
        </span>
    );
}