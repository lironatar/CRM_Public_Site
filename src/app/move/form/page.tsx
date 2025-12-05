import MultiStepForm from '@/components/MultiStepForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'טופס העברת חשבונות - נרשמים בשבילך',
    description: 'מלאו את הפרטים ואנחנו נטפל בהעברת כל החשבונות',
};

export default function FormPage() {
    return (
        <main style={{
            padding: '3rem 0',
            background: 'var(--background)',
            minHeight: '100vh'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                        בואו נתחיל את התהליך
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        זה ייקח רק כמה דקות ואנחנו נדאג לשאר
                    </p>
                </div>

                <MultiStepForm />
            </div>
        </main>
    );
}
