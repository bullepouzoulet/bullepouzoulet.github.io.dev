import React from 'react'
import { useTranslation } from 'react-i18next'

import Arrow from '../../commons/icons/Arrow'
import './Home.scss'

interface HomeProps {}

interface HomePageBackground {
  src: string
}

const Home = (props: HomeProps) => {
  const { t } = useTranslation()

  return (
    <div className='Home'>
      <div className='Home-page'>
        <HomePageBackground src='https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background.jpg?raw=true' />
        <div className='Home-page-content'>
          <h1 className='Home-page-main-title'>{t('app.header.title')}</h1>
          <h2>{t('home.section1.title')}</h2>
          <h3>{t('home.section1.subtitle')}</h3>
          <div className='Home-page-bottom'>
            <Arrow />
          </div>
        </div>
      </div>

      <div className='Home-page Home-page-small'>
        <div className='Home-page-content'>
          <h2>{t('home.section2.title')}</h2>
          <p>{t('home.section2.text')}</p>
        </div>
      </div>

      <div className='Home-page Home-page-small'>
        <div className='Home-page-content'>
          <HomePageBackground src='https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background2.jpg?raw=true' />
          <h2>{t('home.section3.title')}</h2>
          <p>{t('home.section3.text')}</p>
        </div>
      </div>

      <div className='Home-page Home-page-small'>
        <div className='Home-page-content'>
        <h2>{t('home.section4.title')}</h2>
          <p>{t('home.section4.text')}</p>
        </div>
      </div>

    </div>
  )
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
