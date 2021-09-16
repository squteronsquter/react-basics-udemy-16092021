import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <nav>
        <h1 className="header">Moje obrazy</h1>
        <ul>
          <li>Home</li>
          <li>Gallery</li>
          <li>About the Artist</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
