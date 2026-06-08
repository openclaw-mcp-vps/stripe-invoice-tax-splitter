import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Tax Splitter — Split invoices by tax jurisdiction',
  description: 'Automatically split Stripe invoices across multiple tax jurisdictions for freelancers working with international clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="42c51dc5-bf47-4376-ab9f-8430f84549f2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
