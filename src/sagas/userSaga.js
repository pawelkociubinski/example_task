// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
// Custom
import { githubApi } from 'helpers/api';
import * as actions from '../constants/actions';

function* getUser(action) {
  try {
    yield put({ type: actions.FETCH_GITHUB_USER_STARTED });

    const user = yield call(githubApi.user, action.payload.token);

    yield put({
      type: actions.FETCH_GITHUB_USER_SUCCEEDED,
      payload: { user },
    });


    yield put({ type: actions.FETCH_GITHUB_USER_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_GITHUB_USER_FAILED, payload: { error: true } });
  }
}

export default function* userSaga() {
  yield takeLatest(actions.FETCH_GITHUB_USER_REQUESTED, getUser);
}
