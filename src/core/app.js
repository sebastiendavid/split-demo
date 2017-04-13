import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import createAsyncComponent from './async-component';
import createAsyncModules from './async-modules';
import Main from '../modules/main';

const store = configureStore();
const modules = createAsyncModules(store);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={createAsyncComponent(modules.home)} />
            <Route exact path="/octocat" component={createAsyncComponent(modules.octocat)} />
            <Route exact path="/info" component={createAsyncComponent(modules.info)} />
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

export default App;
