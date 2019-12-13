require('dotenv').config();

const env = {
  slackClientId: process.env.SLACK_CLIENT_ID,
  slackClientSecret: process.env.SLACK_CLIENT_SECRET,
  baseUri: 'https://f316a970.ngrok.io',
};
export default env;
