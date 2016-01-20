import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router'

Meteor.startup(() => {
  window.addEventListener('DOMContentLoaded', () => {
    let root = document.createElement('root');
    document.body.appendChild(root);

    ReactDOM.render(
      <Provider store={Store}>
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={Navbar}>
              <IndexRoute component={About} />
              <Route path="hello" component={AppContainer} />
            </Route>
          </Router>
        </div>
      </Provider>
      , root
    );


    // ReactDOM.render(
    //   <Provider store={Store}>
    //     <div>
    //       <AppContainer />
    //       <DevTools/>
    //     </div>
    //   </Provider>
    //   , root
    // );
  });
});
