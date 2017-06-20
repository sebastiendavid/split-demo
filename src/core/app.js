import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import configureStore from './store';
import makeAsync from './async-component';
import createAsyncModules from './async-modules';
import Main from '../modules/main';

const store = configureStore();
const Router = process.env.GITHUB ? HashRouter : BrowserRouter;
const { home, octocat, info, users } = createAsyncModules(store);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Main>
          <Switch>
            <Route exact path="/" component={makeAsync(home)} />
            <Route exact path="/octocat" component={makeAsync(octocat)} />
            <Route exact path="/info" component={makeAsync(info)} />
            <Route exact path="/users" component={makeAsync(users)} />
            <Redirect to="/" />
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

export default App;
