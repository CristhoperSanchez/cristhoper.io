import styles from '@/css/utils.module.css'
export default function Page({ params }: { params: { slug: string } }) {
    return <h2>My Post: {params.slug}</h2>
  }