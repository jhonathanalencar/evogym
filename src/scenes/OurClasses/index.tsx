import { useKeenSlider } from 'keen-slider/react';

import { classesData, classesSliderConfig } from './data';

import { SectionHeader } from '../../components/SectionHeader';
import { ClassSlide } from '../../components/ClassSlide';

import 'keen-slider/keen-slider.min.css';
import './styles.scss';

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

        <div ref={sliderRef} className="keen-slider">
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
        </div>
      </div>
    </section>
  );
}
