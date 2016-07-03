import React from 'react'
import cssModules from 'react-css-modules'

import styles from './Element.css'

const Element = () => (
  <div styleName='elem' id='el'>Foo</div>
)

export { Element }
export default cssModules(Element, styles)
