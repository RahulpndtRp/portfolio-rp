// src/components/common/Layout.tsx
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-ai-dark text-white">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}