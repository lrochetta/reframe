import React from 'react';
import { PlateLeaf, PlateLeafProps } from '@udecode/plate-common';

import clsx from 'clsx';

export function SearchHighlightLeaf({ className, ...props }: PlateLeafProps) {
  return <PlateLeaf className={clsx('bg-yellow-100', className)} {...props} />;
}
