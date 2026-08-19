'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import Reveal from '@/components/ui/Reveal';

import styles from './AiTwin.module.css';

type Message = { role: 'assistant' | 'user'; content: string };

export default function AiTwin() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: t.aiTwin.greeting }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;
    const nextMessages = [...messages, { role: 'user' as const, content: question }];
    setMessages(nextMessages);
    setInput('');
    setError('');
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-twin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: nextMessages }) });
      const data = await response.json();
      if (!response.ok || !data.message) throw new Error(data.error);
      setMessages((current) => [...current, { role: 'assistant', content: data.message }]);
    } catch {
      setError(t.aiTwin.error);
    } finally {
      setIsLoading(false);
    }
  }

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

            <div ref={messagesRef} className={styles.messages} aria-live="polite">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`${styles.message} ${message.role === 'assistant' ? styles.aiMessage : styles.userMessage}`}>
                  {message.role === 'assistant' && <span className={styles.messageLabel}>{t.aiTwin.name}</span>}
                  <p>{message.content}</p>
                </div>
              ))}
              {isLoading && <div className={`${styles.message} ${styles.aiMessage}`} aria-label={t.aiTwin.typing}>
                <p className={styles.typing}>
                  <span />
                  <span />
                  <span />
                </p>
              </div>}
            </div>
            {error && <p className={styles.error} role="alert">{error}</p>}
            <form className={styles.inputWrapper} onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="ai-twin-question">{t.aiTwin.placeholder}</label>
              <input id="ai-twin-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.aiTwin.placeholder} disabled={isLoading} maxLength={800} />
              <button
                type="submit"
                aria-label={t.aiTwin.send}
                disabled={isLoading || !input.trim()}
              >
                ↗
              </button>
            </form>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
