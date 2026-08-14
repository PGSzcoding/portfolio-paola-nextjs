import { Project } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

import ProjectCard from './ProjectCard';

import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: readonly Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  const { t } = useLanguage();

  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        {t.projectsPage.empty}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}
