import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import routes from './routes.jsx';
import { Store } from './store/store.jsx';

Meteor.startup(() => {
  window.addEventListener('DOMContentLoaded', () => {
    let root = document.createElement('root');
    document.body.appendChild(root);

    ReactDOM.render(
      <Provider store={Store}>
        <div>
          <Router history={browserHistory}>{routes}</Router>
          <DevTools/>
        </div>
      </Provider>,
      root
    );
  });
});
