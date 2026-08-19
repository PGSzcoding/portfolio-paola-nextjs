import Image from 'next/image';
import styles from './Project.module.css'
interface Screenshot {
  image: string;
  title: string;
}

interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
}

export default function ProjectScreenshots({
  screenshots,
}: ProjectScreenshotsProps) {
  return (
    <div className={styles.screenshots}>
      <div className={styles.screenshotsGrid}>
        {screenshots.map((screenshot) => (
          <div
            className={styles.screenshot}
            key={screenshot.title}
          >
            <Image
              src={screenshot.image}
              alt={screenshot.title}
              width={800}
              height={500}
            />
          </div>
        ))}
      </div>

      <div className={styles.screenshotDots}>
        {screenshots.map((_, index) => (
          <span
            key={_.title}
            className={index === 0 ? styles.active : ''}
          />
        ))}
      </div>
    </div>
  );
}