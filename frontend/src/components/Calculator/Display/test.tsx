import { render } from '@testing-library/react'

import Display from '.'

describe('<Display />', () => {
  it('should render the component', () => {
    const { container } = render(<Display />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
