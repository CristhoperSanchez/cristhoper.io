import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import styles from "@/css/utils.module.css"
import Link from "next/link"
import Footer from './components/footer'

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
        <div className={styles.nav}>
            <Link className={styles.navUser} href='/'>Cristhoper Sanchez</Link>
            <Link className={styles.navLink} href='/post'>Post</Link>
            <Link className={styles.navLink} href='/'>Home</Link>
            <Link className={styles.navLink} href='/code_ref'>Coding Refrences</Link>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
