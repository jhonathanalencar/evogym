import { motion, Variants } from 'framer-motion';

import { benefitsData } from './data';
import { images } from '../../shared';
import { SectionType, SelectPage } from '../../shared/data';

import { BenefitCard } from '../../components/BenefitCard';
import { SectionHeader } from '../../components/SectionHeader';
import { CTAButton } from '../../components/CTAButton';

import './styles.scss';

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const imageVariants: Variants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

interface BenefitsProps {
  setActivePage: (key: SectionType) => void;
}

export function Benefits({ setActivePage }: BenefitsProps) {
  return (
    <motion.section
      id="benefits"
      className="benefits"
      onViewportEnter={() => setActivePage(SelectPage.BENEFITS)}
      viewport={{ margin: '-25%' }}
    >
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
          variants={cardsVariants}
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

        <div className="benefits__content_members">
          <motion.div
            className="benefits__image"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img
              src={images.BenefitsPageGraphic}
              alt="woman in white sports bras standing"
            />
          </motion.div>

          <div className="members__content">
            <SectionHeader.Root slide="left">
              <SectionHeader.Title>
                Millions of happy members getting{' '}
                <SectionHeader.Highlight>fit</SectionHeader.Highlight>
              </SectionHeader.Title>
              <SectionHeader.Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium excepturi magnam, minima dolor quas accusamus
                molestias aliquam quos optio numquam nihil ipsa nulla
                consectetur aliquid similique, delectus vel? Quis explicabo
                sequi et, esse vel eaque aperiam! Autem vel, quidem iste ratione
                reiciendis fugit est cumque nemo. Dolorum deserunt corporis
                fugit?
              </SectionHeader.Paragraph>
              <SectionHeader.Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, natus cumque enim laudantium velit ut soluta
                adipisci quas possimus rerum repellat nostrum corrupti
                doloremque laboriosam perspiciatis consequuntur aut ducimus
                fugit!
              </SectionHeader.Paragraph>
            </SectionHeader.Root>

            <CTAButton>Join Now</CTAButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
