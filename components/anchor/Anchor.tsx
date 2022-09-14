import React from 'react';
import type { StyledLink } from '$types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Anchor({ styles, target, content }: StyledLink) {
  return (
    <a
      href={target.href}
      target={target.newTab ? '_blank' : '_self'}
      className={styles.anchor?.className}
    >
      {content.text}
      {content.icon && (
        <FontAwesomeIcon
          icon={content.icon}
          className={styles?.icon?.className}
        />
      )}
    </a>
  );
}
