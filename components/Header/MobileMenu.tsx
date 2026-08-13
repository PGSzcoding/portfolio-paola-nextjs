interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

import styles from './MobileMenu.module.css';

export default function MobileMenu({
  isOpen,
  onClose,
  items,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles["mobile-menu"]}>

      <nav>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className={styles["mobile-menu-button"]}
        onClick={onClose}
      >
        Hablemos ↗
      </a>

    </div>
  );
}