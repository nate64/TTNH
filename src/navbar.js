import React, { Component } from 'react'
import navlogo from './images/ttnh_logo_small.png'

import { Menu } from 'semantic-ui-react'



class Navbar extends Component {
  render() {
    return (
      <Menu>
      <h1>Test</h1>
      <h1>{navlogo}</h1>
      </Menu>
    )
  }
}




export default Navbar;


