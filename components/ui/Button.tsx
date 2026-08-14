import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  download?: string | boolean;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  download,
  variant = 'primary',
  className = '',
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const buttonClass = `${styles.button}  ${styles["button-"+variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} download={download} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClass} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
