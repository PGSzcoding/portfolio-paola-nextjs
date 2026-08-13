import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const buttonClass = `${styles.button}  ${styles["button-"+variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
}