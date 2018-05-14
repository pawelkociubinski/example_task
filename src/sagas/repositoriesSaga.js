// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
// Custom
import { githubApi } from '../helpers/api';
import * as actions from '../constants/actions';

function* getRepositories(action) {
  try {
    yield put({ type: actions.FETCH_REPOSITORIES_STARTED });

    const repositories = yield call(githubApi.get, action.payload.searchedTerm);

    yield put({
      type: actions.FETCH_REPOSITORIES_SUCCEEDED,
      payload: { repositories },
    });

    yield put({ type: actions.FETCH_REPOSITORIES_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_REPOSITORIES_FAILED, payload: { error: true } });
  }
}

export default function* repositoriesSaga() {
  yield takeLatest(actions.FETCH_REPOSITORIES_REQUESTED, getRepositories);
}
