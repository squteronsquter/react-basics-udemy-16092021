import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
