import React, { Component } from 'react'
import './DetailPage.css'
import teamData from '../../data'

import Detail from './Detail'
import DetailHeader from './DetailHeader'
import DetailFooter from './DetailFooter'

class DetailPage extends Component {
  render(){
    let team = teamData.find( team => {
      return team.short === this.props.match.params.short
    })
    return (
      <div className="detail-page">
        <DetailHeader team={team}/>
        <Detail team={team}/>
        <DetailFooter />
      </div>
    )
  }
}

export default DetailPage
