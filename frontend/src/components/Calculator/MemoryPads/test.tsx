import { render } from '@testing-library/react'

import MemoryPads from '.'

describe('<MemoryPads />', () => {
  it('should render the component', () => {
    const mockOnInput = jest.fn()

    const { container } = render(<MemoryPads onInput={mockOnInput} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
