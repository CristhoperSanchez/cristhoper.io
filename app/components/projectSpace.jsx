'use client'
import styles from "@/css/utils.module.css";
import { useState } from "react";
import Posts from '../lib/data';





function ProjectColumn({title, date, description}){
   const [hovered, setHovered] = useState(false) 
    return(

            <div className={`${styles.projectColumn} ${hovered ? styles.projectColumnActive: ''}`}
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
            >
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p className={`${styles.description} ${hovered ? styles.Active: ''}`}>{description}</p>
            </div>

    )
}


export default function ProjectSpace(){
    const [hovered, handleHover] = useState(false);
    var title = Object.keys(Posts[0])
    var data = Posts
    data.map((item,index) =>{
        var title = Object.keys(item)
        var item =  item[title]
    })
    return(
        <>
        <div>
            {data.map((object, index)=>{
                var title = Object.keys(object);
                var item = object[title]
                console.log(item)
                return <ProjectColumn key={index} title={title} date={item.date} description={item.description}/>
            })}

        </div>
        </>
    )
}


