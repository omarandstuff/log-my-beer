import React from 'react'
import PropTypes from 'prop-types'

import colimita from '../assets/colimita.png'
import paramo   from '../assets/paramo.png'
import ticus    from '../assets/ticus.png'

import './_BeerSelect.css'

const options = {
  colimita: {
    name: 'Colimita',
    description: 'La Colimita es una de las cervezas más populares de la Cervecería de Colima - una radiante cerveza lager estilo alemán, que equilibra sabores ligeramente ácidos, florales y lupulados en una cerveza refrescante.',
    src: colimita
  },
  paramo: {
    name: 'Páramo',
    description: 'Es una Pale Ale de estilo americano. De aromas tropicales, cítricos y pasifloras. De apariencia cobriza y brillante. Destaca un amargor prominente que rápidamente abre paso a la gama de sabores de sus tres tipos de malta. ',
    src: paramo
  },
  ticus: {
    name: 'Ticús',
    description: 'Con un color parecido a un grano de café tostado y un sabor a maltas tostadas, a café y a chocolate dulce - equilibrado con la amargura de los lúpulos - hacen de esta cerveza porter una cerveza fácil de beberse. El estilo de cerveza porter data de 1700, cuando los cerveceros elaboraron la cerveza ale oscura al mezclar tres tipos de cervezas diferentes.',
    src: ticus
  },
}

export default class BeerSelect extends React.Component {

  constructor(props) {
    super(props)

    this.state = { value: props.value }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  onDrop() {
    this.setState({ showOptions: true })
  }

  onSelect(value) {
    this.setState({ value: value, showOptions: false })

    if(this.props.onChange) {
      this.props.onChange(value)
    }
  }

  renderSelected() {
    const current = options[this.state.value]

    if(!!current) {
      return (
        <div className='beer-select-selected'>
          <img src={ current.src } alt='Beer' />
          <div className='beer-select-description'>
            <h4>
              { current.name }
            </h4>
            <p>
              { current.description }
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='beer-select-selected'>
          <p className='placeholder'>Select a beer...</p>
        </div>
      )
    }
  }

  renderOptions() {
    return ['colimita', 'paramo', 'ticus'].map(beer => {
      const current = options[beer]
      return (
        <div className='beer-select-option'
             key={ beer }
             onClick={ this.onSelect.bind(this, beer) }>
          <img src={ current.src } alt='Beer' />
          <div className='beer-select-description'>
            <h4>
              { current.name }
            </h4>
            <p>
              { current.description }
            </p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className='beer-select'
             tabIndex='0'
             onClick={ this.onDrop.bind(this) }>
          { this.renderSelected() }
        </div>
        <div className='beer-select-options'>
          <div className={ ['beer-select-options-list', this.state.showOptions ? 'show' : ''].join(' ') }>
            { this.renderOptions() }
          </div>
        </div>
      </div>
    )
  }
}

BeerSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
