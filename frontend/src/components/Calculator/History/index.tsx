import {
  CustomDeleteForeverIcon,
  Expression,
  Total,
  Wrapper,
} from './styles'
import React, { useState, useEffect } from 'react'


interface History {
  expression: string,
  total: string,
}

export default function History() {

  const [history, setHistory] = useState<Array<History>>([])

  useEffect(() => {
    const operationHistory = getHistory()

    setHistory(operationHistory?.slice(0, 4) || [])
  }, [])

  const getHistory = () => {
    const storedHistory: string | null = localStorage.getItem('history')

    if (storedHistory) {
      return JSON.parse(storedHistory)
    }
  }

  const clearHistory = () => {
    localStorage.removeItem('history')
    setHistory([])
  }

  return (
    <Wrapper>
      <div>
        {history.map((result, i) => (
          <>
            <Expression key={i}>{result.expression} =</Expression>
            <Total key={i}>{result.total}</Total>
          </>
        ))}
      </div>

      {
        !!history.length &&
        <CustomDeleteForeverIcon onClick={clearHistory}/>
      }
    </Wrapper>
  )
}
