// src/app/loading.tsx
import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-ai-dark flex items-center justify-center">
            <div className="text-center">
                {/* Main loading animation */}
                <div className="relative mb-8">
                    <div className="w-20 h-20 border-4 border-ai-blue/30 rounded-full animate-spin">
                        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-ai-blue rounded-full animate-spin"></div>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 border-4 border-ai-purple/20 rounded-full animate-pulse"></div>
                </div>

                {/* Loading text */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">
                        Loading Portfolio
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Preparing AI Engineer showcase...
                    </p>

                    {/* Progress indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-ai-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-ai-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>

                {/* Fun tech facts while loading */}
                <div className="mt-8 max-w-md mx-auto">
                    <p className="text-sm text-gray-500 italic">
                        "Building the future of AI, one algorithm at a time..."
                    </p>
                </div>
            </div>
        </div>
    );
}