import React from 'react'

import Arrow from '../../commons/icons/Arrow'
import './Home.scss'

interface HomeProps {}
interface HomeState {}

interface HomePageBackground {
  src: string
}

class Home extends React.Component<HomeProps, HomeState> {
  render () {
    return (
      <div className='Home'>

        <div className='Home-page'>
          <div className='Home-page-content'>
            <HomePageBackground src='https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background.jpg?raw=true' />
            <h1>Sustainable <br /> Systems</h1>
            <h2>Let's walk together towards a sustainable future</h2>
            <h3>Site under construction - release planned 01/2020</h3>
            <div className='Home-page-bottom'>
              <Arrow />
            </div>
          </div>
        </div>

        <div className='Home-page Home-page-small'>
          <div className='Home-page-content'>
            <h2>Vision / Approche / Mission</h2>
            <p>Besoin d'une personne compétente et qualifiée pour vous accompagner dans la réalisation de votre projet ? Vous avez frappé à la bonne porte. Mon travail consiste à comprendre vos objectifs et à trouver la solution adaptée à vos besoins. Contactez-moi ! </p>
          </div>
        </div>

        <div className='Home-page Home-page-small'>
          <div className='Home-page-content'>
            <HomePageBackground src='https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background2.jpg?raw=true' />
            <h2>Mes Services</h2>
            <p>Je suis passionné par mon travail et cela n'est un secret pour personne. Ma plus grande satisfaction ? Pouvoir aider mes clients à réussir. Vous trouverez ici toutes les informations sur mes prestations et la façon dont je peux vous accompagner.</p>
          </div>
        </div>

        <div className='Home-page Home-page-small'>
          <div className='Home-page-content'>
            <h2>Portfolio</h2>
            <p>Quand vous croyez en ce que vous faites, tout est possible.  Si vous souhaitez avoir une idée de mes compétences, voici quelques exemples concrets de résultats que vous pouvez espérer atteindre en collaborant avec moi.</p>
          </div>
        </div>

      </div>
    )
  }
}

function HomePageBackground(props: HomePageBackground) {
  const {
    src
  } = props
  return (
    <div
      className='Home-page-background-container'>
      <img
        className='Home-page-background'
        alt=''
        src={src} />
    </div>
  )
}

export default Home
