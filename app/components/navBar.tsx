import styles from "@/css/utils.module.css"
import Link from "next/link"

import '@/css/test.css'



export default function NavBar(){
  return (
    <>
      <div className={styles.navMain}>
        <h2>Cristhoper Sanchez</h2>
        <div className={styles.navLinkColumn}>
            <Link className={styles.navLink} href='/'>Link</Link>
            <Link className={styles.navLink} href='/'>Link</Link>
            <Link className={styles.navLink} href='/'>Link</Link>
        </div>
       </div>
    </>
  )
}