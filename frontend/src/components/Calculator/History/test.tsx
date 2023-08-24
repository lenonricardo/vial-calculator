import { render } from '@testing-library/react'

import History from '.'

describe('<History />', () => {
  it('should render the component', () => {
    const { container } = render(<History />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
