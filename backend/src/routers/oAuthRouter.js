import express from 'express';
import { fetchTokenFromGithub } from '../controllers/oAuthController';
import auth from '../middlewares/auth';

const router = new express.Router();

router.get('/personalOauth/:code', auth, fetchTokenFromGithub);

export default router;
