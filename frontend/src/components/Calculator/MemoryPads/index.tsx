import { MemoryWrapper, SecondaryPad } from './styles'

interface MemoryPadsProps {
  onInput: (input: string) => void
}

enum MemoryPadsEnum {
  MEMORY_PLUS = 'M+',
  MEMORY_MINUS = 'M-',
  MEMORY_RECALL = 'MR',
  MEMORY_CLEAR = 'MC'
}

export default function MemoryPads({ onInput }: MemoryPadsProps) {
  const memoryPads: MemoryPadsEnum[] = Object.values(MemoryPadsEnum)

  const handleOperationClick = (operation: string) => {
    onInput(operation)
  }

  return (
    <MemoryWrapper>
      {memoryPads.map((label) => (
        <SecondaryPad key={label}>{label}</SecondaryPad>
      ))}
    </MemoryWrapper>
  )
}
