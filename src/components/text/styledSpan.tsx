import React from 'react';

type Props = {
  text: string;
  color?: 'primary' | 'secondary';
};

export default function primarySpan({ text, color = 'primary' }: Props) {
  return (
    <span
      className={`${
        color === 'primary'
          ? 'bg-primary text-primary-content'
          : 'bg-secondary text-secondary-content'
      } p-1 rounded-md`}
    >
      {text}
    </span>
  );
}
