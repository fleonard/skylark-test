import { all, call, takeEvery, put } from 'redux-saga/effects';

import actions, { types } from '../actions';

import { skylarkGetData } from '../config/apis';

import { isEmpty } from 'ramda';

function* getSets() {
  yield takeEvery(types.GET_SETS, handleGetSets);
}

function* handleGetSets(action) {

  const home = [];
  try {
    const sets = yield call(() => fetch(action.payload)
      .then(res => res.json()));

    sets.objects.map((set) => {
      if (set.slug === 'home') {
        home.push(set);
      }
    });
    console.log('sagas:', home);
    yield put(actions.setHome(home));
  } catch (err) {
    yield put(actions.errGetSets(err));
  }
}

function* getEpisode() {
  yield takeEvery(types.GET_EPISODE, handleGetEpisode);
}

function* handleGetEpisode(action) {
  try {
    const data = yield call(() => fetch(action.payload)
      .then(res => res.json()));

    console.log(data);

    yield put(actions.setEpisode(data));

    if (!isEmpty(data.image_urls)) {
      const episodeImg =  yield call(() => fetch(skylarkGetData(data.image_urls))
        .then(res => res.json()));

      yield put(actions.setEpisodeImage(episodeImg.url));
    }

  } catch (err) {
    yield put(actions.errGetEpisode(err));
  }
}

function* sagas() {
  yield all([
    getSets(),
    getEpisode()
  ]);
}

export default sagas;
