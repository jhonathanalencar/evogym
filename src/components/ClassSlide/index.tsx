import { motion } from 'framer-motion';

import './styles.scss';

interface ClassSlideProps {
  title: string;
  description: string;
  url: string;
  alt: string;
}

const variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export function ClassSlide({ title, description, url, alt }: ClassSlideProps) {
  return (
    <div className="keen-slider__slide">
      <motion.div
        className="slide__content"
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <div className="slide__description">
          <span>{title}</span>
          <p>{description}</p>
        </div>
        <img src={url} alt={alt} className="slide__image" />
      </motion.div>
    </div>
  );
}
