import request from '../../lib/requestPromisified';
import { GH_CLIENT_ID, GH_CLIENT_SECRET } from '../../config';
import { GITHUB_OAUTH_ACCESS_TOKEN } from './apiUtils';

const handleGithubOAuth = code => {
  const clientId = GH_CLIENT_ID;
  const clientSecret = GH_CLIENT_SECRET;
  const url = `${GITHUB_OAUTH_ACCESS_TOKEN}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`;

  return request({
    url,
    headers: {
      'Content-Type': 'application/javascript',
    },
  });
};

export {
  handleGithubOAuth,
};
