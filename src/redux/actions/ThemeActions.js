import { SET_THEME } from '../actionTypes/ThemeActionTypes'

export const setTheme = (resource) => ({
  type: SET_THEME, payload: resource,
})