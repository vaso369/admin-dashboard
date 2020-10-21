import { INITIAL_CHANGE_BOOL } from '../actionTypes/InitialActionTypes'

export const changeBool = (resource) => (dispatch) => {
  dispatch({
    type: INITIAL_CHANGE_BOOL,
    payload: resource,
  })
}
