import Link from 'next/link';
import { Metadata } from 'next';
import styles from './move.module.css';

export const metadata: Metadata = {
    title: 'מעבר דירה - נרשמים בשבילך',
    description: 'מעבר דירה? אנחנו נטפל בכל העברת חשבונות החשמל, המים, הארנונה והגז במקומך',
};

export default function MovePage() {
    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            שירות חדש
                        </div>

                        <h1 className={styles.heroTitle}>
                            מעבר דירה <span className={styles.highlight}>ללא מאמץ</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            אנחנו נדאג להעביר את כל חשבונות הבית שלכם לדירה החדשה במקומכם -
                            חשמל, מים, ארנונה וגז. פשוט, מהיר ובטוח.
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>⚡</span>
                                <span>טיפול מלא בכל החשבונות</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🔒</span>
                                <span>מידע מאובטח ומוצפן</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>⏱️</span>
                                <span>תוך 24-48 שעות</span>
                            </div>
                        </div>

                        <Link href="/move/form" className={styles.ctaButton}>
                            התחילו עכשיו - זה בחינם
                            <span className={styles.btnArrow}>←</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className={styles.howSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>איך זה עובד?</h2>
                    <p className={styles.sectionSubtitle}>3 שלבים פשוטים ואתם מוכנים</p>

                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepIcon}>📋</div>
                            <h3>מלאו פרטים</h3>
                            <p>בחרו את השירותים שרוצים להעביר ומלאו את הפרטים הבסיסיים שלכם</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepIcon}>📤</div>
                            <h3>העלו מסמכים</h3>
                            <p>צלמו את תעודת הזהות והחשבון האחרון ישירות מהטלפון</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepIcon}>✨</div>
                            <h3>אנחנו מטפלים בשאר</h3>
                            <p>הצוות המקצועי שלנו מבצע את כל העדכונים מול הרשויות</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Handle Section */}
            <section className={styles.servicesSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>במה אנחנו מטפלים?</h2>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>⚡</div>
                            <h3>חשמל</h3>
                            <ul className={styles.serviceList}>
                                <li>העברת חשבון על שם המשכיר החדש</li>
                                <li>בדיקת תעריף אופטימלי</li>
                                <li>סגירת חשבון בדירה הישנה</li>
                            </ul>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>💧</div>
                            <h3>מים</h3>
                            <ul className={styles.serviceList}>
                                <li>עדכון מספר נפשות במשק הבית</li>
                                <li>החלפת שם בעל החשבון</li>
                                <li>קריאת מונה אחרונה</li>
                            </ul>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🏢</div>
                            <h3>ארנונה</h3>
                            <ul className={styles.serviceList}>
                                <li>רישום כמחזיק בנכס החדש</li>
                                <li>בדיקת זכאות להנחות</li>
                                <li>עדכון סיום החזקה בנכס הישן</li>
                            </ul>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>🔥</div>
                            <h3>גז</h3>
                            <ul className={styles.serviceList}>
                                <li>החלפת שם בעל החשבון</li>
                                <li>תיאום בדיקת בטיחות</li>
                                <li>פתיחת חשבון בחברת הגז</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className={styles.trustSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>למה לסמוך עלינו?</h2>
                    <div className={styles.trustGrid}>
                        <div className={styles.trustCard}>
                            <div className={styles.trustIcon}>✓</div>
                            <h3>ללא עלות נסתרת</h3>
                            <p>השירות שקוף ובטוח - אתם משלמים רק עבור הטיפול המקצועי</p>
                        </div>
                        <div className={styles.trustCard}>
                            <div className={styles.trustIcon}>👥</div>
                            <h3>אלפי לקוחות מרוצים</h3>
                            <p>למעלה מ-2,000 משפחות כבר עברו דירה איתנו בקלות ובביטחון</p>
                        </div>
                        <div className={styles.trustCard}>
                            <div className={styles.trustIcon}>🏆</div>
                            <h3>מקצוענות ומהירות</h3>
                            <p>צוות מנוסה שמכיר את כל התהליכים הבירוקרטיים ודואג לטפל בהכל</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>מוכנים להתחיל?</h2>
                        <p>הצטרפו למשפחות שכבר מתנהלות בקלות</p>
                        <Link href="/move/form" className={styles.ctaButton}>
                            התחילו עכשיו - חינם
                            <span className={styles.btnArrow}>←</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
