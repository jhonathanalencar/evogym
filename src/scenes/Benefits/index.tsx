import { SectionHeader } from '../../components/SectionHeader';

import './styles.scss';

export function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <SectionHeader.Root>
        <SectionHeader.Title>
          <SectionHeader.Highlight>More</SectionHeader.Highlight> than a just
          gym.
        </SectionHeader.Title>
        <SectionHeader.Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          voluptatem eius voluptate sed, eveniet hic ullam numquam laboriosam
          porro odio harum molestiae impedit voluptatum minus, officiis non,
          minima at eligendi unde magnam a? Voluptates repudiandae, harum ex
          doloremque optio ipsam rerum atque ratione totam voluptas, nesciunt
          architecto sequi officia perspiciatis?
        </SectionHeader.Description>
      </SectionHeader.Root>

      <div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
      </div>
    </section>
  );
}
