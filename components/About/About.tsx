'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, useReducedMotion} from 'motion/react';
import AboutStats from './AboutStats';
import Reveal from '@/components/ui/Reveal';

import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
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

<motion.div className={styles.star} animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                  ✳
                  </motion.div>

      <div className={styles.content}>

        {/* Section label */}

        <Reveal className={styles.label}>
          <span>
            {t.about.label}
          </span>

          <div className={styles.labelLine} />
        </Reveal>


        {/* Heading */}

        <Reveal delay={0.08}>
        <h2 className={styles.title}>
          <span>
            {t.about.title.first}
          </span>

          <span className={styles.highlight}>
            {t.about.title.second}
          </span>
        </h2>
        </Reveal>


        {/* Description */}

        <Reveal className={styles.description} delay={0.14}>
          {t.about.description.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </Reveal>


        {/* Stats */}

        <Reveal delay={0.18}><AboutStats /></Reveal>


        {/* Quote */}

        <Reveal delay={0.22}>
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
        </Reveal>

      </div>
    </section>
  );
}
