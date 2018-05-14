/* @flow */
// Dependencies
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
// Custom
import { getGithubToken } from '../../actions/index';
// Types
import type { GithubTokenRequestedEvent } from '../../types/actions';

type Props = {|
  +getGithubToken: (code: string) => GithubTokenRequestedEvent,
|}

class Auth extends PureComponent<Props> {
  componentDidMount() {
    const { getGithubToken } = this.props;
    const query = queryString.parse(location.search);

    getGithubToken(query.code);
  }

  render() {
    return null;
  }
}

export default connect(null, {
  getGithubToken,
})(Auth);
