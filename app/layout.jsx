import './globals.css';
import { basePath, siteUrl } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ahmed Ismail | Backend Engineer',
  description:
    'Backend-focused full-stack developer from Egypt building scalable systems with Laravel, Spring Boot, microservices, DevOps, and clean architecture.',
  keywords: [
    'Ahmed Ismail',
    'Backend Engineer',
    'Laravel Developer',
    'Spring Boot Developer',
    'Full Stack Developer',
    'Microservices',
    'DevOps',
    'Egypt Developer'
  ],
  authors: [{ name: 'Ahmed Ismail' }],
  creator: 'Ahmed Ismail',
  openGraph: {
    title: 'Ahmed Ismail | Backend Engineer',
    description:
      'Scalable backend systems, clean architecture, APIs, Laravel, Spring Boot, and DevOps.',
    type: 'website',
    locale: 'en_US',
    images: [`${basePath}/assets/portrait.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ismail | Backend Engineer',
    description:
      'Backend-focused full-stack developer from Egypt building scalable systems.',
    images: [`${basePath}/assets/portrait.png`]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
