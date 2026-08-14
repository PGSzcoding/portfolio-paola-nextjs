'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';

import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      {/* Decorative elements */}

      <div className={styles.dots} />

      <div className={styles.code}>
        &lt;/&gt;
      </div>

      <div className={styles.circle} />

      <div className={styles.terminal}>
        &gt;_
      </div>

      <div className={styles.content}>

        {/* Section label */}

        <div className={styles.label}>
          <span>{t.projects.label}</span>

          <div className={styles.labelLine} />

          <span className={styles.labelDot} />
        </div>


        {/* Title */}

        <h2 className={styles.title}>
          {t.projects.title}
        </h2>


        {/* Projects */}

        <div className={styles.grid}>
          {projects.slice(0, 3).map((project) => {
            const content = t.projects.items[project.id];

            return (
              <article
                key={project.id}
                className={styles.card}
              >

                {/* Image */}

                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={content.title}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className={styles.image}
                  />

                  <span className={styles.category}>
                    {
                      t.projects.categories[
                        project.category
                      ]
                    }
                  </span>
                </div>


                {/* Content */}

                <div className={styles.cardContent}>

                  <h3>
                    {content.title}
                  </h3>

                  <p>
                    {content.description}
                  </p>


                  {/* Technologies */}

                  <div className={styles.technologies}>
                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>


                  {/* Arrow */}

                  <Link
                    href={`/projects#${project.id}`}
                    className={styles.arrow}
                    aria-label={`${t.projectsPage.viewProject}: ${content.title}`}
                  >
                    ↗
                  </Link>

                </div>

              </article>
            );
          })}
        </div>


        {/* View all */}

        <Link
          href="/projects"
          className={styles.viewAll}
        >
          <span>
            {t.projects.viewAll}
          </span>

          <span>↗</span>
        </Link>

      </div>
    </section>
  );
}
