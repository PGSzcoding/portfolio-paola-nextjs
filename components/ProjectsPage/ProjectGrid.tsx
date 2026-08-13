import { Project } from '@/data/projects';

import ProjectCard from './ProjectCard';

import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        No projects found.
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