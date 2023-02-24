import { LiHTMLAttributes, ReactNode } from 'react';

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
      <a href={linkTo}>{children}</a>
    </li>
  );
}
