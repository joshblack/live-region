'use client';

import * as React from 'react';
import { LiveRegion, LiveRegionOutlet } from 'react-live-region-element';

type BaseDialogProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<'dialog'>
>;

const BaseDialog = React.forwardRef<HTMLDialogElement, BaseDialogProps>(
  function Dialog({ children, ...rest }, ref) {
    return (
      <dialog ref={ref} {...rest}>
        <LiveRegion>
          {children}
          <LiveRegionOutlet />
        </LiveRegion>
      </dialog>
    );
  },
);

export type { BaseDialogProps };
export { BaseDialog };
