import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'
  //if text is a truthy, then prints value of text
  //if text is a falsy, then prints 'john doe'
  //if text is a falsy, then h1 tag containing hello world text will not be rendered
  //if text is a truthy, then h1 tag containing hello world text will be rendered
  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <div>
          <p>there is an error...</p>
        </div>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
