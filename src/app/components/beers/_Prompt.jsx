import React from 'react'
import PropTypes from 'prop-types'

import './_Prompt.css'

export default class Prompt extends React.Component {

  goHome(event) {
    event.preventDefault()

    if(this.props.onGoHome) {
      this.props.onGoHome()
    }
  }

  addMore(event) {
    event.preventDefault()

    if(this.props.onClose) {
      this.props.onClose()
    }
  }

  render() {
    return (
      <div className='beer-prompt'>
        <h2>You Beer has been added succesfully <span role='img' aria-label='beer'>🍺</span></h2>
        <div>
          <button className='beer-button'
                  onClick={ this.goHome.bind(this) }>
            Go to Home
          </button>
          <button className='beer-button'
                  onClick={ this.addMore.bind(this) }>
            Add More
          </button>
        </div>
      </div>
    )
  }
}

Prompt.propTypes = {
  onGoHome: PropTypes.func,
  onClose: PropTypes.func
}
