import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import TodaysProgress from './TodaysProgress'

describe('<TodaysProgress />', () => {
  test('it should mount', () => {
    render(<TodaysProgress />)

    const todaysProgress = screen.getByTestId('TodaysProgress')

    expect(todaysProgress).toBeInTheDocument()
  })
})
