import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ScoreBoard from './_Scoreboard'

import './Index.css'

export class Index extends React.Component {
  render() {
    return (
      <div className='beer-index'>
        <ScoreBoard counts={ this.props.counts } />
        <Link to='/log_my_beer' className='beer-button'>Log a Beer</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counts: state.get('counts'),
    logs: state.get('logs')
  }
}

export default connect(mapStateToProps)(Index)
