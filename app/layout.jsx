import './globals.css';
import { basePath, siteUrl } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ahmed Ismail | Software Engineer & Backend Engineer',
  description:
    'Backend-focused full-stack developer from Egypt building scalable systems with Laravel, Spring Boot, microservices, DevOps, and clean architecture.',
  keywords: [
    'Ahmed Ismail',
    'Backend Engineer',
    'Laravel Developer',
    'Spring Boot Developer',
    'Software Engineer',
    'Mid-Level Backend Developer',
    'Microservices',
    'DevOps',
    'Egypt Developer'
  ],
  authors: [{ name: 'Ahmed Ismail' }],
  creator: 'Ahmed Ismail',
  openGraph: {
    title: 'Ahmed Ismail | Software Engineer & Backend Engineer',
    description:
      'Scalable backend systems, clean architecture, APIs, Laravel, Spring Boot, and DevOps.',
    type: 'website',
    locale: 'en_US',
    images: [`${basePath}/assets/portrait.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ismail | Software Engineer & Backend Engineer',
    description:
      'Backend-focused full-stack developer from Egypt building scalable systems.',
    images: [`${basePath}/assets/portrait.png`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('ahmed-portfolio-theme');var preferred=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=saved||preferred;}catch(e){document.documentElement.dataset.theme='dark';}})();`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual';if(location.hash)history.replaceState(null,'',location.pathname+location.search);window.scrollTo(0,0);window.addEventListener('load',function(){window.scrollTo(0,0);},{once:true});}catch(e){}})();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
