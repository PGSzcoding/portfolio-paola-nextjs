'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

import { useLanguage } from '@/context/LanguageContext';

import styles from './Header.module.css';

const navItems = [
  { label: 'home', href: '#inicio' },
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>

          {/* Logo */}
          <a href="#inicio" className={styles.logo}>
            PG<span>.</span>
          </a>

          {/* Desktop navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {t.nav[item.label as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className={styles.headerActions}>

            <LanguageSwitcher />

            <Button
              href="#contact"
              variant="dark"
            >
              {t.nav.letsTalk}
              <span>↗</span>
            </Button>

          </div>

          {/* Mobile menu button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
          </button>

        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navItems}
      />
    </header>
  );
}