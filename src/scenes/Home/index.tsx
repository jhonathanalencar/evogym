import { useMediaQuery } from '../../hooks/useMediaQuery';
import { images } from '../../shared';

import { CTAButton } from '../../components/CTAButton';
import { SponsorsBanner } from '../../components/SponsorsBanner';

import './styles.scss';

export function Home() {
  const isAboveMediumScreen = useMediaQuery('(min-width: 52em)');

  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__info">
            <div
              className={`home__heading ${
                isAboveMediumScreen ? 'heading__content' : ''
              }`}
            >
              <img
                src={images.HomePageText}
                alt="Evogym evolutionary fitness"
              />
            </div>

            <p className="home__description">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>

            <div className="home__buttons">
              <CTAButton>Join Now</CTAButton>

              <a href="/">Learn More</a>
            </div>
          </div>

          <div className="home__image">
            <img
              src={images.HomePageGraphic}
              alt="woman in red sports bras and red leggings"
            />
          </div>
        </div>

        {isAboveMediumScreen ? <SponsorsBanner /> : null}
      </div>
    </section>
  );
}
