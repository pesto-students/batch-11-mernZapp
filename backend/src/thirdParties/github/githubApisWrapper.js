import request from '../../lib/requestPromisified';
import ZappLog from '../../models/zappLogModel';
import {
  CREATE_HOOK_URL,
  GET_BASIC_USER_INFO,
  CREATE_GIST_URL,
  GET_REPOSITORIES_FOR_USER,
  DELETE_REPO_URL,
} from './apiUtils';
import { GITHUB_APIS_USER_AGENT_HEADER } from '../../config';

// run create hook
const createHook = ({
  owner,
  repo,
  events,
  urlToDeliver,
  token,
}) => {
  const url = CREATE_HOOK_URL
    .replace(':owner', owner)
    .replace(':repo', repo);

  const requestData = {
    name: 'web',
    active: true,
    events,
    config: {
      url: urlToDeliver,
      content_type: 'json',
      insecure_ssl: '0',
    },
  };

  return request({
    url,
    method: 'POST',
    json: requestData,
    headers: {
      'User-Agent': GITHUB_APIS_USER_AGENT_HEADER,
      Authorization: `token ${token}`,
    },
  });
};

const getListOfRepository = ({ token, username }) => {
  const url = GET_REPOSITORIES_FOR_USER.replace(':username', username);

  return request({
    url,
    method: 'GET',
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': GITHUB_APIS_USER_AGENT_HEADER,
    },
  });
};

const deleteHook = ({
  owner,
  repo,
  hookId,
  token,
}) => {
  const url = DELETE_REPO_URL
    .replace(':owner', owner)
    .replace(':repo', repo)
    .replace(':hook_id', hookId);

  return request({
    url,
    method: 'DELETE',
    headers: {
      'User-Agent': GITHUB_APIS_USER_AGENT_HEADER,
      Authorization: `token ${token}`,
    },
  });
};

const createGist = ({
  token,
  requestData,
  req,
  zapp,
}) => {
  const responseBody = {
    url: CREATE_GIST_URL,
    method: 'POST',
    json: requestData,
    headers: {
      Authorization: `token ${token}`,
      'User-Agent': GITHUB_APIS_USER_AGENT_HEADER,
    },
  };
  const log = new ZappLog({
    zapp: zapp._id,
    zappName: zapp.name,
    owner: zapp.owner,
    triggerData: req,
    actionData: responseBody,
    success: true,
  });
  log.save();
  request(responseBody);
};

const getBasicUserInfo = ({ token }) => request({
  url: GET_BASIC_USER_INFO,
  method: 'GET',
  headers: {
    Authorization: `token ${token}`,
    'User-Agent': GITHUB_APIS_USER_AGENT_HEADER,
  },
});

export {
  getBasicUserInfo,
  createHook,
  createGist,
  getListOfRepository,
  deleteHook,
};
