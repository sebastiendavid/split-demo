import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import octocatGif from './octocat.gif';
import { sendMessageToOctocat } from '../actions';
import { debug } from '../../../utils/log';

debug('load octocat component');

const mapStateToProps = state => ({
  octocatMessage: state.octocat.message,
});

const mapDispatchToProps = {
  sendMessageToOctocat,
};

class Octocat extends PureComponent {
  static propTypes = {
    octocatMessage: PropTypes.string,
    sendMessageToOctocat: PropTypes.func.isRequired,
  };

  static defaultProps = {
    octocatMessage: '',
  };

  constructor(props) {
    super(props);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  state = {
    message: '',
  };

  onChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  onSubmitMessage(event) {
    event.preventDefault();
    this.props.sendMessageToOctocat(this.state.message);
  }

  render() {
    debug('render octocat component');
    return (
      <section className="View Octocat">
        <h1>Octocat</h1>
        <div className="Octocat__imgWrapper">
          <img id="octocat-image" className="Octocat__img" src={octocatGif} alt="Octocat" />
          {!!this.props.octocatMessage &&
            <h2 id="octocat-message" className="Octocat__message">
              {this.props.octocatMessage}
            </h2>}
        </div>
        <form id="octocat-form" className="Octocat__form" onSubmit={this.onSubmitMessage}>
          <input
            id="octocat-input"
            className="Octocat__input"
            type="text"
            value={this.state.message}
            onChange={this.onChangeMessage}
            placeholder="Message"
          />
          <input id="octocat-submit" className="Octocat__submit" type="submit" value="Send" />
        </form>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Octocat);
