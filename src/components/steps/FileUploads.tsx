import styles from '@/styles/Form.module.css';

interface FileUploadsProps {
    files: Record<string, File | null>;
    onFileChange: (type: string, file: File | null) => void;
}

export default function FileUploads({ files, onFileChange }: FileUploadsProps) {
    const handleFileChange = (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileChange(type, e.target.files[0]);
        }
    };

    const docTypes = [
        { id: 'id_card', label: 'צילום תעודת זהות', icon: '🆔' },
        { id: 'contract', label: 'חוזה שכירות / מכר', icon: '📝' },
        { id: 'reading', label: 'קריאת מונה (מים/חשמל)', icon: '📸' }
    ];

    return (
        <div className={styles.formContent}>
            <h2 className={styles.title}>מסמכים נדרשים</h2>
            <p className={styles.description}>כדי שנוכל לבצע את ההעברה, אנחנו צריכים כמה מסמכים פשוטים.</p>

            <div className={styles.uploadsGrid}>
                {docTypes.map((doc) => (
                    <div key={doc.id} className={`${styles.uploadCard} ${files[doc.id] ? styles.uploadComplete : ''}`}>
                        <div className={styles.uploadIcon}>{doc.icon}</div>
                        <div className={styles.uploadInfo}>
                            <h3>{doc.label}</h3>
                            {files[doc.id] ? (
                                <span className={styles.fileName}>{files[doc.id]?.name}</span>
                            ) : (
                                <span className={styles.fileHint}>לחץ להעלאה</span>
                            )}
                        </div>
                        <label className={styles.uploadButton}>
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={handleFileChange(doc.id)}
                                style={{ display: 'none' }}
                            />
                            {files[doc.id] ? 'החלף' : 'בחר קובץ'}
                        </label>
                    </div>
                ))}
            </div>
            
            <div className={styles.securityNote}>
                🔒 כל המסמכים נשמרים באופן מאובטח ומוצפנים.
            </div>
        </div>
    );
}
