import React from 'react'
import { Link } from 'react-router-dom'
import ProjectIcon from '../../assets/icons/project.svg'
import './StartedProjects.scss'

const StartedProjects = () => (
  <div className="started-projects" data-testid="StartedProjects">
    <h2 className="reusable-heading-border-bottom">Покренути пројекти</h2>
    <div className="started-projects-wrapper">
      <div className="started-projects-item">
        <Link to="/project/1">
          <img src={ProjectIcon} alt="Project Icon" />
          Пројекат 1
        </Link>

      </div>
      <p className="started-projects-item-desc">Липсум је текст користи као замена у одсуству коначног текста модела или сајту.</p>
      <div className="started-projects-item">
        <Link to="/project/2">
          <img src={ProjectIcon} alt="Project Icon" />
          Пројекат 2
        </Link>

      </div>
      <p className="started-projects-item-desc">Липсум је текст користи као замена у одсуству коначног текста модела или сајту.</p>
      <div className="started-projects-item">
        <Link to="/project/3">
          <img src={ProjectIcon} alt="Project Icon" />
          Пројекат 3
        </Link>

      </div>
      <p className="started-projects-item-desc">Липсум је текст користи као замена у одсуству коначног текста модела или сајту.</p>
      <div className="started-projects-item">
        <Link to="/project/3">
          <img src={ProjectIcon} alt="Project Icon" />
          Пројекат 4
        </Link>

      </div>
      <p className="started-projects-item-desc">Липсум је текст користи као замена у одсуству коначног текста модела или сајту.</p>
    </div>
  </div>
)

StartedProjects.propTypes = {
}

StartedProjects.defaultProps = {
}

export default StartedProjects
