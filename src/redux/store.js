import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import InitialReducer from './reducers/InitialReducer'
import ThemeReducer from './reducers/ThemeReducer'
// eslint-disable-next-line
const initialState = {}

const reducer = combineReducers({
  initial: InitialReducer,
  theme: ThemeReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
