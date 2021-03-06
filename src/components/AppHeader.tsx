import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { Actions } from '../store'

import { Menu } from '../commons/icons'

import './AppHeader.scss'

interface AppHeaderLink {
  to: string,
  id: string
}

interface AppHeaderProps {}

const links = [
  { to: '/', id: 'home' },
  { to: '/services', id: 'services' },
  { to: '/projects', id: 'projects' },
  { to: '/contact', id: 'contact' }
]

const AppHeader = (props: AppHeaderProps) => {

  /* HOOKS */

  const [showMenu, setShowMenu] = useState(false)
  const { t, i18n } = useTranslation()

  const selector = (state: any) => {
    return state.lang
  }
  const lang = useSelector(selector)
  const dispatch = useDispatch()

  /* CALLBACKS */

  const toggleMenuOff = () => {
    document.body.removeEventListener('click', toggleMenuOff)
    setShowMenu(false)
  }

  const onLangPressed = () => {
    const nextLang = lang === 'fr' ? 'en' : 'fr'
    dispatch(Actions.langChange(nextLang))
    i18n.changeLanguage(nextLang)
  }

  const onMenuPressed = () => {
    document.body.removeEventListener('click', toggleMenuOff)
    if (!showMenu) {
      document.body.addEventListener('click', toggleMenuOff)
      setShowMenu(true)
    }
  }

  /* RENDERING */

  return (
    <header
      className='AppHeader'>
      <div className='container'>
        <div className='AppHeader-content'>
          <div
            className='AppHeader-area'>
            <button
              className='AppHeader-item AppHeader-item-lang'
              onClick={onLangPressed}>
              {lang.toUpperCase()}
            </button>
            <div
              className='AppHeader-item'>
              <Link
                className='AppHeader-link'
                to='/'>
                {t('app.header.title')}
              </Link>
            </div>
          </div>
          <div
            className='AppHeader-links'>
            { links.map((link) => <AppHeaderLink key={link.to} {...link} />) }
          </div>
          <div className='AppHeader-menu-btn-container'>
            <button
              className='AppHeader-menu-btn'
              onClick={onMenuPressed}>
              <Menu pressed={showMenu} />
            </button>
            <div className={showMenu ? 'AppHeader-menu-btn-mask' : ''} />
          </div>
          <div
            className={showMenu ? 'AppHeader-menu AppHeader-menu-show' : 'AppHeader-menu'}>
            <ul
              className='AppHeader-menu-list'>
              { links.map((link) => <AppHeaderMenuLink key={link.to} {...link} />) }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

function AppHeaderLink(props: AppHeaderLink) {
  const { t } = useTranslation()
  const {
    to,
    id
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
        {t(`app.header.links.${id}`)}
      </Link>
    </div>
  )
}

function AppHeaderMenuLink(props: AppHeaderLink) {
  const { t } = useTranslation()
  const {
    to,
    id
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
        {t(`app.header.links.${id}`)}
      </Link>
    </li>
  )
}

export default AppHeader
