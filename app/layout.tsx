import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ICBM at DBI - Unlock Your Future',
  description: 'ICBM - Intelligent Capacity Building Model at DBI. Enroll today for job-ready training in BPO, Cybersecurity, AI, and Software Development.',
  keywords: 'ICBM, DBI, Digital Bridge Institute, training, cybersecurity, AI, software development, BPO, Nigeria',
  authors: [{ name: 'DBI ICBM Team' }],
  creator: 'DBI ICBM Team',
  publisher: 'Digital Bridge Institute',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dbi.gov.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ICBM at DBI - Unlock Your Future',
    description: 'ICBM - Intelligent Capacity Building Model at DBI. Enroll today for job-ready training in BPO, Cybersecurity, AI, and Software Development.',
    url: 'https://dbi.gov.ng',
    siteName: 'ICBM at DBI',
    images: [
      {
        url: '/assets/dbi-abuja-campus1.jpg',
        width: 1200,
        height: 630,
        alt: 'ICBM at DBI - Professional Training',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICBM at DBI - Unlock Your Future',
    description: 'ICBM - Intelligent Capacity Building Model at DBI. Enroll today for job-ready training in BPO, Cybersecurity, AI, and Software Development.',
    images: ['/assets/dbi-abuja-campus1.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 