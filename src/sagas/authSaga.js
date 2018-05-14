// Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// Custom
import { githubApi } from 'helpers/api';
import * as actions from '../constants/actions';

function* getGithubToken(action) {
  try {
    yield put({ type: actions.FETCH_GITHUB_TOKEN_STARTED });

    const token = yield call(githubApi.post, action.payload.code);

    yield put({
      type: actions.FETCH_GITHUB_TOKEN_SUCCEEDED,
      payload: { token },
    });

    yield put({ type: actions.FETCH_GITHUB_TOKEN_FINISHED });

    yield put({
      type: actions.FETCH_GITHUB_USER_REQUESTED,
      payload: { token },
    });

    yield put(push('/'));
  } catch (error) {
    yield put({
      type: actions.FETCH_GITHUB_TOKEN_FAILED,
      payload: {
        error: true,
      },
    });
  }
}

export default function* authSaga() {
  yield takeLatest(actions.GITHUB_TOKEN_REQUESTED, getGithubToken);
}
