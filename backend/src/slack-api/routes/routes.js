import slackApi from '../service';
import controller from '../controller';

const express = require('express');

const slackRouter = new express.Router();

slackRouter.get('/slack', (req, res) => {
  const integUrl = slackApi.loginSlack();
  res.render('slackIinteg', {
    integUrl,
  });
});

slackRouter.get('/mernZapp/slack/auth/redirect', (req, res) => {
  controller.authRedirectCallback(req, res);
});

slackRouter.post('/slack/events', (req, res) => {
  controller.postTochannel(req.body);
  const { challenge } = req.body;
  res.send(challenge);
});

export default slackRouter;
