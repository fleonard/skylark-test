import { all, call, takeEvery, put } from 'redux-saga/effects';

import actions, { types } from '../actions';

function* getSets() {
  yield takeEvery(types.GET_SETS, handleGetSets);
}

function* handleGetSets(action) {

  const home = [];

  const sets = yield call(() => fetch(action.payload)
    .then(res => res.json()));

  sets.objects.map((set) => {
    if (set.slug === 'home') {
      home.push(set);
    }
  });
  console.log('sagas:', home);
  yield put(actions.setHome(home));
}

function* getEpisode() {
  yield takeEvery(types.GET_EPISODE, handleGetEpisode);
}

function* handleGetEpisode(action) {
  const data = yield call(() => fetch(action.payload, { method: 'get' })
    .then(res => res.json()));

  console.log(data);

  //yield put(actions.setEpisode(data.results));
}

function* sagas() {
  yield all([
    getSets()
  ]);
}

export default sagas;
