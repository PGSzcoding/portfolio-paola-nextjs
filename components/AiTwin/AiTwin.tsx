'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import Reveal from '@/components/ui/Reveal';

import styles from './AiTwin.module.css';

export default function AiTwin() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="ai-twin"
      className={styles.aiTwin}
      initial={shouldReduceMotion ? false : { backgroundColor: '#f8eee6' }}
      whileInView={{ backgroundColor: '#101014' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.content}>

        {/* Header */}

        <Reveal className={styles.heading}>
          <span className={styles.label}>
            {t.aiTwin.label}
          </span>

          <h2>
            {t.aiTwin.title}
          </h2>

          <p>
            {t.aiTwin.description}
          </p>
        </Reveal>


        {/* Chat area */}

        <div className={styles.chatScene}>

          {/* Decorative code */}

          <div className={styles.codeDecoration}>
            &lt;AI /&gt;
          </div>


          {/* Character */}

          <motion.div
            className={styles.character}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <Image
              src="/images/AI/paola-ai-twin.png"
              alt={t.aiTwin.imageAlt}
              width={400}
              height={510}
              sizes="(max-width: 850px) 260px, 400px"
            />
          </motion.div>


          {/* Chat */}

          <motion.div
            className={styles.chat}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.12, ease: 'easeOut' }}
          >

            {/* Chat header */}

            <div className={styles.chatHeader}>

              <div className={styles.chatIdentity}>
                <div
                  className={styles.status}
                />

                <div>
                  <strong>
                    {t.aiTwin.name}
                  </strong>

                  <span>
                    {t.aiTwin.online}
                  </span>
                </div>
              </div>

              <span className={styles.chatSymbol}>
                ✦
              </span>

            </div>


            {/* Messages */}

            <div className={styles.messages}>

              <div
                className={`${styles.message} ${styles.aiMessage}`}
              >
                <span className={styles.messageLabel}>
                  {t.aiTwin.name}
                </span>

                <p>
                  {t.aiTwin.greeting}
                </p>
              </div>


              <div
                className={`${styles.message} ${styles.userMessage}`}
              >
                <p>
                  {t.aiTwin.exampleQuestion}
                </p>
              </div>


              <div
                className={`${styles.message} ${styles.aiMessage}`}
              >
                <span className={styles.messageLabel}>
                  {t.aiTwin.name}
                </span>

                <p className={styles.typing}>
                  <span />
                  <span />
                  <span />
                </p>
              </div>

            </div>


            {/* Input */}

            <div className={styles.inputWrapper}>
              <span>
                {t.aiTwin.placeholder}
              </span>

              <button
                type="button"
                aria-label={t.aiTwin.send}
                disabled
              >
                ↗
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
