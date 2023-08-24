import OperationProps from 'interfaces/OperationProps'
import { TopPadWrapper, TopPad } from './styles'

enum AdvancedOperationEnum {
  ALL_CLEAR = 'AC',
  SQUARE_ROOT = '√',
  EXPONENTIATION = 'xʸ',
  PERCENTAGE = '%'
}

interface AdvancedOperationsProps extends OperationProps {
  onClear: () => void;
}

export default function AdvancedOperationPads({ onInput, onClear }: AdvancedOperationsProps) {
  const advancedOperationPads: AdvancedOperationEnum[] = Object.values(
    AdvancedOperationEnum
  )

  const handleOperationClick = (operation: string) => {
    if (operation === AdvancedOperationEnum.ALL_CLEAR) {
      onClear()
    } else {
      onInput(operation)
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
