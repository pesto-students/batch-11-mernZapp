import express from 'express';
import { gitIssueHandler } from '../controllers/git_util';

const router = new express.Router();

router.post('/github/issues', gitIssueHandler);

export default router;
