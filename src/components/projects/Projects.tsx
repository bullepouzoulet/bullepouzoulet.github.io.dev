import React from 'react'
import { useTranslation } from 'react-i18next'

import './Projects.scss'

const PROJECTS = [
  {
    title: 'projects.project1.title',
    text: 'projects.project1.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background3.jpg?raw=true'
  },
  {
    title: 'projects.project2.title',
    text: 'projects.project2.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background2.jpg?raw=true'
  },
  {
    title: 'projects.project3.title',
    text: 'projects.project3.text',
    image: 'https://github.com/bullepouzoulet/bullepouzoulet.github.io/blob/master/background4.jpg?raw=true'
  }
]

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
  return (
    <div className='Projects'>
      { PROJECTS.map((project, index) => <ProjectSection key={`project-${index}`} {...project} even={index % 2 !== 0} />)}
    </div>
  )
}

interface ProjectSectionProps {
  title: string,
  text: string,
  image: string,
  even: boolean
}

const ProjectSection = (props: ProjectSectionProps) => {
  const {
    title,
    text,
    image,
    even
  } = props

  const { t } = useTranslation()
  const className = `ProjectSection${even ? ' ProjectSection-even' : ''}`

  return (
    <div className={className}>
      <div className='ProjectSection-area ProjectSection-text'>
        <h2 className='ProjectSection-text-title'>
          {t(title)}
        </h2>
        <p className='ProjectSection-text-content'>
          {t(text)}
        </p>
      </div>
      <div className='ProjectSection-area ProjectSection-background'>
        <img
          alt='<project>'
          className='ProjectSection-image'
          src={image}
        />
      </div>
    </div>

  )
}

export default Projects
