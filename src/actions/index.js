import { createActions } from 'redux-actions';

const types = {
  GET_SETS: 'GET_SETS',
  SET_HOME: 'SET_HOME',
  GET_EPISODE: 'GET_EPISODE',
  SET_EPISODE: 'SET_EPISODE'
};

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
