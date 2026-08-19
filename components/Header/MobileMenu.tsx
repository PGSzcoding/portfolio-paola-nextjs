interface NavItem {
  label: 'home' | 'about' | 'projects' | 'contact';
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: readonly NavItem[];
}

import styles from './MobileMenu.module.css';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { LuSparkles } from 'react-icons/lu';

export default function MobileMenu({
  isOpen,
  onClose,
  items,
}: MobileMenuProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className={styles["mobile-menu"]}>

      <nav>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
          >
            {t.nav[item.label]}
          </Link>
        ))}
      </nav>

      <Link
        href="/#contact"
        className={styles["mobile-menu-button"]}
        onClick={onClose}
      >
        {t.nav.letsTalk} &nbsp; <LuSparkles size={18}  className={styles.aiIcon} />
      </Link>

    </div>
  );
}
