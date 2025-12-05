import styles from "@/styles/Redesign/Form.module.css";

interface Step2Props {
    formData: any;
    onChange: (field: string, value: string) => void;
}

export default function Step2({ formData, onChange }: Step2Props) {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>פרטים אישיים</h2>
            <p className={styles.subtitle}>כדי שנוכל להתחיל בתהליך, אנחנו צריכים להכיר אתכם</p>

            <div className={styles.spaceY4}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>שם מלא</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={formData.fullName || ""}
                        onChange={(e) => onChange("fullName", e.target.value)}
                        placeholder="ישראל ישראלי"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>תעודת זהות</label>
                    <input
                        type="text"
                        className={styles.input}
                        value={formData.idNumber || ""}
                        onChange={(e) => onChange("idNumber", e.target.value)}
                        placeholder="000000000"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>טלפון נייד</label>
                    <input
                        type="tel"
                        className={styles.input}
                        value={formData.phone || ""}
                        onChange={(e) => onChange("phone", e.target.value)}
                        placeholder="050-0000000"
                    />
                </div>
            </div>
        </div>
    );
}
