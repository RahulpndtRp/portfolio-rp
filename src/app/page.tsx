

// src/app/page.tsx
import React from 'react';
import { Layout } from '@/components/common/Layout';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { Resume } from '@/components/sections/Resume';
import { AIChatbot } from '@/components/ui/AIChatbot';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Resume />
      <AIChatbot />
    </Layout>
  );
}
