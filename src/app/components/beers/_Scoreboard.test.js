import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Scoreboard from './_Scoreboard'
import Immutable from 'immutable'

describe('React::Beers::<Scoreboard />', () => {
  it('renders without crashing', () => {
    mount(<Scoreboard counts={ Immutable.Map() }/>)
  })

  it('shows the beers counts', () => {
    const component = mount(<Scoreboard counts={ Immutable.Map() }/>)

    expect(component.text()).toEqual('')

    component.setProps({
      counts: Immutable.Map({
        colimita: 2
      })
    })

    expect(component.text()).toEqual('2')
    expect(component.find('.beer-sticker').length).toEqual(1)
    expect(component.find('.beer-sticker.beer-sticker-left').length).toEqual(0)
    expect(component.find('.beer-sticker.beer-sticker-right').length).toEqual(0)

    component.setProps({
      counts: Immutable.Map({
        colimita: 2,
        paramo: 3
      })
    })

    expect(component.text()).toEqual('23')
    expect(component.find('.beer-sticker').length).toEqual(2)
    expect(component.find('.beer-sticker.beer-sticker-left').length).toEqual(1)
    expect(component.find('.beer-sticker.beer-sticker-right').length).toEqual(1)

    component.setProps({
      counts: Immutable.Map({
        colimita: 2,
        paramo: 3,
        ticus: 6
      })
    })

    expect(component.text()).toEqual('236')
    expect(component.find('.beer-sticker').length).toEqual(3)
    expect(component.find('.beer-sticker.beer-sticker-left').length).toEqual(1)
    expect(component.find('.beer-sticker.beer-sticker-right').length).toEqual(1)
  })
})
