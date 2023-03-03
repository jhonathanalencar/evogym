import { useState } from 'react';
import { List, X } from 'phosphor-react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { NavbarLinks } from './data';
import { SectionType } from '../../shared/data';

import { CTAButton } from '../CTAButton';
import { HeaderLink } from '../HeaderLink';

import './styles.scss';

interface NavbarProps {
  activePage: SectionType;
  setActivePage: (key: SectionType) => void;
}

export function Navbar({ activePage, setActivePage }: NavbarProps) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 52em)');

  const [isNavOpen, setIsNavOpen] = useState(false);

  return isAboveMediumScreens ? (
    <nav className="main-navigation">
      <ul aria-label="main" className="nav-list">
        <div className="nav-list__left">
          {NavbarLinks.map((link) => {
            return (
              <HeaderLink
                key={link.id}
                linkTo={link.link}
                className={activePage === link.name ? 'active' : ''}
                onClick={() => setActivePage(link.name as SectionType)}
              >
                {link.title}
              </HeaderLink>
            );
          })}
        </div>

        <div className="nav-list__right">
          <HeaderLink linkTo="/">Sign In</HeaderLink>
          <CTAButton>Become a Member</CTAButton>
        </div>
      </ul>
    </nav>
  ) : (
    <>
      <button
        aria-label="Menu"
        aria-controls="main-navigation"
        aria-expanded={isNavOpen ? true : false}
        className="mobile__nav-toggle"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? <X weight="bold" /> : <List weight="bold" />}
      </button>
      <nav
        id="main-navigation"
        data-visible={isNavOpen ? 'true' : 'false'}
        className="mobile__main-navigation"
      >
        <ul aria-label="main">
          {NavbarLinks.map((link) => {
            return (
              <HeaderLink
                key={link.id}
                linkTo={link.link}
                className={activePage === link.name ? 'active' : ''}
                onClick={() => setActivePage(link.name as SectionType)}
              >
                {link.title}
              </HeaderLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
