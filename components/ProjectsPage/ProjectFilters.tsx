'use client';

import { useMemo } from 'react';

import { projects } from '@/data/projects';

import { useLanguage } from '@/context/LanguageContext';

import styles from './ProjectFilters.module.css';

interface ProjectFiltersProps {
  selectedTechnology: string;
  onTechnologyChange: (
    technology: string
  ) => void;
}

export default function ProjectFilters({
  selectedTechnology,
  onTechnologyChange,
}: ProjectFiltersProps) {
  const { t } = useLanguage();

  const technologies = useMemo(() => {
    const allTechnologies = projects.flatMap(
      (project) => project.technologies
    );

    return [
      ...new Set(allTechnologies),
    ].sort();
  }, []);

  return (
    <div className={styles.wrapper}>

      <div
        className={styles.filters}
        role="group"
        aria-label="Project filters"
      >

        <button
          type="button"
          className={
            selectedTechnology === 'all'
              ? styles.active
              : ''
          }
          onClick={() =>
            onTechnologyChange('all')
          }
        >
          {t.projectsPage.filters.all}
        </button>


        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            className={
              selectedTechnology === technology
                ? styles.active
                : ''
            }
            onClick={() =>
              onTechnologyChange(
                technology
              )
            }
          >
            {technology}
          </button>
        ))}

      </div>

    </div>
  );
}