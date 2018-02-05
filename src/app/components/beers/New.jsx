import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../redux/beers/actions'
import moment from 'moment'

import Form from './_Form'
import Prompt from './_Prompt'

import './New.css'

export class New extends React.Component {

  onFormSubmit(log) {
    this.props.logBeer({ ...log, loggedAt: moment() })
  }

  onGoHome() {
    this.props.dismiss()
    this.props.history.push('/')
  }

  onClose() {
    this.props.dismiss()
  }

  render() {
    const prompting = this.props.status === 'PROMPTING'
    var component = undefined

    if(prompting) {
      component = <Prompt onGoHome={ this.onGoHome.bind(this) }
                          onClose={ this.onClose.bind(this) }/>
    } else {
      component = <Form onSubmit={ this.onFormSubmit.bind(this) } />
    }

    return (
      <div className='beer-new '>
        { component }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    status: state.get('status')
  }
}

export default withRouter(connect(mapStateToProps, actions)(New))
