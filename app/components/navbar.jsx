'use client'
import styles from "@/css/globals.module.css"
import Link from "next/link";
import { useState,  useEffect } from 'react'

export default function Navbar(){
    const [prevScrollPos, setScrollPos] = useState(0);
    const [ visible, setVisible ] = useState(true);

    useEffect(() =>{
        const handleScroll = () =>{
            const currentScrollPos = window.pageYOffset;
            console.log("Scroll Position: ", currentScrollPos)
        }
    }, [prevScrollPos, visible])
    return (
        <nav className={styles.nav_wrapper} >
            <h2 className={styles.io_nav_heading}>Cristhoper Sanchez</h2>
            <div className={`${styles.nav_grid}  ${visible ? styles.nav_large : styles.nav_small} `}>
                <ul className={styles.navbar_item}>Home</ul>
                <ul className={styles.navbar_item}>Projects</ul>
                <ul className={styles.navbar_item}>
                    <Link href={"/FUC"}>FUC</Link>
                </ul>
            </div>
        </nav>
    )
}