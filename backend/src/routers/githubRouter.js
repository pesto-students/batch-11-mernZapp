import express from 'express';
import { handleWebHook } from '../controllers/githubController';

const router = new express.Router();

router.post('/webhook-github', handleWebHook);
