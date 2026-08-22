'use client'
import Image from 'next/image';

import { Project } from '@/data/projects';
import styles from './Project.module.css'
import TechTags from './TechTags';


interface ProjectHeroProps {
  project: Project;
  description: string
}

export default function ProjectHero({ project,description }: ProjectHeroProps) {


  return (
    <section className={styles.projectHero}>
      

      <div className={styles.projectHeroContent}>
        <div className={styles.projectInfo}>
          <span className={styles.projectCategory}>
            {project.category}
          </span>

          <h1>
            {project.title}
            <span>.</span>
          </h1>

          <p>{description}</p>

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
              src={`/images/projects/${project.id}/${project.image}`}
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