'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

import styles from './AiTwin.module.css';

export default function AiTwin() {
  const { t } = useLanguage();

  return (
    <section
      id="ai-twin"
      className={styles.aiTwin}
    >
      <div className={styles.content}>

        {/* Header */}

        <div className={styles.heading}>
          <span className={styles.label}>
            {t.aiTwin.label}
          </span>

          <h2>
            {t.aiTwin.title}
          </h2>

          <p>
            {t.aiTwin.description}
          </p>
        </div>


        {/* Chat area */}

        <div className={styles.chatScene}>

          {/* Decorative code */}

          <div className={styles.codeDecoration}>
            &lt;AI /&gt;
          </div>


          {/* Character */}

          <div className={styles.character}>
            <Image
              src="/images/AI/paola-ai-twin.png"
              alt={t.aiTwin.imageAlt}
              width={400}
              height={510}
              sizes="(max-width: 850px) 260px, 400px"
            />
          </div>


          {/* Chat */}

          <div className={styles.chat}>

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

          </div>

        </div>

      </div>
    </section>
  );
}
