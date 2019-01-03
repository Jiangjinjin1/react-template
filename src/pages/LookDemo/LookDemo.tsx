import React, { Component } from 'react';
import './LookDemo.css';
import {ContextProvider} from './components/ContextProviderView';
import GrandParent from './components/GrandParentView';

class LookDemo extends Component {
  render() {
    return (
      <div>
        <p className="look-p">我是第二个页面哦哈哈哈12!!!</p>
        <ContextProvider context={{
          propA: 'propA',
          propB: 'propB'
        }}>
          <GrandParent />
        </ContextProvider>
      </div>
    )
  }
}

export default LookDemo