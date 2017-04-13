import React, { Component } from 'react';

export default function getAsyncComponent(getComponent) {
  return class AsyncComponent extends Component {
    state = {};

    componentWillMount() {
      getComponent().then(c => this.setState({ Component: c }));
    }

    render() {
      return !!this.state.Component && <this.state.Component {...this.props} />;
    }
  };
}
