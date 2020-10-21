import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChooseTheme from './ChooseTheme';

describe('<ChooseTheme />', () => {
  test('it should mount', () => {
    render(<ChooseTheme />);
    
    const chooseTheme = screen.getByTestId('ChooseTheme');

    expect(chooseTheme).toBeInTheDocument();
  });
});