import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

import Menu from '../commons/icons/Menu'

import './AppHeader.scss'

interface AppHeaderLink {
  to: string,
  text: string
}

interface AppHeaderProps {
  links: AppHeaderLink[]
}

const AppHeader = (props: AppHeaderProps) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenuOff = () => {
    document.body.removeEventListener('click', toggleMenuOff)
    setShowMenu(false)
  }

  const onMenuPressed = () => {
    document.body.removeEventListener('click', toggleMenuOff)
    if (!showMenu) {
      document.body.addEventListener('click', toggleMenuOff)
      setShowMenu(true)
    }
  }
  return (
    <header
      className='AppHeader'>
      <div
        className='AppHeader-item'>
        <Link
          className='AppHeader-link'
          to='/'>
          Sustainable Systems
        </Link>
      </div>
      <div
        className='AppHeader-links'>
        { props.links.map((link) => <AppHeaderLink key={link.to} {...link} />) }
      </div>
      <div className='AppHeader-menu-btn-container'>
        <button
          className='AppHeader-menu-btn'
          onClick={onMenuPressed}>
          <Menu />
        </button>
        <div className={showMenu ? 'AppHeader-menu-btn-mask' : ''} />
      </div>
      <div
        className={showMenu ? 'AppHeader-menu AppHeader-menu-show' : 'AppHeader-menu'}>
        <ul
          className='AppHeader-menu-list'>
          { props.links.map((link) => <AppHeaderMenuLink key={link.to} {...link} />) }
        </ul>
      </div>
    </header>
  )
}

function AppHeaderLink(props: AppHeaderLink) {
  const {
    to,
    text
  } = props
  let className = 'AppHeader-link'
  const location = useLocation()
  if (location.pathname === to) {
    className += ' AppHeader-link-active'
  }
  return (
    <div
      key={to}
      className='AppHeader-item'>
      <Link
        className={className}
        to={to}>
        {text}
      </Link>
    </div>
  )
}

function AppHeaderMenuLink(props: AppHeaderLink) {
  const {
    to,
    text
  } = props
  let className = 'AppHeader-menu-link'
  const location = useLocation()
  if (location.pathname === to) {
    className += ' AppHeader-menu-link-active'
  }
  return (
    <li
      key={to}
      className='AppHeader-menu-item'>
      <Link
        className={className}
        to={to}>
        {text}
      </Link>
    </li>
  )
}

export default AppHeader
