import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

function Main({ children, location, modules }) {
  return (
    <main className="App">
      <nav className="navigation">
        {modules.map(key =>
          <Link
            key={`link-${key}`}
            className="navigation__link"
            to={`/${key}${location.search}`}
          >
            {key}
          </Link>
        )}
      </nav>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
  modules: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Main.defaultProps = {
  children: <noscript />,
};

export default withRouter(Main);
