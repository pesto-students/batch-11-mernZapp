import slackApi from '../service';

const express = require('express');

const router = express.Router();

router.get('/slack', (req, res) => {
  const integUrl = slackApi.loginSlack();
  res.render('slackIinteg', {
    // eslint-disable-next-line object-shorthand
    integUrl: integUrl,
  });
});

router.get('/auth/events', (req, res) => {
  console.log(req.body);
  const { challenge } = req.body;
  res.send(challenge);
});

router.get('/mernZapp/slack/auth/redirect', async (req, res) => {
  console.log(req.query);
  const { code } = req.query;
  const authCallbackResponse = await slackApi.getUserData(code);
  res.send(authCallbackResponse);
//   slackApi.loginSlackCallback(req, res);
});

export default router;
