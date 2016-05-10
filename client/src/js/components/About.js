'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Stuff about me</p>
      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(About);
