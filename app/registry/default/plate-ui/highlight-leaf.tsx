import React from 'react';
import { PlateLeaf, PlateLeafProps } from '@udecode/plate-common';

import clsx from 'clsx';

export function HighlightLeaf({
  className,
  children,
  ...props
}: PlateLeafProps) {
  return (
    <PlateLeaf asChild className={clsx('bg-yellow-200', className)} {...props}>
      <mark>{children}</mark>
    </PlateLeaf>
  );
}
