import { images } from '../../shared';

export const classesSliderConfig = {
  slides: {
    perView: 1.1,
    spacing: 15,
  },
  breakpoints: {
    '(min-width: 650px)': {
      slides: {
        perView: 2.1,
        spacing: 15,
      },
    },
    '(min-width: 1150px)': {
      slides: {
        perView: 3.1,
        spacing: 15,
      },
    },
  },
};

export const classesData = [
  {
    id: '1',
    title: 'Weight Training Classes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur consectetur quibusdam unde. At, quasi.',
    url: images.Image1,
    alt: 'Woman in blue sports bras carrying gray dumbbells',
  },
  {
    id: '2',
    title: 'Yoga Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus consectetur vero repudiandae eius saepe voluptatum!',
    url: images.Image2,
    alt: 'Group of woman doing yoga',
  },
  {
    id: '3',
    title: 'Ab Core Classes',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quod nesciunt tempore eius neque sapiente.',
    url: images.Image3,
    alt: 'woman with red top and black shorts and woman with black top and black leggings on purple yoga mat',
  },
  {
    id: '4',
    title: 'Adventure Classes',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quaerat ipsam unde? Rem, mollitia sunt?',
    url: images.Image4,
    alt: 'Group of woman doing stretch with elastic band',
  },
  {
    id: '5',
    title: 'Fitness Classes',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facilis rem vel porro voluptatibus fugiat.',
    url: images.Image5,
    alt: 'Women exercising',
  },
  {
    id: '6',
    title: 'Training Classes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit saepe natus eius, quasi quaerat.',
    url: images.Image6,
    alt: 'Three women kneeling on floor',
  },
];
