import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import LastSevenDays from './LastSevenDays'

describe('<LastSevenDays />', () => {
  test('it should mount', () => {
    render(<LastSevenDays />)

    const lastSevenDays = screen.getByTestId('LastSevenDays')

    expect(lastSevenDays).toBeInTheDocument()
  })
})
