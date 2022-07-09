import { render } from '@testing-library/react';

import StoreFeatureGameDetail from './store-feature-game-detail';

function mockFetch(data: any) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}

describe('StoreFeatureGameDetail', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });
  it('should render successfully', () => {
    const { baseElement } = render(<StoreFeatureGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});

// nx affected:test --base=maste
