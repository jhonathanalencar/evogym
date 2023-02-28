import { HTMLAttributes, ReactNode } from 'react';

import './styles.scss';

interface MarqueeRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MarqueeRoot({ children, className, ...rest }: MarqueeRootProps) {
  return (
    <div className={`marquee ${className}`} {...rest}>
      {children}
    </div>
  );
}

interface MarqueeGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MarqueeGroup({ children, className, ...rest }: MarqueeGroupProps) {
  return (
    <div className={`marquee__group ${className}`} {...rest}>
      {children}
    </div>
  );
}

interface MarqueeItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function MarqueeItem({ children, className, ...rest }: MarqueeItemProps) {
  return (
    <div className={`marquee__item ${className}`} {...rest}>
      {children}
    </div>
  );
}

export const Marquee = {
  Root: MarqueeRoot,
  Group: MarqueeGroup,
  Item: MarqueeItem,
};
