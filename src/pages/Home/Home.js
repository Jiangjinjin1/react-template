import React, { Component } from 'react';
import {connect} from 'react-redux'
import {compose} from 'redux'
import logo from '../../assets/images/logo.svg';
import './Home.css';

const homeAction = (str) => {
  return () => {
    return {
      type: 'Home/test',
      payload: str,
    }
  }
}


@connect(null, (dispatch) => ({
  homeAction: compose(dispatch, homeAction)
}))
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _toNextPage = () => {
    this.props.homeAction('fuck')
    this.props.history.push('/lookDemo')
    // console.log('this:', this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this._toNextPage}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!!!!!!!2223
          </a>
        </header>
      </div>
    );
  }
}

export default App;
