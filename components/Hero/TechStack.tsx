import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
} from 'react-icons/si';

import styles from './TechStack.module.css';

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
  return (
    <section className={styles.techStack}>
      <div className={styles.inner}>
        <span className={styles.label}>
          TECH I WORK WITH
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