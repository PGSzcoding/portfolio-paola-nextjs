'use client';

import { motion, useScroll, useSpring } from 'motion/react';

import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return <motion.div className={styles.progress} style={{ scaleX }} aria-hidden="true" />;
}
