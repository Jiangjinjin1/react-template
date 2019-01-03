import React, {Component} from 'react'

const Context: any = (React as any).createContext();

interface Props {
    children: any,
    context: any,
}

interface State {
    
}

export class ContextProvider extends Component<Props, State> {
  render() {
    return (
      <Context.Provider value={this.props.context}>
        {this.props.children}
      </Context.Provider>
    )
  }
}


export const injectContext = (contexts: any) => (RealComponent: any) => {
  return class extends Component {
    render() {
      return (
        <Context.Consumer>
          {(context: any) => {
            // 将顶层的context分发到各层
            let mapContext: any = {};
            if(Array.isArray(contexts)) {
              contexts.forEach(item => {
                mapContext[item] = context[item];
              });
            }
            return (
              <RealComponent {...mapContext} {...this.props} />
            )
          }}
        </Context.Consumer>
      )
    }
  }
}
