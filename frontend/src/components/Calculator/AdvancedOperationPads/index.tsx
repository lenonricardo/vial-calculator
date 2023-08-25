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

  const handleOperationClick = (operation: string) => {
    switch (operation) {
      case AdvancedOperationEnum.ALL_CLEAR:
        onClear()
        break
      case AdvancedOperationEnum.SQUARE_ROOT:
        onInput('sqrt(')
        break
      case AdvancedOperationEnum.EXPONENTIATION:
        onInput('^')
        break
      case AdvancedOperationEnum.PERCENTAGE:
        onInput('%')
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
