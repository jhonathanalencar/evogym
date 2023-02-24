import { useState } from 'react';
import { List, X } from 'phosphor-react';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { images } from '../../shared';

import { CTAButton } from '../CTAButton';
import { HeaderLink } from '../HeaderLink';

import './styles.scss';

export function Header() {
  const isAboveMediumScreens = useMediaQuery('(min-width: 52em)');

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header__container">
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        {isAboveMediumScreens ? (
          <nav className="main-navigation">
            <ul aria-label="main" className="nav-list">
              <div className="nav-list__left">
                <HeaderLink linkTo="/" className="active">
                  Home
                </HeaderLink>
                <HeaderLink linkTo="/">Benefits</HeaderLink>
                <HeaderLink linkTo="/">Our Classes</HeaderLink>
                <HeaderLink linkTo="/">Contact Us</HeaderLink>
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
                <HeaderLink linkTo="/" className="active">
                  Home
                </HeaderLink>
                <HeaderLink linkTo="/">Benefits</HeaderLink>
                <HeaderLink linkTo="/">Our Classes</HeaderLink>
                <HeaderLink linkTo="/">Contact Us</HeaderLink>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
