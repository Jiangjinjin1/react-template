import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
     document.getElementById('root')
  )
} 

render(App)

if(module.hot) {
  module.hot.accept('./components/App/index.js', () => {
    render(App)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
