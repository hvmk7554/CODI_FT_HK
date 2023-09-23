import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
 <nav className='navbar'>
        <a className='navbar_item' href='/'>Home</a>
        <a className='navbar_item_active' href='/'>Single product</a>
        <a className='navbar_item' href='/'>Shop</a>
        <a className='navbar_item' href='/'>Checkout</a>
        <a className='navbar_item' href='/'>Category</a>
        <a className='navbar_item' href='/'>Others</a>
        </nav>  
      </div>
    )
  }
}
