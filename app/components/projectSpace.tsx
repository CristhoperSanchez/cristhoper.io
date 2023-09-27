import styles from "@/css/utils.module.css"








function ProjectColumn(){
    return(
            <div className={styles.projectColumn}>
                <h2>Title</h2>
                <h3>Date</h3>
            </div>

    )
}





export default function ProjectSpace(){
    return(
        <>
            <ProjectColumn></ProjectColumn>
        </>
    )
}


