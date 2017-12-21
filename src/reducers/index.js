import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { types } from '../actions';

const data = handleActions(
  {
    [types.SET_HOME] (state, { payload }) {
      return { ...state, home: payload };
    },
    [types.SET_EPISODE] (state, { payload }) {
      return { ...state, episode: payload };
    },
    [types.SET_EPISODE_IMAGE] (state, { payload }) {
      return { ...state, episodeImageUrl: payload.toString() };
    },
    [types.CLEAR_EPISODE] (state) {
      return { ...state, episode: {}, episodeImageUrl: '' };
    },
    [types.ERR_GET_SETS] (state, { payload }) {
      return { ...state, errGetSets: payload.toString() };
    },
    [types.ERR_GET_EPISODE] (state, { payload }) {
      return { ...state, errGetEpisode: payload.toString() };
    },
  },
  {
    home: [],
    episode: {},
    episodeImageUrl: '',
    errGetSets: null,
    errGetEpisode: null
  }
);

const ui = handleActions(
  {
    [types.SET_EPISODE] (state) {
      return { ...state, isEpisodeInfoVisible: true };
    },
    [types.CLEAR_EPISODE] (state) {
      return { ...state, isEpisodeInfoVisible: false };
    }
  },
  {
    isEpisodeInfoVisible: false
  }
);

const reducers = combineReducers({
  data,
  ui
});

export default reducers;
