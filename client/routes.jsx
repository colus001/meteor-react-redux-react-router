import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Navbar from './components/common/Navbar.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import AppContainer from './components/AppContainer.jsx';

import { Store } from './store/store.jsx';

export default (
  <Route path="/" component={Navbar} history={history}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="hello" component={AppContainer} />
  </Route>
)
