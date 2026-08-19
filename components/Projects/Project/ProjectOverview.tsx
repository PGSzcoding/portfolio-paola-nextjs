import { Project } from '@/data/projects';
import ProjectScreenshots from './ProjectScreenshots';
import styles from './Project.module.css'
interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className={styles.projectOverview}>
      <div className={styles.overviewText}>
        <span className={styles.sectionLabel}>
          Overview
        </span>

        <h2>About the project</h2>

        <p>{project.details.overview}</p>
      </div>

      <ProjectScreenshots
        screenshots={project.details.screenshots}
      />
    </section>
  );
}