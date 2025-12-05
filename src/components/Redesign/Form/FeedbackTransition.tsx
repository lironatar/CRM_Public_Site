"use client";

import { useEffect } from "react";
import styles from "@/styles/Redesign/Form.module.css";

interface FeedbackTransitionProps {
    show: boolean;
    message: string;
    onComplete: () => void;
}

export default function FeedbackTransition({ show, message, onComplete }: FeedbackTransitionProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onComplete();
            }, 2000); // Show feedback for 2 seconds

            return () => clearTimeout(timer);
        }
    }, [show, onComplete]);

    if (!show) return null;

    return (
        <div className={styles.feedbackOverlay}>
            <div className={styles.feedbackMessage}>
                {message}
            </div>
        </div>
    );
}
