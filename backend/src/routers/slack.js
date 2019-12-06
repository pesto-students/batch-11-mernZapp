import express from 'express';
import slackHandler from '../controllers/slack_util';

const router = new express.Router();

router.post('/slack/handle', slackHandler);

export default router;
