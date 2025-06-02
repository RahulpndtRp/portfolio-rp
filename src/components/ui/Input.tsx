// src/components/ui/Input.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-semibold text-gray-300">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    'w-full px-4 py-3 bg-ai-gray border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-blue transition-colors duration-200',
                    error && 'border-red-500',
                    className
                )}
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
}