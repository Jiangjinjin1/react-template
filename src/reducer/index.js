import { combineReducers } from 'redux'
import home from './Home/HomeReducer'

const reducers = {
  home,
}

export default combineReducers(reducers)