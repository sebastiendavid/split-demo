import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

function Main({ children }) {
  return (
    <main className="App">
      <nav className="navigation">
        <Link className="navigation__link" to="/">Home</Link>
        <Link className="navigation__link" to="/octocat">Octocat</Link>
        <Link className="navigation__link" to="/info">Info</Link>
      </nav>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: <noscript />,
};

export default Main;
