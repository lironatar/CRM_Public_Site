"use client";

import { useState } from "react";
import styles from "@/styles/Redesign/FAQ.module.css";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "מה ההבדל בין העברת חשבונות לריכוז תשלומים?",
            answer: "העברת חשבונות היא פעולה חד פעמית של עדכון הספקים (חשמל, מים וכו') בכתובת החדשה שלכם. ריכוז תשלומים הוא שירות שוטף שמאפשר לכם לראות ולשלם את כל החשבונות במקום אחד נוח.",
        },
        {
            question: "כמה זמן לוקח התהליך?",
            answer: "אנחנו מתחילים לעבוד מיד עם קבלת הפרטים. בדרך כלל, רוב העדכונים מסתיימים תוך 2-3 ימי עסקים.",
        },
        {
            question: "האם זה מאובטח?",
            answer: "בהחלט. אנחנו משתמשים בתקני האבטחה המחמירים ביותר כדי לשמור על הפרטים האישיים והפיננסיים שלכם.",
        },
        {
            question: "מה קורה אם יש בעיה מול אחד הספקים?",
            answer: "אנחנו כאן בשבילכם! הצוות שלנו יטפל בכל בעיה מול הספק עד לפתרון מלא, כדי שאתם לא תצטרכו להמתין על הקו.",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        ❓ שאלות נפוצות
                    </span>
                    <h2 className={styles.title}>יש לכם שאלות?</h2>
                    <p className={styles.subtitle}>התשובות לכל מה שרציתם לדעת</p>
                </div>

                <div className={styles.spaceY4}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggle(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>▼</span>
                            </button>
                            {openIndex === index && (
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.contactCta}>
                    <p>לא מצאתם תשובה? <strong>דברו איתנו בוואטסאפ</strong></p>
                </div>
            </div>
        </section>
    );
}
