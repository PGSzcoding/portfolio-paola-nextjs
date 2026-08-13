'use client';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

import styles from './Hero.module.css';
import TechStack from './TechStack';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className={styles.hero}
    >
      <div className="container">

        <div className={styles.grid}>

          <div className={styles.content}>

            <div className={styles.intro}>
              <span className={styles.star}>
                ✳
              </span>

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
                href="/cv.pdf"
                variant="outline"
              >
                {t.hero.cvButton}
                <span>↓</span>
              </Button>

            </div>

          </div>

          <div className={styles.visual}>

            <div className={styles.shape} />

            <div className={styles.dots} />

            <div className={styles.code}>
              &lt;/&gt;
            </div>

            <Image
              src="/images/hero/paola-avatar.png"
              alt="Paola Gutierrez"
              width={600}
              height={700}
              priority
              className={styles.avatar}
            />

          </div>

        </div>

        <TechStack/>

      </div>
    </section>
  );
}