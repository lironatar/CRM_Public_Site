"use client";

import styles from "@/styles/Redesign/AboutUs.module.css";

export default function AboutUs() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                    </span>
                    <h2 className={styles.title}>מי אנחנו</h2>
                    <p className={styles.description}>
                        בנינו את השירות הראשון בישראל שדואג לכם משלב המעבר ועד לניהול השוטף.
                        שני עולמות, קורת גג אחת.
                    </p>
                </div>

                <div className={styles.ecosystemGrid}>

                    {/* Card 1: The Core (Transfer) */}
                    <div className={`${styles.gridCard} ${styles.transferCard}`}>
                        <div className={styles.cardHeader}>
                            <span className={`${styles.cardBadge} ${styles.badgeTransfer}`}>
                                מעבר דירה
                            </span>
                            <h3 className={styles.cardTitle}>הצוות שלנו מעביר את הכל</h3>
                            <p className={styles.cardDesc}>
                                הצוות המקצועי שלנו דואג אישית להעברת החשבונות מול חברות החשמל, המים והארנונה.
                                אנחנו מטפלים בשבילכם, כדי שאתם לא תצטרכו.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={`${styles.iconCircle} ${styles.transferIcon}`}>
                                <div className={styles.pulseRing}></div>
                                <div className={styles.pulseRing}></div>
                                {/* Icon: Users/Team */}
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: The New Service (Management) */}
                    <div className={`${styles.gridCard} ${styles.managementCard}`}>
                        <div className={styles.newRibbon}>חדש!</div>
                        <div className={styles.cardHeader}>
                            <span className={`${styles.cardBadge} ${styles.badgeManage}`}>
                                ניהול שוטף
                            </span>
                            <h3 className={styles.cardTitle}>חשבונות מרוכזים<br />במקום אחד</h3>
                            <p className={styles.cardDesc}>
                                סיימתם לעבור? הצוות שלנו ממשיך לעבוד בשבילכם.
                                אנחנו אוספים, בודקים ומרכזים את כל החשבוניות שלכם באופן ידני, כדי שיהיה לכם שקט נפשי מלא.
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={`${styles.iconCircle} ${styles.manageIcon}`}>
                                <div className={styles.pulseRing}></div>
                                <div className={styles.pulseRing}></div>
                                {/* Icon: Pie Chart/Dashboard */}
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
