import { createActions } from 'redux-actions';

const types = {
  GET_SETS: 'GET_SETS',
  ERR_GET_SETS: 'ERR_GET_SETS',
  SET_HOME: 'SET_HOME',
  GET_EPISODE: 'GET_EPISODE',
  SET_EPISODE: 'SET_EPISODE',
  SET_EPISODE_IMAGE: 'SET_EPISODE_IMAGE',
  CLEAR_EPISODE: 'CLEAR_EPISODE',
  ERR_GET_EPISODE: 'ERR_GET_EPISODE'
};

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
