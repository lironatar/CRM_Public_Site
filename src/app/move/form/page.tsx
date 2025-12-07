import { Metadata } from 'next';
import Wizard from "@/components/Redesign/Form/Wizard";
import styles from "@/styles/Redesign/Page.module.css";

export const metadata: Metadata = {
    title: 'טופס העברת חשבונות - נרשמים בשבילך',
    description: 'מלאו את הפרטים ואנחנו נטפל בהעברת כל החשבונות',
};

export default function FormPage() {
    return (
        <main className={`${styles.main} ${styles.formPage}`}>
            <Wizard />
        </main>
    );
}
