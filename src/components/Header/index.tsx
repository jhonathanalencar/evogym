import { useEffect, useState } from 'react';
import { images } from '../../shared';

import { Navbar } from '../Navbar';

import './styles.scss';

export function Header() {
  const [isTopPage, setIsTopPage] = useState(false);

  useEffect(() => {
    function handleIsTopPage() {
      if (scrollY > 0) {
        setIsTopPage(true);
      } else {
        setIsTopPage(false);
      }
    }

    window.addEventListener('scroll', handleIsTopPage);

    return () => {
      window.removeEventListener('scroll', handleIsTopPage);
    };
  }, []);

  return (
    <header className={`header__container ${isTopPage ? 'header__bg' : ''}`}>
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        <Navbar />
      </div>
    </header>
  );
}
