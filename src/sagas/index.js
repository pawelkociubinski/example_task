// Dependencies
import { all, fork } from 'redux-saga/effects';
// Sagas
import userSaga from './userSaga';
import authSaga from './authSaga';
import searchSaga from './searchSaga';
import persistSaga from './persistSaga';
import repositoriesSaga from './repositoriesSaga';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(authSaga),
    fork(persistSaga),
    fork(searchSaga),
    fork(repositoriesSaga),
  ]);
}
