import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import SidebarNav from './SidebarNav'

describe('<SidebarNav />', () => {
  test('it should mount', () => {
    render(<SidebarNav />)

    const sidebarNav = screen.getByTestId('SidebarNav')

    expect(sidebarNav).toBeInTheDocument()
  })
})
