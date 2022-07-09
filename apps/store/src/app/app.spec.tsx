import { findByTestId, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

function mockFetch(data: any) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  it('should render successfully', async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const element = await findByTestId(baseElement, 'hohoho');

    expect(element).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText(/header title/gi)).toBeTruthy();
  });
});
