import image from 'next/image'
import styles from '@/css/home.module.css'
import NavBar from './components/navBar'
import ProjectSpace from './components/projectSpace'


export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className={styles.main}>
        <div className={styles.reel}>
          <ProjectSpace></ProjectSpace>
        </div>
      </main>
    </>
  )
}
