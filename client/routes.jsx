import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Navbar from './components/common/Navbar.jsx';
import About from './components/About.jsx';
import AppContainer from './components/AppContainer.jsx';

export default (
    <Route path="/" component={Navbar}>
      <IndexRoute component={About} />
      <Route path="hello" component={AppContainer} />
    </Route>
  )
