import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StartedProjects from './StartedProjects';

describe('<StartedProjects />', () => {
  test('it should mount', () => {
    render(<StartedProjects />);
    
    const startedProjects = screen.getByTestId('StartedProjects');

    expect(startedProjects).toBeInTheDocument();
  });
});