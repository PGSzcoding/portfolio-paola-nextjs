import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiAngular,
  SiSvelte,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
  SiSanity,
} from 'react-icons/si';

import { FaAws } from 'react-icons/fa6';

import styles from './TechStack.module.css';
import { useLanguage } from '@/context/LanguageContext';

const technologies = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#171717',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: '#DD0031',
  },
  {
    name: 'Svelte',
    icon: SiSvelte,
    color: '#FF3E00',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#68A063',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#FFCA28',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#4479A1',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#232F3E',
  },
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
  },
  {
    name: 'Figma',
    icon: SiFigma,
    color: '#F24E1E',
  },
  {
    name: 'Sanity',
    icon: SiSanity,
    color: '#F03E2F',
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

        <div className={styles.marquee}>
          <div className={styles.track}>

            {/* First set */}
            <div className={styles.technologies}>
              {technologies.map(
                ({ name, icon: Icon, color }) => (
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
              {technologies.map(
                ({ name, icon: Icon, color }) => (
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