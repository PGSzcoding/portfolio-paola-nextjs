'use client';

import { useLanguage } from '@/context/LanguageContext';

import AboutStats from './AboutStats';

import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className={styles.about}
    >
      {/* Decorative elements */}

      <div className={`${styles.decoration} ${styles.grid}`} />

<div className={`${styles.decoration} ${styles.dots}`} />

<div className={`${styles.decoration} ${styles.circleLeft}`} />

<div className={`${styles.decoration} ${styles.circleRight}`} />

<div className={styles.codeSymbol}>
  &gt;_
</div>

<div className={styles.codeDecoration}>
  &lt;/&gt;
</div>

<div className={styles.star}>
  ✳
</div>

      <div className={styles.content}>

        {/* Section label */}

        <div className={styles.label}>
          <span>
            {t.about.label}
          </span>

          <div className={styles.labelLine} />
        </div>


        {/* Heading */}

        <h2 className={styles.title}>
          <span>
            {t.about.title.first}
          </span>

          <span className={styles.highlight}>
            {t.about.title.second}
          </span>
        </h2>


        {/* Description */}

        <div className={styles.description}>
          {t.about.description.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>


        {/* Stats */}

        <AboutStats />


        {/* Quote */}

        <blockquote className={styles.quote}>
          <span className={styles.quoteMark}>
            “
          </span>

          <p>
            {t.about.quote}
          </p>

          <span className={styles.quoteMark}>
            ”
          </span>
        </blockquote>

      </div>
    </section>
  );
}