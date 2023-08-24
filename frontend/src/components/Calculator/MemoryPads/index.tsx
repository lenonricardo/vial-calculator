import React, { useState } from 'react'
import { MemoryWrapper, SecondaryPad } from './styles'

interface MemoryPadsProps {
  result: string
  onResultChange: (result: string) => void
  onReset: (reset: boolean) => void
}

enum MemoryPadsEnum {
  MEMORY_PLUS = 'M+',
  MEMORY_MINUS = 'M-',
  MEMORY_RECALL = 'MR',
  MEMORY_CLEAR = 'MC'
}

export default function MemoryPads({
  result,
  onResultChange,
  onReset
}: MemoryPadsProps) {
  const memoryPads: MemoryPadsEnum[] = Object.values(MemoryPadsEnum)
  const [memory, setMemory] = useState<number>(0)

  const handleMemoryAdd = () => {
    try {
      const value = parseFloat(result)

      if (!isNaN(value)) {
        setMemory(memory + value)
        onReset(true)
      }
    } catch (error) {
      onResultChange('Error')
    }
  }

  const handleMemorySubtract = () => {
    try {
      const value = parseFloat(result)
      if (!isNaN(value)) {
        setMemory(memory - value)
        onReset(true)
      }
    } catch (error) {
      onResultChange('Error')
    }
  }

  const handleMemoryRecall = () => {
    onResultChange(memory.toString())
  }

  const handleMemoryClear = () => {
    setMemory(0)
  }

  const handleOperationClick = (operation: string) => {
    switch (operation) {
      case MemoryPadsEnum.MEMORY_PLUS:
        handleMemoryAdd()
        break
      case MemoryPadsEnum.MEMORY_MINUS:
        handleMemorySubtract()
        break
      case MemoryPadsEnum.MEMORY_RECALL:
        handleMemoryRecall()
        break
      default:
        handleMemoryClear()
    }
  }

  return (
    <MemoryWrapper>
      {memoryPads.map((label) => (
        <SecondaryPad key={label} onClick={() => handleOperationClick(label)}>
          {label}
        </SecondaryPad>
      ))}
    </MemoryWrapper>
  )
}
