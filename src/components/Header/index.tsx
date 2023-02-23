import { images } from '../../shared';

import './styles.scss';

export function Header() {
  return (
    <header className="header__container">
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        <nav id="main-navigation" className="main-navigation">
          <ul aria-label="main" className="nav-list">
            <div className="nav-list__left">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Benefits</a>
              </li>
              <li>
                <a href="/">Our Classes</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </div>

            <div className="nav-list__right">
              <li>
                <a href="/">Sign In</a>
              </li>
              <li>
                <a href="/">Become a Memeber</a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
