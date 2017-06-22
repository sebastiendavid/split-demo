import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import configureStore from './store';
import makeAsync from './async-component';
import createAsyncModules from './async-modules';
import Main from '../modules/main';
import Page404 from './404';

const store = configureStore();
const Router = process.env.GITHUB ? HashRouter : BrowserRouter;
const asyncModules = createAsyncModules(store);
const asyncModuleKeys = Object.keys(asyncModules);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main modules={asyncModuleKeys}>
          <Switch>
            {asyncModuleKeys.map(key =>
              <Route
                key={`route-${key}`}
                exact
                path={`/${key}`}
                component={makeAsync(asyncModules[key])}
              />
            )}
            <Route component={Page404} />
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

export default App;
