import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';
import { fetchInfo } from '../actions';
import { debug } from '../../../utils/log';

debug('load info component');

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
        <h3 className="Info__date">{moment().format()}</h3>
        <pre className="Info__pre">{this.props.info}</pre>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
