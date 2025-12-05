import styles from "@/styles/Redesign/Features.module.css";

export default function Features() {
    const features = [
        {
            title: "העברת חשבונות בקליק",
            description: "אנחנו מעבירים את כל החשבונות (חשמל, מים, ארנונה, גז) על שמכם בכתובת החדשה. אנחנו דואגים לכל הבירוקרטיה מול הספקים.",
            icon: "⚡",
            iconClass: styles.blueIcon,
        },
        {
            title: "שקט נפשי",
            description: "במקום לבזבז שעות בהמתנה לנציגים, אתם ממלאים טופס אחד קצר ואנחנו עושים את כל העבודה השחורה בשבילכם.",
            icon: "🧘",
            iconClass: styles.purpleIcon,
        },
        {
            title: "חדש! ריכוז תשלומים",
            description: "רוצים לשלם את הכל במקום אחד? שירות חדש שמאפשר לראות את כל החשבונות ולשלם בקליק. (חצי שנה ראשונה חינם!)",
            icon: "🎁",
            iconClass: styles.greenIcon,
        },
    ];

    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        ✨ היתרונות שלנו
                    </span>
                    <h2 className={styles.title}>למה לבחור בנו?</h2>
                    <p className={styles.subtitle}>אנחנו הופכים את המעבר לחוויה פשוטה ונעימה</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${index === 2 ? styles.highlightCard : ''}`}
                        >
                            <div className={styles.cardContent}>
                                <div className={`${styles.iconWrapper} ${feature.iconClass}`}>
                                    {feature.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                                <p className={styles.cardDescription}>
                                    {feature.description}
                                </p>
                            </div>
                            <div className={styles.cardBackground}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
