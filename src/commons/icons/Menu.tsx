import React from 'react'
import { useIconColor } from './IconColors'
import './Menu.scss'

interface MenuProps {
  color?: string,
  pressed?: boolean
}

const Menu = (props: MenuProps) => {
  const {
    color,
    pressed
  } = props
  const className = useIconColor(`Menu${pressed ? ' Menu-pressed' : ''}`, color)
  return (
    <div className={className}>
      <div className='Menu-bar Menu-bar-top' />
      <div className='Menu-bar-mid'>
        <div className='Menu-bar Menu-bar-mid-1' />
        <div className='Menu-bar Menu-bar-mid-2' />
      </div>
      <div className='Menu-bar Menu-bar-bot' />
    </div>
  )
}

export default Menu
