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

interface AppHeaderState {}

class AppHeader extends React.Component<AppHeaderProps, AppHeaderState> {
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

  render () {
    return (
      <header className='AppHeader'>
        <div className='AppHeader-item'>
          <Link
            className='AppHeader-link'
            to='/'>
            Sustainable Systems
          </Link>
        </div>
        <div className='AppHeader-links'>
          { this.renderLinks() }
        </div>
        <button className='AppHeader-menu'>
          <Menu />
        </button>
      </header>
    )
  }
}

export default AppHeader
