import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Prompt from './_Prompt'

describe('React::Beers::<Prompt />', () => {
  it('renders without crashing', () => {
    mount(<Prompt />)
  })

  describe('Pressing buttons of redirection', () => {
    it('call the events callbacks', () => {
      const component = mount(<Prompt onGoHome={ () => {} }
                                      onClose={ () => {} }/>)

      component.find('.beer-button').at(0).simulate('click')
      component.find('.beer-button').at(1).simulate('click')
    })
  })
})
