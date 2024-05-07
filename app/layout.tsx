import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from "@/components/navbar"
import styles from "@/css/utils.module.css"
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cristhoper.io',
  description: 'Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.global_body}`}>
        <Navbar/>
        <div className={styles.content}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
