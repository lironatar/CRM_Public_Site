import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Redesign/Form.module.css";
import StepRole from "./StepRole";
import StepScenario from "./StepScenario";

interface LevelOneProps {
    onComplete: (role: "owner" | "renter", scenario: string) => void;
}

export default function LevelOne({ onComplete }: LevelOneProps) {
    const [role, setRole] = useState<"owner" | "renter" | null>(null);
    const [scenario, setScenario] = useState<string | null>(null);
    const scenarioRef = useRef<HTMLDivElement>(null);

    // Auto-scroll when role is selected
    useEffect(() => {
        if (role && scenarioRef.current) {
            // Instant scroll
            scenarioRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }, [role]);

    return (
        <div className={`${styles.spaceY12} ${styles.pb8}`}>
            <StepRole
                selectedRole={role}
                onSelect={(r) => {
                    setRole(r);
                    setScenario(null); // Reset scenario if role changes
                }}
            />

            {role && (
                <div ref={scenarioRef} className={styles.stageFadeIn}>
                    <StepScenario
                        role={role}
                        selectedScenario={scenario}
                        onSelect={(s) => {
                            setScenario(s);
                            // Restore delay for visual feedback
                            setTimeout(() => {
                                onComplete(role, s);
                            }, 800);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
