"use client";

import Link from "next/link";
import styles from "@/styles/Redesign/Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundEffects}>
                <div className={styles.effectBlob1}></div>
                <div className={styles.effectBlob2}></div>
            </div>

            <div className={styles.container}>
                {/* Launch Badge */}


                <h1 className={styles.title}>
                    מעבירים את חשבונות הבית
                    <span className={styles.highlight}>בלי כאב ראש 🤯</span>
                </h1>

                <p className={styles.subtitle}>
                    <span>אנחנו נדאג להעביר את כל החשבונות (חשמל, מים, ארנונה, גז) על שמכם.</span>
                    <br />
                    <span>בלי להמתין על הקו, בלי להפסיד ימי עבודה ובלי פקסים ועצבים. פשוט ומהיר.</span>
                </p>

                <div className={styles.ctaContainer}>
                    <Link
                        href="/move"
                        className={styles.primaryButton}
                    >
                        התחילו את המעבר עכשיו
                    </Link>
                    <button className={styles.secondaryButton}>
                        צפו בדמו
                    </button>
                </div>

                {/* Trust Indicators */}
                <div className={styles.trustBadges}>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}>✓</span>
                        <span>תהליך מאובטח</span>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}>✓</span>
                        <span>ללא התחייבות</span>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}>✓</span>
                        <span>תוך 24 שעות</span>
                    </div>
                </div>
            </div>

            {/* Curved Divider */}
            <div className={styles.curveDivider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapeFill}></path>
                </svg>
            </div>
        </section>
    );
}
