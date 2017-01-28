import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import './index.css';
import octocatGif from './octocat.gif';
import { sendMessageToOctocat } from '../actions';

const mapDispatchToProps = {
  sendMessageToOctocat,
};

class Octocat extends PureComponent {
  static propTypes = {
    sendMessageToOctocat: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onKeyPressMessage = this.onKeyPressMessage.bind(this);
  }

  state = {
    message: '',
  };

  onChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  onKeyPressMessage(event) {
    if (event.key === 'Enter') {
      this.props.sendMessageToOctocat(this.state.message);
    }
  }

  render() {
    return (
      <section className="View Octocat">
        <img
          className="Octocat__img"
          src={octocatGif}
          alt="Octocat"
        />
        <input
          className="Octocat__input"
          type="text"
          value={this.state.message}
          onChange={this.onChangeMessage}
          onKeyPress={this.onKeyPressMessage}
          placeholder="Message"
        />
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(Octocat);
