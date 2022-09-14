import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Link = {
  target: {
    href: string;
    newTab: boolean;
  };
  textContent: {
    text?: string;
    prefix?: string;
    icon?: IconDefinition;
  };
};

export type StyledProps = Link & {
  styles: {
    icon?: {
      className: string;
    };
    textContent?: {
      className: string;
    };
    prefix?: {
      className: string;
    };
    anchor?: {
      className: string;
    };
    container?: {
      className: string;
    };
  };
};
