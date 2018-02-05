import React from 'react'
import { shallow, mount, render } from 'enzyme'
import BeerSelect from './_BeerSelect'

describe('React::Beers::<BeerSelect />', () => {
  it('renders without crashing', () => {
    mount(<BeerSelect />)
  })

  describe('selecting a beer', () => {
    it('selects the beer', () => {
      var valueFromComponent = 'NONE'
      const component = mount(<BeerSelect onChange={ (value) => valueFromComponent = value }/>)

      expect(component.find('.beer-select-selected').text()).toEqual('Select a beer...')

      component.find('.beer-select').simulate('click')
      component.find('.beer-select-option').at(0).simulate('click')

      expect(component.find('.beer-select-selected').text()).toMatch('Colimita')
      expect(component.state().value).toEqual('colimita')
      expect(valueFromComponent).toEqual('colimita')

      component.setProps({ value: 'paramo' })
      expect(component.find('.beer-select-selected').text()).toMatch('Páramo')
      expect(component.state().value).toEqual('paramo')
    })
  })
})
