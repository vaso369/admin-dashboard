import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import darkTheme from '../../assets/dark-design.jpg'
import lightTheme from '../../assets/light-design.jpg'
import ArrowIcon from '../../components/SVG/Arrow'
import { setTheme } from '../../redux/actions/ThemeActions'
import './ChooseTheme.scss'

const ChooseTheme = () => {
  const [active, setActive] = useState('dark-theme')

  const dispatch = useDispatch()
  const history = useHistory()

  const setThemeHandler = () => {
    dispatch(setTheme(active))
    history.push('/dashboard')
  }
  const circle = active === 'dark-theme' ? 'circle' : 'disc'
  return (
    <div
      className="choseTheme full-section flex-center-c"
      data-testid="ChoseTheme"
    >
      <h1>Изаберите тему</h1>
      <div className="row choseTheme-wrapper  col-12 col-xl-10">
        <div
          onClick={() => setActive('dark-theme')}
          className={`choseTheme-item col-7 col-md-4 col-xl-3 no-gutters ${
            active === 'dark-theme' ? 'active' : null
          }`}
          style={{
            position: 'relative',
          }}
        >
          <img src={darkTheme} alt="" width="100%" />
          <ul><li style={{
            listStyleType: active === 'dark-theme' ? 'disc' : 'circle',
          }}
          >тамна
              </li>
          </ul>
          {/* <p><span>&#x02022;</span>dark</p> */}
        </div>
        <div
          onClick={() => setActive('light-theme')}
          className={`choseTheme-item col-7 col-md-4 col-xl-3 no-gutters ${
            active === 'light-theme' ? 'active' : null
          }`}
        >
          <img src={lightTheme} alt="" width="100%" />
          <ul><li style={{
            listStyleType: active === 'light-theme' ? 'disc' : 'circle',
          }}
          >светла
              </li>
          </ul>

        </div>

      </div>
      <div className="next-button" onClick={setThemeHandler}>
        <button onClick={setThemeHandler} type="button">
          Следеће <ArrowIcon className="ml-2" fill="#fff" />
        </button>
      </div>
    </div>
  )
}
export default ChooseTheme
