"use client";

import { useState } from "react";
import styles from "@/styles/Redesign/Form.module.css";
import LevelOne from "./LevelOne";
import Step1 from "./Step1";
import StepUpsell from "./StepUpsell";
import Step2 from "./Step2";
import Step3 from "./Step3";
import FeedbackTransition from "./FeedbackTransition";

export default function Wizard() {
    const [level, setLevel] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackMsg, setFeedbackMsg] = useState("");

    const [formData, setFormData] = useState({
        role: null as "owner" | "renter" | null,
        scenario: null as string | null,
        services: [] as string[],
        upsell: false,
        personal: {},
    });

    const totalLevels = 5;

    const handleNextLevel = (msg: string) => {
        setFeedbackMsg(msg);
        setShowFeedback(true);
    };

    const onFeedbackComplete = () => {
        setShowFeedback(false);
        setLevel(prev => prev + 1);
    };

    const handleBack = () => {
        setLevel(prev => prev - 1);
    };

    const updateFormData = (section: string, data: any) => {
        setFormData((prev) => ({ ...prev, [section]: data }));
    };

    return (
        <div className={styles.container}>
            <FeedbackTransition
                show={showFeedback}
                message={feedbackMsg}
                onComplete={onFeedbackComplete}
            />

            {/* Progress Bar */}
            <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${(level / totalLevels) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Levels Content */}
            {level === 1 && (
                <LevelOne
                    onComplete={(role, scenario) => {
                        updateFormData("role", role);
                        updateFormData("scenario", scenario);
                        handleNextLevel("יופי! התחלה מעולה 🎯");
                    }}
                />
            )}

            {level === 2 && (
                <Step1
                    selectedServices={formData.services}
                    onToggleService={(id) => {
                        const newServices = formData.services.includes(id)
                            ? formData.services.filter(s => s !== id)
                            : [...formData.services, id];
                        updateFormData("services", newServices);
                    }}
                />
            )}

            {level === 3 && (
                <StepUpsell
                    accepted={formData.upsell}
                    onToggle={(val) => {
                        updateFormData("upsell", val);
                        handleNextLevel(val ? "החלטה חכמה! 🌟" : "מעולה! בואו נסיים 🚀");
                    }}
                />
            )}

            {level === 4 && (
                <Step2
                    formData={formData.personal}
                    onChange={(field, value) => updateFormData("personal", { ...formData.personal, [field]: value })}
                />
            )}

            {level === 5 && <Step3 />}

            {/* Navigation Buttons */}
            {level < 5 && (
                <div className={styles.buttons}>
                    <button
                        className={styles.btnBack}
                        onClick={handleBack}
                        disabled={level === 1}
                        style={{ opacity: level === 1 ? 0 : 1 }}
                    >
                        חזור
                    </button>

                    {level === 2 && (
                        <button
                            className={styles.btnNext}
                            onClick={() => setLevel(prev => prev + 1)}
                            disabled={formData.services.length === 0}
                            style={{ opacity: formData.services.length === 0 ? 0.5 : 1 }}
                        >
                            המשך לשלב הבא
                        </button>
                    )}

                    {level === 4 && (
                        <button
                            className={styles.btnNext}
                            onClick={() => setLevel(5)}
                        >
                            סיום והרשמה 🎉
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
