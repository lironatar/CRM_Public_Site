"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Redesign/FloatingCTA.module.css";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div
            className={`${styles.floatingContainer} ${isVisible ? styles.visible : styles.hidden
                }`}
        >
            <Link
                href="/signup"
                className={styles.button}
            >
                הצטרפו עכשיו
            </Link>
        </div>
    );
}
