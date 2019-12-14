import request from 'request';

require('dotenv').config();

const gitAuthCallbackHandler = (req, res) => {
  const { code } = req.query;
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
  const options = {
    url: 'https://github.com/login/oauth/access_token',
    method: 'POST',
    headers: { Accept: 'application/json' },
    json: {
      code,
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
    },
  };

  request(options, (err, response, body) => {
    const { accessToken } = body; // save this access token with user object in db
  });
  res.sendStatus(200);
};

const gitWebhookHandler = (req, res) => {
  const payload = req.body;
  res.sendStatus(200);
};

export { gitAuthCallbackHandler, gitWebhookHandler };
