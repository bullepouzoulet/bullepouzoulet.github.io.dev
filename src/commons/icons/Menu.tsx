import React from 'react'
import './Menu.scss'

interface MenuProps {}
interface MenuState {}

const Menu = (props: MenuProps) => {
  return (
    <div className='Menu'>
      <div className='Menu-bar Menu-bar-top' />
      <div className='Menu-bar Menu-bar-mid' />
      <div className='Menu-bar Menu-bar-bot' />
    </div>
  )
}

export default Menu
