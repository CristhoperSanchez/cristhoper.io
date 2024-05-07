"use client"
import { useEffect, useState } from "react";
import styles from "@/css/slider.module.css";

const DisplayTile = ({ content }) => {
    return (
        <div className={styles.display_tile}>
            <h2>{content}</h2>
        </div>
    );
};

export default function Slider() {
    // Initial slides, with duplicates at the start and end
    const originalSlides = ["One", "Two", "Three", "Four", "Five", "Six"];
    const duplicatedSlides = [
        ...originalSlides.slice(-2), // Take last two and add to start
        ...originalSlides,
        ...originalSlides.slice(0, 2) // Take first two and add to end
    ];
    const [slideIndex, setSlideIndex] = useState(2); // Start from the first original slide (after duplicates)

    const prevSlide = () => {
        if (slideIndex <= 2) {
            setSlideIndex(duplicatedSlides.length - 4);
            setTimeout(() => {
                setSlideIndex(duplicatedSlides.length - 4 - 1);
            }, 10); // Short timeout to ensure transition happens
        } else {
            setSlideIndex(prevIndex => prevIndex - 1);
        }
    };

    const nextSlide = () => {
        if (slideIndex >= duplicatedSlides.length - 3) {
            setSlideIndex(3);
            setTimeout(() => {
                setSlideIndex(4);
            }, 10); // Reset to the start of the original slides
        } else {
            setSlideIndex(prevIndex => prevIndex + 1);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.slider_wrapper} style={{
            transform: `translateX(-${(slideIndex * 100) / 3}%)`,
            transition: 'transform 0.5s ease-in-out'
        }}>
            {duplicatedSlides.map((slide, index) => (
                <DisplayTile key={index} content={slide} />
            ))}
        </div>
    );
}
