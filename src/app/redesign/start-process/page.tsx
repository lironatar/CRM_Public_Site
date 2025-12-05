"use client";

import Link from "next/link";
import styles from "@/styles/Redesign/StartProcess.module.css";

export default function StartProcessPage() {
    return (
        <main className={styles.container}>
            <div className={styles.backgroundEffects}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <div className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.title}>רגע לפני שמתחילים 🚀</h1>
                    <p className={styles.subtitle}>
                        כדי שהתהליך יהיה הכי מהיר ופשוט, הנה מה שקורה עכשיו:
                    </p>
                </header>

                <div className={styles.stepsContainer}>
                    {/* Step 1 */}
                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>📝</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>ממלאים פרטים</h3>
                            <p className={styles.stepDescription}>
                                שאלון קצר (כ-2 דקות) כדי שנבין איזה חשבונות צריך להעביר ולאן.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>📸</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>מכינים מסמכים</h3>
                            <p className={styles.stepDescription}>
                                כדאי להכין צילום ת.ז וחשבונות אחרונים (חשמל/ארנונה) אם יש.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={styles.stepCard}>
                        <div className={styles.iconWrapper}>💾</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>הכל נשמר</h3>
                            <p className={styles.stepDescription}>
                                אפשר לעצור ולהמשיך בכל שלב. המידע מאובטח ומוצפן ברמה הגבוהה ביותר.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaContainer}>
                    <Link href="/form" className={styles.primaryButton}>
                        <span>יאללה, בואו נתחיל</span>
                        <span className={styles.buttonIcon}>←</span>
                    </Link>

                    <div className={styles.secureNote}>
                        <span>🔒</span>
                        <span>המידע שלך מאובטח ומוצפן</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
