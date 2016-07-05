import cssHook from 'css-modules-require-hook/preset'

import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import chaiEnzyme from 'chai-enzyme'
import jsdom from 'jsdom'

// Modify chai with functional, lint-friendly assertions
chai.use(dirtyChai)

// Integrate chai with enzyme for React testing
chai.use(chaiEnzyme())

// Make chai's expect interface available in all tests
global.expect = expect

// Use jsdom to mock out a browser environment for React and react-router
global.document = jsdom.jsdom()
global.window = document.defaultView
global.navigator = window.navigator
