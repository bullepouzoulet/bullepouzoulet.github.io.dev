import React from 'react'
import './App.css'

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <span>Sustainable Systems</span>
          <span className='App-header-item'>Home</span>
        </header>
        <div className='App-content'>
          <div className='App-background' />
          <h1>Sustainable <br /> Systems</h1>
          <h2>Let's walk together towards a sustainable future</h2>
          <h3>Site under construction - release planned 01/2020</h3>
        </div>
      </div>
    )
  }
}

export default App
