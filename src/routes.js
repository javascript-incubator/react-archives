import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import HomePage from './components/homepage';
import SeasonPage from './components/seasonpage';
import Vplayer from './components/vplayer';
import '../node_modules/grommet/grommet.min.css';

const rootPath = '/';

const routes = () =>
  <Router history={hashHistory}>
    <Route path={rootPath} component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='season/:seasonId' component={SeasonPage}/>
      <Route path='watch' component={Vplayer}/>
    </Route>
  </Router>

export default routes;
