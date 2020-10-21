import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import srcImg from '../../assets/design.png'
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
  return (
    <div
      className="choseTheme full-section flex-center-c"
      data-testid="ChoseTheme"
    >
      <h1>Choose theme</h1>
      <div className="row choseTheme-wrapper  col-12 col-xl-10">
        <div
          onClick={() => setActive('dark-theme')}
          className={`col-7 col-md-4 col-xl-3 no-gutters ${
            active === 'dark-theme' ? 'active' : null
          }`}
          style={{
            position: 'relative',
          }}
        >
          <img src={srcImg} alt="" width="100%" />
        </div>
        <div
          onClick={() => setActive('light-theme')}
          className={`col-7 col-md-4 col-xl-3 no-gutters ${
            active === 'light-theme' ? 'active' : null
          }`}
        >
          <img src={srcImg} alt="" width="100%" />

        </div>

      </div>
      <div className="next-button" onClick={setThemeHandler}>
        <button onClick={setThemeHandler} type="button">
          Next <ArrowIcon className="ml-2" fill="#fff" />
        </button>
      </div>
    </div>
  )
}
export default ChooseTheme
