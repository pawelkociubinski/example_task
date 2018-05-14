/* @flow */
import type { AuthModel } from 'types/models';

import * as actions from '../constants/actions';

const initialState = {
  token: null,
  inProgress: false,
  error: false,
};

const authReducer = (state: AuthModel = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_GITHUB_TOKEN_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_GITHUB_TOKEN_SUCCEEDED: {
      return {
        ...state,
        token: action.payload.token,
      };
    }

    case actions.FETCH_GITHUB_TOKEN_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_GITHUB_TOKEN_FAILED: {
      return { ...state, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default authReducer;
