import { render } from '@testing-library/react'

import Display from '.'

describe('<Display />', () => {
  it('should render the component', () => {
    const onCancelEntry = jest.fn()
    const onShowHistory = jest.fn()

    const { container } = render(
      <Display
        result="123"
        onCancelEntry={onCancelEntry}
        onShowHistory={onShowHistory}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
