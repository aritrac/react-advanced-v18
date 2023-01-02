import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    //Cleanup function which runs post useEffect
    // return () => {
    //   console.log('cleanup')
    //   window.removeEventListener('resize', checkSize)
    // }
  }, []) //Adding no dependency, so this useEffect will be only called once on initial render, post which this will not be called
  console.log('render')
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
