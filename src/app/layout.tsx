import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arizona Flair',
  description: 'Rent a waving tube man ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <link href="https://fonts.gstatic.com/s/capriola/v14/wXKoE3YSppcvo1PDlk_1JeESnA.woff2" rel="stylesheet" />
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Graduate&display=swap"
        />
         <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Capriola&display=swap'></link>
        {children}</body>
    </html>
  )
}
