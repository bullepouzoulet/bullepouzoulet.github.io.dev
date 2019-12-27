import React from 'react'

import './Home.css'

interface HomeProps {}
interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render () {
    return (
      <div className='Home'>
        <div className='AppContent-background' />
        <h1>Sustainable <br /> Systems</h1>
        <h2>Let's walk together towards a sustainable future</h2>
        <h3>Site under construction - release planned 01/2020</h3>
      </div>
    )
  }
}

export default Home
