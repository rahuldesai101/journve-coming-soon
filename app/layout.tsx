import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Journve – Smart Travel Planner, Expense Tracker & Trip Journal',
  description: 'Journve is your all-in-one travel companion. Plan your trip, manage expenses, split costs, journal memories, and run your journey with powerful travel tools.',
  keywords: [
    'travel planner', 'trip planning', 'travel organizer', 'vacation planner', 'travel itinerary', 'travel app', 'travel companion', 'travel management', 'travel expense tracker', 'trip budget', 'expense splitting', 'travel budget planner', 'group expense sharing', 'travel cost calculator', 'travel journal', 'trip diary', 'travel memories', 'vacation journal', 'travel blog', 'trip documentation', 'solo travel', 'group travel', 'travel tips', 'travel guide', 'travel planning tools', 'smart travel', 'travel technology'
  ],
  authors: [{ name: 'Journve', url: 'https://www.journve.com/' }],
  creator: 'Journve',
  robots: 'index, follow',
  generator: 'Journve',
  applicationName: 'Journve',
  metadataBase: new URL('https://www.journve.com/'),
  openGraph: {
    type: 'website',
    url: 'https://www.journve.com/',
    title: 'Journve – Plan, Track & Remember Every Trip',
    description: 'The ultimate travel planning and journaling tool. Track expenses, split bills, document your journey, and explore smarter with Journve.',
    siteName: 'Journve',
    images: [
      {
        url: 'https://www.journve.com/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Journve – Plan, Track & Remember Every Trip',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@journve',
    title: 'Journve – Smart Travel Planner & Expense Tracker',
    description: 'Plan your trips with precision. Track travel budgets, split expenses with friends, and document unforgettable memories — all in one travel OS.',
    images: ['https://www.journve.com/og-cover.jpg'],
  },
  alternates: {
    canonical: 'https://www.journve.com/',
  },
  icons: {
    icon: '/journve-logo.png',
    shortcut: '/journve-logo.png',
    apple: '/journve-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
