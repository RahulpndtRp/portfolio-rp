// src/components/ui/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-to-r from-ai-blue to-ai-purple text-white hover:shadow-lg hover:scale-105 focus:ring-ai-blue',
        secondary: 'bg-ai-gray text-white hover:bg-ai-purple focus:ring-ai-purple',
        outline: 'border-2 border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-ai-dark focus:ring-ai-blue',
        ghost: 'text-ai-blue hover:bg-ai-blue hover:bg-opacity-10 focus:ring-ai-blue'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}