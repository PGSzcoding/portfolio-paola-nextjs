'use client';

import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';

import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <Link
          href="/"
          className={styles.logo}
          aria-label="Paola Gutierrez"
        >
          PG<span>.</span>
        </Link>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Paola Gutierrez
          </span>

          <span>
            {t.footer.madeWith}
          </span>

          <Link href="#inicio">
            {t.footer.backToTop} ↑
          </Link>
        </div>

      </div>
    </footer>
  );
}