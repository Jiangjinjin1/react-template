import React, { Component } from 'react';
import {myConnect} from '../../base/hoc/myConnect'
import {compose, Dispatch} from 'redux'
// import logo from '../../assets/images/test1.png';
import './Home.css';

const homeAction = (str: string) => {
  return () => {
    return {
      type: 'Home/test',
      payload: str,
    }
  }
}

interface Props{
  homeAction: (arg1: string) => void,
  history: any,
}

interface State{

}

@myConnect(null, (dispatch: Dispatch<any>) => ({
  homeAction: compose(dispatch, homeAction)
}))
class App extends Component<Props, State> {
  constructor(props: Props) {
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
          <img src={require('../../assets/images/test1.png')} className="App-logo" alt="logo" />
          <p onClick={this._toNextPage}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!!!!!!!234
          </a>
        </header>
      </div>
    );
  }
}

export default App;
