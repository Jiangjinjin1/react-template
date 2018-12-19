import {AnyAction, applyMiddleware, Dispatch} from 'redux'

function thunkState({ dispatch, getState }:{
  dispatch: Dispatch<AnyAction>,
  getState: any,
}) {
  return (next:Dispatch<AnyAction>) => (action: any) => {

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

