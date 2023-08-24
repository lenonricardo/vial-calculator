import { render } from '@testing-library/react'

import NumberPads from '.'

describe('<NumberPads />', () => {
  it('should render the component', () => {
    const mockOnInput = jest.fn()

    const { container } = render(<NumberPads onInput={mockOnInput} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
