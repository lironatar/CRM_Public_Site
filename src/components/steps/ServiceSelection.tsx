import styles from '@/styles/Form.module.css';

interface ServiceSelectionProps {
  selectedServices: string[];
  onToggleService: (service: string) => void;
}

const services = [
  { id: 'electricity', name: 'חברת החשמל', icon: '⚡', desc: 'החלפת משלמים ועדכון קריאת מונה' },
  { id: 'water', name: 'תאגיד המים', icon: '💧', desc: 'עדכון מספר נפשות והחלפת מחזיקים' },
  { id: 'arnona', name: 'עירייה (ארנונה)', icon: '🏢', desc: 'רישום בארנונה לקבלת הנחות' },
  { id: 'gas', name: 'חברת הגז', icon: '🔥', desc: 'תיאום טכנאי והחלפת בעלות' },
];

export default function ServiceSelection({ selectedServices, onToggleService }: ServiceSelectionProps) {
  return (
    <div className={styles.formContent}>
      <h2 className={styles.title}>את מי צריך לעדכן?</h2>
      <p className={styles.description}>בחרו את הספקים שתרצו שנעדכן עבורכם בכתובת החדשה.</p>

      <div className={styles.grid}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`${styles.card} ${selectedServices.includes(service.id) ? styles.cardSelected : ''}`}
            onClick={() => onToggleService(service.id)}
          >
            <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{service.icon}</span>
                <div className={styles.cardCheck}>{selectedServices.includes(service.id) ? '✓' : '+'}</div>
            </div>
            <h3>{service.name}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
