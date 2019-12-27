import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import AppHeader from './AppHeader'
import AppContent from './AppContent'

import './_app.css'

interface AppProps {}
interface AppState {}

const links = [
  { to: '/', text: 'Home', active: false },
  { to: '/services', text: 'Services', active: false },
  { to: '/projects', text: 'Projects', active: false },
  { to: '/contact', text: 'Contact', active: false }
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
