import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { New } from './New'

describe('React::<New />', () => {
  it('renders without crashing', () => {
    shallow(<New />)
  })

  describe('Submiting and presenting prompt', () => {
    it('shows the form and the propmt', () => {
      const component = mount(<New logBeer={ () => {} }
                                   dismiss={ () => {} }
                                   history={[]} />)

      component.instance().onFormSubmit({})
      component.instance().onGoHome()
      component.instance().onClose()

      component.setProps({ status: 'PROMPTING' })
    })
  })
})
