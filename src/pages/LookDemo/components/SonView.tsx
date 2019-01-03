import React, { PureComponent } from 'react';
import {injectContext} from './ContextProviderView';

interface Props {
    propA: any,
    propB: any,
}

interface State {

}

class SonView extends PureComponent<Props, State> {
  render () {
    return (
      <div>
        <span>propA为{this.props.propA}</span>
        <span>propB为{this.props.propB}</span>
      </div>
    )
  }
}

export default injectContext(['propA', 'propB'])(SonView)