import { images } from '../../shared';

import './styles.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__copyright">
          <img src={images.Logo} alt="Evogym logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptates alias iure voluptas necessitatibus
            consequuntur numquam fugit quos. Consectetur, tempore.
          </p>
          <span>&copy; Evogym All Rights Reserved.</span>
        </div>

        <div className="footer__links">
          <strong>Links</strong>
          <ul>
            <li>Lorem ipsum dolor sit</li>
            <li>amet consectetur adipisicing</li>
            <li>elit. Sint asperiores</li>
          </ul>
        </div>

        <div className="footer__contact">
          <strong>Contact Us</strong>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>(99)1234-5678</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
