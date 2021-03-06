import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './home/Home'
import Services from './services/Services'
import Projects from './projects/Projects'
import Contact from './contact/Contact'
import Legal from './legal/Legal'

import AppFooter from './AppFooter'

import './AppContent.scss'

interface AppContentProps {}

const AppContent = (props: AppContentProps) => {
  return (
    <div className='AppContent'>
      <div className='container'>
        <Switch>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/legal'>
            <Legal />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
      <AppFooter />
    </div>
  )
}

export default AppContent
