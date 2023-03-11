import React from 'react'
import math from './services/math'

export default function () {
  const [expression, setExpresion] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const type = (char: string) => {
    if (char === 'CE') {
      return setExpresion('')
    }
    if (char === '√') {
      return setExpresion(`sqrt(${expression})`)
    }
    setExpresion(expression + char)
  }
  const evaluate = async () => {
    setLoading(true)
    try {
      const result = await math(expression)
      setExpresion(result)
    } catch (error: any) {
      setExpresion('Error')
    }
    setLoading(false)
  }
  const coreButtons = [
    ['1', '2', '3', '('],
    ['4', '5', '6', ')'],
    ['7', '8', '9', , '√'],
    ['9', '.', 'CE', '!'],
    ['+', '-', '*', '/']
  ].map((row, index) => {
    return (
      <div className="numpad-row" key={index}>
        {row.map((c, index) => {
          return (
            <button className="numpad-button" key={index} onClick={() => type(String(c))}>
              {c}
            </button>
          )
        })}
      </div>
    )
  })

  return (
    <div className={`calc ${loading ? 'loading' : ''}`}>
      <h1>React calc</h1>
      <div className="display">{expression}</div>
      <div className="numpad">
        {coreButtons}
        <button className="action" disabled={!expression} onClick={evaluate}>
          =
        </button>
      </div>
    </div>
  )
}
