import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} animate-fade-in`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            הדרך החדשה לנהל חשבונות
          </div>

          <h1 className={styles.title}>
            ניהול הבית שלך,
            <br />
            <span className={styles.titleHighlight}>פשוט וחכם יותר.</span>
          </h1>

          <p className={styles.subtitle}>
            פלטפורמה דיגיטלית מתקדמת לניהול כל תשלומי הבית במקום אחד.
            חשמל, מים, ארנונה וגז - ללא בירוקרטיה, ללא המתנה, ובמקסימום חיסכון.
          </p>

          <div className={styles.actions}>
            <Link href="/signup" className="btn btn-primary">
              התחילו עכשיו בחינם
            </Link>
            <a href="#how-it-works" className="btn btn-outline">
              איך זה עובד?
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.avatars}>
              <div className={styles.avatar}>D</div>
              <div className={styles.avatar}>R</div>
              <div className={styles.avatar}>A</div>
              <div className={styles.avatar}>+2k</div>
            </div>
            <p>הצטרפו ליותר מ-2,000 משפחות שכבר חוסכות</p>
          </div>
        </div>

        <div className={`${styles.visual} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.mainCard}>
            {/* Abstract UI Representation */}
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9' }}></div>
              <div style={{ width: '120px', height: '12px', borderRadius: '6px', background: '#f1f5f9' }}></div>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: i === 1 ? '#e0e7ff' : i === 2 ? '#dbeafe' : '#ffedd5' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '60%', height: '10px', borderRadius: '5px', background: '#cbd5e1', marginBottom: '6px' }}></div>
                    <div style={{ width: '40%', height: '8px', borderRadius: '4px', background: '#e2e8f0' }}></div>
                  </div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #cbd5e1' }}></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 2rem', background: 'var(--primary)', borderRadius: '20px', width: '80%', height: '40px', opacity: 0.1 }}></div>
            </div>
          </div>

          <div className={`${styles.floatingElement} ${styles.float1}`}>
            <div className={styles.iconBox} style={{ background: 'rgba(132, 204, 22, 0.1)', color: 'var(--accent)' }}>✓</div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>החשבון שולם</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>חשמל - ינואר</p>
            </div>
          </div>

          <div className={`${styles.floatingElement} ${styles.float2}`}>
            <div className={styles.iconBox} style={{ background: 'rgba(132, 204, 22, 0.1)', color: 'var(--accent)' }}>⚡</div>
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>חיסכון חדש!</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>₪120 בחודש</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
