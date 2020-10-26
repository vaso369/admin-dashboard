import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ArrowIcon from '../../components/SVG/Arrow'
import Constraint from '../../components/SVG/Constraint'
import Plus from '../../components/SVG/Plus'
import Support from '../../components/SVG/Support'
import Users from '../../components/SVG/Users'
import './SidebarNav.scss'

const SidebarNav = () => {
  const state = useSelector((state) => state.theme)
  const { theme } = state

  return (
    <div
      className={`${theme} col-12 col-md-3 col-lg-3 col-xl-2`}
      style={{
        maxHeight: 'calc(100vh - 6vh)',
      }}
    >
      <div className="sidebar-nav" data-testid="SidebarNav">
        <div className="sidebar-nav-section pt-5">
          <h2>Пројекти</h2>
          <Link to="/">
            <div className="sidebar-nav-section-item">
              <Plus fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Додај пројекат
            </div>
          </Link>
          <div className="sidebar-nav-section-item">
            <Users fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Запослени{' '}
            <ArrowIcon
              fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'}
              className="ml-auto"
              style={{
                marginRight: 0,
              }}
            />
          </div>
          <div className="sidebar-nav-section-item">
            <Constraint fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Препреке{' '}
            <ArrowIcon
              fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'}
              className="ml-auto"
              style={{
                marginRight: 0,
              }}
            />
          </div>
          <div className="sidebar-nav-section-item">
            <Support fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Подршка
          </div>
        </div>
        <div className="sidebar-nav-section">
          <h2>Статистике</h2>
          <Link to="/">
            <div className="sidebar-nav-section-item">
              <Plus fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Додај статистике
            </div>
          </Link>
          <div className="sidebar-nav-section-item">
            <Users fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Менаџмент{' '}
            <ArrowIcon
              fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'}
              className="ml-auto"
              style={{
                marginRight: 0,
              }}
            />
          </div>
          <div className="sidebar-nav-section-item">
            <Support fill={theme === 'dark-theme' ? '#ffb275' : '#1c5b7b'} /> Подршка
          </div>
        </div>
      </div>
    </div>
  )
}
export default SidebarNav
