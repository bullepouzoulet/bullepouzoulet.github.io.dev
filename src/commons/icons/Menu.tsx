import React from 'react'
import './Menu.css'

interface MenuProps {}
interface MenuState {}

class Menu extends React.Component<MenuProps, MenuState> {
  render () {
    return (
      <div className='Menu'>
        <div className='Menu-bar' />
        <div className='Menu-bar' />
        <div className='Menu-bar' />
      </div>
    )
  }
}

export default Menu
