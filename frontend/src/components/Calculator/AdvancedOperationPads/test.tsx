import { render } from '@testing-library/react'

import AdvancedOperationPads from '.'

describe('<AdvancedOperationPads />', () => {
  it('should render the component', () => {
    const mockOnInput = jest.fn()
    const mockOnClear = jest.fn()

    const { container } = render(
      <AdvancedOperationPads onInput={mockOnInput} onClear={mockOnClear} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
