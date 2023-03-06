import { sponsorsImages } from './data';

import { Marquee } from '../Marquee';

import './styles.scss';

export function SponsorsBanner() {
  return (
    <div className="banner">
      <Marquee.Root>
        <Marquee.Group>
          {sponsorsImages.map((image, index) => {
            return (
              <Marquee.Item key={`${index} - ${image.alt}`}>
                <img src={image.url} alt={image.alt} />
              </Marquee.Item>
            );
          })}
        </Marquee.Group>

        <Marquee.Group aria-hidden={true}>
          {sponsorsImages.map((image, index) => {
            return (
              <Marquee.Item key={`${index} - ${image.alt}`}>
                <img src={image.url} alt={image.alt} />
              </Marquee.Item>
            );
          })}
        </Marquee.Group>
      </Marquee.Root>
    </div>
  );
}
