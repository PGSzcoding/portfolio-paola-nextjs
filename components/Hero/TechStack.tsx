import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
} from 'react-icons/si';

import styles from './TechStack.module.css';
import { useLanguage } from '@/context/LanguageContext';

const technologies = [
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className={styles.techStack}>
      <div className={styles.inner}>
        <span className={styles.label}>
          {t.hero.techLabel}
        </span>

        <div className={styles.technologies}>
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className={styles.technology}
            >
              <Icon className={styles.icon} />

              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
