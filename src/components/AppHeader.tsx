import React from 'react'
import { Link } from 'react-router-dom'

import Menu from '../commons/icons/Menu'


import './_app.css'

interface AppHeaderLink {
  to: string,
  text: string,
  active: boolean
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
    this.onMenuPressed = this.onMenuPressed.bind(this)
  }

  onMenuPressed () {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  renderLinks () {
    return this.props.links.map(this.renderLink)
  }

  renderLink (link: AppHeaderLink) {
    const {
      to,
      text,
      active
    } = link
    let className = 'AppHeader-link'
    if (active) {
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

  renderMenuLinks () {
    return this.props.links.map(this.renderMenuLink)
  }

  renderMenuLink (link: AppHeaderLink) {
    const {
      to,
      text,
      active
    } = link
    let className = 'AppHeader-menu-link'
    if (active) {
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
          { this.renderLinks() }
        </div>
        <button
          className='AppHeader-menu-btn'
          onClick={this.onMenuPressed}>
          <Menu />
        </button>
        <div
          className={this.state.showMenu ? 'AppHeader-menu AppHeader-menu-show' : 'AppHeader-menu'}>
          <ul
            className='AppHeader-menu-list'>
            { this.renderMenuLinks() }
          </ul>
        </div>
      </header>

    )
  }
}

export default AppHeader
