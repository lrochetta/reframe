import React from 'react';
import { PlateElement, PlateElementProps } from '@udecode/plate-common';
import { cva, VariantProps } from 'class-variance-authority';

import clsx from 'clsx';

const listVariants = cva('m-0 ps-6', {
  variants: {
    variant: {
      ul: 'list-disc [&_ul]:list-[circle] [&_ul_ul]:list-[square]',
      ol: 'list-decimal',
    },
  },
});

export function ListElement({
  className,
  children,
  variant = 'ul',
  ...props
}: PlateElementProps & VariantProps<typeof listVariants>) {
  const Element = variant!;

  return (
    <PlateElement
      asChild
      className={clsx(listVariants({ variant }), className)}
      {...props}
    >
      <Element>{children}</Element>
    </PlateElement>
  );
}
