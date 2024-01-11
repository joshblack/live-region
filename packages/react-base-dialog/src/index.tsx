'use client';

import * as React from 'react';
import { LiveRegion, LiveRegionOutlet } from 'react-live-region-element';

type Props = React.PropsWithChildren<React.ComponentPropsWithoutRef<'dialog'>>;

const BaseDialog = React.forwardRef<HTMLDialogElement, Props>(function Dialog(
  { children, ...rest },
  ref,
) {
  return (
    <dialog ref={ref} {...rest}>
      <LiveRegion>
        {children}
        <LiveRegionOutlet />
      </LiveRegion>
    </dialog>
  );
});

export type BaseDialogProps = React.ComponentProps<typeof BaseDialog>;
export { BaseDialog };
