'use client';

import {
  useEffect,
  useState,
} from 'react';

import styles from './Loader.module.css';

interface LoaderProps {
  onComplete: () => void;
}

const loadingSteps = [
  'loading assets',
  'loading experience',
  'loading creativity',
];

export default function Loader({
  onComplete,
}: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Progress
  useEffect(() => {
    const duration = 1500;
    const interval = 30;

    const timer = setInterval(() => {
      setProgress((current) => {
        const next =
          current + (100 / duration) * interval;

        return Math.min(next, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Complete loading
  useEffect(() => {
    if (progress < 100) return;

    const timeout = setTimeout(() => {
      setIsExiting(true);

      setTimeout(() => {
        onComplete();
      }, 700);
    }, 300);

    return () => clearTimeout(timeout);
  }, [progress, onComplete]);

  return (
    <div
      className={`${styles.loader} ${
        isExiting ? styles.exit : ''
      }`}
    >
      <div className={styles.content}>

        {/* Logo */}
        <div className={styles.logo}>
          PG<span>.</span>
        </div>

        {/* Title */}
        <div className={styles.title}>
          <span>INITIALIZING</span>
          <span>PORTFOLIO</span>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {loadingSteps.map((step, index) => {
            const threshold =
              ((index + 1) /
                loadingSteps.length) *
              100;

            const isComplete =
              progress >= threshold;

            return (
              <div
                key={step}
                className={styles.step}
              >
                <span className={styles.prompt}>
                  &gt;
                </span>

                <span>{step}</span>

                <span
                  className={
                    isComplete
                      ? styles.complete
                      : styles.pending
                  }
                >
                  {isComplete ? '✓' : '...'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Progress */}
        <div className={styles.progressWrapper}>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className={styles.percentage}>
            {Math.round(progress)}%
          </span>
        </div>

      </div>
    </div>
  );
}