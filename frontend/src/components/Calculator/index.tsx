import Display from './Display'
import LeftPads from './LeftPads'
import OperationPads from './OperationPads'
import { Wrapper, PadWrapper } from './styles'

const Calculator = () => (
  <Wrapper>
    <Display />

    <PadWrapper>
      <LeftPads />
      <OperationPads />
    </PadWrapper>
  </Wrapper>
)

export default Calculator
