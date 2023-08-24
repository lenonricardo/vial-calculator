import { render } from '@testing-library/react'

import BasicOperationPads from '.'

describe('<BasicOperationPads />', () => {
  it('should render the component', () => {
    const mockOnInput = jest.fn()
    const mockOnEquals = jest.fn()

    const { container } = render(
      <BasicOperationPads onInput={mockOnInput} onEquals={mockOnEquals} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
