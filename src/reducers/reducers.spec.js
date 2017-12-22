import reducer, { data, ui } from './index.js';
import { types } from '../actions';

describe('reducers', () => {

const dataState = {
  home: [],
  episode: {},
  episodeImageUrl: '',
  errGetSets: null,
  errGetEpisode: null
}

const uiState = {
  isEpisodeInfoVisible: false
}

  const initialState = {
  data: dataState,
  ui: uiState
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_HOME', () => {
    expect(
      data(
        dataState, 
        {
          type: types.SET_HOME,
          payload: [{title:'home Set!'}]
        }
      )
    ).toEqual({ ...dataState, home: [{title:'home Set!'}] })
  })

  it('should handle SET_EPISODE for data reducer', () => {
    expect(
      data(
        dataState, 
        {
          type: types.SET_EPISODE,
          payload: {title:'Episode 1'}
        }
      )
    ).toEqual({ ...dataState, episode: {title:'Episode 1'} })
  })

  it('should handle SET_EPISODE for ui reducer', () => {
    expect(
      ui(
        uiState, 
        {
          type: types.SET_EPISODE,
          payload: true
        }
      )
    ).toEqual({ ...uiState, isEpisodeInfoVisible: true })
  })
})