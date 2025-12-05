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
                        href="/redesign/start-process"
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
        </section>
    );
}
