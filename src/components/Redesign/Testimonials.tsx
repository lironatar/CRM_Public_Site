"use client";

import styles from "@/styles/Redesign/Testimonials.module.css";

const testimonials = [
    {
        name: "דניאל כהן",
        role: "הייטקיסט מתל אביב",
        text: "וואו! חסכתם לי כל כך הרבה כאב ראש. תוך יומיים הכל היה מסודר בלי שהייתי צריך לדבר עם אף נציג. השירות הכי יעיל שהשתמשתי בו במעבר הדירה.",
        stars: "★★★★★",
        featured: true
    },
    {
        name: "מיכל לוי",
        role: "סטודנטית",
        text: "השירות החדש של החשבוניות פשוט גאוני. אני רואה בדיוק כמה אני משלמת על הכל במקום אחד. ממליצה לכל החברים שלי.",
        stars: "★★★★★",
        featured: false
    },
    {
        name: "יוסי אברהמי",
        role: "אב לשלושה",
        text: "כשהזמן יקר, שירות כזה הוא הצלה. שווה כל שקל בשביל השקט הנפשי. הלוואי והייתי מכיר אתכם במעבר הקודם.",
        stars: "★★★★★",
        featured: false
    },
    {
        name: "נועה גולן",
        role: "מעצבת פנים",
        text: "העיצוב של האתר מדהים, אבל השירות אפילו יותר. פשוט, נקי ומהיר. חווית משתמש ברמה בינלאומית.",
        stars: "★★★★★",
        featured: false
    },
    {
        name: "איתי רז",
        role: "יזם",
        text: "לא האמנתי שזה כל כך קל. צילמתי, שלחתי, ושכחתי מזה. קיבלתי הודעה שהכל טופל. תענוג.",
        stars: "★★★★★",
        featured: false
    },
    {
        name: "שרה דוידוב",
        role: "פנסיונרית",
        text: "הצוות היה סבלני מאוד ועזר לי בכל שלב. תודה רבה על היחס האישי והחם.",
        stars: "★★★★★",
        featured: false
    }
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        WALL OF LOVE
                    </span>
                    <h2 className={styles.title}>מה הם אומרים.</h2>
                    <p className={styles.subtitle}>
                        בלי פילטרים. הלקוחות שלנו משתפים את החוויה.
                    </p>
                </div>

                <div className={styles.masonryGrid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.stars}>{item.stars}</div>
                                <div className={styles.verifiedBadge}>
                                    <span>✓</span> מאומת
                                </div>
                            </div>

                            <p className={styles.text}>{item.text}</p>

                            <div className={styles.author}>
                                <div className={styles.avatar}>{item.name.charAt(0)}</div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{item.name}</span>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
