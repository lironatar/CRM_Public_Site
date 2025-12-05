import styles from "@/styles/Redesign/Form.module.css";

interface StepPackageProps {
    selectedPackage: "full" | "custom" | null;
    onSelect: (pkg: "full" | "custom") => void;
}

export default function StepPackage({ selectedPackage, onSelect }: StepPackageProps) {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>בואו נתחיל!</h2>
            <p className={styles.subtitle}>איזה סוג של מעבר אתם צריכים?</p>

            <div className={styles.grid}>
                <div
                    className={`${styles.card} ${selectedPackage === "full" ? styles.cardSelected : ""}`}
                    onClick={() => onSelect("full")}
                >
                    <span className={styles.cardIcon}>🚀</span>
                    <span className={styles.cardTitle}>הכל כלול - 250 ₪</span>
                    <span className={styles.cardDesc}>
                        אנחנו מעבירים את **כל** החשבונות (חשמל, מים, ארנונה, גז) עבורכם.
                        <br />
                        <span className={`${styles.textSm} ${styles.textCyan600} ${styles.fontBold} ${styles.mt4} ${styles.block}`}>הכי משתלם!</span>
                    </span>
                </div>

                <div
                    className={`${styles.card} ${selectedPackage === "custom" ? styles.cardSelected : ""}`}
                    onClick={() => onSelect("custom")}
                >
                    <span className={styles.cardIcon}>🛠️</span>
                    <span className={styles.cardTitle}>חבילה מותאמת - 200 ₪</span>
                    <span className={styles.cardDesc}>
                        בחרו 2 שירותים ספציפיים שאתם צריכים עזרה איתם.
                    </span>
                </div>
            </div>
        </div>
    );
}
