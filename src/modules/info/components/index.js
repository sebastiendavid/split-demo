import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { fetchInfo } from '../actions';

const mapStateToProps = state => ({
  info: state.info,
});

const mapDispatchToProps = {
  fetchInfo,
};

class Info extends PureComponent {
  static propTypes = {
    info: PropTypes.string,
    fetchInfo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    info: '',
  };

  componentWillMount() {
    this.props.fetchInfo();
  }

  render() {
    return (
      <div className="Info">
        <pre className="Info__pre">
          {this.props.info}
        </pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
