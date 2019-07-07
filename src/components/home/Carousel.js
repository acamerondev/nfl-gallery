import React, { Component } from 'react'
import './Carousel.css'
import teamData from '../../data'
import CarouselPicture from './CarouselPicture'

class Carousel extends Component {
  constructor(props){
    super(props)
    this.moveIndex = this.moveIndex.bind(this);
    this.state = {
      index : 0,
      secondIndex : 1,
      thirdIndex : 2,
    }
  }

  moveIndex(num){
    let newIndex = (((this.state.index + num) % 32) + 32) % 32
    let second = (((newIndex + 1) % 32) + 32) % 32
    let third = (((newIndex + 2) % 32) + 32) % 32
    this.setState({
      index : newIndex,
      secondIndex : second,
      thirdIndex : third,
    })
  }

  render(){
    return (
      <div className="carousel-container">
        <div className="carousel">
          <h3 className="prev" onClick={() => this.moveIndex(-3)}>&#10094;</h3>

          <CarouselPicture team={teamData[this.state.index]}/>
          <CarouselPicture team={teamData[this.state.secondIndex]}/>
          <CarouselPicture team={teamData[this.state.thirdIndex]}/>

          <h3 className="next" onClick={() => this.moveIndex(3)}>&#10095;</h3>
        </div>
      </div>
    )
  }
}

export default Carousel
