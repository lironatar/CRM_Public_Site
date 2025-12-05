import styles from '@/styles/HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className="container">
                <div className="title-section">
                    <h2>איך זה עובד?</h2>
                    <p>תהליך פשוט ומהיר ב-3 שלבים, בלי לצאת מהבית</p>
                </div>

                <div className={styles.steps}>
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>1</div>
                        <span className={styles.icon}>📝</span>
                        <h3 className={styles.stepTitle}>ממלאים פרטים</h3>
                        <p className={styles.stepDesc}>
                            בוחרים את השירות הרצוי (חשמל, מים, ארנונה או גז) וממלאים שאלון קצר של 2 דקות.
                        </p>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>2</div>
                        <span className={styles.icon}>📤</span>
                        <h3 className={styles.stepTitle}>מעלים מסמכים</h3>
                        <p className={styles.stepDesc}>
                            מצלמים ומעלים את המסמכים הנדרשים ישירות מהטלפון הנייד בצורה מאובטחת.
                        </p>
                    </div>

                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>3</div>
                        <span className={styles.icon}>🎉</span>
                        <h3 className={styles.stepTitle}>אנחנו מטפלים בהכל</h3>
                        <p className={styles.stepDesc}>
                            הצוות שלנו מבצע את כל הפעולות מול הרשויות ומעדכן אתכם כשהכל מוכן.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
