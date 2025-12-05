import Link from 'next/link';
import styles from '@/styles/HeroRedesigned.module.css';

export default function HeroRedesigned() {
  return (
    <section className={styles.hero}>
      <div className={styles.meshBackground}></div>

      <div className={styles.container}>
        <div className={`${styles.content} animate-fade-in`}>
          <div className={styles.topBadge}>
            <span className={styles.newTag}>חדש</span>
            <span>החלפת ספקים למעבר דירה</span>
          </div>

          <h1 className={styles.title}>
            עוברים דירה? <br />
            <span className={styles.titleHighlight}>הבירוקרטיה עלינו.</span>
          </h1>

          <div className={styles.mobileVisual}>
            {/* Simplified visual for mobile flow - visible only on mobile/tablet */}
            <div className={styles.mobileCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🏠</div>
                <div className={styles.cardText}>
                  <span>העברת חשבונות</span>
                  <span className={styles.cardSub}>הכל עודכן בהצלחה</span>
                </div>
                <div className={styles.cardCheck}>✓</div>
              </div>
            </div>
          </div>

          <p className={styles.subtitle}>
            אנחנו נעדכן עבורכם את כל הספקים: חברת החשמל, תאגיד המים, גז וארנונה.
            <br className={styles.desktopBreak} />
            בלי להמתין שעות על הקו, בלי טפסים מורכבים ובלי כאב ראש.
          </p>

          <div className={styles.trustStrip}>
            <div className={styles.avatars}>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
              <div className={styles.avatar}></div>
            </div>
            <span className={styles.trustText}>2,000+ משפחות עברו בראש שקט</span>
          </div>

          <div className={styles.actions}>
            <Link href="/move" className={`${styles.btn} ${styles.btnPrimary}`}>
              התחילו מעבר דירה
              <span className={styles.btnIcon}>←</span>
            </Link>
            <a href="#how-it-works" className={`${styles.btn} ${styles.btnSecondary}`}>
              איך זה עובד?
            </a>
          </div>

          <p className={styles.guarantee}>✨ סיימו את כל הסידורים ב-5 דקות</p>
        </div>

        <div className={`${styles.visual} animate-fade-in`}>
          {/* Desktop Visual - More complex */}
          <div className={styles.desktopCardWrapper}>
            <div className={styles.mainCard}>
              <div className={styles.cardRow}>
                <div className={styles.rowIcon} style={{ background: '#e0e7ff' }}>💧</div>
                <div className={styles.rowContent}>
                  <div className={styles.rowTitle}>תאגיד המים</div>
                  <div className={styles.rowDate}>החלפת משלמים</div>
                </div>
                <div className={styles.rowAmount} style={{ color: 'var(--success)' }}>עודכן ✓</div>
              </div>
              <div className={styles.cardRow}>
                <div className={styles.rowIcon} style={{ background: '#ffedd5' }}>⚡</div>
                <div className={styles.rowContent}>
                  <div className={styles.rowTitle}>חברת החשמל</div>
                  <div className={styles.rowDate}>החלפת משלמים</div>
                </div>
                <div className={styles.rowAmount} style={{ color: 'var(--success)' }}>עודכן ✓</div>
              </div>
              <div className={styles.cardRow}>
                <div className={styles.rowIcon} style={{ background: '#fce7f3' }}>🏢</div>
                <div className={styles.rowContent}>
                  <div className={styles.rowTitle}>ארנונה</div>
                  <div className={styles.rowDate}>רישום מחזיק</div>
                </div>
                <div className={styles.rowAmount} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>בטיפול...</div>
              </div>
              <div className={styles.cardFloatingStatus}>
                <span>חסכנו לך 4 שעות המתנה!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
