import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import HomePage from './components/homepage';
import '../node_modules/grommet/grommet.min.css';

const rootPath = '/';

const routes = () =>
  <Router history={browserHistory}>
    <Route path={rootPath} component={App}>
      <IndexRoute component={HomePage}/>
    </Route>
  </Router>

export default routes;
