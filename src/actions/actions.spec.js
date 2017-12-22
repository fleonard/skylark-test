import actions, { types } from './index.js';

describe('actions', () => {

  it('should create an action to get sets', () => {
    const expectedAction = {
      type: types.GET_SETS
    }
    expect(actions.getSets()).toEqual(expectedAction)
  })

  it('should create an action to set the Home set', () => {
    const set = {title:'set'}
    const expectedAction = {
      type: types.SET_HOME,
      payload: set
    }
    expect(actions.setHome(set)).toEqual(expectedAction)
  })
})