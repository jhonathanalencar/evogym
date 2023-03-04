import { LiHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-scroll';

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
      <Link
        to={linkTo}
        href={`#${linkTo}`}
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        activeClass="active"
      >
        {children}
      </Link>
    </li>
  );
}
