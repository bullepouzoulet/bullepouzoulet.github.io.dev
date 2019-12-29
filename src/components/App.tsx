import React from 'react'
import {
  HashRouter as Router
} from 'react-router-dom'

import AppHeader from './AppHeader'
import AppContent from './AppContent'

import './App.scss'

interface AppProps {}
interface AppState {}

const links = [
  { to: '/', text: 'Home' },
  { to: '/services', text: 'Services' },
  { to: '/projects', text: 'Projects' },
  { to: '/contact', text: 'Contact' }
]

class App extends React.Component<AppProps, AppState> {

  render () {
    return (
      <Router>
        <div className='App'>
          <AppHeader links={links} />
          <AppContent />
        </div>
      </Router>
    )
  }
}

export default App
