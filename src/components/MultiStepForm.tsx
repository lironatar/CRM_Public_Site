"use client";

import { useState } from 'react';
import styles from '@/styles/Form.module.css';
import ServiceSelection from './steps/ServiceSelection';
import PersonalDetails from './steps/PersonalDetails';
import FileUploads from './steps/FileUploads';

const STEP_LABELS = ['בחירת שירותים', 'פרטים אישיים', 'העלאת מסמכים'];

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        services: [] as string[],
        personal: {},
        files: {} as Record<string, File | null>,
    });

    const totalSteps = 3;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
        } else {
            // Submit logic here
            alert('תודה שנרשמת! נציג יצור איתך קשר בהקדם.');
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const updateFormData = (section: string, data: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <ServiceSelection
                        selectedServices={formData.services}
                        onToggleService={(service) => {
                            const newServices = formData.services.includes(service)
                                ? formData.services.filter(s => s !== service)
                                : [...formData.services, service];
                            updateFormData('services', newServices);
                        }}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        formData={formData.personal}
                        onChange={(field, value) => {
                            updateFormData('personal', {
                                ...formData.personal,
                                [field]: value
                            });
                        }}
                    />
                );
            case 3:
                return (
                    <FileUploads
                        files={formData.files}
                        onFileChange={(type, file) => {
                            updateFormData('files', {
                                ...formData.files,
                                [type]: file
                            });
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.formContainer}>
            {/* Progress Tracker */}
            <div className={styles.progressTracker}>
                <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
                <div className={styles.progressText}>
                    שלב {currentStep} מתוך {totalSteps} - {STEP_LABELS[currentStep - 1]}
                </div>
            </div>

            {/* Step Indicator */}
            <div className={styles.stepIndicator}>
                {[1, 2, 3].map((step) => (
                    <div
                        key={step}
                        className={`${styles.step} ${currentStep === step ? styles.stepActive : ''} ${step < currentStep ? styles.stepCompleted : ''}`}
                    >
                        {step < currentStep ? '✓' : step}
                    </div>
                ))}
            </div>

            {renderStep()}

            <div className={styles.buttons}>
                <button
                    className="btn glass"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    style={{ opacity: currentStep === 1 ? 0.5 : 1, cursor: currentStep === 1 ? 'not-allowed' : 'pointer' }}
                >
                    חזור
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleNext}
                >
                    {currentStep === totalSteps ? 'סיום והרשמה' : 'המשך לשלב הבא'}
                </button>
            </div>
        </div>
    );
}
