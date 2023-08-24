import { MemoryWrapper, SecondaryPad } from './styles'

interface MemoryPadsProps {
  onMemoryAdd: () => void;
  onMemorySubtract: () => void;
  onMemoryRecall: () => void;
  onMemoryClear: () => void;
}

enum MemoryPadsEnum {
  MEMORY_PLUS = 'M+',
  MEMORY_MINUS = 'M-',
  MEMORY_RECALL = 'MR',
  MEMORY_CLEAR = 'MC'
}

export default function MemoryPads({
  onMemoryAdd,
  onMemorySubtract,
  onMemoryRecall,
  onMemoryClear,
}: MemoryPadsProps) {
  const memoryPads: MemoryPadsEnum[] = Object.values(MemoryPadsEnum)

  const handleOperationClick = (operation: string) => {
    switch(operation) {
      case MemoryPadsEnum.MEMORY_PLUS:
        onMemoryAdd()
        break
      case MemoryPadsEnum.MEMORY_MINUS:
        onMemorySubtract()
        break
      case MemoryPadsEnum.MEMORY_RECALL:
        onMemoryRecall()
        break
      default:
        onMemoryClear()
    }

  }

  return (
    <MemoryWrapper>
      {memoryPads.map((label) => (
        <SecondaryPad key={label} onClick={() => handleOperationClick(label)}>{label}</SecondaryPad>
      ))}
    </MemoryWrapper>
  )
}
