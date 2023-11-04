import Title from '@/components/Labels/Title/Title'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Title', () => {
  it('renders Title', () => {
    const headingText = "Hello"

    render(<Title >{headingText}</Title>)

    const heading = screen.getByRole('heading')

   
    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent(headingText)
    
  })
})