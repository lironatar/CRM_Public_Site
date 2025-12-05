import Link from "next/link";
import styles from "@/styles/Redesign/Pricing.module.css";

export default function Pricing() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.sectionBadge}>
                    💰 מחירים שקופים
                </span>
                <h2 className={styles.title}>חבילות ומחירים</h2>
                <p className={styles.subtitle}>
                    בחרו את המסלול המדויק עבורכם
                </p>

                <div className={styles.grid}>
                    {/* Custom Package */}
                    <div className={styles.card}>
                        <div className={styles.planName}>חבילה מותאמת</div>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>200</span>
                            <span className={styles.currency}>₪</span>
                        </div>
                        <p className={`${styles.textSlate500} ${styles.mb6}`}>עבור 2 שירותים לבחירה</p>

                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                בחירה של 2 ספקים
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                טיפול בבירוקרטיה
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                עדכון כתובת מהיר
                            </li>
                        </ul>

                        <Link href="/form" className={styles.primaryButton}>
                            אני רוצה את זה
                        </Link>
                    </div>

                    {/* Full Package */}
                    <div className={`${styles.card} ${styles.popularCard}`}>
                        <div className={styles.badge}>הכי משתלם!</div>
                        <div className={styles.planName}>הכל כלול</div>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>250</span>
                            <span className={styles.currency}>₪</span>
                            <span className={styles.originalPrice}>325 ₪</span>
                        </div>
                        <p className={`${styles.textSlate500} ${styles.mb6}`}>העברת כל החשבונות</p>

                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <strong>כל הספקים (חשמל, מים, ארנונה, גז)</strong>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                טיפול מלא בבירוקרטיה
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                תמיכה אישית בוואטסאפ
                            </li>
                            <li className={`${styles.featureItem} ${styles.mt4} ${styles.pt4} ${styles.borderT}`}>
                                <span className={`${styles.textLime600} ${styles.fontBold}`}>+</span>
                                <span>אופציה להוספת ריכוז תשלומים ב-12 ₪/חודש</span>
                            </li>
                        </ul>

                        <Link href="/form" className={styles.accentButton}>
                            מתקדמים להרשמה
                        </Link>
                    </div>
                </div>

                {/* Payment Concentration Upsell Section */}
                <div className={styles.upsellSection}>
                    <div className={styles.upsellContent}>
                        <div className={styles.upsellHeader}>
                            <span className={styles.newBadge}>חדש!</span>
                            <h3 className={styles.upsellTitle}>שירות ריכוז תשלומים</h3>
                        </div>
                        <p className={styles.upsellDescription}>
                            כל החשבונות במקום אחד. ראו, עקבו ושלמו בקליק אחד.
                        </p>
                        <div className={styles.upsellBenefits}>
                            <div className={styles.upsellBenefit}>
                                <span className={styles.checkIcon}>✓</span>
                                טיפול מלא מול כל הספקים
                            </div>
                            <div className={styles.upsellBenefit}>
                                <span className={styles.checkIcon}>✓</span>
                                אנחנו כאן בשבילכם לכל שאלה
                            </div>
                            <div className={styles.upsellBenefit}>
                                <span className={styles.giftIcon}>🎁</span>
                                <strong>חצי שנה ראשונה חינם!</strong>
                            </div>
                        </div>
                    </div>
                    <div className={styles.upsellAction}>
                        <Link href="/form" className={styles.upsellButton}>
                            אני רוצה לנסות
                        </Link>
                        <p className={styles.upsellNote}>*השירות ניתן לביטול בכל עת</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
