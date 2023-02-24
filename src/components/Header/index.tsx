import { images } from '../../shared';
import { CTAButton } from '../CTAButton';
import { HeaderLink } from '../HeaderLink';

import './styles.scss';

export function Header() {
  return (
    <header className="header__container">
      <div className="header__content">
        <img src={images.Logo} alt="Evogym logo" />

        <nav id="main-navigation" className="main-navigation">
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
      </div>
    </header>
  );
}
