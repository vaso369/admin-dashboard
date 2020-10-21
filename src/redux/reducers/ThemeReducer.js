import { SET_THEME } from '../actionTypes/ThemeActionTypes'

const initialState = {
  /** insert Theme state here */
  theme: 'dark-theme',
}

export default (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case SET_THEME:
      return {
        theme: payload,
      }

    default:
      return state
  }
}
