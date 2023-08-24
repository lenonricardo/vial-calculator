import React, { useState } from 'react'
import Display from './Display'
import NumberPads from './NumberPads'
import BasicOperationPads from './BasicOperationPads'
import { Wrapper, PadWrapper } from './styles'
import { evaluate } from 'mathjs'
import MemoryPads from './MemoryPads'
import AdvancedOperationPads from './AdvancedOperationPads'

const Calculator = () => {
  const [expression, setExpression] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const handleInput = (input: string) => {
    setResult((prevExpression) => prevExpression + input)

    // if (result.includes('+')) {
    //   const evaluatedResult = evaluate(result);
    //   setExpression(evaluatedResult)
    // }
  }

  const handleOperationInput = (input: string) => {
    setResult((prevExpression) => prevExpression + input)

    // const evaluatedResult = evaluate(result);
    // setExpression(evaluatedResult)
  }

  const handleClear = () => {
    setExpression('')
    setResult('')
  }

  const handleCancelEntry = () => {
    setResult((prevExpression) => prevExpression.slice(0, -1))
  }

  const handleEquals = () => {
    try {
      const evaluatedResult = evaluate(result)
      setResult(evaluatedResult.toString())
      setExpression('')
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <Wrapper>
      <Display result={result} />

      <AdvancedOperationPads onInput={handleInput} />

      <PadWrapper>
        <NumberPads onInput={handleInput} />
        <MemoryPads onInput={handleOperationInput} />
        <BasicOperationPads
          onInput={handleOperationInput}
          onEquals={handleEquals}
        />
      </PadWrapper>
    </Wrapper>
  )
}

export default Calculator
