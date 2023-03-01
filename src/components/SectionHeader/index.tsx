import { HTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface SectionHeaderRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SectionHeaderRoot({
  children,
  className,
  ...rest
}: SectionHeaderRootProps) {
  return (
    <div className={`section-header ${className ? className : ''}`} {...rest}>
      {children}
    </div>
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

interface SectionHeaderDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function SectionHeaderDescription({
  children,
  className,
  ...rest
}: SectionHeaderDescriptionProps) {
  return (
    <p className={`section-header__description ${className}`} {...rest}>
      {children}
    </p>
  );
}

export const SectionHeader = {
  Root: SectionHeaderRoot,
  Title: SectionHeaderTitle,
  Description: SectionHeaderDescription,
  Highlight: SectionHeaderHighlight,
};
