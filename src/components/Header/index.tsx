import { useEffect, useState } from 'react';

import { images } from '../../shared';
import { SectionType, SelectPage } from '../../shared/data';

import { Navbar } from '../Navbar';

import './styles.scss';

interface HeaderProps {
  activePage: SectionType;
  setActivePage: (key: SectionType) => void;
}

export function Header({ activePage, setActivePage }: HeaderProps) {
  const [isTopPage, setIsTopPage] = useState(() => {
    return scrollY === 0;
  });

  useEffect(() => {
    function handleIsTopPage() {
      if (scrollY === 0) {
        setIsTopPage(true);
        setActivePage(SelectPage.HOME);
      } else {
        setIsTopPage(false);
      }
    }

    window.addEventListener('scroll', handleIsTopPage);

    return () => {
      window.removeEventListener('scroll', handleIsTopPage);
    };
  }, [setActivePage]);

  return (
    <header className={`header__container ${isTopPage ? '' : 'header__bg'}`}>
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>
    </header>
  );
}
