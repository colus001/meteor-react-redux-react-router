import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Navbar from './components/common/Navbar.jsx';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import AppContainer from './components/AppContainer.jsx';

export default (
    <Route path="/" component={Navbar}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="hello" component={AppContainer} />
    </Route>
  )
