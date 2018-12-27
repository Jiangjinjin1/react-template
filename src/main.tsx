import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './utils/css/main.css';
import { AppContainer } from 'react-hot-loader'
import routes from './routes/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const RouteWithSubRoutes = (route: {
    path: string,
    [propName: string]: any,
}) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={routes}/>
      )}
    />
  )
}

type P = {

}

type S = {
    store: any,
    persistor: any,
}

class App extends Component<P, S> {
    readonly state: S = {
      store: null,
      persistor: null,
    }

    componentWillMount() {
      createStore((store, persistor) => {
        this.setState({
          store,
          persistor,
        })
      })
    }

    render() {
      const {
        store,
        persistor,
      } = this.state
      return (
        <AppContainer>
          <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Switch>
                  {
                    routes.map((route, i) => (
                      <RouteWithSubRoutes key={i} {...route}/>
                    ))
                  }
                </Switch>
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </AppContainer>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// hot(module as any)(<App />)
if((module as any).hot) {
  (module as any).hot.accept()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
