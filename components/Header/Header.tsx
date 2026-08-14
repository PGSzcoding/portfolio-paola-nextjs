'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

import { useLanguage } from '@/context/LanguageContext';

import styles from './Header.module.css';

const navItems = [
  { label: 'home', href: '/#inicio' },
  { label: 'about', href: '/#about' },
  { label: 'projects', href: '/#projects' },
  { label: 'stack', href: '/#stack' },
  { label: 'contact', href: '/#contact' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>

          {/* Logo */}
          <Link href="/#inicio" className={styles.logo}>
            PG<span>.</span>
          </Link>

          {/* Desktop navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {t.nav[item.label]}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className={styles.headerActions}>

            <LanguageSwitcher />

            <Button
              href="/#contact"
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
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
