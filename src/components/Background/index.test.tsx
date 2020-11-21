import { render } from '@testing-library/react';
import AppContext, { initialState } from 'components/App/AppContext';
import React from 'react';
import { AppBackground } from 'util/constants';
import Background from '.';

describe('Background', () => {
  it('renders', () => {
    const { container } = render(
      <AppContext.Provider value={initialState}>
        <Background />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders using other background', () => {
    const initialStateMock = {
      ...initialState,
      background: AppBackground.greyscale,
    };

    const { container } = render(
      <AppContext.Provider value={initialStateMock}>
        <Background />
      </AppContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
