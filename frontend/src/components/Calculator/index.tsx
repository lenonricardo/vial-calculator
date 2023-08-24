import React, { useState } from 'react'
import Display from './Display'
import NumberPads from './NumberPads'
import BasicOperationPads from './BasicOperationPads'
import { Wrapper, PadWrapper } from './styles'
import { evaluate } from 'mathjs'
import MemoryPads from './MemoryPads'
import AdvancedOperationPads from './AdvancedOperationPads'

const Calculator = () => {
  const [result, setResult] = useState<string>('')
  const [reset, setReset] = useState<boolean>(false)
  const [memory, setMemory] = useState<number>(0);

  const handleInput = (input: string) => {
    if (reset) {
      setResult('')
      setReset(false)
    }

    setResult((prevExpression) => prevExpression + input)
  }

  const handleOperationInput = (input: string) => {
    setResult((prevExpression) => prevExpression + input)
  }

  const handleClear = () => {
    setResult('')
  }

  const handleCancelEntry = () => {
    setResult((prevExpression) => prevExpression.slice(0, -1))
  }

  const handleEquals = () => {
    try {
      const evaluatedResult = evaluate(result)
      saveHistory()
      setResult(evaluatedResult.toString())
      setReset(true)
    } catch (error) {
      setResult(result)
    }
  }

  const saveHistory = () => {
    const storedHistory: string|null = localStorage.getItem('history');

    let history = [];

    if (storedHistory) {
      history = JSON.parse(storedHistory);
    }

    history.push(result)

    const updatedHistory = JSON.stringify(history);

    localStorage.setItem('history', updatedHistory);
  }

  const handleMemoryAdd = () => {
    try {
      const value = parseFloat(result);

      if (!isNaN(value)) {
        setMemory(memory + value);
        setReset(true);
      }
    } catch (error) {
      setResult('Error')
    }
  };

  const handleMemorySubtract = () => {
    try {
      const value = parseFloat(result);
      if (!isNaN(value)) {
        setMemory(memory - value);
        setReset(true);
      }
    } catch (error) {
      setResult('Error')
    }
  };

  const handleMemoryRecall = () => {
    setResult(memory.toString());
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  return (
    <Wrapper>
      <Display result={result} onCancelEntry={handleCancelEntry}/>

      <AdvancedOperationPads onInput={handleInput} onClear={handleClear} />

      <PadWrapper>
        <NumberPads onInput={handleInput} />
        <MemoryPads
          onMemoryAdd={handleMemoryAdd}
          onMemorySubtract={handleMemorySubtract}
          onMemoryRecall={handleMemoryRecall}
          onMemoryClear={handleMemoryClear}
        />
        <BasicOperationPads
          onInput={handleOperationInput}
          onEquals={handleEquals}
        />
      </PadWrapper>
    </Wrapper>
  )
}

export default Calculator
