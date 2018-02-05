import React from 'react'
import PropTypes from 'prop-types'

import './_CountSelect.css'

export default class CountSelect extends React.Component {

  constructor(props) {
    super(props)

    this.state = { value: props.value || 1 }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onLess(event) {
    event.preventDefault()

    var newValue = this.state.value - 1

    if(newValue < 1) {
      newValue = 1
    }

    this.setState({ value: newValue})

    if(this.props.onChange) {
      this.props.onChange(newValue)
    }
  }

  onMore(event) {
    event.preventDefault()

    var newValue = this.state.value + 1

    this.setState({ value: newValue })

    if(this.props.onChange) {
      this.props.onChange(newValue)
    }
  }

  render() {
    return (
      <div className='beer-counter'>
        <div className='beer-counter-title'>
          <p>{ this.state.value }</p>
        </div>
        <div className='beer-counter-actions'>
          <button className='beer-counter-button'
                  onClick={ this.onLess.bind(this) }>
            -
          </button>
          <button className='beer-counter-button'
                  onClick={ this.onMore.bind(this) }>
            +
          </button>
        </div>
      </div>
    )
  }
}

CountSelect.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}
