import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Age from '.';

describe('Age', () => {
  it('renders', () => {
    const wrapper = mount(<Age birthday="02-06-2000" updateInterval={1000} />);
    expect(wrapper.text()).toBe('0');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders final result', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    const tenYearsAgo = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

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
