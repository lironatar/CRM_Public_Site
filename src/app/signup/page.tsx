import MultiStepForm from '@/components/MultiStepForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'הרשמה לשירות - נרשמים בשבילך',
    description: 'התחילו את התהליך וחסכו זמן וכסף בניהול חשבונות הבית',
};

export default function SignupPage() {
    return (
        <main className="container" style={{ minHeight: '100vh', padding: '2rem 0' }}>
            <MultiStepForm />
        </main>
    );
}
