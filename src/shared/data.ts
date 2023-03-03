export const SelectPage = {
  HOME: 'home',
  BENEFITS: 'benefits',
  OUR_CLASSES: 'ourClasses',
  CONTACT_US: 'contactUs',
} as const;

const [SelectPageValues] = Object.values(SelectPage);

export type SectionType = typeof SelectPageValues;
