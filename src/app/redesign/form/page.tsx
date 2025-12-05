import { Metadata } from "next";
import Wizard from "@/components/Redesign/Form/Wizard";
import styles from "@/styles/Redesign/Page.module.css";

export const metadata: Metadata = {
    title: "נרשמים בשבילך - התחלת תהליך",
    description: "התחילו את המעבר שלכם בקלות ובמהירות.",
};

export default function FormPage() {
    return (
        <main className={`${styles.main} min-h-screen bg-slate-50 flex items-center justify-center p-4`}>
            <Wizard />
        </main>
    );
}
