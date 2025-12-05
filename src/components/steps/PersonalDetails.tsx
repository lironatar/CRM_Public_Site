import styles from '@/styles/Form.module.css';

interface PersonalDetailsProps {
    formData: any;
    onChange: (field: string, value: string) => void;
}

export default function PersonalDetails({ formData, onChange }: PersonalDetailsProps) {
    return (
        <div className={styles.formContent}>
            <h2 className={styles.title}>פרטים אישיים</h2>
            <p className={styles.description}>מלאו את פרטיכם כדי שנוכל ליצור קשר</p>

            <div className={styles.inputGroup}>
                <label className={styles.label}>שם מלא</label>
                <input
                    type="text"
                    className={styles.input}
                    value={formData.fullName || ''}
                    onChange={(e) => onChange('fullName', e.target.value)}
                    placeholder="ישראל ישראלי"
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>תעודת זהות</label>
                <input
                    type="text"
                    className={styles.input}
                    value={formData.idNumber || ''}
                    onChange={(e) => onChange('idNumber', e.target.value)}
                    placeholder="000000000"
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>טלפון</label>
                <input
                    type="tel"
                    className={styles.input}
                    value={formData.phone || ''}
                    onChange={(e) => onChange('phone', e.target.value)}
                    placeholder="050-0000000"
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>אימייל</label>
                <input
                    type="email"
                    className={styles.input}
                    value={formData.email || ''}
                    onChange={(e) => onChange('email', e.target.value)}
                    placeholder="example@email.com"
                />
            </div>
        </div>
    );
}
