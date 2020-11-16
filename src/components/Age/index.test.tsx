import { act, render, screen } from '@testing-library/react';
import React from 'react';
import Age from '.';

describe('Age', () => {
  it('renders', () => {
    const { container } = render(
      <Age birthday="02-06-2000" updateInterval={1000} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders final result', () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 10);
    const tenYearsAgo = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;

    jest.useFakeTimers();

    render(<Age birthday={tenYearsAgo} updateInterval={1} />);
    expect(screen.queryByText('0')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1);
    });

    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.queryByText('10')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(20);
    });

    expect(screen.queryByText('10')).toBeInTheDocument();

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
