import image from 'next/image'
import styles from '@/css/home.module.css'
import ProjectSpace from './components/projectSpace'


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.reel}>
          <ProjectSpace></ProjectSpace>
        </div>
      </main>
    </>
  )
}
