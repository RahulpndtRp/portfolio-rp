// src/components/ui/Textarea.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="block text-sm font-semibold text-gray-300">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    'w-full px-4 py-3 bg-ai-gray border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-blue transition-colors duration-200 resize-none',
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