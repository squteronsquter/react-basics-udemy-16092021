import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'

const App = () => {
  return (
    <>
      <Header />
      <h1>Hello</h1>
      <h2>World</h2>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
