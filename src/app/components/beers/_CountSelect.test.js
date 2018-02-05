import React from 'react'
import { shallow, mount, render } from 'enzyme'
import CountSelect from './_CountSelect'

describe('React::Beers::<CountSelect />', () => {
  it('renders without crashing', () => {
    mount(<CountSelect />)
  })

  describe('changing count', () => {
    it('changes the count', () => {
      var valueFromComponent = 1
      const component = mount(<CountSelect onChange={ (value) => valueFromComponent = value }/>)

      expect(component.find('.beer-counter-title').text()).toEqual('1')
      expect(component.state().value).toEqual(1)

      component.find('.beer-counter-button').at(0).simulate('click')

      expect(component.find('.beer-counter-title').text()).toEqual('1')
      expect(component.state().value).toEqual(1)
      expect(valueFromComponent).toEqual(1)

      component.find('.beer-counter-button').at(1).simulate('click')

      expect(component.find('.beer-counter-title').text()).toEqual('2')
      expect(component.state().value).toEqual(2)
      expect(valueFromComponent).toEqual(2)

      component.find('.beer-counter-button').at(0).simulate('click')

      expect(component.find('.beer-counter-title').text()).toEqual('1')
      expect(component.state().value).toEqual(1)
      expect(valueFromComponent).toEqual(1)

      component.setProps({ value: 5 })
      expect(component.find('.beer-counter-title').text()).toEqual('5')
      expect(component.state().value).toEqual(5)
    })
  })
})
