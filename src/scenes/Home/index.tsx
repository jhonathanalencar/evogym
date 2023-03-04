import { motion, Variants } from 'framer-motion';

import { useMediaQuery } from '../../hooks/useMediaQuery';
import { images } from '../../shared';

import { CTAButton } from '../../components/CTAButton';
import { SponsorsBanner } from '../../components/SponsorsBanner';

import './styles.scss';

export function Home() {
  const isAboveMediumScreen = useMediaQuery('(min-width: 52em)');

  const variants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          <motion.div
            className="home__info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            variants={variants}
          >
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              magnam iste quae ab animi perspiciatis odit recusandae, alias
              expedita quidem.
            </p>

            <motion.div
              className="home__buttons"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={variants}
            >
              <CTAButton>Join Now</CTAButton>

              <CTAButton variant="link">Learn More</CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="home__image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={images.HomePageGraphic}
              alt="woman in red sports bras and red leggings"
            />
          </motion.div>
        </div>

        {isAboveMediumScreen ? <SponsorsBanner /> : null}
      </div>
    </section>
  );
}
