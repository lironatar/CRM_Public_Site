import styles from "@/styles/Redesign/Form.module.css";

interface StepScenarioProps {
    role: "owner" | "renter";
    selectedScenario?: string | null;
    onSelect: (scenario: string) => void;
}

export default function StepScenario({ role, selectedScenario, onSelect }: StepScenarioProps) {
    const options = role === "renter" ? [
        { id: "moving_in", title: "כניסה לדירה", icon: "📦", desc: "נכנס לדירה חדשה וצריך להעביר חשבונות" },
        { id: "moving_out", title: "יציאה מדירה", icon: "👋", desc: "עוזב דירה וצריך לנתק/להעביר חשבונות" },
    ] : [
        { id: "new_tenant", title: "חילופי דיירים", icon: "🔄", desc: "דיירים חדשים נכנסים לנכס שלי" },
        { id: "personal_move", title: "כניסה לנכס", icon: "🗝️", desc: "אני נכנס לגור בנכס שקניתי" },
    ];

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>מה הסטטוס?</h2>
            <p className={styles.subtitle}>ספרו לנו קצת יותר על המעבר</p>

            <div className={styles.grid}>
                {options.map((opt) => (
                    <div
                        key={opt.id}
                        className={`${styles.card} ${selectedScenario === opt.id ? styles.cardSelected : ""}`}
                        onClick={() => onSelect(opt.id)}
                    >
                        <span className={styles.cardIcon}>{opt.icon}</span>
                        <span className={styles.cardTitle}>{opt.title}</span>
                        <span className={styles.cardDesc}>{opt.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
