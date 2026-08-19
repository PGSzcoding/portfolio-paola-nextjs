'use client';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Reveal from '@/components/ui/Reveal';

import styles from './Hero.module.css';
import TechStack from './TechStack';

export default function Hero() {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const cvPath = language === 'es' ? '/cv/Resume(es).pdf' : '/cv/Resume(en).pdf';

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className={styles.hero}
    >
      <div className="container">

        <div className={styles.grid}>

          <motion.div className={styles.content} style={shouldReduceMotion ? undefined : { y: contentY }}>
          <Reveal>
            
            <div className={styles.intro}>
            
                <motion.div className={styles.star} animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                  ✳
                  </motion.div>

              <span>
                {t.hero.greeting}
              </span>
            </div>

            <h1 className={styles.title}>
              PAOLA
              <br />
              GUTIERREZ
            </h1>

            <div className={styles.role}>
              {t.hero.role}

              <span>
                &lt;/&gt;
              </span>
            </div>

            <p className={styles.description}>
              {t.hero.description}
            </p>

            <div className={styles.actions}>

              <Button href="#projects">
                {t.hero.projectsButton}
                <span>→</span>
              </Button>

              <Button
                href={cvPath}
                variant="outline"
                download="Paola-Gutierrez-CV.pdf"
              >
                {t.hero.cvButton}
                <span>↓</span>
              </Button>

            </div>

          </Reveal>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.15, ease: 'easeOut' }}
          >

            <div className={styles.shape} />

            <motion.div className={styles.dots} animate={shouldReduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />

            <div className={styles.code}>
              &lt;/&gt;
            </div>

            <motion.div style={shouldReduceMotion ? undefined : { y: avatarY }}>
              <Image
                src="/images/hero/paola-avatar.png"
                alt="Paola Gutierrez"
                width={600}
                height={700}
                priority
                className={styles.avatar}
              />
            </motion.div>

          </motion.div>

        </div>

        <TechStack/>

      </div>
    </section>
  );
}
