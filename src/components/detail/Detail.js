import React, { Component } from 'react'
import './Detail.css'
import { Link } from 'react-router-dom'

class Detail extends Component {
  constructor(props){
    super(props)
    this.pictureSelected = this.pictureSelected.bind(this);
    this.state = {
      selectedPicture : `/logos/${props.team.short}.svg`,
      alt : `${props.team.name} Logo`,
      caption : `${props.team.name} Logo`
    }
  }

  pictureSelected(pic, alt, caption){
    this.setState({
      selectedPicture : pic,
      alt: alt,
      caption : caption,
    })
  }

  render(){
    let { name, short, text, qb, coach, stadium} = this.props.team
    return (
      <div className="detail-container">
        <div className="nav">
          <Link to="/">Home</Link> / {name}
        </div>
        <div className="img-selected">
          <img src={this.state.selectedPicture} alt={this.state.alt}/>
        </div>
        <p className="caption">{this.state.caption}</p>
        <div className="img-previews">
          <img src={`/logos/${short}.svg`} alt={`${name} Team Logo`}
              onClick={ () => this.pictureSelected(`/logos/${short}.svg`, `${name} Logo`, `${name} Logo`)}/>
          <img src={`/qb/${short}.jpg`}    alt={`${name} Quarterback`}
              onClick={ () => this.pictureSelected(`/qb/${short}.jpg`, `${name} Quarterback`, `${qb}, Starting Quarterback`)}/>
          <img src={`/coach/${short}.jpg`} alt={`${name} Head Coach`}
              onClick={ () => this.pictureSelected(`/coach/${short}.jpg`, `${name} Head Coach`, `${coach}, Head Coach`)}/>
          <img src={`/stadium/${short}.jpg`} alt={`${name} Stadium`}
              onClick={ () => this.pictureSelected(`/stadium/${short}.jpg`, `${name} Stadium`, `${stadium}, Home of the ${name}`)}/>
        </div>
        <div className="detail-text">
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Detail
