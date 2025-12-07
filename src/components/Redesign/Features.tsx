import styles from "@/styles/Redesign/Features.module.css";

export default function Features() {
    const features = [
        {
            title: "העברת חשבונות בקליק",
            description: "אנחנו מעבירים את כל החשבונות (חשמל, מים, ארנונה, גז) על שמכם בכתובת החדשה. אנחנו דואגים לכל הבירוקרטיה מול הספקים.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            ),
            iconClass: styles.blueIcon,
        },
        {
            title: "שקט נפשי",
            description: "במקום לבזבז שעות בהמתנה לנציגים, אתם ממלאים טופס אחד קצר ואנחנו עושים את כל העבודה השחורה בשבילכם.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
            ),
            iconClass: styles.purpleIcon,
        },
        {
            title: "חדש! ריכוז תשלומים",
            description: "רוצים לשלם את הכל במקום אחד? שירות חדש שמאפשר לראות את כל החשבונות ולשלם בקליק. (חצי שנה ראשונה חינם!)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
            ),
            iconClass: styles.greenIcon,
        },
    ];

    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        היתרונות שלנו
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
