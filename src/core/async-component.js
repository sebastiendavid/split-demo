import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeCancelable } from '../utils/promise';

export default function getAsyncComponent(fetchComponent) {
  const mapDispatchToProps = {
    reset: payload => ({ type: 'RESET_ASYNC_REDUCER', payload }),
  };
  class AsyncComponent extends Component {
    static propTypes = {
      reset: PropTypes.func.isRequired,
    };

    state = {};

    componentWillMount() {
      const { promise, cancel } = makeCancelable(fetchComponent());
      this.cancelFetchComponent = cancel;
      promise
        .then(({ component, reducerKey }) => {
          this.setState({ component, reducerKey });
        })
        .catch((error) => {
          if (error.isCanceled) console.warn('fetchComponent is canceled', global.document.location.href);
          else console.error('fetchComponent', error);
        });
    }

    componentWillUnmount() {
      if (typeof this.cancelFetchComponent === 'function') this.cancelFetchComponent();
      this.props.reset(this.state.reducerKey);
    }

    render() {
      return !!this.state.component && <this.state.component {...this.props} />;
    }
  }
  return connect(null, mapDispatchToProps)(AsyncComponent);
}
