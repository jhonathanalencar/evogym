import { ReactNode } from 'react';
import { Link } from 'react-scroll';

import './styles.scss';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'link' | 'button';
  linkTo?: string;
}

export function CTAButton({
  children,
  variant = 'button',
  linkTo = 'contactUs',
}: CTAButtonProps) {
  const type = variant === 'link' ? 'link' : 'button';

  return (
    <Link
      to={linkTo}
      href={`#${linkTo}`}
      smooth={true}
      duration={500}
      offset={-80}
      spy={true}
      className={`cta-button ${type}`}
    >
      {children}
    </Link>
  );
}
