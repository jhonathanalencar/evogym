import { images } from '../../shared';

import './styles.scss';
import { Navbar } from '../Navbar';

export function Header() {
  return (
    <header className="header__container">
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        <Navbar />
      </div>
    </header>
  );
}
