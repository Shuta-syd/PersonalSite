import './globals.css'
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'

export const metadata: Metadata = {
  title: 'Shuta Ogura',
  description: 'Shuta Ogura Personal Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='background'>{children}</body>
    </html>
  )
}
