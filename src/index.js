import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import React from 'react';
import routes from 'modules/app/routes';
import 'normalize.css/normalize.css';
import 'index.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
