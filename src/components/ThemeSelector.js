import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/actions/ThemeActions'
import Settings from './SVG/Settings'

const themeNames = {
  dark: 'dark-theme', light: 'light-theme',
}

const ThemeSelector = () => {
  const [showSettings, setShowSettings] = useState(false)
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const color = theme === 'dark-theme' ? '#e8e7e7' : '#174359'
  const color2 = theme === 'dark-theme' ? '#174359' : '#e8e7e7'
  const setttingsToggle = () => {
    setShowSettings((prevSettins) => !prevSettins)
  }

  return (
    <div
      className="d-flex flex-column align-items-center "
      style={{
        position: 'relative',
      }}
    >
      <Settings
        onClick={setttingsToggle}
        fill={color}

      />
      {showSettings
      && (
      <div style={{
        position: 'absolute',
        top: '130%',
        background: color2,
        padding: '3rem',
        zIndex: 1,
      }}
      >
        <label
          htmlFor="theme"
          style={{
            marginBottom: 0,
            color,
            fontSize: '1rem',
          }}
        >Theme:
        </label>
        <select
          style={{
            fontSize: '1rem',
          }}
          id="theme"
          onChange={(e) => dispatch(setTheme(e.target.value))}
        >
          {Object.entries(themeNames).map(([key, value]) => (
            <option value={value}>{key}</option>
          ))}
        </select>
      </div>
      )}
    </div>
  )
}

export default ThemeSelector
