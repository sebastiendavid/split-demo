import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import 'modules/app/index.css';

function App({ children }) {
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

App.propTypes = {
  children: PropTypes.node,
};

export default App;
