import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'
import Message from './components/message'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Header />
      <Message />
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
