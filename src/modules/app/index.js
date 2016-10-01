import React, { PropTypes } from 'react';

function App({ children }) {
  return (
    <main className="viewport">
      {children}
    </main>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
