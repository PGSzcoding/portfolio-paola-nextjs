'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, useReducedMotion } from 'motion/react';

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
  const shouldReduceMotion = useReducedMotion();

  const content = t.projects.items[project.id];

  return (
    <motion.article
      id={project.id}
      className={styles.card}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >

      <div className={styles.imageWrapper}>

        <Image
          src={project.image}
          alt={content.title}
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 950px) 50vw, 33vw"
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
          href={`/projects#${project.id}`}
          className={styles.arrow}
          aria-label={`${t.projectsPage.viewProject}: ${content.title}`}
        >
          <FiArrowUpRight />
        </Link>

      </div>

    </motion.article>
  );
}
