import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './index.css';
import configureStore from './store';
import createRoutes from './routes';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={createRoutes(store)} />
    </Provider>
  );
}

export default App;
