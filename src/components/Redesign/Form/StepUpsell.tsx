import styles from "@/styles/Redesign/Form.module.css";

interface StepUpsellProps {
    accepted: boolean;
    onToggle: (accepted: boolean) => void;
}

export default function StepUpsell({ accepted, onToggle }: StepUpsellProps) {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>רוצים ראש שקט באמת?</h2>
            <p className={styles.subtitle}>הוסיפו את שירות ריכוז התשלומים שלנו</p>

            <div
                className={`${styles.card} ${accepted ? styles.cardSelected : ""} ${styles.border2} ${styles.borderDashed} ${styles.borderCyan500}`}
                onClick={() => onToggle(!accepted)}
            >
                <div className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween} ${styles.mb4}`}>
                    <span className={styles.cardIcon}>💳</span>
                    <div className={styles.textRight}>
                        <span className={`${styles.text2xl} ${styles.fontBold} ${styles.textSlate900}`}>12 ₪</span>
                        <span className={`${styles.textSm} ${styles.textSlate500}`}> / לחודש</span>
                    </div>
                </div>

                <h3 className={styles.cardTitle}>ריכוז תשלומים חכם</h3>
                <p className={styles.cardDesc}>
                    במקום לקבל חשבונות נפרדים ולפספס תשלומים, אנחנו מרכזים הכל במקום אחד.
                    אתם רואים בדיוק כמה יצא ומשלמים בקליק אחד.
                </p>

                <div className={`${styles.mt6} ${styles.flex} ${styles.itemsCenter} ${styles.gap3}`}>
                    <div className={`${styles.w6} ${styles.h6} ${styles.roundedFull} ${styles.border2} ${styles.borderCyan500} ${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.transitionColors} ${accepted ? styles.bgCyan500 : styles.bgTransparent}`}>
                        {accepted && <span className={`${styles.textWhite} ${styles.textSm}`}>✓</span>}
                    </div>
                    <span className={`${styles.fontBold} ${styles.textSlate700}`}>כן, אני רוצה להוסיף את השירות</span>
                </div>
            </div>
        </div>
    );
}
