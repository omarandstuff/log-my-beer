import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { Index } from './Index'

describe('React::<Index />', () => {
  it('renders without crashing', () => {
    shallow(<Index />)
  })
})
