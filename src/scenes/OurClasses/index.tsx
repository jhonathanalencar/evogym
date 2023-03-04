import { SectionHeader } from '../../components/SectionHeader';

import './styles.scss';

export function OurClasses() {
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
      </div>
    </section>
  );
}
