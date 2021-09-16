import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'
import Message from './components/message'

const App = () => {
  return (
    <>
      <Header />
      <Message />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
