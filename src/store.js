import { createStore, compose } from 'redux'
import middleWare from './base/enhance/middleware'
import reducers from './reducer/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default function(onComplete) {
  const devEnhance = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  const productionEnhancer = compose(middleWare)

  const persistConfig = {
    key: 'root',
    whitelist: [
      'home',
    ],
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const enhancer = process.env.NODE_ENV === 'production'?productionEnhancer:compose(productionEnhancer, devEnhance)

  const store = createStore(persistedReducer, undefined, enhancer)

  const persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      store.replaceReducer(
        persistReducer(persistConfig, reducers)
      )
    })
  }

  const onStoreInit = () => {
    if(onComplete && typeof onComplete === 'function') {
      onComplete(store,persistor)
    }
  }

  onStoreInit()

}