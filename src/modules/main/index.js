import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.css';

function Main({ children }) {
  return (
    <main className="App">
      <nav className="navigation">
        <Link className="navigation__link" to="/">Home</Link>
        <Link className="navigation__link" to="/octocat">Octocat</Link>
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
