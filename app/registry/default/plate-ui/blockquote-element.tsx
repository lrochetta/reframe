// @ts-nocheck
"use client";

import React from 'react';
import { PlateElement, PlateElementProps } from '@udecode/plate-common';

import clsx from 'clsx';

const BlockquoteElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, children, ...props }, ref) => {
  return (
    <PlateElement
      asChild
      ref={ref}
      className={clsx('my-1 border-l-2 pl-6 italic', className)}
      {...props}
    >
      <blockquote>{children}</blockquote>
    </PlateElement>
  );
});
BlockquoteElement.displayName = 'BlockquoteElement';

export { BlockquoteElement };
