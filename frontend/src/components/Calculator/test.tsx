import { render } from '@testing-library/react'

import Calculator from '.'

describe('<Calculator />', () => {
  it('should render the component', () => {
    const { container } = render(<Calculator />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
