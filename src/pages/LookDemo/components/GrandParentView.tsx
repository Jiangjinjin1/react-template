import React, { PureComponent } from 'react';
import Son from './SonView';

interface Props {
}

interface State {

}

class GrandParent extends PureComponent<Props, State> {
  render () {
    return (
      <Son />
    )
  }
}

export default GrandParent