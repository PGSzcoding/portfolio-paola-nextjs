'use client';

import { projectTechnologies } from '@/data/projects';

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

  return (
    <div className={styles.wrapper}>

      <div
        className={styles.filters}
        role="group"
        aria-label={t.projectsPage.filters.label}
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
          aria-pressed={selectedTechnology === 'all'}
        >
          {t.projectsPage.filters.all}
        </button>


        {projectTechnologies.map((technology) => (
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
            aria-pressed={selectedTechnology === technology}
          >
            {technology}
          </button>
        ))}

      </div>

    </div>
  );
}
