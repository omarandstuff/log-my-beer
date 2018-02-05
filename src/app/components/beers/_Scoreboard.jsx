import React from 'react'
import PropTypes from 'prop-types'

import colimita from '../assets/colimita.png'
import paramo   from '../assets/paramo.png'
import ticus    from '../assets/ticus.png'

import './_Scoreboard.css'

const beers = {
  colimita: colimita,
  paramo: paramo,
  ticus: ticus
}

export default class Scoreboard extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.setState({ counts: nextProps.counts })
  }

  getRotation(index, total) {
    switch(total) {
      case 2:
        switch(index) {
          case 1:
            return 'beer-sticker-left'
          case 2:
            return 'beer-sticker-right'
          default:
           break
        }
        break
      case 3:
        switch(index) {
          case 1:
            return 'beer-sticker-left'
          case 3:
            return 'beer-sticker-right'
          default:
            break
        }
        break
      default:
        break
    }
  }

  render() {
    const counts = this.props.counts
    const total = counts.size
    const rendered = []
    var currentIndex = 0

    counts.forEach((count, key) => {
      currentIndex = currentIndex + 1

      rendered.push(
        <div key={ key } className='beer-score'>
          <img src={ beers[key] }
               className={ 'beer-sticker ' + this.getRotation(currentIndex, total) }
               alt='Beer' />
          <p>
            { count }
          </p>
        </div>
      )
    })

    return (
      <div className='beer-scoreboard'>
        { rendered }
      </div>
    )
  }
}

Scoreboard.propTypes = {
  counts: PropTypes.object
}
