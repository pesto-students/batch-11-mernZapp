
import axios from 'axios';
import SlackAppSchema from './models/SlackApp';
import env from './env';

require('dotenv').config();

const authCallbackUrl = code => `https://slack.com/api/oauth.access?client_id=${env.slackClientId}&client_secret=${env.slackClientSecret}&code=${code}&redirect_uri=${encodeURIComponent(`${env.baseUri}/mernZapp/slack/auth/redirect`)}`;


const getUserData = code => {
  const getUserPromis = new Promise((resolve, reject) => {
    axios.get(authCallbackUrl(code)).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
  return getUserPromis;
};

const findUser = async (userId, teamId) => {
  const user = await SlackAppSchema.findOne({
    'userData.user_id': userId,
    'userData.team_id': teamId,
  }).select({ _id: 1 }).exec();
  // eslint-disable-next-line no-underscore-dangle
  return user === null ? null : user._id;
};
const addUserData = async data => {
  // eslint-disable-next-line camelcase
  const { access_token, user_id, team_id, team_name } = data;
  const getUser = await findUser(user_id, team_id);
  let status = false;
  // eslint-disable-next-line no-unused-vars
  let userDoc;
  const userData = {
    zappName: 'slack',
    teamName: team_name,
    token: access_token,
    userData: { user_id, team_id },
  };
  if (getUser !== null) {
    userDoc = await SlackAppSchema.findOneAndUpdate({ _id: getUser }, userData);
    // console.log(userDoc);
    status = true;
  } else {
    userDoc = await new SlackAppSchema(userData).save();
    // console.log('newUsersaved', userDoc);
    status = true;
  }
  return status;
};


const loginSlack = () => `https://slack.com/oauth/authorize?client_id=${env.slackClientId}&scope=channels:history, channels:read, chat:write:bot&redirect_uri=${encodeURIComponent(env.baseUri + '/mernZapp/slack/auth/redirect')}`;

const getToken = async userId => {
  const token = await SlackAppSchema.findOne({
    'userData.user_id': userId,
  }).select({ token: 1 }).exec();
  // eslint-disable-next-line no-underscore-dangle
  return token === null ? null : token.token;
};
const getChannelId = (userZapp) => 'CPFGGFPFB';
const getChannelsList = async (data) => {
  const token = await getToken(data.event.user);
  const options = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const channelList = new Promise((resolve, reject) => {
    axios.get('https://slack.com/api/channels.list', options).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
  return channelList;
};
const postmessageToSlac = async data => {
  const token = await getToken(data.event.user);
  const options = {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const datatoSend = {
    channel: getChannelId(),
    text: data.event.text,
  };

  const postChatmesseageUrl = 'https://slack.com/api/chat.postMessage';
  return new Promise((resolve, reject) => {
    axios.post(postChatmesseageUrl, datatoSend, options).then(response => {
      console.log(response.data, 'postToslack');
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
};

export default {
  loginSlack,
  // loginSlackCallback,
  getUserData,
  addUserData,
  postmessageToSlac,
  getChannelsList,
};
