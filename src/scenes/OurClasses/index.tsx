import { useKeenSlider } from 'keen-slider/react';
import { motion, Variants } from 'framer-motion';

import { classesData, classesSliderConfig } from './data';

import { SectionHeader } from '../../components/SectionHeader';
import { ClassSlide } from '../../components/ClassSlide';

import 'keen-slider/keen-slider.min.css';
import './styles.scss';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

export function OurClasses() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(classesSliderConfig);

  return (
    <section id="ourClasses" className="our-classes">
      <div className="our-classes__content">
        <SectionHeader.Root>
          <SectionHeader.Title>
            Our <SectionHeader.Highlight>Classes</SectionHeader.Highlight>
          </SectionHeader.Title>
          <SectionHeader.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum
            perferendis quisquam officia eos voluptate, illum nihil sapiente
            possimus non beatae exercitationem cumque neque sed sint expedita
            nemo laudantium? Dolorum?
          </SectionHeader.Paragraph>
        </SectionHeader.Root>

        <motion.div
          ref={sliderRef}
          className="keen-slider"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {classesData.map((item) => {
            return (
              <ClassSlide
                key={item.id}
                title={item.title}
                description={item.description}
                url={item.url}
                alt={item.alt}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
