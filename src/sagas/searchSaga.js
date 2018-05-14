// Dependencies
import { takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { isEmpty } from 'lodash';
// Custom
import * as actions from '../constants/actions';

function* onSearch(action) {
  yield put({
    type: actions.CHANGE_SEARCHED_TERM,
    payload: { searchedTerm: action.payload.searchedTerm },
  });

  if (!isEmpty(action.payload.searchedTerm)) {
    yield delay(1000);

    yield put({
      type: actions.FETCH_REPOSITORIES_REQUESTED,
      payload: { searchedTerm: action.payload.searchedTerm },
    });

    yield put({
      type: actions.CHANGE_PAGE,
      payload: { page: 0 },
    });
  }
}

export default function* searchSaga() {
  yield takeLatest(actions.SEARCH_TERM_REQUESTED, onSearch);
}
