const BASE_URL = 'http://localhost:4000';
const REACT_BUNDLE_BASE_URL = 'http://localhost:3000';

const REGISTER_GITHUB_OAUTH_TOKEN_URL = `${BASE_URL}/personaloauth`;
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize?client_id=ed6fd12498c202cc79a0';
const GH_TOKEN_URL = `${REACT_BUNDLE_BASE_URL}/ghtoken`;

export {
  BASE_URL,
  REGISTER_GITHUB_OAUTH_TOKEN_URL,
  GITHUB_OAUTH_URL,
  GH_TOKEN_URL,
};
