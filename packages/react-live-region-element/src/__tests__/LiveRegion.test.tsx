import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, test } from 'vitest';
import { LiveRegion, LiveRegionOutlet, useLiveRegion } from '../';

describe('LiveRegion', () => {
  test('hello', () => {
    render(
      <LiveRegion>
        <LiveRegionOutlet />
      </LiveRegion>,
    );
  });
});
