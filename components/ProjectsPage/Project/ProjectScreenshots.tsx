'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './Project.module.css';

interface Screenshot {
  image: string;
  title: string;
}

interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
  project_id: string

}

export default function ProjectScreenshots({
  screenshots, project_id
}: ProjectScreenshotsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });
  const [selectedImage, setSelectedImage] =
  useState<Screenshot | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (<>
    <div className={styles.screenshots}>

      <div
        className={styles.screenshotsViewport}
        ref={emblaRef}
      >
        <div className={styles.screenshotsContainer}>
          {screenshots.map((screenshot) => (
  <button
    type="button"
    className={styles.screenshot}
    key={screenshot.title}
    onClick={() => setSelectedImage(screenshot)}
    aria-label={`Open ${screenshot.title}`}
  >
    
    <Image
      src={`/images/projects/${project_id}/${screenshot.image}`}
      alt={screenshot.title}
      width={800}
      height={500}
    />
  </button>
))}
        </div>
      </div>

      <div className={styles.screenshotDots}>
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.title}
            type="button"
            className={
              index === selectedIndex
                ? styles.active
                : ''
            }
            onClick={() => scrollTo(index)}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>

    </div>
    {selectedImage && (
  <div
    className={styles.lightbox}
    onClick={() => setSelectedImage(null)}
  >
    <button
      type="button"
      className={styles.lightboxClose}
      onClick={() => setSelectedImage(null)}
      aria-label="Close image"
    >
      ×
    </button>

    <div
      className={styles.lightboxContent}
      onClick={(event) => event.stopPropagation()}
    >
      <Image
        src={`/images/projects/${project_id}/${selectedImage.image}`}
        alt={selectedImage.title}
        width={1600}
        height={1000}
      />
    </div>
  </div>
)}
  </>);
}