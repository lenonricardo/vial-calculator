import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the component', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
