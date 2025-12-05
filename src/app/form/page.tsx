import { Metadata } from "next";
import Wizard from "@/components/Redesign/Form/Wizard";
import styles from "@/styles/Redesign/Page.module.css";

export const metadata: Metadata = {
    title: "נרשמים בשבילך - התחלת תהליך",
    description: "התחילו את המעבר שלכם בקלות ובמהירות.",
};

export default function FormPage() {
    return (
        <main className={`${styles.main} ${styles.formPage}`}>
            <Wizard />
        </main>
    );
}
