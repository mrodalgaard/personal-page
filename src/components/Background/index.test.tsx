import { mount } from 'enzyme';
import React from 'react';
import Background from '.';
import { AppBackground } from '../../util/constants';
import AppContext, { initialState } from '../App/AppContext';

describe('Background', () => {
  const windowIntersectionObserver = window.IntersectionObserver;

  beforeAll(() => {
    // Mock IntersectionObserver used by LazyImage
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn,
    })) as any;
  });

  afterAll(() => {
    window.IntersectionObserver = windowIntersectionObserver;
  });

  it('renders', () => {
    const wrapper = mount(
      <AppContext.Provider value={initialState}>
        <Background />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders using other background', () => {
    const initialStateMock = {
      ...initialState,
      background: AppBackground.greyscale,
    };

    const wrapper = mount(
      <AppContext.Provider value={initialStateMock}>
        <Background />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
