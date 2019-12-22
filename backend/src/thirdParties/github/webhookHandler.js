import express from 'express';
import { handleGithubWebhookEvent } from '../../controllers/thirdPartiesController';

const router = new express.Router();

router.post('/githubwebhook', (req, res) => {
  console.log(req.body);
  handleGithubWebhookEvent(req);
  res.status(200).send({ key: 'hello' });
});

export default router;
