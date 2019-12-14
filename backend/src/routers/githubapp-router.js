import express from 'express';
import { gitAuthCallbackHandler, gitWebhookHandler } from '../controllers/githubapp-handlers';

const router = new express.Router();

router.get('/handleAuth/callback', gitAuthCallbackHandler);
router.post('/github/webhook', gitWebhookHandler);

export default router;
