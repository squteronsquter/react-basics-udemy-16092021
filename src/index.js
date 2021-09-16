import React from 'react'
import ReactDom from 'react-dom'
import Header from './components/header'
import Message from './components/message'
import Footer from './components/footer'
import Search from './components/search'

const App = () => {
  return (
    <>
      <Header />
      <Message />
      <Search />
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
