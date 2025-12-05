import styles from "@/styles/Redesign/Form.module.css";

export default function Step3() {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>כמעט סיימנו!</h2>
            <p className={styles.subtitle}>נציג שלנו יצור איתך קשר בהקדם להשלמת התהליך</p>

            <div className={`${styles.textCenter} ${styles.py8}`}>
                <div className={`${styles.text6xl} ${styles.mb6}`}>🎉</div>
                <p className={`${styles.textSlate600} ${styles.textLg}`}>
                    הפרטים התקבלו בהצלחה. <br />
                    אנחנו כבר מתחילים לעבוד על המעבר שלך.
                </p>
            </div>
        </div>
    );
}
