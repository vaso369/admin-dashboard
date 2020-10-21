import { INITIAL_CHANGE_BOOL } from '../actionTypes/InitialActionTypes'

const initialState = {
  /** insert Initial state here */
  bool: false,
}

export default (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case INITIAL_CHANGE_BOOL:
      return {
        bool: payload,
      }

    default:
      return state
  }
}
