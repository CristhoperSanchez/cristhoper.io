import image from 'next/image'
import styles from '@/css/home.module.css'
import ProjectSpace from './components/projectSpace.jsx'


export default function Home() {
  return (
    <>
        <div className={styles.reel}>
          <ProjectSpace/>
        </div>
    </>
  )
}
