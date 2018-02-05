import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

export default class NotFound extends React.Component {
  render() {
    return (
      <div className='beer-404'>
        <h2>404</h2>
        <p>You spilled your beer.</p>
        <Link to='/log_my_beer' className='beer-button'>Log a Beer Instead</Link>
      </div>
    )
  }
}
