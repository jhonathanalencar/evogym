import { motion } from 'framer-motion';

import { benefitsData } from '../../shared/data';

import { BenefitCard } from '../../components/BenefitCard';
import { SectionHeader } from '../../components/SectionHeader';

import './styles.scss';

const variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits__content">
        <SectionHeader.Root>
          <SectionHeader.Title>
            <SectionHeader.Highlight>More</SectionHeader.Highlight> than a just
            gym.
          </SectionHeader.Title>
          <SectionHeader.Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            voluptatem eius voluptate sed, eveniet hic ullam numquam laboriosam
            porro odio harum molestiae impedit voluptatum minus, officiis non,
            minima at eligendi unde magnam a? Voluptates repudiandae, harum ex
            doloremque optio ipsam rerum atque ratione totam voluptas, nesciunt
            architecto sequi officia perspiciatis?
          </SectionHeader.Paragraph>
        </SectionHeader.Root>

        <motion.div
          className="benefits__cards"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={variants}
        >
          {benefitsData.map((benefit) => {
            return (
              <BenefitCard
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
