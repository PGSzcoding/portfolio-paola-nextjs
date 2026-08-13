'use client';

import { useMemo, useState } from 'react';

import { projects } from '@/data/projects';

import { useLanguage } from '@/context/LanguageContext';

import ProjectFilters from './ProjectFilters';
import ProjectGrid from './ProjectGrid';

import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  const { t } = useLanguage();

  const [selectedTechnology, setSelectedTechnology] =
    useState('all');

  const filteredProjects = useMemo(() => {
    if (selectedTechnology === 'all') {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(
        selectedTechnology
      )
    );
  }, [selectedTechnology]);

  return (
    <main className={styles.page}>

      <section className={styles.hero}>

        <div className={styles.label}>
          <span>{t.projectsPage.label}</span>
          <span className={styles.line} />
        </div>

        <h1 className={styles.title}>
          {t.projectsPage.title}
          <span>.</span>
        </h1>

        <ProjectFilters
          selectedTechnology={selectedTechnology}
          onTechnologyChange={setSelectedTechnology}
        />

      </section>


      <section className={styles.projectsSection}>

        <ProjectGrid
          projects={filteredProjects}
        />

        <div className={styles.results}>
          {t.projectsPage.showing}{' '}
          {filteredProjects.length}{' '}
          {t.projectsPage.projects}
        </div>

      </section>

    </main>
  );
}