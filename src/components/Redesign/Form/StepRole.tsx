import styles from "@/styles/Redesign/Form.module.css";

interface StepRoleProps {
    selectedRole?: "owner" | "renter" | null;
    onSelect: (role: "owner" | "renter") => void;
}

export default function StepRole({ selectedRole, onSelect }: StepRoleProps) {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>מי אתם?</h2>
            <p className={styles.subtitle}>בחרו את האפשרות המתאימה ביותר</p>

            <div className={styles.grid}>
                <div
                    className={`${styles.card} ${selectedRole === "renter" ? styles.cardSelected : ""}`}
                    onClick={() => onSelect("renter")}
                >
                    <span className={styles.cardIcon}>🏠</span>
                    <span className={styles.cardTitle}>שוכר דירה</span>
                    <span className={styles.cardDesc}>
                        עובר לדירה שכורה או יוצא ממנה
                    </span>
                </div>

                <div
                    className={`${styles.card} ${selectedRole === "owner" ? styles.cardSelected : ""}`}
                    onClick={() => onSelect("owner")}
                >
                    <span className={styles.cardIcon}>🔑</span>
                    <span className={styles.cardTitle}>בעל נכס</span>
                    <span className={styles.cardDesc}>
                        קניתי דירה, מכרתי, או משכיר לאחרים
                    </span>
                </div>
            </div>
        </div>
    );
}
