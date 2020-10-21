import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PieProgress from './PieProgress';

describe('<PieProgress />', () => {
  test('it should mount', () => {
    render(<PieProgress />);
    
    const pieProgress = screen.getByTestId('PieProgress');

    expect(pieProgress).toBeInTheDocument();
  });
});