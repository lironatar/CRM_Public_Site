import styles from "@/styles/Redesign/Form.module.css";

interface Step1Props {
    selectedServices: string[];
    onToggleService: (service: string) => void;
}

export default function Step1({ selectedServices, onToggleService }: Step1Props) {
    const services = [
        {
            id: "electricity",
            title: "חשמל",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            ),
            desc: "העברת חשבון מול חברת החשמל"
        },
        {
            id: "water",
            title: "מים",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
            ),
            desc: "עדכון צרכנים בתאגיד המים"
        },
        {
            id: "arnona",
            title: "ארנונה",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="9" y1="22" x2="9" y2="2"></line>
                    <path d="M5 12h14"></path>
                    <path d="M5 7h14"></path>
                    <path d="M5 17h14"></path>
                </svg>
            ),
            desc: "רישום בעירייה החדשה"
        },
        {
            id: "gas",
            title: "גז",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3.3.9.8 1.8 1.9 2.8z"></path>
                </svg>
            ),
            desc: "תיאום מול ספק הגז"
        },
    ];

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>במה נוכל לעזור?</h2>
            <p className={styles.subtitle}>בחרו את השירותים שתרצו שנטפל בהם עבורכם</p>

            <div className={styles.grid}>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`${styles.card} ${selectedServices.includes(service.id) ? styles.cardSelected : ""}`}
                        onClick={() => onToggleService(service.id)}
                    >
                        <span className={styles.cardIcon}>{service.icon}</span>
                        <span className={styles.cardTitle}>{service.title}</span>
                        <span className={styles.cardDesc}>{service.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
