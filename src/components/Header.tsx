import React from 'react'
import imageToAdd from "./info.png";
function Header() {
  return (
    <header >
        <div></div>
        <h1 className="">Wordle</h1>
        <img src={imageToAdd} alt="info image link"/>
    </header>
  )
}

export default Header;