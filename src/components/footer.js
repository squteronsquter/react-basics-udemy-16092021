import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  handleClick() {
    console.log('I was clicked with a mothod')
  }

  render() {
    return (
      <>
        <footer onClick={this.handleClick}>
          <p className="footer">
            &copy; 2021 | Moje obrazy - All rights reserved.
          </p>
        </footer>
      </>
    )
  }
}

export default Footer
