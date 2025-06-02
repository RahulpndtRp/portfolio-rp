// src/app/loading.tsx
import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-ai-dark flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-ai-blue border-t-transparent"></div>
                <p className="text-white mt-4 text-lg">Loading...</p>
            </div>
        </div>
    );
}