import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Form from './_Form'

describe('React::Beers::<Form />', () => {
  it('renders without crashing', () => {
    mount(<Form />)
  })

  describe('Submiting form', () => {
    it('submits the new log values', () => {
      var valuesFromComponent = 1
      const component = mount(<Form onSubmit={ (values) => valuesFromComponent = values }/>)

      component.find('.beer-select-option').at(0).simulate('click')
      component.find('.beer-counter-button').at(1).simulate('click')

      expect(component.state()).toEqual({ beer: 'colimita', count: 2 })

      component.find('.beer-form-actions > .beer-button').simulate('click')
      expect(valuesFromComponent).toEqual({ beer: 'colimita', count: 2 })
    })
  })
})
