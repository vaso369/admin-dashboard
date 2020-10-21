import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LastSevenDaysBarChart from './LastSevenDaysBarChart';

describe('<LastSevenDaysBarChart />', () => {
  test('it should mount', () => {
    render(<LastSevenDaysBarChart />);
    
    const lastSevenDaysBarChart = screen.getByTestId('LastSevenDaysBarChart');

    expect(lastSevenDaysBarChart).toBeInTheDocument();
  });
});