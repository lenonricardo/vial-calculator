import OperationProps from 'interfaces/OperationProps';
import {
  Wrapper,
  PrimaryPad,
  PrimaryGradientPad,
  SecondaryGradientPad
} from './styles'

interface BasicOperationProps extends OperationProps {
  onEquals: () => void;
}

enum BasicOperationsEnum {
  DIVISION = '/',
  MULTIPLICATION = '*',
  SUBSTRACTION = '-',
  ADDITION = '+',
  EQUALS = '='
}

export default function OperationPads({
  onInput,
  onEquals
}: BasicOperationProps) {
  const handleOperationClick = (operation: string) => {
    onInput(operation)
  }

  const handleEquals = () => {
    onEquals()
  }

  return (
    <Wrapper>
      <PrimaryPad
        onClick={() => handleOperationClick(BasicOperationsEnum.DIVISION)}
      >
        {BasicOperationsEnum.DIVISION}
      </PrimaryPad>

      <PrimaryGradientPad
        onClick={() => handleOperationClick(BasicOperationsEnum.MULTIPLICATION)}
      >
        {BasicOperationsEnum.MULTIPLICATION}
      </PrimaryGradientPad>

      <SecondaryGradientPad
        onClick={() => handleOperationClick(BasicOperationsEnum.SUBSTRACTION)}
      >
        {BasicOperationsEnum.SUBSTRACTION}
      </SecondaryGradientPad>

      <SecondaryGradientPad
        onClick={() => handleOperationClick(BasicOperationsEnum.ADDITION)}
      >
        {BasicOperationsEnum.ADDITION}
      </SecondaryGradientPad>

      <SecondaryGradientPad onClick={() => handleEquals()}>
        {BasicOperationsEnum.EQUALS}
      </SecondaryGradientPad>
    </Wrapper>
  )
}
