import { Project } from '@/data/projects';
import ProjectScreenshots from './ProjectScreenshots';
import styles from './Project.module.css'
import Link from 'next/link';
interface ProjectOverviewProps {
  project: Project,
  overview: string
}

export default function ProjectOverview({
  project, overview
}: ProjectOverviewProps) {
  return (
    <section className={styles.projectOverview}>
      <div className={styles.overviewText}>
        <span className={styles.sectionLabel}>
          Overview
        </span>

        <h2>About the project</h2>

        <p>{overview}</p>
      </div>

      <ProjectScreenshots
        screenshots={project.details.screenshots}
        project_id={project.id}
      />
       <Link href="/projects" className={styles.backLink}>
        ← Back to projects
      </Link>
    </section>
  );
}