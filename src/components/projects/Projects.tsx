import React from 'react'

import './Projects.css'

interface ProjectsProps {}
interface ProjectsState {}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
  render () {
    return (
      <div className='Projects'>
        <h1>Projects</h1>
      </div>
    )
  }
}

export default Projects
