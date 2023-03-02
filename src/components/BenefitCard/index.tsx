import { motion } from 'framer-motion';

import { CTAButton } from '../CTAButton';

import './styles.scss';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <motion.div
      className="benefit__card"
      variants={variants}
      transition={{ duration: 0.6 }}
    >
      <div className="benefit__card_icon">{icon}</div>
      <strong className="benefit__card_title">{title}</strong>
      <p className="benefit__card_description">{description}</p>
      <CTAButton variant="link">Learn More</CTAButton>
    </motion.div>
  );
}
