import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  test('it should mount', () => {
    render(<Dashboard />)

    const dashboard = screen.getByTestId('Dashboard')

    expect(dashboard).toBeInTheDocument()
  })
})
