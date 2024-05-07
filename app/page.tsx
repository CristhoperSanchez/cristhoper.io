import image from 'next/image'
import Slider from "@/components/slider"
import styles from '@/css/home.module.css'


export default function Home() {
  return (
    <>
        <div className={styles.reel}>
          <Slider/>
        </div>
    </>
  )
}
