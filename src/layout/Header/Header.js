import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../../components/Search/Search'
import Notification from '../../components/SVG/Notification'
import User from '../../components/SVG/User'
import ThemeSelector from '../../components/ThemeSelector'
import './Header.scss'

const Header = () => {
  const { theme } = useSelector((state) => state.theme)
  // console.log(theme)
  const toggleMenu = () => {
    document.getElementsByClassName('sidebar-nav')[0].classList.toggle('hamburger-toggle')
    document.getElementsByClassName('sidebar-nav-section')[0].classList.toggle('hamburger-toggle')
    document.getElementsByClassName('sidebar-nav-section')[1].classList.toggle('hamburger-toggle')
  }

  return (
    <div
      className={`${theme}`}
      style={{
      }}
    >
      <header className="header" data-testid="Header">
        <div
          className="row no-gutters"
          style={{
            width: '100%',
          }}
        >
          <div className="header-logo col-12 col-xl-2">
            <h1>Constraint</h1>
          </div>
          <div className="header-nav row no-gutters ml-3">
            <Search width="col-lg-8 col-xl-2" />
            <div className="header-nav-user row">
              <div className="hamburger-menu" onClick={toggleMenu}>
                <div style={{
                  background: theme === 'dark-theme' ? '#d1d3d4' : '#1c5b7b',
                }}
                />
                <div style={{
                  background: theme === 'dark-theme' ? '#d1d3d4' : '#1c5b7b',
                }}
                />
                <div style={{
                  background: theme === 'dark-theme' ? '#d1d3d4' : '#1c5b7b',
                }}
                />
              </div>
              <ThemeSelector />
              <Notification fill={theme === 'dark-theme' ? '#e8e7e7' : '#1c5b7b'} />
              <User fill={theme === 'dark-theme' ? '#e8e7e7' : '#1c5b7b'} />
              <p>Петар</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
