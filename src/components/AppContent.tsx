import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './home/Home'
import Services from './services/Services'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

import './AppContent.scss'

interface AppContentProps {}
interface AppContentState {}

const AppContent = (props: AppContentProps) => {
  return (
    <div className='AppContent'>
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
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <div>Common Footer</div>
    </div>
  )
}

export default AppContent
