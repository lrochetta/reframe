import { TEditableProps } from '@udecode/plate-common';

import { MyValue } from '@/types/plate-types';
import clsx from "clsx";
// import clsx from 'clsx';

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  style: {
    outline: 'none',
  },
  className: clsx('relative max-w-full leading-[1.4] [&_strong]:font-bold'),
};
