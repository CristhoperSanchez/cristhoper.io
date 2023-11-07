/* CODING REFS PAGE */ 
import Gstyles from '@/css/global_styles.module.css'
import styles from '@/css/coding_refs.module.css'









function Tiles({params}){
    return(
        <div className={styles.tile}>
            <h2>Tile</h2>
            <p>information</p>
        </div>

    )
}



export default function Page(){
    return (
        <>
            <div className={styles.CreateRef}>
                <h2>New Post</h2>
                <button className={Gstyles.button_standard}>New Post</button>
            </div>

            <div className={styles.header}>
                <h2>Coding Space</h2>
            </div>
            <div className={styles.tile_space}>
                <Tiles></Tiles>

            </div>
        </>
    )
}