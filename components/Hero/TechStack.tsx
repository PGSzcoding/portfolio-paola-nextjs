

import { technologies } from '@/data/technologies';
import styles from './TechStack.module.css';
import { useLanguage } from '@/context/LanguageContext';


export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className={styles.techStack}>
      <div className={styles.inner}>

        <span className={styles.label}>
          {t.hero.techLabel}
        </span>

        <div className={styles.marquee}>
          <div className={styles.track}>

            {/* First set */}
            <div className={styles.technologies}>
             {Object.entries(technologies).map(
                ([name, { icon: Icon, color }]) => (
                  <div
                    key={name}
                    className={styles.technology}
                  >
                    <Icon
                      className={styles.icon}
                      style={{ color }}
                    />

                    <span>{name}</span>
                  </div>
                )
              )}
            </div>

            {/* Duplicate set */}
            <div
              className={styles.technologies}
              aria-hidden="true"
            >
              {Object.entries(technologies).map(
  ([name, { icon: Icon, color }]) => (
                  <div
                    key={`duplicate-${name}`}
                    className={styles.technology}
                  >
                    <Icon
                      className={styles.icon}
                      style={{ color }}
                    />

                    <span>{name}</span>
                  </div>
                )
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}