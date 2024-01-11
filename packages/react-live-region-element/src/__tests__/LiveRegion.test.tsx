import { render } from '@testing-library/react';
import * as React from 'react';
import { describe, test } from 'vitest';
import { LiveRegion, LiveRegionOutlet } from '../';

describe('LiveRegion', () => {
  test('hello', () => {
    render(
      <LiveRegion>
        <LiveRegionOutlet />
      </LiveRegion>,
    );
  });
});
