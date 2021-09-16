import React, { Component } from 'react'
import './search.css'

class Search extends Component {
  state = {
    name: 'Przeszukaj "Moje obrazy"',
    title: 'Search input text: ',
    keywords: '',
  }
  inputChangehandler = (event) => {
    this.setState({
      keywords: event.target.value,
    })
  }
  render() {
    return (
      <>
        <div className="form">
          <h2>{this.state.name}</h2>
          <div className="search-form">
            <input onChange={this.inputChangehandler} />
          </div>
          <div className="form-output">
            <h2>{this.state.title}</h2>
            <h3> {this.state.keywords}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default Search
