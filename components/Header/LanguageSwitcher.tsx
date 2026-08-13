'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

import styles from './LanguageSwicher.module.css';

const languages: Language[] = [
  'en',
  'es',
  'fr',
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.languageSwitcher}>
      {languages.map((item) => (
        <button
          key={item}
          onClick={() => setLanguage(item)}
          className={`${styles.languageButton} ${
            language === item ? styles.active : ''
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}