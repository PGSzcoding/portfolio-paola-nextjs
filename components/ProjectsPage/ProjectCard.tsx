'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { Project } from '@/data/projects';

import { useLanguage } from '@/context/LanguageContext';

import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const { t } = useLanguage();

  const content = t.projects.items[project.id];

  return (
    <article className={styles.card}>

      <div className={styles.imageWrapper}>

        <img
          src={project.image}
          alt={content.title}
          className={styles.image}
        />

        <span className={styles.category}>
          {
            t.projectsPage.categories[
              project.category
            ]
          }
        </span>

      </div>


      <div className={styles.info}>

        <div>
          <h2>
            {content.title}
          </h2>

          <div className={styles.technologies}>
            {project.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>
        </div>


        <Link
          href={
            project.href ??
            `/projects/${project.id}`
          }
          className={styles.arrow}
          aria-label={`View ${content.title}`}
        >
          <FiArrowUpRight />
        </Link>

      </div>

    </article>
  );
}