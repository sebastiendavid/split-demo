import 'normalize.css/normalize.css';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import './index.css';
import routes from './modules/app/routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root'),
);
