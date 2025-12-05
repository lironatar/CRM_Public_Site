import styles from '@/styles/Benefits.module.css';

export default function Benefits() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="title-section">
                    <h2>למה לבחור בנו?</h2>
                    <p>אנחנו הופכים את הבירוקרטיה לחוויה פשוטה ונעימה</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>⏳</div>
                        <div className={styles.content}>
                            <h3>חוסכים לכם זמן יקר</h3>
                            <p>במקום להמתין שעות בטלפון או בתורים, אנחנו עושים את העבודה השחורה בשבילכם.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>💰</div>
                        <div className={styles.content}>
                            <h3>חוסכים לכם כסף</h3>
                            <p>אנחנו בודקים זכאות להנחות ומבטיחים שתשלמו את התעריף הנמוך ביותר האפשרי.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>🛡️</div>
                        <div className={styles.content}>
                            <h3>ביטחון ושקט נפשי</h3>
                            <p>המידע שלכם מאובטח ברמה הגבוהה ביותר והתהליך מבוצע על ידי מקצוענים.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>📱</div>
                        <div className={styles.content}>
                            <h3>הכל דיגיטלי ונגיש</h3>
                            <p>מכל מקום ובכל זמן, דרך המחשב או הנייד. בלי פקסים ובלי ניירת מיותרת.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
