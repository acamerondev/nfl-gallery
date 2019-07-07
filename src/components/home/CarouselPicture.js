import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CarouselPicture.css'

class CarouselPicture extends Component {
  render () {
    let {short, name, text} = this.props.team
    return (
      <div className="carousel-picture">
        <Link to ={`/${short}`}>
          <img src={`/logos/${short}.svg`} alt="Team Logo"/>
        </Link>
        <h3 className="picture-title">{name}</h3>
        <p className="picture-text">{text}</p>
      </div>
    )
  }
}

export default CarouselPicture
