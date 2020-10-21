import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import News from './News'

describe('<News />', () => {
  test('it should mount', () => {
    render(<News />)

    const news = screen.getByTestId('News')

    expect(news).toBeInTheDocument()
  })
})
