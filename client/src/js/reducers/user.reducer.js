'use strict';

import {STRINGS_LOADED} from './../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case STRINGS_LOADED:
      return Object.assign({}, state, {strings: action.strings});
    default:
      return state;
  }
};

export default user;
