
import reducer from '../authReducer';
import * as actions from '../../constants/actions';

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle FETCH_GITHUB_TOKEN_STARTED', () => {
    const action = {
      type: actions.FETCH_GITHUB_TOKEN_STARTED,
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle FETCH_GITHUB_TOKEN_SUCCEEDED', () => {
    const action = {
      type: actions.FETCH_GITHUB_TOKEN_SUCCEEDED,
      payload: {
        token: 'token',
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle FETCH_GITHUB_TOKEN_FINISHED', () => {
    const action = {
      type: actions.FETCH_GITHUB_TOKEN_FINISHED,
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });

  it('should handle FETCH_GITHUB_TOKEN_FAILED', () => {
    const action = {
      type: actions.FETCH_GITHUB_TOKEN_FAILED,
      payload: {
        error: true,
      },
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});
