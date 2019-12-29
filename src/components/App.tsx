import React, { Suspense } from 'react'
import {
  HashRouter as Router
} from 'react-router-dom'

import AppHeader from './AppHeader'
import AppContent from './AppContent'

import './App.scss'

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <Suspense fallback="loading">
      <Router>
        <div className='App'>
          <AppHeader />
          <AppContent />
        </div>
      </Router>
    </Suspense>
  )
}

export default App
