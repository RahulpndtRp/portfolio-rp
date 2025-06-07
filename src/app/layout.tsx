// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Rahul Pandey | Data Scientist & AI Engineer - NVIDIA Hackathon Winner 2024',
  description: 'Experienced Data Scientist & AI Engineer with 4+ years in Machine Learning, Generative AI, and Multi-Agent Systems. NVIDIA AI NIM Hackathon Winner 2024. Expert in LangChain, RAG pipelines, and enterprise AI solutions serving 150+ clients.',
  keywords: [
    'Rahul Pandey',
    'Data Scientist',
    'AI Engineer',
    'Machine Learning',
    'Generative AI',
    'NVIDIA Hackathon Winner',
    'LangChain',
    'Multi-Agent Systems',
    'RAG Pipelines',
    'Python',
    'AWS',
    'Azure',
    'TensorFlow',
    'PyTorch',
    'LLM',
    'NLP',
    'Deep Learning',
    'MLOps',
    'Artificial Intelligence'
  ],
  authors: [{ name: 'Rahul Pandey', url: 'https://github.com/RahulpndtRp' }],
  creator: 'Rahul Pandey',
  publisher: 'Rahul Pandey',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfoliorp.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfoliorp.vercel.app',
    title: 'Rahul Pandey | Data Scientist & AI Engineer - NVIDIA Hackathon Winner 2024',
    description: 'Experienced Data Scientist & AI Engineer with 4+ years in Machine Learning, Generative AI, and Multi-Agent Systems. NVIDIA AI NIM Hackathon Winner 2024.',
    siteName: 'Rahul Pandey Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rahul Pandey - Data Scientist & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Pandey | Data Scientist & AI Engineer',
    description: 'NVIDIA AI NIM Hackathon Winner 2024 • 4+ years in AI/ML • Expert in Generative AI & Multi-Agent Systems',
    images: ['/og-image.png'],
    creator: '@rahulpndtrp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code when available
  },
  category: 'portfolio',
  classification: 'Data Science, Artificial Intelligence, Machine Learning',
  other: {
    'theme-color': '#00D4FF',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  }
};

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rahul Pandey',
  jobTitle: 'Data Scientist & AI Engineer',
  description: 'Experienced Data Scientist & AI Engineer with 4+ years in Machine Learning, Generative AI, and Multi-Agent Systems. NVIDIA AI NIM Hackathon Winner 2024.',
  url: 'https://portfoliorp.vercel.app',
  image: 'https://portfoliorp.vercel.app/images/rahul-photo.jpg',
  email: 'pyrahulpndt@gmail.com',
  telephone: '+91 9473961497',
  sameAs: [
    'https://github.com/RahulpndtRp',
    'https://www.linkedin.com/in/rp-rahulpandey/',
    'https://twitter.com/rahulpndtrp'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Accenture',
    url: 'https://www.accenture.com'
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI/ML Computational Science Analyst',
    occupationLocation: {
      '@type': 'Place',
      name: 'India'
    },
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Multi-Agent Systems',
      'LangChain',
      'Python',
      'AWS',
      'Azure',
      'TensorFlow',
      'PyTorch'
    ]
  },
  award: [
    'NVIDIA AI NIM Hackathon Winner 2024',
    'Databricks Certified Machine Learning Associate'
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Data Science',
    'MLOps',
    'Cloud Computing'
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ai-blue text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content">
          {children}
        </main>

        {/* Analytics Script */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simple performance monitoring
              window.addEventListener('load', function() {
                if ('performance' in window) {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}