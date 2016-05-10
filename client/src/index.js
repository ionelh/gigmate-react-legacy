'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import {createStore} from 'redux';

import About from './js/components/About';
import Home from './js/components/Home';
import App from './js/components/App';
import combinedReducers from './js/reducers/combinedReducers';
import ROUTES from './js/routes/routes';

import './sass/styles.sass';

let store = createStore(combinedReducers);

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={ROUTES.home} component={App}>
        <IndexRoute component={Home} />
        <Route path={ROUTES.about} component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('container')
);
