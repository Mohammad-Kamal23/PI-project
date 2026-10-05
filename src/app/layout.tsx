import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import { site, siteUrl } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

const title = `${site.name} | ${site.role}`;
const description = `${site.summary} Projects: APEX (selective prediction), GISLC, CropEye, automated document stamping.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.shortName}` },
  description,
  authors: [{ name: site.name, url: site.github }],
  keywords: ['AI engineer', 'computer vision', 'machine learning', 'selective prediction', 'APEX', 'Jordan', 'portfolio'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', title, description, siteName: site.name },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = { themeColor: '#060908', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
