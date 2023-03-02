import { HTMLAttributes, ReactNode } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

import './styles.scss';

type SectionHeaderRootProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'>;

const variants = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function SectionHeaderRoot({
  children,
  className,
  ...rest
}: SectionHeaderRootProps) {
  return (
    <motion.div
      className={`section-header ${className ? className : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function SectionHeaderTitle({
  children,
  className,
  ...rest
}: SectionHeaderTitleProps) {
  return (
    <h1 className={`section-header__heading ${className}`} {...rest}>
      {children}
    </h1>
  );
}

interface SectionHeaderHighlightProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

function SectionHeaderHighlight({
  children,
  className,
  ...rest
}: SectionHeaderHighlightProps) {
  return (
    <span className={`highlight ${className}`} {...rest}>
      {children}
    </span>
  );
}

interface SectionHeaderParagraphProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function SectionHeaderParagraph({
  children,
  className,
  ...rest
}: SectionHeaderParagraphProps) {
  return (
    <p className={`section-header__paragraph ${className}`} {...rest}>
      {children}
    </p>
  );
}

export const SectionHeader = {
  Root: SectionHeaderRoot,
  Title: SectionHeaderTitle,
  Paragraph: SectionHeaderParagraph,
  Highlight: SectionHeaderHighlight,
};
