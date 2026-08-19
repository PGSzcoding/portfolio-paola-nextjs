import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/data/projects';
import styles from './Project.module.css'
import TechTags from './TechTags';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className={styles.projectHero}>
      <Link href="/projects" className={styles.backLink}>
        ← Back to projects
      </Link>

      <div className={styles.projectHeroContent}>
        <div className={styles.projectInfo}>
          <span className={styles.projectCategory}>
            {project.category}
          </span>

          <h1>
            {project.title}
            <span>.</span>
          </h1>

          <p>{project.description}</p>

          <TechTags technologies={project.technologies} />

          <div className={styles.projectActions}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Visit project ↗
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {project.image && (
          <div className={styles.projectHeroImage}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}