import React from 'react'
import { useIconColor } from './IconColors'
import './Menu.scss'

interface MenuProps {
  color?: string
}

const Menu = (props: MenuProps) => {
  const className = useIconColor('Menu', props.color)
  return (
    <div className={className}>
      <div className='Menu-bar Menu-bar-top' />
      <div className='Menu-bar Menu-bar-mid' />
      <div className='Menu-bar Menu-bar-bot' />
    </div>
  )
}

export default Menu
