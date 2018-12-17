import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './utils/css/main.css';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'
import routes from './routes/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import { PersistGate } from 'redux-persist/integration/react'

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={routes}/>
      )}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: null,
      persistor: null,
    }

  }

  componentWillMount() {
    createStore((store,persistor) => {
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


if(module.hot) {
  module.hot.accept()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
