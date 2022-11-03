import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export default function primarySpan({ className, children }: Props) {
  return <span className={className || 'text-primary'}>{children}</span>;
}
