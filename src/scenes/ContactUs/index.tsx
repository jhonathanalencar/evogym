import { motion, Variants } from 'framer-motion';

import { images } from '../../shared';

import { SectionHeader } from '../../components/SectionHeader';

import './styles.scss';

const variants = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

export function ContactUs() {
  return (
    <section id="contactUs" className="contact-us">
      <div className="contact-us__container">
        <SectionHeader.Root>
          <SectionHeader.Title>
            <SectionHeader.Highlight>Join Now</SectionHeader.Highlight> to get
            in shape
          </SectionHeader.Title>
          <SectionHeader.Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            sapiente dolore sit aut et culpa quas, molestiae quam a repudiandae
            saepe quos aliquam perspiciatis repellendus ipsa dolores, itaque
            architecto possimus!
          </SectionHeader.Paragraph>
        </SectionHeader.Root>

        <motion.div
          className="contact-us__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <motion.div variants={variants} transition={{ duration: 0.6 }}>
            <form className="contact-us__form">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
              <textarea placeholder="message" />
              <button>submit</button>
            </form>
          </motion.div>

          <motion.div
            className="contact-us__image"
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <img src={images.ContactUsPageGraphic} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
