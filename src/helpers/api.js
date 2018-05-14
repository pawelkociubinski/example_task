/* @flow */
import axios from 'axios';
import queryString from 'query-string';

import type { User, Repository } from 'types/models';

export const githubApi = {
  user(token: string): User {
    return axios
      .get(`https://api.github.com/user?access_token=${token}`)
      .then(response => ({
        name: response.data.name,
        login: response.data.login,
        id: response.data.id,
      }));
  },
  post(code: string): ?string {
    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) { return; }

    return axios
      .post(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`)
      .then((response) => {
        const data = queryString.parse(response.data);
        return data.access_token;
      });
  },
  get(searchedTerm: string): Repository {
    return axios
      .get('/search/repositories', {
        baseURL: 'https://api.github.com',
        params: { q: searchedTerm },
      })
      .then(response => response.data.items.map(item => ({
        created_at: item.created_at,
        id: item.id,
        login: item.owner.login,
        name: item.name,
        stargazers_count: item.stargazers_count,
      })));
  },
};
