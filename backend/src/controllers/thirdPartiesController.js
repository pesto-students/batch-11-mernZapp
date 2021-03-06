import {
  createHook,
  getBasicUserInfo,
  deleteHook,
  createGist,
} from '../thirdParties/github/githubApisWrapper';
import { LOCALHOST_NG_ROCK_URL } from '../config';
import {
  addUsernameMapping,
  getGithubUsername,
} from '../thirdParties/github/githubMappingController';
import Zapp from '../models/zappModel';
import User from '../models/userModel';

const getBasicInfo = token => getBasicUserInfo({ token });

const createStarWebhook = async (token, zapp) => {
  if (!token) {
    return '';
  }

  // find username in github mapping
  let githubUsername = await getGithubUsername(zapp.owner);

  if (!githubUsername) {
    const basicInfoResponse = await getBasicInfo(token);
    githubUsername = JSON.parse(basicInfoResponse.body).login;
    await addUsernameMapping(githubUsername, zapp.owner);
  }

  const repoName = zapp.trigger.data.repo;

  const response = await createHook({
    urlToDeliver: `${LOCALHOST_NG_ROCK_URL}/githubwebhook`,
    owner: githubUsername,
    repo: repoName,
    token,
    events: ['star'],
  });

  return response.statusCode === 201 ? response.body : '';
};

const createWebHook = async ({
  service,
  name,
  token,
  zapp,
}) => {
  // name will be github for now,
  if (service === 'github') {
    if (name === 'star') {
      return createStarWebhook(token, zapp);
    }
  }
  return {};
};

const deleteWebHook = async ({
  service,
  token,
  zapp,
}) => {
  if (service === 'github') {
    let githubUsername = await getGithubUsername(zapp.owner);

    if (!githubUsername) {
      const basicInfoResponse = await getBasicInfo(token);
      githubUsername = JSON.parse(basicInfoResponse.body).login;
      await addUsernameMapping(githubUsername, zapp.owner);
    }

    try {
      await deleteHook(
        {
          owner: githubUsername,
          token,
          hookId: zapp.trigger.webhookResponse.id,
          repo: zapp.trigger.data.repo,
        },
      );
    } catch (err) {
      console.log('cannot delete the hook', err);
    }
  }
};

const sendAction = async zapp => {
  if (zapp.action.serviceName === 'github') {
    if (zapp.action.name === 'create_gist') {
      // create gist
      const user = await User.findOne({ _id: zapp.owner });
      const requestData = zapp.actionRequestBody;
      const token = user.services.filter(service => service.name === 'github')[0].oAuthToken;
      console.log(token, requestData, user);
      return createGist({ token, requestData });
    }
  }
  return '';
};

const handleGithubWebhookEvent = async reqBody => {
  try {
    const zapp = await Zapp.findOne({ 'trigger.webhookResponse.id': reqBody.hook.id });
    console.log(zapp);
    if (zapp) {
      return sendAction(zapp);
    }
    return '';
  } catch (error) {
    console.log('error in sending action', error);
    return error;
  }
};

export {
  createWebHook,
  deleteWebHook,
  handleGithubWebhookEvent,
};
