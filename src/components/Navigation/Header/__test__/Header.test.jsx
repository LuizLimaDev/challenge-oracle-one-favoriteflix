import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'

const MockLink = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe('testin UI components', () => {
  test('should render the site text name', () => {
    render(<MockLink />)
    const siteName = /My ⭐ Flix /

    const textElement = screen.getByRole('link', { name: 'My ⭐ Flix' })

    expect(textElement).toBeInTheDocument()
  })

  // como testar se os icones foram renderizados?
})