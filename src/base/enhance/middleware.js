import { applyMiddleware } from 'redux'

function thunkState({ dispatch, getState }) {
  return next => action => {

    if (action && typeof action === 'function') {
      let actionResult = action(getState())
      return dispatch(actionResult)
    }
    return next(action)
  }
}

export default applyMiddleware(
  thunkState,
)

