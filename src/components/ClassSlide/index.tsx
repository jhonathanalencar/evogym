import './styles.scss';

interface ClassSlideProps {
  title: string;
  description: string;
  url: string;
  alt: string;
}

export function ClassSlide({ title, description, url, alt }: ClassSlideProps) {
  return (
    <div className="keen-slider__slide">
      <div className="slide__content">
        <div className="slide__description">
          <span>{title}</span>
          <p>{description}</p>
        </div>
        <img src={url} alt={alt} className="slide__image" />
      </div>
    </div>
  );
}
