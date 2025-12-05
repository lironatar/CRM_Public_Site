import Link from "next/link";
import styles from "@/styles/Redesign/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <div className={styles.brandLogo}>
                            <span>נרשמים</span>
                            <span>בשבילך</span>
                        </div>
                        <p className={styles.brandDescription}>
                            אנחנו כאן כדי להפוך את מעבר הדירה וניהול החשבונות שלכם לפשוט, קל ונעים. בלי בירוקרטיה ובלי כאבי ראש.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>קישורים מהירים</h3>
                        <ul className={styles.links}>
                            <li><Link href="/">דף הבית</Link></li>
                            <li><Link href="/form">התחילו עכשיו</Link></li>
                            <li><Link href="/signup">הרשמה</Link></li>
                            <li><Link href="/login">התחברות</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h3>השירותים שלנו</h3>
                        <ul className={styles.links}>
                            <li><Link href="/form">העברת חשבונות</Link></li>
                            <li><Link href="/form">ריכוז תשלומים</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h3>צור קשר</h3>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>✉️</span>
                                <a href="mailto:support@example.com">support@example.com</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📱</span>
                                <a href="tel:*1234">*1234</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span>ראשון לציון, ישראל</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} נרשמים בשבילך. כל הזכויות שמורות.
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">מדיניות פרטיות</Link>
                        <Link href="/terms">תנאי שימוש</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
