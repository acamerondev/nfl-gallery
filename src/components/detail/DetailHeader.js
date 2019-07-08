import React, { Component } from 'react'
import './DetailPage.css'

class DetailHeader extends Component {
  render(){
    let {name, color} = this.props.team
    let headerStyle = {
        'backgroundColor': color,
    }
    return(
      <div className="detail-header" style={headerStyle}>
        <h1>{name}</h1>
      </div>
    )
  }
}

export default DetailHeader
