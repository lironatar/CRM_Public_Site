import styles from "@/styles/Redesign/HowItWorks.module.css";

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "ממלאים פרטים",
            description: "ממלאים פרטים אישיים ומצרפים מסמכים (תעודת זהות, חוזה, צילום מונה). הכל מהנייד, ב-5 דקות.",
            icon: "📱",
        },
        {
            number: "2",
            title: "אנחנו עובדים בשבילכם",
            description: "אנחנו יוצרים קשר עם כל הספקים (חשמל, מים, גז, ארנונה) ומבצעים את החלפת המשלמים עבורכם.",
            icon: "⚙️",
        },
        {
            number: "3",
            title: "זהו, הכל מוכן!",
            description: "תקבלו מאיתנו אישור שהכל עבר בהצלחה. בלי להמתין דקה אחת על הקו.",
            icon: "✨",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        🚀 פשוט ומהיר
                    </span>
                    <h2 className={styles.title}>איך זה עובד?</h2>
                    <p className={styles.subtitle}>שלושה שלבים פשוטים לחיים בלי בירוקרטיה</p>
                </div>

                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        מוכנים להתחיל? זה לוקח <strong>פחות מ-5 דקות</strong> ⚡
                    </p>
                </div>
            </div>
        </section>
    );
}
