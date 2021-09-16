import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  hello() {
    alert('Hey, You clicked the footer!')
  }
  handleClick() {
    console.log('I was clicked with a method')
  }

  render() {
    return (
      <>
        <footer onClick={this.handleClick}>
          <p className="footer" onClick={this.hello}>
            &copy; 2021 | Moje obrazy - All rights reserved.
          </p>
        </footer>
      </>
    )
  }
}

export default Footer
