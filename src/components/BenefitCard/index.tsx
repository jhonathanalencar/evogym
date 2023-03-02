import { CTAButton } from '../CTAButton';
import './styles.scss';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="benefit__card">
      <div className="benefit__card_icon">{icon}</div>
      <strong className="benefit__card_title">{title}</strong>
      <p className="benefit__card_description">{description}</p>
      <CTAButton variant="link">Learn More</CTAButton>
    </div>
  );
}
