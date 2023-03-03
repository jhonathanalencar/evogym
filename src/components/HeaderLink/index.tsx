import { LiHTMLAttributes, ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './styles.scss';

interface HeaderLinkProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  linkTo: string;
}

export function HeaderLink({
  children,
  linkTo,
  className,
  ...rest
}: HeaderLinkProps) {
  return (
    <li className={`header__link ${className ? className : ''}`} {...rest}>
      <AnchorLink offset="80" href={linkTo}>
        {children}
      </AnchorLink>
    </li>
  );
}
