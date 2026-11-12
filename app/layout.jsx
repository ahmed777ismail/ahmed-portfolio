import './globals.css';
import { basePath, siteUrl } from '@/lib/site';
import { LanguageProvider } from '@/components/LanguageContext';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ahmed Ismail | Full-Stack Web & DevOps Engineer',
  description:
    'Ahmed Ismail is a Cairo-based Full-Stack Web & DevOps Engineer specializing in Next.js, React, Laravel, Docker, automated CI/CD, MySQL, and sub-second performance.',
  keywords: [
    'Ahmed Ismail',
    'Full-Stack Web Developer',
    'DevOps Engineer',
    'Next.js Developer',
    'React Developer',
    'Laravel Developer',
    'Docker',
    'CI/CD Pipelines',
    'Cairo Egypt Developer'
  ],
  authors: [{ name: 'Ahmed Ismail' }],
  creator: 'Ahmed Ismail',
  openGraph: {
    title: 'Ahmed Ismail | Full-Stack Web & DevOps Engineer',
    description:
      'High-performance full-stack web platforms, containerized environments, automated CI/CD pipelines, and Clean Architecture.',
    type: 'website',
    locale: 'en_US',
    images: [`${basePath}/assets/portrait.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ismail | Full-Stack Web & DevOps Engineer',
    description:
      'Full-Stack Web & DevOps Engineer from Cairo building resilient products that scale.',
    images: [`${basePath}/assets/portrait.png`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#F7F7F7] text-[#262626]" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f7f7f7" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);}catch(e){}try{var savedLang=localStorage.getItem('ahmed_portfolio_lang');if(savedLang==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl';}else{document.documentElement.lang='en';document.documentElement.dir='ltr';}}catch(e){}})();`
          }}
        />
      </head>
      <body className="bg-[#F7F7F7] text-[#262626] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
