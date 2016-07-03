import test from 'ava'

import React from 'react'
import { shallow } from 'enzyme'

import { Element } from './Element'

test('<Element />', () => {
  const wrapper = shallow(<Element />)
  const el = wrapper.find('#el')

  expect(el).to.be.present()
})
