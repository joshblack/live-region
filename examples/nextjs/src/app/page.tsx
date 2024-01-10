'use client';

import { useRef } from 'react';
import { BaseDialog } from 'react-base-dialog';
import {
  LiveRegion,
  LiveRegionOutlet,
  useLiveRegion,
} from 'react-live-region-element';

function Message() {
  const liveRegion = useLiveRegion();
  return (
    <>
      <div>
        <button
          onClick={() => {
            liveRegion?.announce('This is a polite message');
          }}>
          Polite message
        </button>
        <button
          onClick={() => {
            liveRegion?.announce('This is an assertive message', {
              politeness: 'assertive',
            });
          }}>
          Assertive message
        </button>
      </div>
    </>
  );
}

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <LiveRegion>
      <h1>Hello</h1>
      <Message />
      <button
        onClick={() => {
          dialogRef.current?.showModal();
        }}>
        Open dialog example
      </button>
      <BaseDialog ref={dialogRef}>
        <button
          onClick={() => {
            dialogRef.current?.close();
          }}>
          Close
        </button>
        <div>
          <Message />
        </div>
      </BaseDialog>
      <LiveRegionOutlet />
    </LiveRegion>
  );
}
