"use client";

import { useState } from 'react';
import styles from '@/styles/FAQ.module.css';

const faqs = [
    {
        question: "כמה זמן לוקח התהליך?",
        answer: "רוב הבקשות מטופלות תוך 24-48 שעות. במקרים מורכבים יותר, אנחנו נעדכן אתכם בכל שלב בדרך."
    },
    {
        question: "האם השירות כרוך בתשלום?",
        answer: "ההרשמה והבדיקה הראשונית הן ללא עלות. גביית תשלום תתבצע רק במקרה של הצלחה בהוזלת עלויות או ביצוע פעולות מורכבות, וזאת בשקיפות מלאה מראש."
    },
    {
        question: "אילו מסמכים צריך להכין?",
        answer: "בדרך כלל נדרש צילום תעודת זהות וחשבון אחרון של השירות המבוקש (חשמל/מים/ארנונה). המערכת תנחה אתכם בדיוק מה להעלות."
    },
    {
        question: "האם המידע שלי מאובטח?",
        answer: "בהחלט. אנחנו משתמשים בטכנולוגיות ההצפנה המתקדמות ביותר כדי לשמור על הפרטיות והמידע האישי שלכם."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="title-section">
                    <h2>שאלות נפוצות</h2>
                    <p>כל מה שרציתם לדעת על השירות שלנו</p>
                </div>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleIndex(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <span className={styles.icon}>+</span>
                            </button>
                            <div className={styles.answer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
