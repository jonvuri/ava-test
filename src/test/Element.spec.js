import { describe } from 'ava-spec'

import React from 'react'
import { shallow } from 'enzyme'

import Element from '/el/Element'

describe('<Element />', (it) => {
  it('finds el', () => {
    const wrapper = shallow(<Element />)
    const el = wrapper.find('#el')

    expect(el).to.be.present()
  })
})
