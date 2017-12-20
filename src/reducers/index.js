import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { types } from '../actions';

const data = handleActions(
  {
    [types.SET_HOME] (state, action) {
      return { ...state, home: action.payload };
    },
    [types.SET_EPISODE] (state, action) {
      return { ...state, episode: action.payload };
    }
  },
  {
    home: [],
    episode: {}
  }
);

const reducers = combineReducers({
  data
});

export default reducers;
