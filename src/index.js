import 'normalize.css/normalize.css';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { render } from 'react-dom';
import React from 'react';
import './index.css';
import App from './core/app';

if (process.env.NODE_ENV === 'production') OfflinePluginRuntime.install();
render(<App />, document.getElementById('root'));
