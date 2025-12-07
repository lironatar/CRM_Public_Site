import styles from "@/styles/Redesign/AboutUs.module.css";

export default function AboutUs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        אנחנו נרשמים בשבילך
                    </span>
                    <h2 className={styles.title}>מי אנחנו?</h2>
                    <p className={styles.description}>
                        אנחנו החברה המובילה בישראל לטיפול בבירוקרטיה של מעברי דירה.
                        המטרה שלנו פשוטה: להפוך את המעבר שלכם לקל, מהיר וללא כאבי ראש.
                        אנחנו דואגים להעברת כל המשלמים (חשמל, מים, ארנונה וגז) בצורה מאובטחת ויעילה.
                    </p>
                </div>

                {/* New Technology Highlight */}
                <div className={styles.techCard}>
                    <div className={styles.techContent}>
                        <span className={styles.techBadge}>חדש!</span>
                        <h3 className={styles.techTitle}>טכנולוגיה המרכזת את הכל במקום אחד</h3>
                        <p className={styles.techDesc}>
                            פיתחנו מערכת חכמה המאפשרת לכם לראות ולנהל את כל חשבונות הבית החדש שלכם
                            בממשק אחד נוח, שקוף ודיגיטלי.
                        </p>

                        <div className={styles.iconGrid}>
                            {/* Dashboard Icon */}
                            <svg className={styles.techIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="9"></rect>
                                <rect x="14" y="3" width="7" height="5"></rect>
                                <rect x="14" y="12" width="7" height="9"></rect>
                                <rect x="3" y="16" width="7" height="5"></rect>
                            </svg>
                            {/* Link/Sync Icon */}
                            <svg className={styles.techIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
