'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      className={styles.projects}
      initial={shouldReduceMotion ? false : { backgroundColor: '#f8eee6' }}
      whileInView={{ backgroundColor: '#101014' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
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

        <Reveal className={styles.label}>
          <span>{t.projects.label}</span>

          <div className={styles.labelLine} />

          <span className={styles.labelDot} />
        </Reveal>


        {/* Title */}

        <Reveal delay={0.08}><h2 className={styles.title}>
          {t.projects.title}
        </h2></Reveal>


        {/* Projects */}

        <div className={styles.grid}>
          {projects.slice(0, 3).map((project, index) => {
            const content = t.projects.items[project.id];

            return (
              <motion.article
                key={project.id}
                className={styles.card}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
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

              </motion.article>
            );
          })}
        </div>


        {/* View all */}

        <Reveal delay={0.16}><Link
          href="/projects"
          className={styles.viewAll}
        >
          <span>
            {t.projects.viewAll}
          </span>

          <span>↗</span>
        </Link></Reveal>

      </div>
    </motion.section>
  );
}
