import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/clusters/homepage';
import JiffPage from './containers/jiffcontainer'; // eslint-disable-line import/no-named-as-default
import XChangePage from './containers/xchangecontainer'; // eslint-disable-line import/no-named-as-default

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/gifs" component={JiffPage}/>
      <Route path="/xchange" component={XChangePage}/>
    </Route>
  );
