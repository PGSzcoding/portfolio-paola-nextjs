'use client';

import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';

import { FiMail, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './Footer.module.css';

const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:paolagtzsal@gmail.com',
    icon: FiMail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paola-guti%C3%A9rrez-49b84a1a1/',
    icon: FiLinkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/524491984582',
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.content}>

        <Link
          href="/"
          className={styles.logo}
          aria-label="Paola Gutierrez"
        >
          PG<span>.</span>
        </Link>

        {/* Social links */}
        <div className={styles.socials}>
          {socialLinks.map(
            ({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                target={
                  label === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  label === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
              >
                <Icon />
              </a>
            )
          )}
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Paola Gutierrez
          </span>

          <span>
            {t.footer.madeWith}
          </span>

          <Link href="#inicio">
            {t.footer.backToTop} ↑
          </Link>
        </div>

      </div>
    </footer>
  );
}