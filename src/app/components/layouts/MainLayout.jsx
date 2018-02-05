import React from 'react'

import logo from '../assets/logo.svg'
import './MainLayout.css'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className='beer-layout'>
        <div className='beer-layout-logo'>
          <img src={ logo } className='beer-logo' alt='Logo'/>
        </div>
        { this.props.children }
      </div>
    )
  }
}
