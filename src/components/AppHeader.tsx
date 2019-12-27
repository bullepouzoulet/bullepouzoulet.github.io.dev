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
          onClick={this.state.showMenu ? () => {} : this.onMenuPressed}>
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
