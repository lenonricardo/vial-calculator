import {
  Wrapper,
  PrimaryPad,
  PrimaryGradientPad,
  SecondaryGradientPad
} from './styles'

interface OperationPadsProps {
  onInput: (input: string) => void
  onEquals: () => void
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
}: OperationPadsProps) {
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
