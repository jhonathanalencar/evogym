import { ButtonHTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function CTAButton({ children, ...rest }: CTAButtonProps) {
  return (
    <button className="cta-button" {...rest}>
      {children}
    </button>
  );
}
