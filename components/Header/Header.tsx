'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';
import { LuSparkles } from 'react-icons/lu';

const navItems = [
  { label: 'home', href: '/#inicio' },
  { label: 'about', href: '/#about' },
  { label: 'projects', href: '/projects' },
  { label: 'contact', href: '/#contact' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (href: string) => {
  if (href === '/' || href === '/#inicio') {
    return pathname === '/';
  }

  if (href === '/projects') {
    return pathname.startsWith('/projects');
  }

  return false;
};

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
              <Link key={item.href} href={item.href}
               className={isActive(item.href) ? styles.active : ''}>
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
              className={styles.aiBtn}
            >
              {t.nav.letsTalk}
             <LuSparkles size={18}  className={styles.aiIcon} />
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
