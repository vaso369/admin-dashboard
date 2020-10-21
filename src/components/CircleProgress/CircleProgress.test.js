import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CircleProgress from './CircleProgress';

describe('<CircleProgress />', () => {
  test('it should mount', () => {
    render(<CircleProgress />);
    
    const circleProgress = screen.getByTestId('CircleProgress');

    expect(circleProgress).toBeInTheDocument();
  });
});