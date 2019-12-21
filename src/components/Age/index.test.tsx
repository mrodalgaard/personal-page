import { mount } from 'enzyme';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import Age from '.';

describe('Age', () => {
  let tenYearsAgo: string;

  beforeEach(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    tenYearsAgo = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
  });

  it('renders', () => {
    const wrapper = mount(<Age birthday={tenYearsAgo} updateInterval={1000} />);
    expect(wrapper.text()).toBe('0');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders final result', () => {
    jest.useFakeTimers();

    const wrapper = mount(<Age birthday={tenYearsAgo} updateInterval={1} />);
    expect(wrapper.text()).toBe('0');

    act(() => {
      jest.runTimersToTime(20);
    });

    expect(wrapper.update().text()).toBe('10');
    wrapper.unmount();
  });
});
