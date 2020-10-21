import React from 'react'
import { Link } from 'react-router-dom'
import ProjectIcon from '../../assets/icons/project.svg'
import './StartedProjects.scss'

const StartedProjects = () => (
  <div className="started-projects" data-testid="StartedProjects">
    <h2 className="reusable-heading-border-bottom">Started Projects</h2>
    <div className="started-projects-wrapper">
      <div className="started-projects-item">
        <Link to="/project/1">
          <img src={ProjectIcon} alt="Project Icon" />
          Project 1
        </Link>

      </div>
      <p className="started-projects-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae.</p>
      <div className="started-projects-item">
        <Link to="/project/2">
          <img src={ProjectIcon} alt="Project Icon" />
          Project 2
        </Link>

      </div>
      <p className="started-projects-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae.</p>
      <div className="started-projects-item">
        <Link to="/project/3">
          <img src={ProjectIcon} alt="Project Icon" />
          Project 3
        </Link>

      </div>
      <p className="started-projects-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae.</p>
      <div className="started-projects-item">
        <Link to="/project/3">
          <img src={ProjectIcon} alt="Project Icon" />
          Project 3
        </Link>

      </div>
      <p className="started-projects-item-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quae.</p>
    </div>
  </div>
)

StartedProjects.propTypes = {
}

StartedProjects.defaultProps = {
}

export default StartedProjects
