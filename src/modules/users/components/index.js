import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, cancelFetchUsers } from '../actions';
import './index.css';

const mapStateToProps = state => ({
  users: state.users.list,
  isLoading: state.users.loading,
});

const mapDispatchToProps = {
  fetchUsers,
  cancelFetchUsers,
};

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillUnmount() {
    this.props.cancelFetchUsers();
  }

  render() {
    return (
      <section className="Users">
        <h2>Users</h2>
        {this.props.isLoading && <h4>Loading...</h4>}
        <ul>
          {this.props.users.map(user =>
            <li key={`user-${user.id}`}>{user.name}</li>
          )}
        </ul>
      </section>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  cancelFetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
