import { render } from '@testing-library/react'

import OperationPads from '.'

describe('<OperationPads />', () => {
  it('should render the component', () => {
    const { container } = render(<OperationPads />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
