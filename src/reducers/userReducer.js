/* @flow */
import type { UserModel } from 'types/models';

import * as actions from '../constants/actions';

const initialState = {
  user: null,
  inProgress: false,
  error: false,
};

const userReducer = (state: UserModel = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_GITHUB_USER_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_GITHUB_USER_SUCCEEDED: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case actions.FETCH_GITHUB_USER_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_GITHUB_USER_FAILED: {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default userReducer;
