"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Redesign/HowItWorks.module.css";

export default function HowItWorks() {
    const [progressHeight, setProgressHeight] = useState(0);

    const steps = [
        {
            number: "01",
            title: "מכינים מסמכים ותמונות",
            description: "מכינים תעודת זהות ומצלמים את השעונים (חשמל ומים).",
            icon: (
                <svg className={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            ),
        },
        {
            number: "02",
            title: "משלימים טופס אונליין",
            description: "מעלים את התמונות לטופס החכם ומשלימים פרטים ב-2 דקות.",
            icon: (
                <svg className={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            ),
        },
        {
            number: "03",
            title: "נשענים לאחור",
            description: "הצוות שלנו יבצע את כל החלפות המשלמים מול הספקים.",
            icon: (
                <svg className={styles.iconSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            ),
        },
    ];

    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);

                        // Calculate progress based on visible index
                        const index = Number(entry.target.getAttribute('data-index'));
                        // Fill up to this step
                        const newHeight = ((index + 1) / steps.length) * 100; // 33%, 66%, 100%
                        setProgressHeight(prev => Math.max(prev, newHeight));
                    }
                });
            },
            { threshold: 0.4 } // Wait until 40% visible to trigger next stage
        );

        stepRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.sectionBadge}>
                        תהליך פשוט
                    </span>
                    <h2 className={styles.title}>איך זה עובד?</h2>
                    <p className={styles.subtitle}>שלושה שלבים קצרים בדרך לשקט נפשי</p>
                </div>

                <div className={styles.timeline}>
                    {/* Background Track is CSS ::before */}

                    {/* Animated Progress Line */}
                    <div
                        className={styles.progressLine}
                        style={{ height: `${progressHeight}%` }}
                    ></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={styles.storyStep}
                            ref={(el) => { stepRefs.current[index] = el; }}
                        >
                            <div className={`${styles.timelineNode} ${progressHeight > (index * 30) ? styles.activeNode : ''}`}>
                                <div className={progressHeight > (index * 30) ? styles.ripple : ''}></div>
                            </div>

                            <div className={styles.storyCard}>
                                <div className={styles.stepBg}>{step.number}</div>

                                <div className={styles.iconWrapper}>
                                    {step.icon}
                                </div>

                                <div className={styles.content}>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
