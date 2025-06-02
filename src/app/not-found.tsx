// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-ai-dark flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <Button size="lg">
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}