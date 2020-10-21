import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Search from './Search'

describe('<Search />', () => {
  test('it should mount', () => {
    render(<Search />)

    const search = screen.getByTestId('Search')

    expect(search).toBeInTheDocument()
  })
})
