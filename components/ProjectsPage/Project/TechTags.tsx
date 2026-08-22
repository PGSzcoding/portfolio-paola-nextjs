import styles from './Project.module.css';
import { technologies } from '@/data/technologies';

interface TechTagsProps {
  technologies: string[];
}

export default function TechTags({
  technologies: projectTechnologies,
}: TechTagsProps) {
  return (
    <div className={styles.techTags}>
      {projectTechnologies.map((technology) => {
        const tech = technologies[technology as keyof typeof technologies];

        if (!tech) {
          return (
            <span key={technology}>
              {technology}
            </span>
          );
        }

        const Icon = tech.icon;

        return (
          <span key={technology}>
            <Icon
              size={16}
              color={tech.color}
              aria-hidden="true"
            />
            {technology}
          </span>
        );
      })}
    </div>
  );
}