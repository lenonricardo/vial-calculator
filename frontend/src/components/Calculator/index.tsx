import React, { useState } from 'react'
import Display from './Display'
import NumberPads from './NumberPads'
import BasicOperationPads from './BasicOperationPads'
import { Wrapper, PadWrapper } from './styles'
import { evaluate } from 'mathjs'
import MemoryPads from './MemoryPads'
import AdvancedOperationPads from './AdvancedOperationPads'
import History from './History'

const Calculator = () => {
  const [result, setResult] = useState<string>('')
  const [reset, setReset] = useState<boolean>(false)
  const [showHistory, setShowHistory] = useState<boolean>(false)

  const handleInput = (input: string) => {
    if (reset) {
      setResult('')
      setReset(false)
    }

    updateResult(input)
  }

  const handleReset = (reset: boolean) => {
    setReset(reset)
  }

  const handleOperationInput = (input: string) => {
    updateResult(input)
    setReset(false)
  }

  const updateResult = (input: string) => {
    const notAllowConsecutiveOperator =
      /^(?:(?!(\+{2}|-{2}|\*{2}|\/{2}|\.{2})).)*$/

    const isValid = notAllowConsecutiveOperator.test(result + input)

    if (isValid) {
      setResult((prevResult) => prevResult + input)
    }
  }

  const handleClear = () => {
    setResult('')
  }

  const handleCancelEntry = () => {
    setResult((prevResult) => prevResult.slice(0, -1))
  }

  const handleEquals = () => {
    try {
      const value = result.includes('(') ? result + ')' : result

      const evaluatedResult = evaluate(value)
      saveHistory(evaluatedResult)
      setResult(evaluatedResult.toString())

      setReset(true)
    } catch (error) {
      setResult(result)
    }
  }

  const saveHistory = (evaluatedResult: string) => {
    const storedHistory: string | null = localStorage.getItem('history')

    let history: object[] = []

    if (storedHistory) {
      history = JSON.parse(storedHistory)
    }

    history.unshift({
      total: evaluatedResult,
      expression: result
    })

    const updatedHistory = JSON.stringify(history)

    localStorage.setItem('history', updatedHistory)
  }

  return (
    <Wrapper>
      <Display
        result={result}
        onCancelEntry={handleCancelEntry}
        onShowHistory={() => setShowHistory(!showHistory)}
      />

      {!showHistory ? (
        <>
          <AdvancedOperationPads onInput={handleInput} onClear={handleClear} />

          <PadWrapper>
            <NumberPads onInput={handleInput} />
            <MemoryPads
              result={result}
              onResultChange={handleInput}
              onReset={handleReset}
            />
            <BasicOperationPads
              onInput={handleOperationInput}
              onEquals={handleEquals}
            />
          </PadWrapper>
        </>
      ) : (
        <History/>
      )}
    </Wrapper>
  )
}

export default Calculator
