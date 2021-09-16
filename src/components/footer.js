import React, { Component } from 'react'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <>
        <footer onClick={() => console.log('I was clicked')}>
          <p className="footer">
            &copy; 2021 | Moje obrazy - All rights reserved.
          </p>
        </footer>
      </>
    )
  }
}

export default Footer
