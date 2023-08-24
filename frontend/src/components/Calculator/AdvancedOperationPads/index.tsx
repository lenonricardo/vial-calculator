import { TopPadWrapper, TopPad } from './styles'

enum AdvancedOperationEnum {
  ALL_CLEAR = 'AC',
  SQUARE_ROOT = '√',
  EXPONENTIATION = 'xʸ',
  PERCENTAGE = '%'
}

interface AdvancedOperationsProps {
  onInput: (input: string) => void
  onClear: () => void
}

export default function AdvancedOperationPads({
  onClear,
  onInput
}: AdvancedOperationsProps) {
  const advancedOperationPads: AdvancedOperationEnum[] = Object.values(
    AdvancedOperationEnum
  )

  const handleSquareRoot = () => {
    onInput('sqrt(')
  }

  const handleExponentiation = () => {
    onInput('^')
  }

  const handlePercentage = () => {
    onInput('%')
  }

  const handleOperationClick = (operation: string) => {
    switch (operation) {
      case AdvancedOperationEnum.ALL_CLEAR:
        onClear()
        break
      case AdvancedOperationEnum.SQUARE_ROOT:
        handleSquareRoot()
        break
      case AdvancedOperationEnum.EXPONENTIATION:
        handleExponentiation()
        break
      case AdvancedOperationEnum.PERCENTAGE:
        handlePercentage()
    }
  }

  return (
    <TopPadWrapper>
      {advancedOperationPads.map((label) => (
        <TopPad key={label} onClick={() => handleOperationClick(label)}>
          {label}
        </TopPad>
      ))}
    </TopPadWrapper>
  )
}
