// src/app/error.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-ai-dark flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold gradient-text mb-4">Something went wrong!</h1>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    An unexpected error occurred. Please try again.
                </p>
                <div className="space-x-4">
                    <Button onClick={reset}>
                        Try Again
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/'}>
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}