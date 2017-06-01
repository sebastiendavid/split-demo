import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import configureStore from './store';
import createAsyncComponent from './async-component';
import createAsyncModules from './async-modules';
import Main from '../modules/main';

const store = configureStore();
const Router = process.env.GITHUB ? HashRouter : BrowserRouter;
const { home, octocat, info } = createAsyncModules(store);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path={home.path} component={createAsyncComponent(home.get)} />
            <Route exact path={octocat.path} component={createAsyncComponent(octocat.get)} />
            <Route exact path={info.path} component={createAsyncComponent(info.get)} />
            <Redirect to={home.path} />
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

export default App;
