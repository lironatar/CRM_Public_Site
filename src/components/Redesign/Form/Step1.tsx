import styles from "@/styles/Redesign/Form.module.css";

interface Step1Props {
    selectedServices: string[];
    onToggleService: (service: string) => void;
}

export default function Step1({ selectedServices, onToggleService }: Step1Props) {
    const services = [
        { id: "electricity", title: "חשמל", icon: "⚡", desc: "העברת חשבון מול חברת החשמל" },
        { id: "water", title: "מים", icon: "💧", desc: "עדכון צרכנים בתאגיד המים" },
        { id: "arnona", title: "ארנונה", icon: "🏛️", desc: "רישום בעירייה החדשה" },
        { id: "gas", title: "גז", icon: "🔥", desc: "תיאום מול ספק הגז" },
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
