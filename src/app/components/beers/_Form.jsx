import React from 'react'
import PropTypes from 'prop-types'

import BeerSelect from './_BeerSelect'
import CountSelect from './_CountSelect'

import './_Form.css'

export default class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = { count: 1 }
  }

  submit(event) {
    event.preventDefault()

    if(this.props.onSubmit && this.state.beer) {
      this.props.onSubmit(this.state)
    }

    this.setState({ count: 1 })
  }

  render() {
    return (
      <form className='beer-form'>
        <h2>Which beer are you drinking?</h2>
        <div>
          <BeerSelect value={ this.state.beer }
                      onChange={ value => this.setState({ beer: value }) } />
        </div>
        <div>
          <CountSelect value={ this.state.count }
                       onChange={ value => this.setState({ count: value }) } />
        </div>
        <div className='beer-form-actions'>
          <button className='beer-button'
                  onClick={ this.submit.bind(this) }
                  disabled={ !this.state.beer }>
            Log My Beer
          </button>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}
