import styles from './Project.module.css'
interface TechTagsProps {
  technologies: string[];
}

export default function TechTags({
  technologies,
}: TechTagsProps) {
  return (
    <div className={styles.techTags}>
      {technologies.map((technology) => (
        <span key={technology}>
          {technology}
        </span>
      ))}
    </div>
  );
}