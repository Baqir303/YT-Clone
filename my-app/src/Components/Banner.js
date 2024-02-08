import React from 'react'
import Logo from '../Images/logoYT3.PNG'

export default function Banner() {
  return (
    <div>
      <div className="container">
        <div className="banner">
            <img src={Logo} alt="" />
        </div>
        <div className="list-container">
            <div className="vid-list">
                
            </div>
        </div>
      </div>
    </div>
  )
}
