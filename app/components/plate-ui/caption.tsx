import React, { ComponentProps } from "react";
import {
  Caption as CaptionPrimitive,
  CaptionTextarea as CaptionTextareaPrimitive,
} from "@udecode/plate-caption";
import { cva, VariantProps } from "class-variance-authority";

import clsx from "clsx";

const captionVariants = cva("max-w-full", {
  variants: {
    align: {
      left: "mr-auto",
      center: "mx-auto",
      right: "ml-auto",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

const Caption = React.forwardRef<
  React.ElementRef<typeof CaptionPrimitive>,
  ComponentProps<typeof CaptionPrimitive> & VariantProps<typeof captionVariants>
>(({ className, style, align, ...props }, ref) => (
  <CaptionPrimitive
    ref={ref}
    className={clsx(captionVariants({ align }), className)}
    {...props}
  />
));
Caption.displayName = "Caption";

const CaptionTextarea = React.forwardRef<
  React.ElementRef<typeof CaptionTextareaPrimitive>,
  ComponentProps<typeof CaptionTextareaPrimitive>
>(({ className, ...props }, ref) => (
  <CaptionTextareaPrimitive
    ref={ref}
    className={clsx(
      "mt-2 w-full resize-none border-none bg-inherit p-0 font-[inherit] text-inherit",
      "focus:outline-none focus:[&::placeholder]:opacity-0",
      "text-center",
      className
    )}
    {...props}
  />
));
CaptionTextarea.displayName = "CaptionTextarea";

export { Caption, CaptionTextarea };
