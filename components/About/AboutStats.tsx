'use client';

import {
  FiStar,
  FiFolder,
  FiGlobe,
  FiZap,
} from 'react-icons/fi';

import { useLanguage } from '@/context/LanguageContext';

import styles from './AboutStats.module.css';

const stats = [
  {
    key: 'experience',
    icon: FiStar,
  },
  {
    key: 'projects',
    icon: FiFolder,
  },
  {
    key: 'remote',
    icon: FiGlobe,
  },
  {
    key: 'learning',
    icon: FiZap,
  },
] as const;

export default function AboutStats() {
  const { t } = useLanguage();

  return (
    <div className={styles.stats}>
      {stats.map(({ key, icon: Icon }) => {
        const stat = t.about.stats[key];

        return (
          <div
            key={key}
            className={styles.stat}
          >
            <Icon
              className={styles.icon}
              aria-hidden="true"
            />

            <strong className={styles.value}>
              {stat.value}
            </strong>

            <span className={styles.label}>
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}