import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ICBM at DBI - Unlock Your Future',
  description: 'ICBM - Intelligent Capacity Building Model at DBI. Enroll today for job-ready training in BPO, Cybersecurity, AI, and Software Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 