const BASE_URL = 'https://mern-zap.herokuapp.com';
const REACT_BUNDLE_BASE_URL = 'https://mernzap.netlify.com';

const REGISTER_GITHUB_OAUTH_TOKEN_URL = `${BASE_URL}/personaloauth`;
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize?client_id=ed6fd12498c202cc79a0';
const GH_TOKEN_URL = `${REACT_BUNDLE_BASE_URL}/ghtoken`;

export {
  BASE_URL,
  REGISTER_GITHUB_OAUTH_TOKEN_URL,
  GITHUB_OAUTH_URL,
  GH_TOKEN_URL,
};
