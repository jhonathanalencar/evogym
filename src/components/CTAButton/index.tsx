import { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'link' | 'button';
}

export function CTAButton({
  children,
  variant = 'button',
  ...rest
}: CTAButtonProps) {
  return (
    <button
      className={`cta-button ${variant === 'link' ? 'link' : 'button'}`}
      {...rest}
    >
      {children}
    </button>
  );
}
