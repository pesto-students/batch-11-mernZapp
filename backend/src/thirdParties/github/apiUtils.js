const BASE_URL = 'https://api.github.com';
export const CREATE_HOOK_URL = 'https://api.github.com/repos/:owner/:repo/hooks';
export const CREATE_GIST_URL = `${BASE_URL}/gists`;
export const GET_BASIC_USER_INFO = `${BASE_URL}/user`;
export const GET_REPOSITORIES_FOR_USER = `${BASE_URL}/users/:username/repos`;
export const DELETE_REPO_URL = `${BASE_URL}/repos/:owner/:repo/hooks/:hook_id`;
export const GITHUB_OAUTH_ACCESS_TOKEN = 'https://github.com/login/oauth/access_token';
