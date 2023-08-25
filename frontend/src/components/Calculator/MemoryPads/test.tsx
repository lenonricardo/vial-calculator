import { render } from '@testing-library/react'

import MemoryPads from '.'

describe('<MemoryPads />', () => {
  it('should render the component', () => {
    const mockOnResultChange = jest.fn()
    const mockOnReset = jest.fn()

    const { container } = render(
      <MemoryPads
        onResultChange={mockOnResultChange}
        onReset={mockOnReset}
        result="123"
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
