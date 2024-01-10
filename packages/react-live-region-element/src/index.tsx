'use client';

import { LiveRegionElement, templateContent } from 'live-region-element';
import 'live-region-element/define';
import * as React from 'react';

type LiveRegionProps = React.PropsWithChildren<{}>;

function LiveRegion({ children }: LiveRegionProps) {
  const [liveRegion, setLiveRegion] = React.useState<LiveRegionElement | null>(
    null,
  );

  return (
    <LiveRegionContext.Provider value={liveRegion}>
      <OutletContext.Provider value={setLiveRegion}>
        {children}
      </OutletContext.Provider>
    </LiveRegionContext.Provider>
  );
}

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
const innerHTML = {
  __html: templateContent,
};
function LiveRegionOutlet() {
  const setLiveRegion = useOutlet();
  return (
    <live-region ref={setLiveRegion} suppressHydrationWarning>
      {canUseDOM ? null : (
        <template
          // @ts-ignore shadowrootmode does exist on `template`
          shadowrootmode="open"
          dangerouslySetInnerHTML={innerHTML}
        />
      )}
    </live-region>
  );
}

type LiveRegionContext = LiveRegionElement;
const LiveRegionContext = React.createContext<LiveRegionContext | null>(null);

function useLiveRegion(): LiveRegionContext | null {
  const context = React.useContext(LiveRegionContext);
  if (context) {
    return context;
  }
  return null;
}

type OutletContext = React.Dispatch<
  React.SetStateAction<LiveRegionElement | null>
>;
const OutletContext = React.createContext<OutletContext | null>(null);

function useOutlet() {
  const context = React.useContext(OutletContext);
  if (context) {
    return context;
  }
  throw new Error('useOutlet() must be used with <LiveRegion>');
}

export type { LiveRegionProps };
export { LiveRegion, LiveRegionOutlet, useLiveRegion };
