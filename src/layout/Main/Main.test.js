import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  test('it should mount', () => {
    render(<Main />)

    const main = screen.getByTestId('Main')

    expect(main).toBeInTheDocument()
  })
})
