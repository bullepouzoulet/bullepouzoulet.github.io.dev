import React from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom'

import Menu from '../commons/icons/Menu'


import './AppHeader.scss'

interface AppHeaderLink {
  to: string,
  text: string
}

interface AppHeaderProps {
  links: AppHeaderLink[]
}

interface AppHeaderState {
  showMenu: boolean;
}

class AppHeader extends React.Component<AppHeaderProps, AppHeaderState> {
  constructor (props: AppHeaderProps) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.toggleMenuOff = this.toggleMenuOff.bind(this)
    this.onMenuPressed = this.onMenuPressed.bind(this)
  }

  toggleMenuOff () {
    document.body.removeEventListener('click', this.toggleMenuOff)
    this.setState({
      showMenu: false
    })
  }

  onMenuPressed () {
    document.body.removeEventListener('click', this.toggleMenuOff)
    if (!this.state.showMenu) {
      document.body.addEventListener('click', this.toggleMenuOff)
      this.setState({
        showMenu: true
      })
    }
  }

  render () {
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
          { this.props.links.map((link) => <AppHeaderLink key={link.to} {...link} />) }
        </div>
        <div className='AppHeader-menu-btn-container'>
          <button
            className='AppHeader-menu-btn'
            onClick={this.onMenuPressed}>
            <Menu />
          </button>
          <div className={this.state.showMenu ? 'AppHeader-menu-btn-mask' : ''} />
        </div>
        <div
          className={this.state.showMenu ? 'AppHeader-menu AppHeader-menu-show' : 'AppHeader-menu'}>
          <ul
            className='AppHeader-menu-list'>
            { this.props.links.map((link) => <AppHeaderMenuLink key={link.to} {...link} />) }
          </ul>
        </div>
      </header>

    )
  }
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
