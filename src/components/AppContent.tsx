import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './home/Home'
import Services from './services/Services'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

import './_app.css'

interface AppContentProps {}
interface AppContentState {}

class AppContent extends React.Component<AppContentProps, AppContentState> {
  render () {
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
      </div>
    )
  }
}

export default AppContent
