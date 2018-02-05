import React from 'react'
import { shallow, mount, render } from 'enzyme'
import NotFound from './NotFound'

describe('React::<NotFound />', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />)
  })
})
