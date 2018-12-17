import { replaceReducer } from '../common'
import { combineReducers } from 'redux'

const test = replaceReducer('Home/test', '')

export default combineReducers({
  home: test,
})