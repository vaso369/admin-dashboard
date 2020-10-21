import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Sidebar from './Sidebar'

describe('<Sidebar />', () => {
  test('it should mount', () => {
    render(<Sidebar />)

    const sidebar = screen.getByTestId('Sidebar')

    expect(sidebar).toBeInTheDocument()
  })
})
