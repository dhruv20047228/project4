import React from 'react'

export default function CodePalette() {
  return (
    <div>
      <h1 className='Front-Text'>Write/Paste Your Code Here!!</h1>
      <input type="text" className='codePalette'/>
      <button className='submitBtn'>Send</button>
    </div>
  )
}
