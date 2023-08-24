import { TopPadWrapper, TopPad } from './styles'

interface OperationPadsProps {
  onInput: (input: string) => void
}

enum AdvancedOperationEnum {
  ALL_CLEAR = 'AC',
  SQUARE_ROOT = '√',
  EXPONENTIATION = 'xʸ',
  PERCENTAGE = '%'
}

export default function AdvancedOperationPads({ onInput }: OperationPadsProps) {
  const advancedOperationPads: AdvancedOperationEnum[] = Object.values(
    AdvancedOperationEnum
  )

  const handleOperationClick = (operation: string) => {
    onInput(operation)
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
