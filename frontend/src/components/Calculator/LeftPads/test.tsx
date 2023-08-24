import { render } from '@testing-library/react'

import LeftPads from '.'

describe('<LeftPads />', () => {
  it('should render the component', () => {
    const { container } = render(<LeftPads />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
