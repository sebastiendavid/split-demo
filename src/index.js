import 'normalize.css/normalize.css';
import * as offline from 'offline-plugin/runtime';
import { render } from 'react-dom';
import React from 'react';
import './index.css';
import App from './core/app';

if (process.env.NODE_ENV === 'production') offline.install();
render(<App />, document.getElementById('root'));
