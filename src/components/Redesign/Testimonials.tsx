import styles from "@/styles/Redesign/Testimonials.module.css";

export default function Testimonials() {
    const testimonials = [
        {
            name: "דניאל כהן",
            role: "עבר דירה לתל אביב",
            text: "וואו! חסכתם לי כל כך הרבה כאב ראש. תוך יומיים הכל היה מסודר בלי שהייתי צריך לדבר עם אף נציג.",
            stars: "★★★★★",
        },
        {
            name: "מיכל לוי",
            role: "סטודנטית בבאר שבע",
            text: "השירות של ריכוז התשלומים פשוט גאוני. אני רואה בדיוק כמה אני משלמת על הכל במקום אחד.",
            stars: "★★★★★",
        },
        {
            name: "יוסי אברהמי",
            role: "משפחה בחיפה",
            text: "ממליץ בחום! שירות מהיר, יעיל ומקצועי. שווה כל שקל בשביל השקט הנפשי.",
            stars: "★★★★★",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.sectionBadge}>
                    ⭐ המלצות
                </span>
                <h2 className={styles.title}>מה הלקוחות שלנו אומרים?</h2>
                <p className={styles.subtitle}>מצטרפים לאלפי לקוחות מרוצים שכבר נהנים משקט נפשי</p>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stars}>{item.stars}</div>
                            <p className={styles.text}>{item.text}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.role}>{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof Stats */}
                <div className={styles.socialProof}>
                    <div className={styles.proofItem}>
                        <span className={styles.proofNumber}>2,500+</span>
                        <span className={styles.proofLabel}>לקוחות מרוצים</span>
                    </div>
                    <div className={styles.proofItem}>
                        <span className={styles.proofNumber}>4.9</span>
                        <span className={styles.proofLabel}>דירוג ממוצע</span>
                    </div>
                    <div className={styles.proofItem}>
                        <span className={styles.proofNumber}>24h</span>
                        <span className={styles.proofLabel}>זמן טיפול ממוצע</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
