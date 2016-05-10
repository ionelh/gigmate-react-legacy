'use strict';

import React, {Component, PropTypes} from 'react';
import ROUTES from './../routes/routes';
import {connect} from 'react-redux';

import {Menu} from './Menu';

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Menu items={
              [
                {
                  text: 'About',
                  route: ROUTES.about
                }
              ]
            } />
          </div>
          <div>
            {/* this would also work: {this.props.children || <Home/>} */}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

export default connect()(App);
