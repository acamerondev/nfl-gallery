import React, { Component } from 'react'
import './DetailPage.css'

class DetailHeader extends Component {
  render(){
    let {name} = this.props.team
    return(
      <div className="detail-header">
        <h1>{name}</h1>
      </div>
    )
  }
}

export default DetailHeader
